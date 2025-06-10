# Page Feedback Chrome Extension

A simple Chrome extension that allows you to save notes and feedback for different web pages. The notes are stored locally and are specific to each URL you visit.

## Features

- Save notes for any webpage
- Notes are automatically loaded when you revisit a page
- Simple and clean interface
- Data is stored locally in your browser

## Installation

1. Clone this repository
2. Install dependencies:
   ```
   npm install
   ```
3. Build the extension:
   ```
   npm run build
   ```
4. Open Chrome and navigate to `chrome://extensions/`
5. Enable "Developer mode" in the top right
6. Click "Load unpacked" and select the `dist` folder from this project

## Usage

1. Click the extension icon in your browser toolbar
2. Enter your notes in the textarea
3. Click "Save Notes" to store your feedback
4. When you return to the same page later, your saved notes will automatically load

## Development

- Run `npm run watch` to automatically rebuild the extension when files change
- After making changes, refresh the extension in `chrome://extensions/`