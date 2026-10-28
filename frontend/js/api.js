// api.js - Talks directly to json-server (run via `npm start`, serves on port 3000).
// json-server auto-generates REST endpoints from db.json: /events, /bookings, /users

const API_BASE = "http://localhost:3000";

async function apiGet(path) {
  const res = await fetch(API_BASE + path);
  if (!res.ok) throw new Error("Request failed: " + path);
  return res.json();
}

async function apiPost(path, body) {
  const res = await fetch(API_BASE + path, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error("Request failed: " + path);
  return res.json();
}

async function apiPatch(path, body) {
  const res = await fetch(API_BASE + path, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error("Request failed: " + path);
  return res.json();
}

async function apiDelete(path) {
  const res = await fetch(API_BASE + path, { method: "DELETE" });
  if (!res.ok) throw new Error("Request failed: " + path);
  return res.json();
}

// ---- Simple client-side "session" (stores logged-in user in localStorage) ----
// NOTE: full login/register flow is part of the upcoming development phase.
function getCurrentUser() {
  const raw = localStorage.getItem("eventapp_user");
  return raw ? JSON.parse(raw) : null;
}
function setCurrentUser(user) {
  localStorage.setItem("eventapp_user", JSON.stringify(user));
}
function logoutUser() {
  localStorage.removeItem("eventapp_user");
  window.location.href = "index.html";
}
