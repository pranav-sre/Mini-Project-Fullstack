# Eventra

**Event Management & Ticket Booking Platform**

Eventra is a web application for discovering events and booking tickets online, with an admin dashboard for managing the event catalog. Built with a frontend-first architecture — HTML, CSS, and vanilla JavaScript — backed by [json-server](https://github.com/typicode/json-server) as a lightweight REST API.

---

## Table of Contents

- [Features](#features)
- [Architecture](#architecture)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [API Reference](#api-reference)
- [Team](#team)
- [Contributing](#contributing)

---

## Features

- Browse and search upcoming events by category or location
- View detailed event information with live seat availability
- Book tickets with instant confirmation and a generated ticket ID
- User accounts with personal booking history
- Admin dashboard for managing events and monitoring bookings

---

## Architecture

Eventra follows a simple client-server architecture. The browser is the only
custom-built layer; json-server generates a complete REST API directly from
`db.json`, so there is no custom backend code to maintain.
