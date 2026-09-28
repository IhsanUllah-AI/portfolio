/**
 * Ihsan Ullah - Portfolio Main JavaScript
 * Handles dynamic rendering, filters, smooth animations, scrollspy, and interactivity.
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  renderProjects('all');
  initFilterButtons();
  initScrollAnimations();
  initScrollSpy();
  initCopyButtons();
  initContactForm();
  initRequestDetailsButton();
  initSkillsToggle();
  initExperienceBullets();
  initYear();
});

/**
 * 1. Navbar Scroll & Mobile Menu Toggle
 */
function initNavbar() {
  const header = document.getElementById('header');
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const mobileNav = document.getElementById('mobile-nav');
  const mobileLinks = document.querySelectorAll('.mobile-link');

  // Sticky header background
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Mobile menu toggle
  if (mobileToggle && mobileNav) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = mobileNav.classList.toggle('open');
      mobileToggle.setAttribute('aria-expanded', String(isOpen));
      const icon = mobileToggle.querySelector('i');
      if (icon) {
        icon.className = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
      }
    });

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileNav.classList.remove('open');
        mobileToggle.setAttribute('aria-expanded', 'false');
        const icon = mobileToggle.querySelector('i');
        if (icon) icon.className = 'fa-solid fa-bars';
      });
    });
  }
}

/**
 * 2. Render Project Cards Dynamically
 */
function renderProjects(filterCategory = 'all') {
  const grid = document.getElementById('projects-grid');
  if (!grid || typeof projectsData === 'undefined') return;

  const filtered = filterCategory === 'all' 
    ? projectsData 
    : projectsData.filter(p => p.category === filterCategory);

  grid.innerHTML = '';

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 40px; color: var(--text-secondary);">
        <i class="fa-solid fa-folder-open" style="font-size: 2rem; margin-bottom: 12px; color: var(--accent-blue-primary);"></i>
        <p>No projects found in this category yet.</p>
      </div>
    `;
    return;
  }

  filtered.forEach((project, index) => {
    const card = document.createElement('div');
    card.className = 'glass-card project-card reveal-on-scroll';
    card.style.animationDelay = `${index * 100}ms`;

    const keyPointsHtml = project.keyPoints && project.keyPoints.length > 0
      ? `<ul class="project-keypoints">
          ${project.keyPoints.map(kp => `<li><i class="fa-solid fa-circle-check"></i> <span>${kp}</span></li>`).join('')}
        </ul>`
      : '';

    const techTagsHtml = project.techStack && project.techStack.length > 0
      ? `<div class="project-tech-tags">
          ${project.techStack.map(t => `<span class="tech-tag">${t}</span>`).join('')}
        </div>`
      : '';

    const confidentialNoticeHtml = project.isConfidential && project.confidentialNotice
      ? `<div class="nda-notice-box"><i class="fa-solid fa-shield-halved"></i> <span>${project.confidentialNotice}</span></div>`
      : '';

    const actionsHtml = project.isConfidential
      ? `<div class="project-actions">
          <span class="btn btn-nda" title="Proprietary codebase">
            <i class="fa-solid fa-lock"></i> Confidential Project
          </span>
          <a href="#contact" class="btn btn-secondary btn-sm" title="Contact for technical inquiries">
            <i class="fa-solid fa-envelope"></i> Inquire
          </a>
        </div>`
      : `<div class="project-actions">
          <a href="${project.githubUrl || 'https://github.com/Ihsanullah-AI'}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm" title="View Source on GitHub">
            <i class="fa-brands fa-github"></i> GitHub Repo
          </a>
          ${project.liveUrl && project.liveUrl !== project.githubUrl ? `
            <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm" title="Live Demo / Deployment">
              <i class="fa-solid fa-arrow-up-right-from-square"></i> Demo
            </a>
          ` : ''}
        </div>`;

    card.innerHTML = `
      <div class="project-thumb-wrap">
        <img src="${project.image}" alt="${project.title}" class="project-thumb" loading="lazy">
        <span class="${project.isConfidential ? 'nda-badge-pill' : 'project-badge-pill'}">
          ${project.isConfidential ? '<i class="fa-solid fa-lock"></i> ' : ''}${project.badge}
        </span>
      </div>
      <div class="project-body">
        <h3 class="project-title">${project.title}</h3>
        <p class="project-desc is-clamped">${project.description}</p>
        ${confidentialNoticeHtml}
        ${keyPointsHtml ? `<div class="project-details">${keyPointsHtml}</div>` : ''}
        ${keyPointsHtml ? `
          <button type="button" class="project-details-toggle" aria-expanded="false">
            <i class="fa-solid fa-chevron-down"></i> View Full Details
          </button>
        ` : ''}
        ${techTagsHtml}
        ${actionsHtml}
      </div>
    `;

    const detailsToggle = card.querySelector('.project-details-toggle');
    if (detailsToggle) {
      const detailsBox = card.querySelector('.project-details');
      const descEl = card.querySelector('.project-desc');
      detailsToggle.addEventListener('click', () => {
        const isExpanded = detailsBox.classList.toggle('is-expanded');
        descEl.classList.toggle('is-clamped', !isExpanded);
        detailsToggle.setAttribute('aria-expanded', String(isExpanded));
        detailsToggle.innerHTML = isExpanded
          ? '<i class="fa-solid fa-chevron-up"></i> Show Less'
          : '<i class="fa-solid fa-chevron-down"></i> View Full Details';
      });
    }

    grid.appendChild(card);

    // Trigger animation observer on new card
    setTimeout(() => {
      card.classList.add('is-visible');
    }, 50 + index * 80);
  });
}

/**
 * 3. Project Filter Tabs
 */
function initFilterButtons() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const category = btn.getAttribute('data-filter');
      renderProjects(category);
    });
  });
}

/**
 * 4. Intersection Observer for Scroll Animations
 */
function initScrollAnimations() {
  const elements = document.querySelectorAll('.reveal-on-scroll');
  if (!('IntersectionObserver' in window)) {
    elements.forEach(el => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  elements.forEach(el => observer.observe(el));
}

/**
 * 5. ScrollSpy for Active Nav Links
 */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links .nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}

/**
 * 6. Copy to Clipboard Utility with Toast Feedback
 */
function initCopyButtons() {
  const copyBtns = document.querySelectorAll('.copy-btn');
  copyBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const text = btn.getAttribute('data-copy');
      if (!text) return;

      navigator.clipboard.writeText(text).then(() => {
        showToast(`Copied "${text}" to clipboard!`, 'check');
      }).catch(() => {
        showToast(`Could not copy automatically.`, 'triangle-exclamation');
      });
    });
  });
}

/**
 * 7. Contact Form Handling
 */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const subject = form.subject.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      showToast('Please fill out all required fields.', 'triangle-exclamation');
      return;
    }

    const mailtoUri = `mailto:ihsaanullah642@gmail.com?subject=${encodeURIComponent(`[Portfolio Inquiry] ${subject}`)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;

    const submitBtn = form.querySelector('button[type="submit"]');
    const accessKey = form.access_key ? form.access_key.value.trim() : '';

    // If a real Web3Forms access key hasn't been configured yet, fall back to mailto
    if (!accessKey || accessKey === 'YOUR_WEB3FORMS_ACCESS_KEY_HERE') {
      showToast('Opening email client...', 'paper-plane');
      setTimeout(() => {
        window.location.href = mailtoUri;
        form.reset();
      }, 600);
      return;
    }

    if (submitBtn) submitBtn.disabled = true;
    showToast('Sending message...', 'paper-plane');

    try {
      const formData = new FormData(form);
      formData.set('subject', `[Portfolio Inquiry] ${subject}`);

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: formData,
      });
      const result = await response.json();

      if (result.success) {
        showToast('Message sent — I\'ll get back to you soon!', 'circle-check');
        form.reset();
      } else {
        throw new Error(result.message || 'Delivery failed');
      }
    } catch (err) {
      showToast('Delivery failed — opening your email client instead.', 'triangle-exclamation');
      setTimeout(() => {
        window.location.href = mailtoUri;
        form.reset();
      }, 800);
    } finally {
      if (submitBtn) submitBtn.disabled = false;
    }
  });
}

/**
 * 8. Toast Notifications
 */
function showToast(message, icon = 'info') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<i class="fa-solid fa-${icon}"></i> <span>${message}</span>`;
  container.appendChild(toast);

  // Trigger animation
  setTimeout(() => toast.classList.add('show'), 20);

  // Auto remove
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 400);
  }, 3500);
}

/**
 * 9. Request Details Button — scrolls to contact form and pre-fills it
 */
function initRequestDetailsButton() {
  const btn = document.getElementById('request-details-btn');
  const form = document.getElementById('contact-form');
  if (!btn || !form) return;

  btn.addEventListener('click', (e) => {
    e.preventDefault();

    if (form.subject && !form.subject.value.trim()) {
      form.subject.value = 'Request for Detailed CV / Resume';
    }
    if (form.message && !form.message.value.trim()) {
      form.message.value = "Hi Ihsan, I'd like more details about your experience and CV for a potential opportunity. Could you share more information?";
    }

    form.scrollIntoView({ behavior: 'smooth', block: 'center' });
    setTimeout(() => form.name.focus(), 500);
  });
}

/**
 * 10. Skills "View All" Toggle
 */
function initSkillsToggle() {
  const btn = document.getElementById('view-all-skills-btn');
  const container = document.getElementById('skills-container');
  if (!btn || !container) return;

  btn.addEventListener('click', () => {
    const isExpanded = container.classList.toggle('is-expanded');
    btn.setAttribute('aria-expanded', String(isExpanded));
    btn.innerHTML = isExpanded
      ? '<i class="fa-solid fa-chevron-up"></i> Hide Full Skill List'
      : '<i class="fa-solid fa-chevron-down"></i> View All Skills';

    if (isExpanded) {
      container.querySelectorAll('.reveal-on-scroll').forEach(el => el.classList.add('is-visible'));
    }
  });
}

/**
 * 11. Experience "Show More" Bullets — collapses long bullet lists to 3 by default
 */
function initExperienceBullets() {
  const lists = document.querySelectorAll('.timeline-bullets');

  lists.forEach(list => {
    const items = Array.from(list.children);
    if (items.length <= 3) return;

    items.slice(3).forEach(item => item.classList.add('bullet-hidden'));

    const toggleBtn = document.createElement('button');
    toggleBtn.className = 'show-more-bullets-btn';
    toggleBtn.type = 'button';
    toggleBtn.innerHTML = `<i class="fa-solid fa-chevron-down"></i> Show ${items.length - 3} More`;
    toggleBtn.setAttribute('aria-expanded', 'false');

    toggleBtn.addEventListener('click', () => {
      const isExpanded = list.classList.toggle('bullets-expanded');
      items.slice(3).forEach(item => item.classList.toggle('bullet-hidden', !isExpanded));
      toggleBtn.setAttribute('aria-expanded', String(isExpanded));
      toggleBtn.innerHTML = isExpanded
        ? '<i class="fa-solid fa-chevron-up"></i> Show Less'
        : `<i class="fa-solid fa-chevron-down"></i> Show ${items.length - 3} More`;
    });

    list.insertAdjacentElement('afterend', toggleBtn);
  });
}

/**
 * 12. Footer Current Year
 */
function initYear() {
  const yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}
