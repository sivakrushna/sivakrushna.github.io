# Siva Krishna Karri - Senior Unity XR Developer Portfolio

A premium, high-performance personal portfolio website optimized for showcasing enterprise Virtual Reality, Augmented Reality, and spatial computing projects. 

Features a responsive design, custom glassmorphism components, interactive project filtering, timelines, and contact message simulations.

## Website Architecture

- **`index.html`**: Homepage with typing-style introduction, key metrics dashboard, organized technology badges, and specialized domain items.
- **`projects.html`**: Projects page featuring filter buttons (All, VR, AR, Games, Mobile) powered by a lightweight vanilla JS client-side filter engine, and responsive YouTube video players.
- **`about.html`**: Background details, professional value-adds, and an interactive career timeline covering 9+ years of industry tenure.
- **`contact.html`**: Rebuilt contact page with styled quick-action tiles and a glassmorphic secure form equipped with validation and toast indicators.
- **`style.css`**: Optimized design system featuring HSL variables, custom scrollbars, animated glows, hover translations, and media queries.
- **`Siva_Krishna_Karri_Resume.pdf`**: Direct PDF resume document linked in the download buttons.

## Local Development & Preview

To run this site locally, double-click on `index.html` to open it in a browser, or run a simple local web server:

```bash
# Python 3
python -m http.server 8000

# Node.js
npx serve .
```

Then visit `http://localhost:8000` or `http://localhost:3000` in your browser.

## Customization Instructions

Before deploying, make sure to update the social links:
1. Open `index.html`, `projects.html`, `about.html`, and `contact.html`.
2. Locate the footer socials or contact tiles (`href="#"`).
3. Replace the `#` symbol with your actual URL (e.g. `https://github.com/sivakrushna` and your LinkedIn profile).