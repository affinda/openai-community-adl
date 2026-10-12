# Codex Community Dev Day, Adelaide

The public event page for Codex Community Dev Day (Thursday 15 October 2026,
Stone & Chalk Adelaide).

- **Live:** https://www.affinda.com/events/2026/openai-community-adl/
- **Direct:** https://affinda.github.io/openai-community-adl/

Every push to `main` goes live in a minute or two (GitHub Pages publishes the branch directly). affinda.com serves the same
content, so you don't need to change the Affinda website.

## Add your files

Each talk has a folder:

| Talk | Folder |
|---|---|
| New tools and features from OpenAI DevDay (Matt) | `talks/whats-new-devday/` |
| What happens when everyone can build (Sophia) | `talks/everyone-can-build/` |
| Building a reliable skill (Laurence) | `talks/reliable-skills/` |
| Resourceful agents, open doors (Andrew) | `talks/dev-dive/` |

1. Put your files in your talk's folder: slides (PDF), HTML artifacts,
   downloads, anything static. Pull first (`git pull`).
2. Commit and push to `main`. GitHub Pages republishes the branch in a
   minute or two (see **Deployments** on the repo page).
3. Share the link. A file at `talks/reliable-skills/demo.html` is live at
   https://www.affinda.com/events/2026/openai-community-adl/talks/reliable-skills/demo.html

Rules that keep the page working:

- **Use relative links only** inside your HTML files (`./style.css`, never
  `/style.css`). The site is served from two addresses, and a leading `/`
  breaks one of them.
- **Everything here is public.** Don't commit anything confidential, client
  material, API keys or `.env` files.
- **Keep files under 100 MB.** GitHub rejects anything bigger. For large
  videos, link to them instead.
- **A full page with its own assets** goes in a subfolder with an
  `index.html`; link to the folder with a trailing slash
  (`talks/reliable-skills/demo/`).
- **Changing `index.html`** (the event page itself): check with Elle first.

## Brand

The page uses the real Affinda design system (`vendor/`, copied from the
website repo, see `vendor/VERSION.txt`). Don't edit `vendor/`. Use the `af-*`
components and don't add styles to them. Write in sentence case and
Australian English.

## Preview locally

```bash
python -m http.server 8000
```

Then open http://localhost:8000.
