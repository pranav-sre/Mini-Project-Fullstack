# 🎟️ Eventra

**Event Management & Ticket Booking Platform**

Eventra is a web application for discovering events and booking tickets online, with an admin dashboard for managing the event catalog. It is built with HTML, CSS and vanilla JavaScript on the frontend, backed by [json-server](https://github.com/typicode/json-server) as a lightweight mock REST API.

> Mini project for the Full Stack course, built by a team of 4 using a Git feature-branch and pull-request workflow.

---

## 📌 Table of Contents

- [Features](#-features)
- [Project Status](#-project-status)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Demo Accounts](#-demo-accounts)
- [API Endpoints](#-api-endpoints)
- [Project Structure](#-project-structure)
- [Pages](#-pages)
- [Git Workflow](#-git-workflow)
- [Team](#-team)
- [Roadmap](#-roadmap)

---

## ✨ Features

- Browse upcoming events by category
- Detailed event pages with date, venue, price and seat information
- Ticket booking and payment flow for each event
- User registration and login
- "My Tickets" page showing a user's bookings
- Admin dashboard with sales stats and an event list
- Responsive layout (CSS Grid, Flexbox and a mobile navigation toggle)

## 🚦 Project Status

This is a work in progress. Current state:

| Area | Status |
|---|---|
| Frontend UI for all pages | ✅ Done |
| REST API (json-server) with 6 sample events | ✅ Done |
| Login and Register connected to the API | ✅ Done |
| Browse, Booking, Payment, My Tickets, Admin loading live data from the API | 🔧 In progress (currently static UI) |
| Admin Add / Edit / Delete events | 🔧 Planned |
| Admin-only access check | 🔧 Planned |

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | HTML5, CSS3 (variables, Grid, Flexbox), JavaScript (ES6+, Fetch API, async/await) |
| API & Data | [json-server](https://github.com/typicode/json-server) v0.17 with `db.json` |
| Session | Browser `localStorage` |
| Version Control | Git and GitHub (feature branches + pull requests) |

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or newer) and npm
- Git
- A modern browser (VS Code Live Server is recommended)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/pranav-sre/Mini-Project-Fullstack.git
cd Mini-Project-Fullstack

# 2. Install dependencies
npm install

# 3. Start the API server
npm start
```

The API now runs at **http://localhost:3000**.

### Open the frontend

Open `frontend/index.html` in your browser, or right-click it in VS Code and choose **Open with Live Server**.

> Keep the `npm start` terminal running while you use the site. Pages that fetch data need the API to be up.

## 🔑 Demo Accounts

These are sample accounts stored in `db.json` for development only.

| Role | Email | Password |
|---|---|---|
| User | `demo@eventra.com` | `demo123` |
| Admin | `admin@eventra.com` | `admin123` |

> ⚠️ Passwords are stored in plain text because this is a mock API. A real backend would hash passwords and use token-based authentication.

## 🔌 API Endpoints

json-server generates REST endpoints automatically from the top-level keys in `db.json`.

| Method | Endpoint | Description |
|---|---|---|
| GET | `/events` | List all events |
| GET | `/events/:id` | Get a single event (e.g. `/events/evt001`) |
| GET | `/events?category=Music` | Filter events by category |
| POST | `/events` | Create an event |
| PATCH | `/events/:id` | Update fields of an event |
| DELETE | `/events/:id` | Delete an event |
| GET | `/users?email=...` | Look up a user (used by login) |
| POST | `/users` | Register a new user |
| GET / POST | `/bookings` | List or create bookings |

The frontend helpers live in [`frontend/js/api.js`](frontend/js/api.js): `apiGet`, `apiPost`, `apiPatch` and `apiDelete`.

## 📁 Project Structure

```
Mini-Project-Fullstack/
├── .github/                      # Issue and PR templates
├── db.json                       # Events, bookings and users (mock database)
├── package.json                  # Scripts and dependencies
├── CONTRIBUTING.md               # Branching and PR rules
├── README.md
└── frontend/
    ├── index.html                # Home page
    ├── events.html               # Browse events
    ├── event-detail.html         # Event details
    ├── event-detail-evt001..006.html
    ├── booking.html              # Booking
    ├── booking-evt001..006.html
    ├── payment-evt001..006.html  # Payment
    ├── login.html
    ├── register.html
    ├── my-tickets.html           # User's tickets
    ├── admin.html                # Admin dashboard
    ├── css/
    │   └── style.css             # Global styles and design tokens
    └── js/
        ├── api.js                # API helpers and session functions
        └── main.js               # Navbar toggle and URL helper
```

## 📄 Pages

| Page | Purpose |
|---|---|
| `index.html` | Landing page with hero, categories and featured events |
| `events.html` | Browse all events |
| `event-detail-evtXXX.html` | Details for one event |
| `booking-evtXXX.html` | Select tickets for an event |
| `payment-evtXXX.html` | Payment step for an event |
| `my-tickets.html` | Tickets booked by the logged-in user |
| `login.html` / `register.html` | Authentication |
| `admin.html` | Admin dashboard |

## 🌿 Git Workflow

We follow the rules in [CONTRIBUTING.md](CONTRIBUTING.md).

```
main   ← stable, receives changes only from dev via the final PR
 └── dev   ← integration branch
      └── feature/<name>   ← one branch per feature, merged into dev through a PR
```

1. Branch from the latest `dev`: `git switch -c feature/<name>`
2. Make small, meaningful commits.
3. Push the branch and open a pull request with **base `dev`**.
4. Another team member reviews and approves.
5. Merge with **"Create a merge commit"** so every member's commits are preserved.
6. Never push directly to `main` or `dev`, and never force-push shared branches.

## 👥 Team

| Name | Contribution |
|---|---|
| **Pranav Tiwari** | Project base (home page, `style.css`, JS files, `db.json`, setup) and Admin dashboard |
| **Pankaj** | Browse events and event details pages |
| **Parv Jain** | Booking pages and My Tickets |
| **Pranjal Tiwari** | Payment pages, Register and Login |

## 🗺️ Roadmap

- [ ] Load events from the API on the Browse and Home pages
- [ ] Save bookings to `/bookings` and show them in My Tickets
- [ ] Update `bookedSeats` and show live seat availability
- [ ] Admin dashboard: real stats plus Add / Edit / Delete events
- [ ] Admin-only route protection
- [ ] Replace json-server with Node.js, Express and a real database
- [ ] Hash passwords and use JWT authentication

## 📜 License

This project is for educational purposes.
