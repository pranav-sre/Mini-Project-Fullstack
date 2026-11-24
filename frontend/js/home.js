/* =============================================================
   Eventra — Home page behaviour
   - renders featured / trending events
   - lightweight scroll + hover motion (no libraries)
   ============================================================= */

(function () {
  'use strict';

  /* Used only when json-server is not running, so the page still looks complete. */
  var FALLBACK_EVENTS = [
    {
      id: 'evt001',
      title: 'Arijit Singh Live — India Tour 2026',
      category: 'music',
      categoryDisplay: 'Music & Concerts',
      catShort: 'Live Concert',
      date: 'Nov 15, 2026',
      time: '07:00 PM',
      venue: 'JLN Stadium, New Delhi',
      priceDisplay: '₹1,499',
      image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'evt002',
      title: 'Sunburn Arena — NYE Festival 2026',
      category: 'edm',
      categoryDisplay: 'Electronic Music',
      catShort: 'EDM Night',
      date: 'Dec 31, 2026',
      time: '08:00 PM',
      venue: 'Vagator Beach, Goa',
      priceDisplay: '₹2,499',
      image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'evt003',
      title: 'A.R. Rahman Live Symphony',
      category: 'music',
      categoryDisplay: 'Classical & Fusion',
      catShort: 'Symphony',
      date: 'Dec 05, 2026',
      time: '06:30 PM',
      venue: 'D.Y. Patil Stadium, Mumbai',
      priceDisplay: '₹1,999',
      image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80'
    }
  ];

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function esc(value) {
    return String(value == null ? '' : value).replace(/[&<>"']/g, function (ch) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch];
    });
  }

  function cityOf(venue) {
    if (!venue) return '';
    var parts = String(venue).split(',');
    return (parts.length > 1 ? parts[parts.length - 1] : parts[0]).trim();
  }

  /* ---------- Reveal on scroll ---------- */
  function initReveal() {
    var items = document.querySelectorAll('.reveal:not(.is-visible)');

    if (!('IntersectionObserver' in window) || reduceMotion) {
      items.forEach(function (el) { el.classList.add('is-visible'); });
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -40px 0px', threshold: 0.08 });

    items.forEach(function (el) { observer.observe(el); });
  }

  /* ---------- Animated stat numbers ---------- */
  function animateCount(el, target) {
    if (!el) return;

    if (reduceMotion || !window.requestAnimationFrame) {
      el.textContent = target;
      return;
    }

    var duration = 1100;
    var start = null;

    function step(timestamp) {
      if (start === null) start = timestamp;
      var progress = Math.min((timestamp - start) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(target * eased);
      if (progress < 1) window.requestAnimationFrame(step);
    }

    window.requestAnimationFrame(step);
  }

  /* ---------- Data rendering ---------- */
  function renderTrending(events) {
    var grid = document.getElementById('trendingGrid');
    if (!grid) return;

    var topEvents = events.slice(0, 3);

    grid.innerHTML = topEvents.map(function (ev, index) {
      return [
        '<article class="ticket-card reveal" style="--reveal-delay:', index * 90, 'ms">',
          '<div class="tc-main">',
            '<div class="img-wrapper">',
              '<a href="event-detail.html?id=', esc(ev.id), '"><img src="', esc(ev.image), '" alt="', esc(ev.title), '" loading="lazy"></a>',
              '<span class="category-badge">', esc(ev.catShort || 'Live'), '</span>',
              '<span class="date-chip">', esc(ev.date), '</span>',
            '</div>',
            '<div class="tc-body">',
              '<div class="tc-category">', esc(ev.categoryDisplay || ev.category), '</div>',
              '<h3><a href="event-detail.html?id=', esc(ev.id), '">', esc(ev.title), '</a></h3>',
              '<div class="tc-meta">',
                '<div>🗓 ', esc(ev.date), ' · ', esc(ev.time), '</div>',
                '<div>📍 ', esc(ev.venue), '</div>',
              '</div>',
              '<div class="tc-footer">',
                '<div class="tc-price">', esc(ev.priceDisplay || ('₹' + ev.price)), ' <small>/ ticket</small></div>',
                '<a href="booking.html?id=', esc(ev.id), '" class="btn btn-primary btn-sm">Book now</a>',
              '</div>',
            '</div>',
          '</div>',
        '</article>'
      ].join('');
    }).join('');
  }

  function updateFeatured(event) {
    if (!event) return;

    var image = document.getElementById('featuredImage');
    var title = document.getElementById('featuredTitle');
    var venue = document.getElementById('featuredVenue');
    var price = document.getElementById('featuredPrice');
    var link = document.getElementById('featuredLink');

    if (image && event.image) { image.src = event.image; image.alt = event.title || 'Featured event'; }
    if (title && event.title) title.textContent = event.title;
    if (venue && event.venue) venue.textContent = '📍 ' + event.venue;
    if (price) price.innerHTML = esc(event.priceDisplay || ('₹' + event.price)) + ' <small>/ onward</small>';
    if (link && event.id) link.href = 'event-detail.html?id=' + encodeURIComponent(event.id);
  }

  function updateStats(events) {
    var cities = {};
    var categories = {};

    events.forEach(function (ev) {
      var city = cityOf(ev.venue);
      if (city) cities[city] = true;
      if (ev.category) categories[ev.category] = true;
    });

    animateCount(document.querySelector('[data-stat="events"]'), events.length);
    animateCount(document.querySelector('[data-stat="categories"]'), Object.keys(categories).length);
    animateCount(document.querySelector('[data-stat="cities"]'), Object.keys(cities).length);

    document.querySelectorAll('[data-cat-count]').forEach(function (el) {
      var count = events.filter(function (ev) { return ev.category === el.getAttribute('data-cat-count'); }).length;
      el.textContent = count ? count + (count === 1 ? ' event' : ' events') : 'Browse shows';
    });
  }

  /* ---------- Navigation, progress, search ---------- */
  function initNav() {
    var nav = document.getElementById('siteNav');
    var toggle = document.getElementById('navToggle');
    var progress = document.getElementById('scrollProgress');
    if (!nav) return;

    function closeMenu() {
      nav.classList.remove('nav-open');
      if (toggle) {
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', 'Open menu');
      }
    }

    if (toggle) {
      toggle.addEventListener('click', function () {
        var open = nav.classList.toggle('nav-open');
        toggle.setAttribute('aria-expanded', String(open));
        toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      });

      nav.querySelectorAll('.nav-links a').forEach(function (link) {
        link.addEventListener('click', closeMenu);
      });

      document.addEventListener('click', function (e) {
        if (nav.classList.contains('nav-open') && !nav.contains(e.target)) closeMenu();
      });

      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') closeMenu();
      });

      window.addEventListener('resize', function () {
        if (window.innerWidth > 760) closeMenu();
      });
    }

    var ticking = false;

    function onScroll() {
      var max = document.documentElement.scrollHeight - window.innerHeight;
      var pct = max > 0 ? (window.scrollY / max) * 100 : 0;
      if (progress) progress.style.width = pct + '%';
      nav.classList.toggle('is-scrolled', window.scrollY > 8);
      ticking = false;
    }

    window.addEventListener('scroll', function () {
      if (!ticking) {
        window.requestAnimationFrame(onScroll);
        ticking = true;
      }
    }, { passive: true });

    onScroll();
  }

  function initSearch() {
    var form = document.getElementById('heroSearch');
    if (!form) return;

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var q = (document.getElementById('searchInput').value || '').trim();
      var cat = (document.getElementById('searchCategory').value || '').trim();
      var params = new URLSearchParams();

      if (q) params.set('q', q);
      if (cat) params.set('cat', cat);

      var query = params.toString();
      window.location.href = 'events.html' + (query ? '?' + query : '');
    });
  }

  /* ---------- Boot ---------- */
  document.addEventListener('DOMContentLoaded', function () {
    initNav();
    initSearch();

    var events = [];
    if (typeof fetchEvents === 'function') {
      events = fetchEvents() || [];
    }

    if (events && typeof events.then === 'function') {
      events.then(function (list) {
        var data = (list && list.length) ? list : FALLBACK_EVENTS;
        renderTrending(data);
        updateFeatured(data[0]);
        updateStats(data);
        initReveal();
      });
    } else if (events && events.length) {
      renderTrending(events);
      updateFeatured(events[0]);
      updateStats(events);
      initReveal();
    } else {
      renderTrending(FALLBACK_EVENTS);
      updateFeatured(FALLBACK_EVENTS[0]);
      updateStats(FALLBACK_EVENTS);
      initReveal();
    }

    /* Reveal static sections even while data is loading. */
    initReveal();
  });
})();
