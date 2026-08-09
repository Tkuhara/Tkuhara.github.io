# How to run and publish your site

**Everything you need is in this one file.** It assumes you have never written
HTML in your life. Follow it top to bottom the first time; after that you'll
only ever need Part 1 and Part 5.

---

## What the site is made of

| File | What it is | Do you edit it? |
| --- | --- | --- |
| `content.js` | All the text of the research site — your name, projects, papers, links | **Yes, often** |
| `diary.js` | Your diary entries | **Yes, often** |
| `Research Portfolio.dc.html` | The research site itself | No |
| `Diary.dc.html` | The diary site | No |
| `support.js` | Machinery that makes the two pages work | Never |
| `_ds/` folder | The design system: fonts, colours, spacing | Never |
| `assets/` folder | Your CV, photos, PDFs | You add files here |

The two `.dc.html` files are the pages. The two `.js` files are your content.
That separation is the whole point: you can rewrite your entire site without
ever opening a page file.

---

## Part 1 — Editing your content

### Opening the files

Use any plain text editor. Free and good:

- **Windows** — Notepad works; [VS Code](https://code.visualstudio.com) is better.
- **Mac** — TextEdit works *if you switch it to plain text* (Format → Make Plain
  Text); [VS Code](https://code.visualstudio.com) is better.

Open `content.js` or `diary.js`, edit, save. Then reopen the page in your
browser and press **Ctrl+R** (Windows) / **Cmd+R** (Mac) to see the change.

### The four rules

1. Text always goes inside `"double quotes"`.
2. Every entry in a list ends with a comma: `},`
3. If you need a `"` inside your text, type `\"` instead.
4. Never delete a `{`, `}`, `[` or `]` unless you are deleting the whole entry
   it belongs to.

If the page goes blank after an edit, you broke one of these four. Undo
(Ctrl+Z / Cmd+Z) until it works again, then redo the change more carefully.

### Adding a diary entry

Open `diary.js`. Find the line `export const ENTRIES = [`. Paste this
**directly under it** (newest entries go at the top):

```js
  {
    date: "2026-08-20",
    lang: "en",
    title: "Title of the entry",
    body: [
      "First paragraph.",
      "Second paragraph."
    ]
  },
```

`lang` is `"en"` or `"ja"` — that's the language of *this one entry*.
The date must be `YYYY-MM-DD`.

The page shows the newest 10 and hides the rest behind a button, so the list
can grow to hundreds of entries with no slowdown.

### Adding a publication

Open `content.js`, find `export const PUBLICATIONS = [`, and copy an existing
entry. To make the DOI button appear, fill in the `doi` field:

```js
    doi: "https://doi.org/10.1163/22134808-bja10123",
```

Same for `pdf` (a file you put in `assets/pdf/`) and `video` (a YouTube link).
Leave a field as `""` and its button simply doesn't appear.

### Adding a project

Find `export const PROJECTS = [` in `content.js` and copy a whole entry.
Two things to get right:

- `id` must be unique and contain no spaces — e.g. `"my-new-project"`. It
  becomes the project page's web address.
- `body` is a **list of paragraphs**. Add or remove paragraphs freely.

### Adding your CV and photos

The `assets/` folder already exists, with one subfolder per kind of file:

```
assets/cv/            ← your CV PDF        → content.js  PROFILE.cvFile
assets/img/           ← your portrait      → content.js  PROFILE.portrait
assets/img/projects/  ← project images     → content.js  PROJECTS[].image
assets/diary/         ← diary photos       → diary.js    images[].src
assets/pdf/           ← paper PDFs         → link fields
```

Drop the file in, then write the path from the site root.

Filenames are case-sensitive on the web — `CV.pdf` and `cv.pdf` are different
files. Use lower-case, no spaces, no Japanese characters. A name like
`Takumi Kuhara CV (English).pdf` still works, but the browser has to escape it
into `Takumi%20Kuhara%20CV%20(English).pdf`, which is ugly to share and easy to
mistype.

**Two CVs, English and Japanese.** `cvFile` takes the same `{ en, ja }` shape as
the rest of the site, and the download button follows whichever language the
visitor has selected:

```js
cvFile: {
  en: "assets/cv/takumi-kuhara-cv-en.pdf",
  ja: "assets/cv/takumi-kuhara-cv-ja.pdf"
},
```

Only have one CV? Either write the same path in both, or just write a plain
string — `cvFile: "assets/cv/my-cv.pdf"` — both work. Set it to `""` and the
download button disappears instead of pointing at a missing file.

The file saves under its own name, so keep the filename something you would be
happy for a stranger to see in their downloads folder.

**Photos in a diary entry.** Add an `images` list to the entry in `diary.js`:

```js
{
  date: "2026-08-09",
  lang: "ja",
  title: "手首の実験装置",
  body: [ "今日は……" ],
  images: [
    {
      src: "assets/diary/wrist-rig.jpg",
      alt: "手首に取り付けた加振器",   // read aloud to blind visitors
      caption: "3Dプリントのハンドル。"  // optional
    }
  ]
}
```

Photos appear under the text, in order, at the width of the text column.
Leave `images` out entirely if there are none. `caption` is optional; `src` is
not.

> Writing an `<img>` tag inside `body` does **not** work — body text is escaped
> for safety, so the tag shows up as literal text on the page. Use `images`.

**Portrait and project images.** Set `portrait: "assets/img/portrait.jpg"` in
`content.js` and it replaces the "TK" initials box on the front page. Set
`image:` on a project and it fills that project's card and its detail page;
leave it `""` and you get the plain grey placeholder. Nothing else to change.

Resize before uploading — about 1600 px wide, under ~1 MB. Nothing is
compressed automatically, so a 6 MB phone photo is a 6 MB download for every
visitor.

### Removing a section

If you don't want, say, Recommendations: empty its list in `content.js`.

```js
export const RECOMMENDATIONS = [];
```

The section will still show its heading. To remove the heading too, tell
Claude "remove the Recommendations section" — that's a page-file edit.

---

## Part 2 — Getting the site online (the easy way)

**Recommended: GitHub Pages.** Free, permanent, no credit card, and it gives
you a proper address you can put on a paper. Roughly 20 minutes the first time.

### Step 1 — Make the folder you'll publish

Put these in one folder on your computer:

```
your-site/
  index.html                    ← you create this in Step 2
  Research Portfolio.dc.html
  Diary.dc.html
  content.js
  diary.js
  support.js
  _ds/
  assets/
```

### Step 2 — Create `index.html`

Web servers look for a file called `index.html` first. Make a new plain-text
file called exactly `index.html` and paste in:

```html
<!DOCTYPE html>
<meta charset="utf-8">
<title>Takumi Kuhara</title>
<script>location.replace("Research%20Portfolio.dc.html" + location.hash);</script>
<a href="Research%20Portfolio.dc.html">Continue to the site</a>
```

That's a one-line redirect: visitors who type your address land on the
research site. (`%20` is how a space is written in a web address.)

> **Optional, tidier:** rename `Research Portfolio.dc.html` to `index.html`
> and `Diary.dc.html` to `diary.html`. If you do, open both files and any
> place that says `Diary.dc.html` change it to `diary.html`, and any place
> that says `Research Portfolio.dc.html` change it to `index.html`. Then you
> don't need the redirect file above. Skip this if it sounds fiddly — the
> redirect works fine.

### Step 3 — Make a GitHub account and a repository

1. Sign up at [github.com](https://github.com) (free).
2. Click **+** (top right) → **New repository**.
3. Name it exactly: **`yourusername.github.io`** — using *your* GitHub
   username. This exact name is what makes the free address work.
4. Set it to **Public**. Don't tick any of the "initialize" boxes.
5. Click **Create repository**.

### Step 4 — Upload your files

On the new repository page, click **uploading an existing file**.

Drag your files in. **Important:** drag the *contents* of `your-site/` — the
files themselves and the `_ds` and `assets` folders — not the enclosing
folder. GitHub's uploader accepts dragged folders and keeps their structure.

Scroll down, click **Commit changes**.

### Step 5 — Turn on Pages

Repository → **Settings** → **Pages** (left sidebar) →
under *Build and deployment*, Source = **Deploy from a branch**,
Branch = **main**, folder = **/ (root)** → **Save**.

> **The `.nojekyll` file — do not delete it.**
>
> GitHub Pages runs every site through Jekyll, and Jekyll **silently skips any
> folder whose name starts with an underscore**. Your entire design system lives
> in `_ds/`, so without this file the fonts, colours and layout 404 and the page
> renders as raw `{{ name }}` placeholders with no styling. The repo looks
> perfect; only the live site is broken — which is what makes it so confusing.
>
> An empty file named `.nojekyll` in the root turns Jekyll off. It is already
> here. If you ever rebuild this repo from scratch, create it again:
>
> ```bash
> touch .nojekyll
> ```
>
> Symptom to recognise: `content.js` loads fine but `_ds/…/styles.css` gives 404.

Wait 1–3 minutes. Your site is live at:

```
https://yourusername.github.io
```

Bookmark that. It's yours permanently and it's free.

### Step 6 — Updating the site later

Whenever you add a diary entry or a paper:

1. Edit `content.js` or `diary.js` on your computer.
2. Go to your repository on github.com.
3. Click the file name → the **pencil icon** (top right) → paste your new
   version over the old text → **Commit changes**.
4. Wait about a minute. The live site updates itself.

Even easier for regular writing: click the file, click the pencil, and type
the new diary entry *directly in the browser*. You never need to touch your
computer's copy at all.

---

## Part 3 — The alternative: Netlify

If GitHub feels like too much, Netlify's drag-and-drop is the shortest path
that exists:

1. Sign up at [netlify.com](https://netlify.com) (free).
2. Go to **Sites** → drag your `your-site` folder onto the drop zone.
3. Done. You get an address like `random-name-12345.netlify.app`, which you
   can rename under **Site configuration → Change site name**.

To update: drag the folder on again. It replaces everything.

**The trade-off:** with Netlify drag-and-drop there's no online copy of your
files to edit — every change means editing on your computer and re-dragging.
With GitHub you can edit from any browser, including your phone. For a diary
you'll update often, GitHub wins.

---

## Part 4 — Your own domain name

Optional. Costs roughly ¥1,500–3,000 a year. Worth it if you want
`kuhara.jp` or `takumikuhara.com` on a business card.

### Buying one

Use any registrar — [Cloudflare](https://cloudflare.com) (cheapest, no
upselling), [Namecheap](https://namecheap.com), or [お名前.com](https://onamae.com)
for `.jp` domains. Buy the domain; you don't need their hosting, email, or
"privacy protection" add-ons (Cloudflare includes privacy free).

### Connecting it to GitHub Pages

**In your repository:** Settings → Pages → *Custom domain* → type your domain
→ **Save**. Then tick **Enforce HTTPS** once it becomes available (it can take
an hour).

**At your registrar,** open the DNS settings and add these records:

| Type | Name | Value |
| --- | --- | --- |
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |
| CNAME | `www` | `yourusername.github.io` |

Four A records, one CNAME. Save. DNS changes take anywhere from 10 minutes to
a few hours to spread worldwide — if it doesn't work immediately, wait and
check again before changing anything.

### Connecting it to Netlify

Netlify → **Domain management** → **Add a domain** → follow its instructions.
It will tell you exactly which records to create; it's a little more automatic
than GitHub's.

---

## Part 5 — Everyday reference

**Preview locally:** double-click `Research Portfolio.dc.html`.

> If the page loads but the text is missing, your browser is blocking the
> content files for local security reasons. Two fixes:
> — Use VS Code with the free **Live Server** extension (right-click the file
>   → *Open with Live Server*), or
> — just push to GitHub and preview on the live site. Online it always works.

**Add a diary entry:** `diary.js`, new block at the top of the list.

**Add a paper:** `content.js`, `PUBLICATIONS`, copy an entry, fill in `doi`.

**Add a project:** `content.js`, `PROJECTS`, copy an entry, give it a unique
`id` with no spaces.

**Change your bio:** `content.js`, `PROFILE.about`.

**Change a heading's wording:** `content.js`, the `UI` block at the bottom.

**Site broke after an edit:** you missed a comma or a quote. Undo until it
works.

**Language:** the research site has an EN / 日本語 button and remembers each
visitor's choice. The diary is per-entry — each entry declares its own `lang`,
and readers can filter.

**Dark mode:** the button in the header; the choice is shared between both
sites and remembered.

**Mobile:** both pages already adapt — the grids collapse to one column and
the type scales down. Nothing to configure.

---

## When you want a change you can't make here

Anything structural — a new section, a different layout, a photo gallery,
removing a heading — is a page-file edit. Come back and describe what you
want in plain words; that's what these page files are for.
