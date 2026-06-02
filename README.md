# PicRover Guide Demo Site

This is a static demo site used for PicRover review and manual testing. It
contains guide pages for the first three PicRover user-guide flows:

- Recognize and download images.
- Browse with multiple workspaces.
- Queue and download similar gallery pages.

## How to Use

Open `index.html` directly in a browser, publish the folder with GitHub Pages,
or paste the published URL into PicRover.

The site has no build step and no external JavaScript, CSS, or remote image
dependency. Keep `assets/`, `images/`, and `sets/` together so relative links
continue to work.

## Demo Pages

- `index.html`: guide landing page with three PicRover flows.
- `basic.html`: image recognition and download guide.
- `workspace.html`: multi-workspace browsing guide.
- `similar.html`: similar gallery queue guide.
- `basic-page-2.html` and `basic-page-3.html`: continuation pages for testing
  next-page flows.
- `sets/story-*.html`: numbered pages for testing queued similar galleries.

## Images

Local images use this naming pattern:

- `images/guide-001.jpg`
- `images/guide-002.jpg`
- ...
- `images/guide-100.jpg`

The default extension is `.jpg`. If you change the image format, update
`imageExtension` at the top of `assets/demo-data.js`.
