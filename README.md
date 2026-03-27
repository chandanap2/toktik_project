# TokTik

TokTik is a high-performance, mobile-first, short-form video streaming application inspired by modern social media platforms. It offers a fully functional, self-contained interactive feed with persistent data storage locally directly within the browser ecosystem.

## Features

- **Infinite Scrolling Video Feed**: Native CSS scroll snapping for fluid, app-like vertical video transitions.
- **Rich User Interactions**: Like, bookmark, follow, and share natively tracked and persisted using robust Context-driven abstractions.
- **Dynamic Asynchronous Comments**: Interact with active video comment threads in a sleek bottom-sheet UI overlay.
- **Real-time Optimistic Search**: Debounced client-side queries spanning dynamically seeded accounts instantaneously.
- **Smart Media Management**: Out-of-bounds explicit video pre-loading (sliding-window buffer logic) handling 3G vs 4G constraint rules organically without external libraries.
- **Interactive Scrubber**: Responsive timestamp dragging mapped accurately above safe-area layout guides safely avoiding iOS gesture conflicts.
- **Haptic Feedback**: Custom-built fallback patterns mapping precise tactile `.vibrate()` responses on native devices cleanly.

## Tech Stack
* **Vite + React 18**: Chosen for incredible hot-module replacement (HMR) speeds and robust, modular component structures.
* **React Router v6**: Explicit route mappings navigating deeply between profiles, saved endpoints, and recursive search inputs securely.
* **Tailwind CSS v3**: Atomic, utility-class structural styling natively extending `.dvh` (Dynamic Viewport Height) logic, strict mobile touch boundaries (`touch-pan-y`), and precise keyframe abstractions (`animate-spring-pop`, `animate-ticker`).
* **Dexie.js (IndexedDB)**: Replaces traditional backend latency. Powers our `profiles`, `videos`, `interactions`, and `comments` table architectures via strongly typed asynchronous schemas, resolving UI states predictably globally.
* **Lucide React**: Clean, scalable, lightweight SVG iconography across the entire design system seamlessly.

## Running Locally

Because TokTik depends solely on IndexedDB schemas, you never need to launch a separate Postgres/Redis backend! The application intrinsically provisions 5 distinct creators and 8 videos upon mounting instantly seamlessly within `src/db/seed.js` logic.

### Commands

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start the development server**
   ```bash
   npm run dev
   ```

Enjoy scrolling locally mapped directly across port `http://localhost:3000/`.

---
*Built focusing aggressively on mobile-first interaction principles, tokenized CSS environments, and state-of-the-art native browser HTML5 video playback loop logic.*
