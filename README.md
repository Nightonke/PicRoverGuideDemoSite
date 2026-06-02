# Spring Lens Journal Local Site

This is a local static photography site used by PicRover for bundled webpage testing.

## How to Use

Open `index.html` directly in a browser, or copy the whole `PicRoverGuideDemoSite`
folder into the iOS app bundle and open the entry HTML by local file URL.

If you add it to Xcode, prefer dragging the whole folder as a folder reference
(blue folder) and make sure it is included in the PicRover target resources.
That keeps `assets/` and `sets/` relative links intact.

The site has no build step and no external JavaScript, CSS, or remote image
dependency. Put the local photo archive in `images/` before opening the pages.

## Images

Add local images using this naming pattern:

- `images/guide-001.jpg`
- `images/guide-002.jpg`
- ...
- `images/guide-100.jpg`

The default extension is `.jpg`. If you prefer `.png` or `.webp`, change
`imageExtension` at the top of `assets/demo-data.js`.

## Pages

- `basic.html`: a multi-page spring editorial.
- `workspace.html`: companion studio collections.
- `similar.html`: linked numbered story chapters.
- `playback.html`: a portrait-heavy review collection.
- `batch.html`: an editorial selection set.
