# UniCon Frontend

UniCon is a university event and sponsorship management platform. This repository contains the **frontend** of UniCon, built with **Next.js**, **React**, **TypeScript**, and **Tailwind CSS**.

## 🚀 Features

* 🔑 Secure login & signup for financial team members
* 🏢 Sponsor management (view, add, update, delete)
* 📑 Proposal management with budgets, descriptions, and categories
* 📤 Multi-channel communication (Email, WhatsApp, etc.)
* 📊 Dashboard with analytics (sponsors, proposals, revenue)
* 🔔 Notifications for financial team and sponsors
* 🎉 Event management (career fairs, food festivals, etc.)

---

## 🛠️ Tech Stack

* **Frontend:** Next.js 14, React, TypeScript
* **Styling:** Tailwind CSS, ShadCN UI
* **State Management:** React Query / Context API
* **Charts & Analytics:** Recharts

---

## 📂 Project Structure

```
UniCon/
├── src/
│   ├── app/
│   │   ├── globals.css       # Global styles
│   │   ├── layout.tsx        # Root layout
│   │   ├── page.tsx          # Landing page (Home)
│   │   ├── dashboard/        # Dashboard pages
│   │   ├── sponsors/         # Sponsor management pages
│   │   ├── proposals/        # Proposal management pages
│   │   ├── events/           # Event management pages
│   │   ├── notifications/    # Notifications page
│   │   └── api/              # API routes (if any)
│   │
│   ├── components/           # Reusable UI components
│   │   ├── ui/               # ShadCN UI components
│   │   ├── Navbar.tsx
│   │   ├── Sidebar.tsx
│   │   ├── Layout.tsx
│   │   └── forms/            # Forms for sponsors/proposals
│   │
│   ├── lib/                  # Utility functions & API clients
│   ├── hooks/                # Custom React hooks
│   ├── types/                # TypeScript types & interfaces
│   └── assets/               # Images, icons, static files
│
├── public/                   # Public static assets
├── .gitignore
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

---

## ⚙️ Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/CharukaVithana/UniCon.git
   cd UniCon
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📊 Usage

* **Sponsors:** Manage sponsor profiles, contracts, and status.
* **Proposals:** Create and send proposals to companies with attachments.
* **Events:** Add and track university events with budget & sponsor mapping.
* **Dashboard:** View KPIs and analytics.
* **Notifications:** Get updates about proposals, events, and sponsors.

---

## 🤝 Contributing

1. Fork the repo
2. Create a new branch (`git checkout -b feature-branch`)
3. Commit changes (`git commit -m 'Add new feature'`)
4. Push to branch (`git push origin feature-branch`)
5. Open a Pull Request

---

## 📜 License

This project is licensed under the MIT License.

---

## 📧 Contact

Developed by **Charuka Vithana**
GitHub: [CharukaVithana](https://github.com/CharukaVithana)
