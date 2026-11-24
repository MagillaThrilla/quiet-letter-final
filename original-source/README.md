# Website 2 — Quiet Letter Retirement Page

## Replace the placeholder image

Export your finished baked composition from Affinity and place it here:

`assets/final-background.jpg`

Keep that exact filename, or update the `src` in `index.html`.

Recommended export:

- Portrait 2:3 composition
- 2560 × 3840 pixels
- High-quality JPEG or WebP
- sRGB color profile
- No transparency required

## Animation timing

Edit the variables at the top of `styles.css`:

```css
--fade-in-duration: 6s;
--display-duration: 60s;
--fade-out-duration: 10s;
```

The page then remains black permanently.

## Preview locally

Open `index.html` in a browser.

For the most accurate preview, run a small local server from this folder:

```bash
python3 -m http.server 8000
```

Then open:

`http://localhost:8000`

## Image fitting

The default setting is:

```css
object-fit: cover;
```

This fills the entire screen but can crop slightly on displays with a different aspect ratio.

To always show the entire image, change it to:

```css
object-fit: contain;
```

That may produce black bars around the image.
