const game = document.querySelector('.playground');
const modeSelector = game.querySelector('.game-picker');
const board = game.querySelector('.board');
const statusLine = game.querySelector('.game-status');
const replayButton = game.querySelector('.watch');
const retryButton = game.querySelector('.retry');
const saved = new Map();
const svgNS = 'http://www.w3.org/2000/svg';
const letter = n => String.fromCharCode(65 + n);
const randomInt = limit => Math.floor(Math.random() * limit);
let round, replayStep = null, timer;
let buttons = [], lines = [];

function shuffled(items) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = randomInt(i + 1);
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function generate(mode, previousSize) {
  const sizes = [6, 7, 8].filter(n => n !== previousSize);
  const size = sizes[randomInt(sizes.length)];
  const ids = Array.from({length: size}, (_, i) => i);
  const rotation = Math.random() * Math.PI * 2;
  const points = ids.map(i => {
    const angle = rotation + (i + (Math.random() - .5) * .22) * 2 * Math.PI / size;
    return [50 + 40 * Math.cos(angle), 50 + 39 * Math.sin(angle)];
  });
  // An outer cycle keeps the graph connected even while the finish is locked.
  const edges = ids.map(i => [i, (i + 1) % size]);
  const pivot = randomInt(size);
  const targets = shuffled(ids.filter(i => ![pivot, (pivot+1)%size, (pivot+size-1)%size].includes(i)));
  const count = mode === 'trail' ? 1 + randomInt(2) : 2 + randomInt(2);
  targets.slice(0, count).forEach(i => edges.push([pivot, i]));
  const [origin, finish, ...remaining] = shuffled(ids);
  // One or two fan chords produce exactly two odd vertices. Start at either.
  const odd = ids.filter(i => edges.filter(edge => edge.includes(i)).length % 2);
  const result = {mode, points, edges, start: mode === 'trail' ? odd[randomInt(odd.length)] : origin,
    finish, gems: remaining.slice(0,2), weights: edges.map(() => 1 + randomInt(9)), moves: []};
  if (mode === 'route') result.optimum = minimumEnergy(result);
  if (mode === 'cover') result.optimum = minimumBeacons(size, edges);
  return result;
}

function minimumBeacons(size, edges) {
  let best = size;
  for (let mask = 1; mask < 2 ** size; mask++) {
    if (!edges.every(([a, b]) => (mask & (1 << a)) || (mask & (1 << b)))) continue;
    const count = mask.toString(2).replaceAll('0', '').length;
    best = Math.min(best, count);
  }
  return best;
}

function minimumEnergy({points, edges, weights, finish, start, gems: [a,b]}) {
  const d = points.map((_, i) => points.map((_, j) => i === j ? 0 : Infinity));
  edges.forEach(([i,j], e) => { d[i][j] = d[j][i] = weights[e]; });
  for (let k = 0; k < d.length; k++) {
    if (k === finish) continue;
    for (let i = 0; i < d.length; i++) {
      for (let j = 0; j < d.length; j++) d[i][j] = Math.min(d[i][j], d[i][k] + d[k][j]);
    }
  }
  return d[a][b] + Math.min(d[start][a] + d[b][finish], d[start][b] + d[a][finish]);
}

function stopReplay() {
  clearTimeout(timer);
  replayStep = null;
}

function buildBoard() {
  board.replaceChildren();
  const svg = document.createElementNS(svgNS, 'svg');
  svg.setAttribute('viewBox', '0 0 100 100');
  svg.setAttribute('preserveAspectRatio', 'none');
  svg.setAttribute('aria-hidden', 'true');
  board.append(svg);
  lines = round.edges.map(([a,b], i) => {
    const [x,y] = round.points[a], [u,v] = round.points[b];
    const line = document.createElementNS(svgNS, 'line');
    for (const [attr, value] of Object.entries({x1:x, y1:y, x2:u, y2:v})) line.setAttribute(attr, value);
    svg.append(line);
    if (round.mode === 'route') {
      const label = document.createElement('span');
      label.className = 'edge-cost';
      label.setAttribute('aria-hidden', 'true');
      label.textContent = round.weights[i];
      label.style.left = (x + u) / 2 + '%';
      label.style.top = (y + v) / 2 + '%';
      board.append(label);
    }
    return line;
  });
  buttons = round.points.map(([x,y], i) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'station';
    button.style.left = x + '%';
    button.style.top = y + '%';
    button.addEventListener('click', () => {
      if (button.disabled) return;
      round.moves.push(i);
      render();
      if (button.disabled) (buttons.find(b => !b.disabled) || retryButton).focus({preventScroll: true});
    });
    board.append(button);
    return button;
  });
  const instructions = {
    route: 'Move from the dark node. Collect both ◆, then reach ⚑ with the least energy.',
    trail: 'Trace every edge exactly once. You can visit the same node again.',
    cover: 'Light every edge with ' + round.optimum + ' beacons. Tap a node to switch its beacon on or off and light the edges it touches.'
  };
  game.querySelector('.goal-copy').textContent = instructions[round.mode];
  render();
}

// Derive both live play and playback from the same immutable board and move log.
function render() {
  const moves = replayStep === null ? round.moves : round.moves.slice(0, replayStep);
  const message = round.mode === 'cover' ? renderBeacons(moves) : renderWalk(moves);
  replayButton.disabled = round.moves.length === 0;
  replayButton.textContent = replayStep === null ? 'Replay moves' : 'Stop replay';
  retryButton.disabled = !round.moves.length;
  statusLine.textContent = replayStep === null ? message : 'Replay · Move ' + replayStep + ' of ' + round.moves.length;
}

function renderBeacons(moves) {
  const beacons = new Set();
  for (const node of moves) {
    if (beacons.has(node)) beacons.delete(node);
    else beacons.add(node);
  }
  let lit = 0;
  round.edges.forEach(([a, b], i) => {
    const on = beacons.has(a) || beacons.has(b);
    lines[i].classList.toggle('lit', on);
    if (on) lit++;
  });
  const won = lit === lines.length && beacons.size === round.optimum;
  buttons.forEach((button, i) => {
    button.textContent = letter(i);
    const neighbors = round.edges.filter(edge => edge.includes(i)).map(([a, b]) => letter(a === i ? b : a));
    button.setAttribute('aria-label', 'Beacon at ' + letter(i) + ', connected to ' + neighbors.join(', '));
    button.setAttribute('aria-pressed', String(beacons.has(i)));
    button.disabled = won || replayStep !== null;
  });
  if (won) return 'Complete! All edges lit with ' + beacons.size + ' beacons.';
  if (lit === lines.length) return 'All edges lit. Can you use ' + round.optimum + ' beacons instead of ' + beacons.size + '?';
  return lit + '/' + lines.length + ' edges lit · ' + beacons.size + '/' + round.optimum + ' beacons';
}

function renderWalk(moves) {
  const route = round.mode === 'route';
  const used = new Set(), collected = new Set();
  let current = round.start, energy = 0;
  for (const next of moves) {
    const edge = round.edges.findIndex(pair => pair.includes(current) && pair.includes(next));
    used.add(edge);
    energy += round.weights[edge];
    if (round.gems.includes(next)) collected.add(next);
    current = next;
  }
  const won = route ? current === round.finish : used.size === round.edges.length;
  const choices = new Map();
  round.edges.forEach(([a,b], i) => {
    const next = a === current ? b : b === current ? a : null;
    const legal = next !== null && !won && (route ? next !== round.finish || collected.size === 2 : !used.has(i));
    if (legal) choices.set(next, i);
    lines[i].classList.toggle('near', legal);
    lines[i].classList.toggle('spent', !route && used.has(i));
  });
  buttons.forEach((button, i) => {
    const pickup = route && round.gems.includes(i) && !collected.has(i);
    const flag = route && i === round.finish;
    button.textContent = flag ? '⚑' : pickup ? '◆' : letter(i);
    button.disabled = !choices.has(i) || replayStep !== null;
    button.classList.toggle('here', current === i);
    button.classList.toggle('pickup', pickup);
    const cost = route && choices.has(i) ? ', cost ' + round.weights[choices.get(i)] : '';
    button.setAttribute('aria-label', 'Node ' + letter(i) + (pickup ? ', diamond' : flag ? ', finish' : '') +
      (current === i ? ', current position' : '') + cost);
  });
  if (won) return route ? 'Finished · ' + energy + ' energy (minimum ' + round.optimum + ').' : 'Complete! Every edge traced exactly once.';
  if (!choices.size) return 'Dead end. Choose Retry to start again.';
  return route ? 'At ' + letter(current) + ' · ' + collected.size + '/2 diamonds · ' + energy + ' energy'
    : 'At ' + letter(current) + ' · ' + used.size + ' of ' + round.edges.length + ' edges traced';
}

function selectRound(fresh) {
  stopReplay();
  const mode = modeSelector.querySelector('input:checked').value;
  const existing = saved.get(mode);
  round = !fresh && existing ? existing : generate(mode, existing?.points.length);
  saved.set(mode, round);
  buildBoard();
}
replayButton.addEventListener('click', () => {
  if (replayStep !== null) { stopReplay(); render(); return; }
  replayStep = 0;
  render();
  function advance() {
    if (replayStep === round.moves.length) { stopReplay(); render(); return; }
    replayStep++;
    render();
    timer = setTimeout(advance, 650);
  }
  timer = setTimeout(advance, 650);
});
retryButton.addEventListener('click', () => {
  stopReplay();
  round.moves = [];
  render();
  buttons.find(b => !b.disabled)?.focus({preventScroll: true});
});
game.querySelector('.shuffle').addEventListener('click', () => selectRound(true));
modeSelector.addEventListener('change', () => selectRound(false));
selectRound(true);
game.hidden = false;
