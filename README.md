# Enzonic Node.js deployment test

A minimal Node.js HTTP server with no external dependencies.

## Files
- `server.js` — backend server
- `package.json` — start script

## Deploy
1. Upload these files to your Enzonic Node.js app (or connect the repository if Enzonic supports Git deployment).
2. Set the start command to `npm start` (or `node server.js`).
3. If Enzonic asks for an application port, use the port it provides through the `PORT` environment variable. The app listens on `0.0.0.0`.
4. Deploy/restart the app.

## Test
Open these paths on your deployed app:
- `/` or `/health`
- `/api/test`

A successful response should contain `"success": true`.

No Excel files, API keys, or personal data are used in this test.
