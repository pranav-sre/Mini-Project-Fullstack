// main.js - Runs on every page: builds the navbar auth state + mobile menu toggle.

document.addEventListener("DOMContentLoaded", () => {
  renderNavAuthState();
  const toggle = document.getElementById("navToggle");
  const links = document.getElementById("navLinks");
  if (toggle && links) {
    toggle.addEventListener("click", () => links.classList.toggle("open"));
  }
});

function renderNavAuthState() {
  const slot = document.getElementById("navUserSlot");
  if (!slot) return;
  const user = getCurrentUser();
  if (user) {
    slot.innerHTML = `
      <span class="nav-user">Hi, ${escapeHtml(user.name)}</span>
      <a href="my-tickets.html">My Tickets</a>
      <a href="#" id="logoutLink">Logout</a>
    `;
    document.getElementById("logoutLink").addEventListener("click", (e) => {
      e.preventDefault();
      logoutUser();
    });
  } else {
    slot.innerHTML = `<a href="login.html">Login</a> <a href="register.html">Sign Up</a>`;
  }
}

function formatDate(dateStr) {
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
}

function formatPrice(price) {
  return price === 0 ? "Free" : `₹${price}`;
}

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

function seatsLeft(event) {
  return event.totalSeats - event.bookedSeats;
}

// Builds one ticket-stub style card. Reused on Home + Browse Events pages.
function renderTicketCard(event) {
  const left = seatsLeft(event);
  let badge = `<span class="badge">${left} seats left</span>`;
  if (event.price === 0) badge = `<span class="badge free">Free entry</span>`;
  else if (left <= 15) badge = `<span class="badge low">Only ${left} left</span>`;

  return `
    <a href="event-detail.html?id=${event.id}" class="ticket-card">
      <div class="tc-main">
        <img src="${event.image}" alt="${escapeHtml(event.title)}">
        <div class="tc-body">
          <div class="tc-category">${escapeHtml(event.category)}</div>
          <h3>${escapeHtml(event.title)}</h3>
          <div class="tc-meta">
            <div>${formatDate(event.date)} · ${event.time}</div>
            <div>${escapeHtml(event.location)}</div>
          </div>
          <div class="tc-footer">
            <div class="tc-price">${formatPrice(event.price)} ${event.price ? "<small>/ ticket</small>" : ""}</div>
            ${badge}
          </div>
        </div>
      </div>
      <div class="tc-stub">ADMIT ONE</div>
    </a>
  `;
}


// ---- ADDITIONS: scroll-reveal + count-up animation ----
document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) { items.forEach(el => el.classList.add("visible")); return; }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add("visible"); io.unobserve(en.target); } });
  }, { threshold: 0.15 });
  items.forEach(el => io.observe(el));
});

// Animates a number from 0 to `target` inside element `el`.
function countUp(el, target, duration = 1200) {
  if (!el) return;
  const start = performance.now();
  function tick(now) {
    const p = Math.min((now - start) / duration, 1);
    el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3)));
    if (p < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}
