# Castra — Camping Discovery Community

Castra is a web app for outdoor enthusiasts: browse campgrounds on a map, add your own with photos, and leave reviews for the community.

## Features

- Campground listings with a cluster map and per-campground location map (Mapbox)
- Create, edit and delete your own campgrounds with image uploads (Cloudinary)
- Reviews with star ratings, owned by the reviewing user
- Authentication with Passport (local strategy) and session-backed flash messages
- Server-side validation with Joi, plus Helmet, mongo-sanitize and sanitize-html hardening
- Seed script for sample campgrounds

## Stack

Node.js · Express · MongoDB / Mongoose · EJS (ejs-mate) · Passport · Cloudinary · Mapbox

## Run locally

```bash
git clone https://github.com/Ahmed-Abdelhafez98/Castra.git
cd Castra
npm install
```

Create a `.env` with `DB_URL`, `CLOUDINARY_CLOUD_NAME`, `CLOUDINARY_KEY`, `CLOUDINARY_SECRET`, `MAPBOX_TOKEN` and `SECRET`, then:

```bash
node seeds/index.js   # optional sample data
npm start
```

Open `http://localhost:3000`.
