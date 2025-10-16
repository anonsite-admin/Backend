# acesms-backend (GitHub-ready)

This is a minimal Express backend for ACE SMS proxy + mock auth. Designed to deploy to Render via GitHub.

## Quick steps

1. Create a GitHub repo and push this project (all files).
2. On Render, choose **Public Git Repository** and paste your repo URL.
3. In Render service settings, set environment variables:
   - ACESMS_API_KEY (your ACE SMS API key)
   - JWT_SECRET (long random string)
   - ADMIN_EMAIL (your admin email)
4. Deploy the service. Render will run `npm install` then `npm start`.
5. After deploy, copy the service URL (e.g. https://acesms-backend.onrender.com) and paste it into your ProFreeHost `config.js` as BACKEND_URL.

API endpoints:
- POST /api/auth/signup  { email, password }
- POST /api/auth/login   { email, password } -> returns { ok:true, token }
- GET  /api/acesms?action=get-usa-services
- GET  /api/acesms?action=... (see routes)
- GET  /api/admin/stats  (requires Authorization: Bearer <admin-token> )

Notes:
- This uses a simple JSON file store (data/users.json). For private use this is fine; for production migrate to a DB.
- Keep the ACESMS_API_KEY and JWT_SECRET secret.
