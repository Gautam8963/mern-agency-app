# MERN Agency App

A production-ready full-stack MERN application for a digital agency. Features a public landing page for visitors and an admin dashboard for managing projects, clients, contacts, and newsletter subscribers.

## Features

- **Public Landing Page**:
  - Hero Section
  - Projects Listing
  - Happy Clients (Testimonials)
  - Contact Form
  - Newsletter Subscription
- **Admin Dashboard**:
  - Manage Projects (CRUD with Image Cropping)
  - Manage Clients (CRUD with Image Cropping)
  - View Contact Submissions
  - View Newsletter Subscribers
- **Image Cropping**: Integrated `react-easy-crop` for uploading and cropping images before saving (Base64 storage).

## Tech Stack

- **Frontend**: React (Vite), TailwindCSS, Axios, React Router, React Easy Crop.
- **Backend**: Node.js, Express, Mongoose (MongoDB).
- **Database**: MongoDB Atlas.

## Folder Structure

```
root/
├── client/          # React Frontend
│   ├── src/
│   │   ├── api/     # Axios config
│   │   ├── components/ # Reusable components
│   │   ├── layouts/ # Layout wrappers
│   │   ├── pages/   # Page components
│   └── ...
├── server/          # Node.js Backend
│   ├── src/
│   │   ├── config/  # DB connection
│   │   ├── controllers/ # Business logic
│   │   ├── models/  # Mongoose Schemas
│   │   ├── routes/  # API Endpoints
│   └── ...
└── package.json     # Root scripts
```

## Setup Instructions

### Prerequisites
- Node.js (v14+)
- MongoDB connection string (Atlas or Local)

### Installation

1. **Install Dependencies** (Root, Server, and Client)
   ```bash
   npm run install:all
   ```
   *Or manually:*
   ```bash
   cd server && npm install
   cd client && npm install
   ```

2. **Environment Configuration**
   - Create `server/.env` based on the example:
     ```
     PORT=5000
     MONGO_URI=your_mongodb_connection_string
     ```

### Running Locally

1. **Start Backend**
   ```bash
   npm run server
   # Runs on http://localhost:5000
   ```

2. **Start Frontend** (in a new terminal)
   ```bash
   npm run client
   # Runs on http://localhost:5173
   ```

## API Endpoints

- **Projects**: `GET /api/projects`, `POST /api/projects`, `PUT/DELETE /api/projects/:id`
- **Clients**: `GET /api/clients`, `POST /api/clients`, `PUT/DELETE /api/clients/:id`
- **Contacts**: `POST /api/contacts` (Public), `GET /api/contacts` (Admin)
- **Subscribers**: `POST /api/subscribers` (Public), `GET /api/subscribers` (Admin)

## Deployment

### Backend (Render/Railway)
1. Push code to GitHub.
2. Connect repository to Render/Railway.
3. specific Root Directory as `server`.
4. Set Build Command: `npm install`.
5. Set Start Command: `node src/index.js`.
6. Add Environment Variables: `MONGO_URI`, `PORT`.

### Frontend (Vercel/Netlify)
1. Push code to GitHub.
2. Connect repository to Vercel.
3. Specify Root Directory as `client`.
4. Build Command: `npm run build`.
5. Output Directory: `dist`.
6. **Important**: Go to `client/src/api/axios.js` and update `baseURL` to your deployed backend URL.
