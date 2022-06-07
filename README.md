# Difoccus Downloader 🖼️

This code is intended to make it easy to download a set of photos from Difoccus portal.

## Usage 🖥️

> Some technical knowledge on programming might be necessary to take full advantage of this script.

Access Difoccus' portal and go to their Photos page.

Select the event you want to download data in the `select` available at this page. We need to select it before running the script, because we depend on the `select` state to be able to infer the "event" id.

Copy and paste the content from [`downloader.js`](downloader.js) inside the Developer Tools (Ctrl + Shift + I).

If you want to run this for more than one event, you'll need to refresh the page before running
this again, because we are using `const` declarations throughout the file.

You might adjust `PER_PAGE` and `PHOTO_COUNT` before you run the script to better suit your needs. A number much bigger than `1000` for `PER_PAGE` will crash the server. I recommend keeping it at 1000.

The result will be a list of URLs where you can download your data from.

## Author 🧙

[Rafael Baldasso Audibert](https://github.com/rafaeelaudibert)
