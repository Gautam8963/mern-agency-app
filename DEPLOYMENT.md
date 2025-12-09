# Deployment Guide

Follow these steps to publish your project to GitHub and deploy it live.

## 1. Publish to GitHub

You have already initialized the local repository and committed your code. Now you need to push it to the cloud.

1.  **Create a Repository:**
    *   Go to [GitHub.com/new](https://github.com/new).
    *   Name it `mern-agency-app`.
    *   **Do not** check "Initialize with README" (you already have one).
    *   Click **Create repository**.

2.  **Push your code:**
    *   Copy the commands under **"…or push an existing repository from the command line"**.
    *   They will look like this (replace `YOUR_USERNAME` with your actual GitHub username):
        ```bash
        git remote add origin https://github.com/YOUR_USERNAME/mern-agency-app.git
        git branch -M main
        git push -u origin main
        ```
    *   Run these commands in your terminal.

---

## 2. Deploy Backend (Node/Express) to Render

We will use **Render.com** for the server because it provides free hosting for Node.js apps.

1.  **Sign up/Login** to [Render.com](https://render.com).
2.  Click **New +** and select **Web Service**.
3.  Connect your GitHub account and select the `mern-agency-app` repository.
4.  **Configure the Service:**
    *   **Name:** `agency-api` (or similar)
    *   **Root Directory:** `server` (Important!)
    *   **Environment:** `Node`
    *   **Build Command:** `npm install`
    *   **Start Command:** `npm start`
5.  **Environment Variables:**
    *   Scroll down to "Environment Variables".
    *   Add `MONGO_URI`: `your_mongodb_connection_string` (Copy from your local .env or MongoDB Atlas).
    *   Add `JWT_SECRET`: `your_secret_key`.
    *   Add `PORT`: `10000` (Render default).
6.  Click **Create Web Service**.
7.  **Copy URL:** Once deployed, copy the URL (e.g., `https://agency-api.onrender.com`). You will need this for the frontend.

---

## 3. Deploy Frontend (React/Vite) to Vercel

We will use **Vercel** for the frontend as it's optimized for React.

1.  **Update Frontend Config:**
    *   Before deploying, go to `client/src/api/axios.js` (or wherever your base URL is defined).
    *   Change the `baseURL` to your **new Render Backend URL** (e.g., `https://agency-api.onrender.com/api/v1`).
    *   *Tip: Use an environment variable like `import.meta.env.VITE_API_URL` so you can switch between localhost and production easily.*
    *   Commit and push this change to GitHub:
        ```bash
        git add .
        git commit -m "Update API URL for production"
        git push
        ```

2.  **Deploy:**
    *   Sign up/Login to [Vercel.com](https://vercel.com).
    *   Click **Add New...** -> **Project**.
    *   Import `mern-agency-app`.
    *   **Configure Project:**
        *   **Framework Preset:** Vite
        *   **Root Directory:** Click "Edit" and select `client`.
    *   Click **Deploy**.

## 4. Final Polish

1.  **Whitelist Domains:** If you implemented CORS in your backend, make sure to add your new Vercel Frontend domain to the allowed origins list in `server/index.js`.
2.  **Test:** Open your Vercel URL and test the Contact Form and Admin Login.

Congratulations! Your app is live! 🚀
