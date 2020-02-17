# CLUS WP Boilerplate

Version 1.0

## Features

- Hot module replacement for JS & CSS
- Autoreload for PHP
- SASS- & SCSS-Support
- JS-bundling & compiling with Babel
- Sourcemapping for Development & Production
- Base64-encoding for small assets
- Vendor-prefixing for CSS
- SVGO-optimization for SVG-assets
- Cache-busting with hashed filenames
- Minifying of JS & CSS for production
- Includes standard content elements for text, images & text-image-combination
- React ready

## Usage

### Configuration

Webpack needs the following .env-file to be present and configured.

```json
# Local development url
URL="YOUR LOCAL DEVELOPMENT URL HERE"

# Path to entry JavaScript file
ENTRY="./assets/scripts/main.js"

# Public path for files. This should be our WordPress theme path and will be
# used in the manifest.json file.
PUBLIC_PATH="/wp-content/themes/YOUR THEME NAME HERE/build/"

```

Import the **[acf-fields-import.json](acf-fields-import.json)** file to use the standard content elements for ACF.

### Start & Build

Run `npm start` to started with development.

Run `npm build` to generate a production build for deployment.

## Updating packages

Run `npm outdated` to see outdated packages.

Run `npm update` to update packages (minor versions only).

Run `npm install package@latest --save-dev` to update major versions of packages.

## Adding React

Just install React and use it.

```
npm install react react-dom --save
```
