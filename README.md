# ChatHub 💬

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Privacy First](https://img.shields.io/badge/Privacy-First-0052FF?style=for-the-badge&logo=security&logoColor=white)](#-key-features)

**ChatHub** is a premium, modern, and privacy-first all-in-one messaging client interface. It is designed to unify your communication by bringing all your favorite chat platforms into a single, beautifully crafted web interface, eliminating the need to toggle between multiple apps.

---

## ⚠️ PROPRIETARY NOTICE & USAGE RESTRICTION

> [!CAUTION]
> **UNAUTHORIZED USE & REPLICATION WARNING**
>
> This repository and all its contents are proprietary and strictly confidential. Unauthorized copying, distribution, modification, public display, deployment, or execution of this project is strictly prohibited. 
> 
> Any breach of these terms may result in immediate severe action, including claims for damages and termination of access. Do not use, fork, or host this project without explicit written permission from the owner.

---

## ✨ Key Features

- **🌐 Unified Interface** – Connect and switch between WhatsApp, Facebook Messenger, Instagram, Telegram, and X (Twitter) seamlessly.
- **🔒 Privacy-Focused Architecture** – Conceptualized with end-to-end encryption principles and zero-data tracking.
- **⚡ Responsive Modern Design** – Features custom typography, smooth hover micro-animations, clean layouts, and a dedicated dark theme.
- **🛡️ reCAPTCHA Security Integration** – Built-in bot protection placeholders on the contact forms to prevent spam submissions.
- **🖱️ Interactive Custom Cursor** – Custom dynamic visual elements that track mouse movement for a premium user experience.

---

## 📁 Repository Structure

```text
Chathub/
├── css/                  # Base styling and layout sheets
│   └── Styles.css        # Main page design styles
├── js/                   # Base scripts
│   └── scripts.js        # Home page animations and interactive elements
├── Page/                 # Sub-pages of the website
│   ├── About/            # About page containing mission details
│   ├── Contact/          # Contact page with integrated reCAPTCHA and PHP mailer
│   └── Services/         # Services page outlining platform options
├── img/                  # Images and graphic assets
│   └── chathub2.png      # Application mockup asset
├── Index.html            # Main entrance page
└── README.md             # Project documentation (this file)
```

---

## 🛠️ Getting Started

### Prerequisites

To preview or run the web interface locally, you will need a standard web browser (Chrome, Firefox, Edge, Safari) and a local web server (such as Live Server extension in VS Code or Python's HTTP server) for proper path resolution.

### Local Setup

1. Clone this repository (authorized users only):
   ```bash
   git clone https://github.com/Kokateanand/Chathub.git
   ```
2. Navigate to the project directory:
   ```bash
   cd Chathub
   ```
3. Start your local server and open `Index.html` to view the homepage.

---

## 🛡️ Security Check & Auditing

A security review of this repository has been performed to ensure compliance with best practices:
- **No Hardcoded Credentials**: API keys, specific mailer passwords, and secrets are securely abstracted or represented via generic safety placeholders (e.g., `your key her`).
- **No Personal Identifiable Information (PII)**: No phone numbers, email addresses, or database credentials are exposed in the source code.
