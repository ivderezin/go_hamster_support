# Go! Hamster support

Official GitHub Pages support site. Static HTML/CSS/JS, no dependencies or analytics.

- `index.html`: English support
- `ru.html`: Russian support
- `privacy.html`: existing English privacy policy; stable URL
- `build.py`: bilingual copy and HTML template; run `python3 build.py` after editing
- `style.css`, `site.js`: shared responsive design and accessible device tabs
- `assets/`: approved game artwork and locally hosted Nunito (OFL included)

Preview: `python3 -m http.server 8768 --bind 127.0.0.1`.
GitHub Pages serves the repository root. Keep generated HTML committed.

TV release availability is described as forthcoming until the store release is
confirmed. Do not promise cloud saves: game-service sign-in and save sync are
separate features. Privacy content changes require a separate policy review.

QA (2 November 2026): desktop and 400px mobile Chrome, device tabs with keyboard,
FAQ expansion, internal links/assets, JS syntax, preserved privacy article text.
