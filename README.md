# CIDS325 — Web Development, Fall 2026

This repository contains web development examples for CIDS325 at the University of Wisconsin–River Falls. Use the files to follow along with class, inspect how a page is built, and experiment with your own changes.

## Get started

You need a web browser and a plain-text or code editor. The current examples use HTML and CSS; no package installation or build step is required.

1. Download this repository using **Code → Download ZIP** on GitHub, then extract the ZIP file.
2. Open the extracted folder in your editor.
3. Open `index.html` in your browser by double-clicking it or dragging it into a browser window.
4. Keep the editor and browser open side by side so you can compare the source with the rendered page.

If you already use Git, you can clone the repository instead:

```sh
git clone https://github.com/trevortomesh/CIDS325-F26.git
cd CIDS325-F26
```

## What's in the repository?

| File | What to look for |
| --- | --- |
| `index.html` | The main example: document structure, headings, paragraphs, links, an image, unordered and ordered lists, and CSS in a `<style>` block. |
| `sparta.html` | A small second page linked from `index.html`, demonstrating a relative link. |
| `README.md` | These instructions. |

## Make a change and see what happens

1. Open `index.html` in your editor and change the text inside `<h1>`.
2. Save the file.
3. Refresh the browser tab displaying your local `index.html`.
4. Try changing a color in the `<style>` block, adding a list item with `<li>`, or changing the page title inside `<title>`.
5. Click the **SPARTA!!!** link to open `sparta.html`, then use the browser's Back button to return.

Make one change at a time so you can see what each edit does. Keep related files in the same folder: `./sparta.html` means “find `sparta.html` in the same folder as this page.”

## Things you may notice

- The **TEXT FILE!!!** link points to `silly.txt`, which is not currently included. To try it, create a plain-text file named `silly.txt` beside `index.html`, add some text, save it, and click the link again.
- The Charizard image loads from an external website, so it needs an internet connection. The external Silksong link also needs internet access.
- If your edits do not appear, check that you saved the file, refresh the page, and make sure the browser is showing the same copy you edited.
- If the browser displays source code instead of a page, check that the filename ends in `.html`, not `.html.txt`.

## Get updated examples

If you downloaded a ZIP, download a fresh copy when you need updated examples. Keep your practice files in a separate folder so you can preserve your changes.

If you cloned with Git and have no local changes to preserve, run this from the repository folder:

```sh
git pull
```

If Git reports that local changes would be overwritten, preserve your work before updating. Ask for help if you are unsure how to proceed.

Follow the instructions for each course assignment for what to complete and how to submit it; editing your local copy does not submit your work.
