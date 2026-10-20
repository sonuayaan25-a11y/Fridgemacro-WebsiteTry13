# Fridges Macro — GitHub Pages website

A responsive, dark blue/purple storefront built with plain HTML, CSS and JavaScript. No framework, package manager, or build step is required.

## Files

- `index.html` — page content, products, prices, external links, FAQ
- `styles.css` — responsive design, colours, animations and product cards
- `script.js` — search, category filters and mobile navigation

## Preview locally

1. Extract the ZIP.
2. Open `index.html` in a modern browser.
3. For a more accurate local preview, use VS Code with the Live Server extension.

## Before publishing

Open `index.html` and replace:
- `https://discord.com/` with your actual Discord invite URL.
- `https://www.roblox.com/` with your actual Roblox profile/group/game URL, if relevant.
- Every `https://example.com/payment/...` URL with the matching external checkout/payment URL.
- Every `https://www.roblox.com/game-pass/0000000000/` URL with that product's real Roblox Game Pass URL. Each paid card has both a **Pay** button and an **Open Game Pass** button.
- Sample product names, descriptions, features and prices with accurate details.
- The FAQ answer about product delivery with your real process and support terms.

Search for `data-link=` to quickly find the link placeholders. The payment buttons are ordinary external links; this static site does not collect payment details, verify transactions, manage licenses, or automatically deliver files.

## Publish using GitHub Pages

1. Sign in at https://github.com and create a **public** repository, for example `fridges-macro`.
2. Upload `index.html`, `styles.css`, `script.js`, and `README.md` to the repository root. Do not upload the ZIP alone.
3. Open the repository's **Settings → Pages**.
4. Under **Build and deployment**, select **Deploy from a branch**.
5. Set branch to `main` and folder to `/(root)`, then click **Save**.
6. Wait for the workflow/deployment to finish. Your website should be available at:
   `https://YOUR-USERNAME.github.io/fridges-macro/`
   Replace `YOUR-USERNAME` with your GitHub username and use your exact repository name.
7. If you update the files later, commit the changes and GitHub Pages will redeploy the site.

Official guide: https://docs.github.com/en/pages/quickstart

## Notes

- GitHub Pages is static hosting. Never place secret API keys, private credentials, or payment provider secrets in these files.
- Use a reputable payment provider's hosted checkout page for payments.
- Check the rules and terms of the platforms where your macros will be used.
- Product names and prices in the template are illustrative placeholders, not real offers.
