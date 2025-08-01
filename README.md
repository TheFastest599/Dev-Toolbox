# Dev Toolbox

A professional developer utility web app with:

- JSON Formatter (with error handling)
- Base64 Encoder/Decoder
- 2-tab interface, dark mode toggle, clipboard copy
- Backend API (Express.js) for formatting/encoding/decoding
- Frontend (Vite React, Tailwind CSS)
- Mono repo structure

## How to Run Locally

1. Install dependencies:
   ```sh
   npm install
   cd server && npm install
   ```
2. Build frontend & start server:
   ```sh
   npm run build-and-serve
   ```
   (This will build the frontend and serve it from Express at `/`)

## Deploying to Vercel

- **Install Command:**
  ```sh
  npm install && cd server && npm install
  ```
- **Build Command:**
  ```sh
  npm run build
  ```
- **Output Directory:**
  ```
  dist
  ```
- **Serverless Function Entry:**
  ```
  server/index.js
  ```

Live

[Dev Toolbox Live](https://dev-toolbox-uxgq.onrender.com)

## What I’d improve with more time

- Add more developer tools (e.g., UUID generator, regex tester, color picker)
- Improve error handling and user feedback throughout the app
- Add authentication for user-specific features
- Enhance mobile responsiveness and accessibility
- Optimize performance and bundle size
