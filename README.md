# TokTik

**Live Demo: Experience the app yourself** [https://toktikproject-production.up.railway.app](https://toktikproject-production.up.railway.app)

TokTik is a high-performance, mobile-first, short-form video streaming application inspired by modern social media platforms. It offers a fully functional, self-contained interactive feed with a professional level of polish, complete with local persistent data storage directly within the browser ecosystem.

## 🌟 Key Features

- **Professional Database Persistence (Dexie.js)**
  Replaces traditional backend latency. Powers our `profiles`, `videos`, `interactions`, and `comments` table architectures via strongly typed asynchronous schemas, resolving UI states predictably globally. The application intrinsically provisions dummy creators and videos upon the first launch instantly.
- **Advanced Comment Pre-loading**
  Interact with active video comment threads in a sleek bottom-sheet UI overlay. Comments are pre-loaded and cached seamlessly in the background, replicating the instant-read architecture of professional production apps.
- **Seamless Infinite Scrolling & Looping**
  Native CSS scroll snapping for fluid, app-like vertical video transitions. A clever wrapping mechanism guarantees that the feed accurately loops from the bottom back to the top seamlessly.
- **Smart Media Management**
  Out-of-bounds explicit video pre-loading (sliding-window buffer logic) handling 3G vs 4G constraint rules organically without external libraries.
- **Rich User Interactions**
  Like, bookmark, follow, and share natively tracked and persisted using robust Context-driven abstractions across a localized IndexedDB. 
- **Real-time Optimistic Search**
  Debounced client-side queries spanning dynamically seeded accounts instantaneously.
- **Interactive Custom Scrubber**
  Responsive timestamp dragging mapped accurately above safe-area layout guides safely avoiding iOS gesture conflicts, rendering efficiently at 60 FPS.
- **Haptic Feedback**
  Custom-built fallback patterns mapping precise tactile `.vibrate()` responses on native devices cleanly.

## 🛠️ Tech Stack

* **Vite + React 18**: Chosen for incredible hot-module replacement speeds and robust, modular component structures.
* **React Router v6**: Explicit route mappings navigating deeply between profiles, saved endpoints, and recursive search inputs securely.
* **Tailwind CSS v3**: Atomic, utility-class structural styling natively extending `.dvh` (Dynamic Viewport Height) logic, strict mobile touch boundaries (`touch-pan-y`), and precise keyframe abstractions (`animate-spring-pop`, `animate-ticker`).
* **Dexie.js (IndexedDB)**: Replaces traditional backend latency to manage a fully-fledged local web database.
* **Framer Motion**: Delivers physics-based animations like the custom heart bursts when double-tapping a video.
* **Lucide React**: Clean, scalable, lightweight SVG iconography across the entire design system seamlessly.

---
*Built focusing aggressively on mobile-first interaction principles, tokenized CSS environments, and state-of-the-art native browser HTML5 video playback loop logic.*
