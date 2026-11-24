const API_BASE = 'http://localhost:3000';

async function fetchEvents() {
  try {
    const res = await fetch(API_BASE + '/events');
    return await res.json();
  } catch (err) {
    console.error('Error fetching events:', err);
    return [];
  }
}

async function fetchEventById(id) {
  try {
    const res = await fetch(API_BASE + '/events/' + id);
    return await res.json();
  } catch (err) {
    console.error('Error fetching event details:', err);
    return null;
  }
}

async function bookTicket(ticketData) {
  try {
    const res = await fetch(API_BASE + '/tickets', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(ticketData)
    });
    return await res.json();
  } catch (err) {
    console.error('Error booking ticket:', err);
    return null;
  }
}

async function fetchMyTickets() {
  try {
    const res = await fetch(API_BASE + '/tickets');
    return await res.json();
  } catch (err) {
    console.error('Error fetching tickets:', err);
    return [];
  }
}

async function createEvent(eventData) {
  try {
    const res = await fetch(API_BASE + '/events', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(eventData)
    });
    return await res.json();
  } catch (err) {
    console.error('Error creating event:', err);
    return null;
  }
}

async function updateEvent(id, eventData) {
  try {
    const res = await fetch(API_BASE + '/events/' + id, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(eventData)
    });
    return await res.json();
  } catch (err) {
    console.error('Error updating event:', err);
    return null;
  }
}

async function deleteEvent(id) {
  try {
    const res = await fetch(API_BASE + '/events/' + id, {
      method: 'DELETE'
    });
    return await res.ok;
  } catch (err) {
    console.error('Error deleting event:', err);
    return false;
  }
}

async function verifyAdminEmail(email) {
  try {
    const res = await fetch(API_BASE + '/adminUsers');
    const users = await res.json();
    return users.some(u => u.email.toLowerCase() === email.toLowerCase());
  } catch (err) {
    console.error('Error verifying admin email:', err);
    return false;
  }
}

// Global Auth & Navbar Sync on Page Load
// Global Auth & Navbar Sync on Page Load
document.addEventListener("DOMContentLoaded", async () => {
  const currentUser = JSON.parse(sessionStorage.getItem('eventra_current_user'));
  const adminNavLink = document.getElementById('adminNavLink');
  const authContainer = document.getElementById('authNavContainer');

  if (currentUser && authContainer) {
    // Check if user email is in admin list
    const isAdmin = await verifyAdminEmail(currentUser.email);
    if (isAdmin && adminNavLink) {
      adminNavLink.style.display = 'block';
    }

    authContainer.innerHTML = `
      <div style="display:flex;align-items:center;gap:12px;">
        <span style="font-size:0.9rem;color:var(--text);">👤 <b>${currentUser.name || currentUser.email}</b></span>
        <button id="logoutBtn" class="btn btn-sm btn-outline" style="padding:4px 10px;font-size:0.8rem;">Logout</button>
      </div>
    `;

    document.getElementById('logoutBtn').addEventListener('click', () => {
      sessionStorage.removeItem('eventra_current_user');
      sessionStorage.removeItem('adminEmailAuth');
      window.location.href = 'index.html';
    });
  }
});