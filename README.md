# SeamlessCal

A full-stack venue scheduling platform and embeddable calendar booking widget engineered for village halls, community centres, and flexible event spaces. SeamlessCal replaces rigid short-interval meeting schedulers with an end-to-end management loop supporting multi-hour time windows, automated contract verification, and payment processing.

---

## Key Architecture & Features

- **Embeddable Booking Widget:** Responsive, zero-dependency widget built with Vue 3 and Tailwind CSS. Supports two primary operational modes:
  - _Fixed-Block Mode:_ Pre-configured intervals for tours, inductions, and recurring classes.
  - _Custom-Interval Mode:_ Dynamic multi-hour and multi-day hire blocks for private events and hall lettings.
- **Venue Operations Hub:** Administrative dashboard managing a 4-stage booking state machine (`Pending` &rarr; `Penciled-In` &rarr; `Confirmed` &rarr; `Past`).
- **Google Calendar API Sync:** Bi-directional synchronization resolving free/busy intervals, provisional holds, and schedule updates.
- **Contract Verification Loop:** Google Forms API integration that verifies signed terms and hire agreements before promoting provisional bookings to confirmed status.
- **Serverless Architecture & Payments:** Firebase Cloud Functions v2 handling backend business logic, combined with Stripe Checkout and webhook lifecycle listeners for deposit collection and SaaS tiers.

---

## Tech Stack

- **Frontend:** Vue 3 (Composition API), Vite, Tailwind CSS, Vue Router, Lucide Icons
- **Backend / Serverless:** Firebase Cloud Functions v2 (Node.js runtime), Firestore, Firebase Authentication
- **Integrations:** Google Calendar API, Google Forms API, Stripe API / Webhooks
- **Tooling:** PostCSS, ESLint, Prettier

---

## Project Structure

```text
seamlesscal/
├── cdn-public/          # Hosted assets for embeddable distribution
├── email-templates/     # Transactional email markup and compiler scripts
├── functions/           # Firebase Cloud Functions v2 (OAuth, Stripe webhooks, calendar sync)
├── public/              # Static demo harnesses and widget test mounts
├── src/
│   ├── assets/          # Base styling and design tokens
│   ├── components/      # UI component library & modular booking views
│   ├── layouts/         # Dashboard and authentication shells
│   ├── views/           # Application route views (Bookings, Settings, Upgrade, etc.)
│   └── firebase.js      # Client SDK initialization and service bindings
├── firestore.rules      # Firestore security rules and validation logic
└── vite.config.js       # Vite configuration and aliases
```
