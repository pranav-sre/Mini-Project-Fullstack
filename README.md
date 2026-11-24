# 🎟️ Eventra: Event Management & Ticket Booking Platform

> Discover events, book tickets in a few clicks, and manage everything from an admin dashboard. It is built with plain HTML, CSS and JavaScript, with no framework and no custom backend.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript&logoColor=black)
![json-server](https://img.shields.io/badge/API-json--server-4F46E5)

**B.Tech CSE (3rd Year) mini project, Group 10, GLA University, Mathura**
Supervised by **Mr. Yash Singh**

---

## 📖 About

Eventra lets users browse concerts, stand-up shows, EDM nights and tech summits, view event details, book tickets and see their bookings. Admins get a dashboard to add, edit and delete events and to track bookings and revenue.

The project is frontend-focused. All data storage and the REST API come from [`json-server`](https://github.com/typicode/json-server), which serves `db.json` over HTTP.

## ✨ Features

| Area | What you can do |
|---|---|
| 🏠 **Home** | Hero search, featured and trending events, category tiles, scroll animations |
| 🔎 **Browse & search** | List all events, filter by category (`?cat=`), search by artist, venue or keyword (`?q=`) |
| 📄 **Event details** | Full description, date, time, venue, price and seat info |
| 🎫 **Booking** | Login-protected booking form with attendee details and 1–4 tickets, with a live total price |
| 💳 **Payment** | UPI and Card payment screen, then ticket creation |
| 🧾 **My Tickets** | Each user sees only their own passes |
| 🔐 **Auth** | Signup and login on one page; the navbar shows the logged-in user and logout |
| 🛠️ **Admin panel** | Dashboard stats (events, tickets sold, revenue), bookings table, full event CRUD. Visible only to emails listed in `adminUsers` |

## 🧰 Tech Stack

- **Frontend:** HTML5, CSS3 (custom design system), vanilla JavaScript (ES6+)
- **API / database:** `json-server` (`db.json`)
- **Communication:** Fetch API
- **Tooling:** Node.js and npm (only to run json-server), Git and GitHub

## 📁 Project Structure

```
Mini-Project-Fullstack/
├── db.json                 # Mock database (events, users, adminUsers, tickets)
├── package.json            # npm scripts and json-server dependency
├── README.md
├── CONTRIBUTING.md
└── frontend/
    ├── index.html          # Home page
    ├── events.html         # Browse / search / filter events
    ├── event-detail.html   # Single event page
    ├── booking.html        # Attendee details + quantity
    ├── payment.html        # UPI / Card payment
    ├── my-tickets.html     # User's booked tickets
    ├── login.html          # Login + Signup
    ├── admin.html          # Admin dashboard
    ├── css/
    │   ├── style.css       # Global design system
    │   └── home.css        # Home page styles
    └── js/
        ├── api.js          # All API helpers + navbar/auth sync
        └── home.js         # Home page behaviour
```

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) 16 or newer
- A modern browser
- Git

### 1. Clone and install
```bash
git clone https://github.com/pranav-sre/Mini-Project-Fullstack.git
cd Mini-Project-Fullstack
npm install
```

### 2. Start the API
```bash
npm start
```
This runs `json-server --watch db.json --port 3000`. The API is now live at **http://localhost:3000**.

### 3. Open the frontend
Open `frontend/index.html` in your browser. You can also serve the folder, for example with the VS Code *Live Server* extension or `npx serve frontend`.

> ⚠️ Keep `npm start` running while you use the site. Every page fetches from `http://localhost:3000`.

## 🔌 API Endpoints

| Method | Endpoint | Used for |
|---|---|---|
| GET | `/events`, `/events/:id` | Listing and event details |
| POST / PUT / DELETE | `/events`, `/events/:id` | Admin event management |
| GET / POST | `/users` | Login check and signup |
| GET | `/adminUsers` | Admin email verification |
| GET / POST | `/tickets` | My Tickets, bookings and admin stats |

## 🔄 User Flow

```
Home → Browse Events → Event Details → Login → Booking → Payment → My Tickets
                                                      ↘ Admin (event CRUD, bookings, revenue)
```

## 👥 Team & Responsibilities

| Member | Roll No. | Modules |
|---|---|---|
| **Pranav Tiwari** | 2415001140 | Home page, Admin dashboard, JavaScript (`api.js`, `home.js`) |
| **Pranjal Tiwari** | 2415001143 | Events, Event details, CSS (`style.css`) |
| **Parv Jain** | 2415001094 | Booking, My Tickets, `db.json` |
| **Pankaj** | 2415001086 | Payment, Login / Signup |

## 🌿 Git Workflow

We follow a three-level branching strategy:

```
main        → final stable version (never push directly)
 └── dev    → integration & testing
      └── feature/*  → one branch per member/task
```

1. `git switch dev && git pull origin dev`
2. `git switch -c feature/<name>`
3. Commit small, meaningful changes and `git push -u origin feature/<name>`
4. Open a Pull Request **feature → dev** and get at least one review
5. After testing on `dev`, open one final Pull Request **dev → main**

See [CONTRIBUTING.md](CONTRIBUTING.md) for the full guide.

## 🔮 Future Improvements

- Real-time seat tracking that decrements on booking and blocks sold-out events
- Hashed passwords and token-based authentication with a real backend
- Input validation and a payment gateway integration
- Ticket cancellation, QR-code passes and email confirmation
- Hiding or archiving events that have already passed

## 📄 License

This project was created for academic purposes at GLA University, Mathura.

---

<p align="center">Made with ❤️ by Group 10, GLA University</p>
