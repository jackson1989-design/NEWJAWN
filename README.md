<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1-n8uWlDNzpx8ANUiU1MbyoHhAraYzv5o

## Run locally

**Prerequisites:** Node.js

### 1) Install
`npm install`

### 2) Configure server-side AI key (recommended)
This project calls a serverless endpoint (`/api/chat`) so API keys never ship to the browser.

Create a file named `.env` (or use Vercel project env vars) and set:

`GEMINI_API_KEY=your_key_here`

Optional:

`GEMINI_MODEL=gemini-1.5-pro`

> Tip: See `.env.example`.

### 3) Run
`npm run dev`

## Deploy

### Option A (recommended): Deploy everything on Vercel (frontend + /api)
1. Push this repo to GitHub.
2. Import it into Vercel.
3. In Vercel → Project Settings → Environment Variables, add:
   - `GEMINI_API_KEY`
   - (optional) `GEMINI_MODEL`
4. Deploy.

Because the frontend and `/api/chat` share the same domain, no CORS changes are required.

### Option B: GitHub Pages (frontend) + Vercel (API)
If you host the UI on GitHub Pages, set this build-time env var for the UI:

`VITE_CHAT_API_URL=https://your-vercel-project.vercel.app`

The UI will then call `https://your-vercel-project.vercel.app/api/chat`.
