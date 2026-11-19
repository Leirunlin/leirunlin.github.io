"""Build the personal site into dist/ with the Python standard library."""
from html import escape
import json
from pathlib import Path
from shutil import copy2
from string import Template


ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "dist"
SITE = ROOT / "site"
LAYOUT = Template((SITE / "layout.html").read_text())
# Each thumbnail is a crop of Figure 1 from the corresponding public paper.
FEATURED = {
    "IntentGEO": "User contexts, intent dimensions and anchored meta-optimization for recommendations.",
    "vision-graph": "Teacher reasoning is turned into textual or visual guidance for a student model.",
    "AdaCoM": "An external context manager edits the context supplied to a frozen agent.",
    "robustness-tag": "Datasets, attacks and defenses evaluated on text-attributed graphs.",
}


def write(path, content):
    target = OUT / path
    target.parent.mkdir(parents=True, exist_ok=True)
    target.write_text(content, encoding="utf-8")


def page(path, title, content, description):
    write(path, LAYOUT.substitute(title=escape(title), content=content, description=escape(description)))


def resources(paper):
    links = [f'<a href="{escape(paper["url"])}">Paper</a>']
    if paper.get("preprint"):
        links.append(f'<a href="{escape(paper["preprint"])}">arXiv</a>')
    if paper.get("code"):
        links.append(f'<a href="{escape(paper["code"])}">Code</a>')
    if paper.get("project"):
        links.append(f'<a href="{escape(paper["project"])}">Project</a>')
    return '<div class="resources">' + ''.join(links) + '</div>'


def keyword_list(paper):
    tags = ''.join(f'<li>{escape(word)}</li>' for word in paper["keywords"])
    return f'<ul class="keywords" aria-label="Research keywords">{tags}</ul>'


def author_line(paper):
    names = []
    for name in paper["authors"].split(", "):
        label = escape(name)
        if name == "Runlin Lei":
            label = f"<strong>{label}</strong>"
        if name in paper.get("co_first", []):
            label += "<sup>*</sup>"
        names.append(label)
    note = ' <small class="equal-note">* Equal first authorship</small>' if paper.get("co_first") else ""
    return ", ".join(names) + note


def main():
    papers = sorted(json.loads((ROOT / "data/publications.json").read_text()), key=lambda p: -p["year"])
    by_slug = {p["slug"]: p for p in papers}
    abstracts = json.loads((ROOT / "data/abstracts.json").read_text())
    if len(by_slug) != len(papers) or abstracts.keys() - by_slug.keys():
        raise ValueError("Publication slugs must be unique and preserve the archive’s original URLs")

    for source in ["site/style.css", "site/motion.js", "site/field.js", "site/geist.ttf", "site/Geist-OFL.txt", "site/source-serif-4.woff2", "site/SourceSerif-OFL.txt", "images/profile.jpg", "images/favicon.ico",
                   "images/projects/qwenpaw.png", "images/projects/jittor-geometric.png",
                   "images/organizations/alibaba.png", "images/organizations/ant-group.png", "images/organizations/nus.png"]:
        dest = OUT / source
        dest.parent.mkdir(parents=True, exist_ok=True)
        copy2(ROOT / source, dest)

    selected = []
    for slug, alt in FEATURED.items():
        paper = by_slug[slug]
        image_path = f"images/teasers/{slug}.png"
        (OUT / image_path).parent.mkdir(parents=True, exist_ok=True)
        copy2(ROOT / image_path, OUT / image_path)
        selected.append(
            f'<li><a class="figure-link" href="/{image_path}" aria-label="Enlarge figure from {escape(paper["title"])}">'
            f'<img src="/{image_path}" loading="lazy" alt="{escape(alt)}"></a><div>'
            f'<h3><a href="/publications/{slug}/">{escape(paper["title"])}</a></h3>'
            f'<p class="authors">{author_line(paper)}</p>'
            f'<p class="citation"><em>{escape(paper["venue"])}</em> · {paper["year"]}</p>'
            f'{keyword_list(paper)}{resources(paper)}</div></li>'
        )
    home = Template((SITE / "home.html").read_text()).substitute(selected=''.join(selected))
    description = "Runlin Lei studies agent harnesses for long-running tasks, self-improvement, and human guidance at Renmin University of China."
    page("index.html", "Runlin Lei · Agent & Graph", home, description)
    for alias in ["about/index.html", "about.html"]:
        write(alias, '<!doctype html><html lang="en"><meta charset="utf-8"><title>Runlin Lei</title>'
                    '<link rel="canonical" href="/"><meta http-equiv="refresh" content="0;url=/"><a href="/">Runlin Lei</a></html>')

    rows = []
    for paper in papers:
        title = escape(paper["title"])
        authors = author_line(paper)
        meta = f'<span class="meta">{paper["year"]} · {escape(paper["venue"])}</span>'
        slug = paper["slug"]
        url = f'/publications/{slug}/'
        rows.append(f'<article class="pub">{meta}<h2><a href="{url}">{title}</a></h2>'
                    f'<p class="authors">{authors}</p>{keyword_list(paper)}{resources(paper)}</article>')
        detail = (f'<div class="page detail"><a href="/publications/">All publications</a><h1>{title}</h1>'
                  f'{meta}<p class="authors">{authors}</p>{keyword_list(paper)}{resources(paper)}')
        if slug in abstracts:
            paragraphs = [f'<p>{escape(p)}</p>' for p in abstracts[slug].split('\n\n') if p.strip()]
            detail += '<article><h2>Abstract</h2>' + ''.join(paragraphs) + '</article>'
        page(f"publications/{slug}/index.html", paper["title"] + " · Runlin Lei", detail + "</div>", paper["title"])
    archive = '<div class="page archive"><h1>All publications</h1>' + ''.join(rows) + '</div>'
    page("publications/index.html", "Publications · Runlin Lei", archive, "Browse publications by Runlin Lei.")
    write(".nojekyll", "")
    print(f"Built homepage, publication archive and {len(rows)} paper pages in {OUT}")


if __name__ == "__main__":
    main()
