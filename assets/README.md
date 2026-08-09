# assets

Put your files here. Paths in `content.js` and `diary.js` are written from the
site root, so a file at `assets/diary/rig.jpg` is referenced as exactly that.

```
assets/
  diary/           photos for diary entries      -> diary.js  images[].src
  img/portrait.jpg your portrait                 -> content.js PROFILE.portrait
  img/projects/    one image per project card    -> content.js PROJECTS[].image
  cv/              your CV PDFs, one per language -> content.js PROFILE.cvFile
```

`cvFile` takes `{ en: "...", ja: "..." }`, so the download button hands over the
CV matching the language the visitor is reading in. A plain string also works if
you only have one.

The folder is `img/`, not `image/` — the paths in `content.js` are literal, so a
photo in `assets/image/` will 404.

Filenames: lowercase letters, numbers and hyphens. No spaces, no Japanese
characters — they work locally but break as URLs.

Keep photos under ~1 MB. Nothing here is resized automatically, so a 6 MB phone
photo is a 6 MB download for every visitor. Export at about 1600 px wide.
