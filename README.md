# Codex Community Dev Day, Adelaide

The public event page for Codex Community Dev Day (Thursday 15 October 2026,
Stone & Chalk Adelaide).

- **Live:** https://www.affinda.com/events/2026/openai-community-adl/
- **Direct:** https://affinda.github.io/openai-community-adl/

Every push to `main` goes live in about a minute. affinda.com serves the same
content, so you don't need to change the Affinda website.

## Add your talk resources

Each talk has a folder and a block in `index.html`:

| Talk | Folder | Block in `index.html` |
|---|---|---|
| New tools and features from OpenAI DevDay (Matt) | `talks/whats-new-devday/` | `TALK: What's new from OpenAI DevDay` |
| What happens when everyone can build (Sophia) | `talks/everyone-can-build/` | `TALK: What happens when everyone can build` |
| Making skills you can rely on (Laurence) | `talks/reliable-skills/` | `TALK: Making skills you can rely on` |
| A closer look at Hugging Face (Andrew) | `talks/dev-dive/` | `TALK: Dev dive` |

1. Put your files in your talk's folder: slides (PDF), HTML artifacts,
   downloads, anything static.
2. In your block in `index.html`, replace the "Resources coming soon." line
   with one `<li>` for each resource:

   ```html
   <ul class="resources">
     <li><a href="talks/reliable-skills/slides.pdf">Slides (PDF)</a></li>
     <li><a href="talks/reliable-skills/skill-checklist.html">Skill checklist (interactive)</a></li>
     <li><a href="talks/reliable-skills/example-skill.zip" download>Example skill (ZIP)</a></li>
   </ul>
   ```

3. Commit and push to `main`. Check the **Actions** tab: when the run is
   green, the change is live.

Rules that keep the page working:

- **Use relative links only.** Write `talks/...`, never `/talks/...`. The
  page is served from two addresses, and a leading `/` breaks one of them.
- **Edit only your own block** so you don't get merge conflicts with each
  other. Pull before you start (`git pull`).
- **Everything here is public.** Don't commit anything confidential, client
  material, API keys or `.env` files.
- **Keep files under 100 MB.** GitHub rejects anything bigger. For large
  videos, link to them instead.
- **HTML artifacts** can be self-contained `.html` files. Put them in your
  folder and link to them like any other file. If you want a full page with
  its own assets, make a subfolder with an `index.html` and link to the
  folder with a trailing slash (`talks/reliable-skills/demo/`).

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
