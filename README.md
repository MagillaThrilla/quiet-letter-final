# Quiet Letter — iPhone 16 Responsive Build

This build keeps the existing desktop composition and adds a dedicated portrait/iPhone layout.

## Changes

- Uses `100dvh` so the scene responds to Safari's changing browser controls.
- Keeps the parchment, text, sketches, signature, and button proportionally aligned.
- Positions the music button directly beneath the parchment and above the mobile browser toolbar area.
- Crops the room background for portrait viewing while retaining the candlelit atmosphere.
- Removes the missing infinity-image reference that caused the broken-image icon.
- Keeps all revealed content visible until the music button is clicked.
- Excludes repository metadata and macOS metadata from the deliverable.

## Deploy

Upload the contents of this folder to the root of the GitHub Pages repository.


## July 30, 2026 iPhone fix
- iPhone signature uses `top: 73%` inside the parchment, so it sits below the final line and between the two sketches.
- Desktop signature placement remains unchanged.
- CSS and asset query versions were updated to prevent stale Safari caching.
