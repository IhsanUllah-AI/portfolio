# Ihsan Ullah — AI Engineer Portfolio Website

A professional, high-performance personal portfolio website built with a dark "Calcite" aesthetic — deep navy base (`#000711`) with cerulean/blue gradient accents (`#0c446b` → `#57a2d5`), glassmorphic cards, animated ambient glows, a neural particle canvas, and fully data-driven project/skill sections.

---

## 🚀 Architecture

- **Frontend**: Vanilla HTML5, CSS3, JavaScript (ES6+) — no build step, no framework.
- **Visuals & Effects**: HTML5 neural particle canvas (`js/particles.js`), CSS backdrop-filter glassmorphism, gradient glow orbs, `IntersectionObserver` scroll reveals, keyboard `:focus-visible` states, and `prefers-reduced-motion` support.
- **Data Configuration**: Projects are fully decoupled into `js/projects.js` — the grid, filters, and cards are rendered dynamically from that array (no HTML editing needed to add/remove a project).
- **Icons & Typography**: Font Awesome 6 + Google Fonts (`Outfit` for headings/body, `JetBrains Mono` for code/badges/dates).
- **Responsive**: Breakpoints at 1024px / 768px / 480px covering desktop, tablet, and phone layouts.

---

## 📁 Directory Structure

```
portfolio_website-main/
├── index.html                     # Main semantic HTML — hero, about, skills, projects, experience, contact
├── css/
│   ├── style.css                  # Design tokens, layout, components, responsive media queries
│   └── animations.css             # Keyframes, glass-card effect, scroll reveals, ambient glow orbs
├── js/
│   ├── projects.js                # Centralized project data array (edit this to add/remove projects)
│   ├── particles.js               # Interactive neural particle background canvas
│   └── script.js                  # Navbar, project rendering/filtering, scrollspy, contact form, toasts
├── assets/
│   ├── images/
│   │   ├── avatar.jpg             # Hero portrait
│   │   ├── recruitment.jpg        # AI Recruitment Screening project preview
│   │   ├── trading.jpg            # Algorithmic Crypto Trading Bot preview
│   │   ├── vision.jpg             # Facial Recognition Attendance preview
│   │   ├── rag.jpg                # Advanced RAG Retrieval Pipeline preview
│   │   ├── multi-tenant-rag.svg   # Multi-Tenant RAG Backend preview (custom diagram)
│   │   ├── graph-crypto.svg       # Neo4j Knowledge Graph Chatbot preview (custom diagram)
│   │   ├── review-nlp.svg         # Fake Review Detection System preview (custom diagram)
│   │   ├── local-doc-pipeline.svg # Local AI Document Pipeline preview (custom diagram)
│   │   ├── youtube-qa.svg         # YouTube Video RAG QA Bot preview (custom diagram)
│   │   └── quran-audio.svg        # Quran Reciter Identification preview (custom diagram)
│   └── cv.pdf                     # Downloadable CV / résumé
└── README.md
```

---

## 🛠️ How to Run Locally

No build tooling required — any static file server works.

### Option 1: VS Code Live Server
1. Open this folder in VS Code.
2. Install the **Live Server** extension.
3. Right-click `index.html` → **"Open with Live Server"**.

### Option 2: Python
```bash
python -m http.server 3000
```
Then visit `http://localhost:3000`.

### Option 3: Node.js
```bash
npx serve .
```

---

## ⚙️ How to Customize

### 1. Projects (`js/projects.js`)
Every project card is driven by this array — no HTML editing needed:

```javascript
{
  id: "my-new-project",
  title: "Project Title",
  category: "ai-rag",           // 'ai-rag' | 'agents' | 'vision' | 'trading'
  badge: "Custom Badge",
  featured: true,
  isConfidential: false,
  description: "Brief summary of what the system accomplishes.",
  keyPoints: [
    "Key feature or technical detail 1",
    "Key feature or technical detail 2"
  ],
  techStack: ["Python", "FastAPI", "Docker"],
  image: "assets/images/your_image.jpg", // or an .svg diagram
  githubUrl: "https://github.com/Ihsanullah-AI/your_repo",
  liveUrl: "https://your-demo-url.com"
}
```
Order in the array = display order in "All Projects". `isConfidential: true` swaps the GitHub/Demo buttons for a locked "Confidential" badge plus an "Inquire" button.

### 2. Skills (`index.html` → `#skills`)
Each `.skill-category-card` holds a `.skills-pill-wrap` of `.skill-tag` pills. Categories are kept balanced (roughly 8–13 tags each) so the grid renders evenly — avoid adding a category with only 1–2 tags, since it will look disproportionately small/large next to fuller cards.

### 3. Experience & Education (`index.html` → `#experience`)
Manually edited `.timeline-item` blocks (not data-driven) — update role, company, dates, and bullet points directly in the markup.

### 4. CV / Résumé
Replace `assets/cv.pdf` with your updated PDF (same filename, or update the `href`/`download` attributes in `index.html`).

### 5. Photo / Portrait
Replace `assets/images/avatar.jpg` with your headshot (portrait crop, min ~460px tall).

### 6. Social & Contact Links
- Email & phone: `index.html` under `#about` and `#contact`.
- GitHub / LinkedIn: `index.html` under the Hero CTA group and the Contact social strip.

---

## ✉️ How the Contact Form Works

The site is fully static (no backend server). The contact form (`#contact-form` in `index.html`, handled in `js/script.js → initContactForm()`) sends messages directly to your inbox using **[Web3Forms](https://web3forms.com)** — a free (250 submissions/month), backend-free form delivery API. No server, no signup beyond an email address, no cost.

### One-time setup (takes ~1 minute)
1. Go to [web3forms.com](https://web3forms.com) and enter your email — no password/account needed.
2. You'll instantly get a free **Access Key** by email.
3. Open `index.html`, find this line inside `#contact-form`:
   ```html
   <input type="hidden" name="access_key" value="YOUR_WEB3FORMS_ACCESS_KEY_HERE">
   ```
4. Replace `YOUR_WEB3FORMS_ACCESS_KEY_HERE` with your real key. That's it — no other changes needed.

### How it behaves
1. Visitor fills in name, email, subject, and message and clicks **Send Message**.
2. JavaScript validates the required fields client-side.
3. It `POST`s the data straight to Web3Forms via `fetch()` — the message lands in your inbox immediately, with **no action required from the visitor** (no email client popup).
4. A hidden `botcheck` field acts as a honeypot for spam bots.
5. **Fallback safety net**: if the access key hasn't been configured yet, or the request fails for any reason (offline, API hiccup), the form automatically falls back to the old `mailto:` behavior — it opens the visitor's own email client pre-filled with their message, so the form never silently breaks.

---

## 🚢 Deployment

Static, zero-build — deploy instantly on:
- **Vercel**: import the GitHub repo or run `vercel` via CLI.
- **Netlify**: drag-and-drop the folder or connect the Git repository.
- **GitHub Pages**: `Repository Settings → Pages → Deploy from Branch → /root`.
