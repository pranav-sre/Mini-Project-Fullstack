# Eventra

**Event Management & Ticket Booking Platform**

Eventra is a web application for discovering events and booking tickets
online, with an admin dashboard for managing the event catalog. Built with
HTML, CSS, and vanilla JavaScript on the frontend, backed by
[json-server](https://github.com/typicode/json-server) as a lightweight REST API.

## Features

- Browse and search upcoming events by category or location
- View detailed event information with live seat availability
- Book tickets with instant confirmation
- User accounts with booking history
- Admin dashboard for managing events

## Tech Stack

- **Frontend:** HTML5, CSS3, JavaScript (Fetch API)
- **API & Data:** json-server

## Getting Started

1. Install dependencies:
   ```
   npm install
   ```
2. Start the API server:
   ```
   npm start
   ```
   Runs on `http://localhost:3000`, exposing `/events`, `/bookings`, and `/users`.
3. Open `frontend/index.html` in your browser (or serve the `frontend` folder with any static server).

## Project Structure

```
eventra/
├── db.json                 # Events, bookings, and user data
├── package.json
└── frontend/
    ├── index.html           # Home
    ├── events.html          # Browse Events
    ├── event-detail.html    # Event Details
    ├── booking.html         # Booking / Checkout
    ├── login.html / register.html
    ├── my-tickets.html      # User's bookings
    ├── admin.html           # Event management
    ├── css/style.css
    └── js/
        ├── api.js
        └── main.js
```

## Team

| Name | Focus Area |
|---|---|
| Pankaj | UI & Design System |
| Parv Jain | Core Pages |
| Pranav Tiwari | Data & Integration |
| Pranjal Tiwari | Structure & Documentation |
