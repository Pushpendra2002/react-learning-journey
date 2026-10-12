# ⚛️ React Mastery & Mini-Projects Portfolio

A curated collection of **11 practical React mini-projects** built to explore and master modern React fundamentals, state management, performance optimization hooks, client-side routing, and styling with Tailwind CSS.

[![React](https://img.shields.io/badge/React-19.x-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-Fast_Bundler-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Redux Toolkit](https://img.shields.io/badge/Redux-Toolkit-764ABC?logo=redux&logoColor=white)](https://redux-toolkit.js.org/)
[![React Router](https://img.shields.io/badge/React_Router-SPA_Navigation-CA4245?logo=react-router&logoColor=white)](https://reactrouter.com/)
[![GitHub](https://img.shields.io/badge/GitHub-Pushpendra2002-black?logo=github)](https://github.com/Pushpendra2002)

---

## 📑 Projects Catalog

| # | Project | Description | Core Concepts / Hooks |
|---|---|---|---|
| 01 | [`01vitereact`](./01vitereact) | Context API & Prop-Drilling Demo | `createContext`, `useContext`, Provider pattern |
| 02 | [`02counter`](./02counter) | Interactive Bounded Counter | `useState`, `useCallback`, `useEffect` |
| 03 | [`03tailwindprops`](./03tailwindprops) | Background Color Changer Toolbar | Dynamic style state, Tailwind CSS utility classes |
| 04 | [`04passwordGenerator`](./04passwordGenerator) | Customizable Password Generator | `useCallback`, `useRef`, `useEffect`, Clipboard API |
| 05 | [`contextApi`](./contextApi) | Dark / Light Mode Theme Switcher | Context API, custom hooks (`useTheme`), Tailwind dark class |
| 06 | [`currencyProject`](./currencyProject) | Currency Converter with Live & Offline Rates | Controlled inputs, API fetching, `useCallback`, currency swap |
| 07 | [`props`](./props) | Reusable Component System | Props passing, default values, modular architecture |
| 08 | [`redux-shopping-cart`](./redux-shopping-cart) | Redux Toolkit Shopping Cart | `@reduxjs/toolkit`, `createSlice`, `useDispatch`, `useSelector` |
| 09 | [`RoutersReact`](./RoutersReact) | Multi-Page SPA Navigation | React Router v7 (`createBrowserRouter`, `RouterProvider`, `Link`) |
| 10 | [`stopWatch`](./stopWatch) | Accurate Digital Stopwatch | `useRef` for interval IDs, `setInterval`, unmount cleanup |
| 11 | [`blogAppwrite`](./blogAppwrite) | Full-Stack Blog Starter | Appwrite cloud backend integration starter |

---

## 🛠️ Project Deep Dives

### 1. Context API & Prop Drilling (`01vitereact`)
* Demonstrates how the Context API solves the prop-drilling problem across multi-level component trees (`App` ➔ `ChildA` ➔ `ChildB` ➔ `ChildC`).
* **Key Takeaway**: Consumers can access context state anywhere in the tree using `useContext` without passing props manually.

### 2. Counter Application (`02counter`)
* A counter with min (`0`) and max (`20`) boundary guards.
* Explores hook lifecycle behaviors with `useCallback` for function memoization and `useEffect` for side effects.

### 3. Background Color Changer (`03tailwindprops`)
* An interactive toolbar with 8 color presets that dynamically changes the application viewport background.
* Explores inline style state binding and Tailwind CSS positioning.

### 4. Password Generator (`04passwordGenerator`)
* Generates secure randomized passwords with custom length controls (6–100 chars), numbers inclusion, and special characters.
* Implements `useRef` for clipboard copy interaction (`passwordRef.current?.select()`) and `useCallback` for optimized generation.

### 5. Theme Switcher (`contextApi`)
* A complete light and dark theme toggler following production patterns:
  * Centralized context in `theme.js` exposing `themeMode`, `lightTheme()`, and `darkTheme()`.
  * Direct DOM synchronization by toggling the `dark` class on the `<html>` document root.

### 6. Currency Converter (`currencyProject`)
* Converts values between popular world currencies (`USD`, `INR`, `EUR`, `GBP`, `JPY`, `AUD`, `CAD`).
* Fetches live exchange rates with an automatic fallback rate matrix for offline usage.
* Supports bidirectional currency swapping with reactive state calculation.

### 7. Reusable Card & Props (`props`)
* Showcases component reusability with customizable props (`btnText`, `content`) and default fallback values.

### 8. Redux Toolkit Shopping Cart (`redux-shopping-cart`)
* A full-featured shopping cart implemented using modern Redux Toolkit best practices:
  * Store configured with `configureStore`.
  * Cart slice created with `createSlice` managing `items` state.
  * Implements actions: `addToCart`, `removeFromCart`, `increaseQuantity`, and `decreaseQuantity`.

### 9. Client-Side Routing (`RoutersReact`)
* Demonstrates single-page navigation using React Router v7:
  * Declarative routing with `createBrowserRouter` and `RouterProvider`.
  * Navigation bar with routes for Home, About, and Dashboard without page reloads.

### 10. Digital Stopwatch (`stopWatch`)
* A stopwatch featuring Start, Stop, and Reset controls.
* Uses `useRef` to hold interval references across renders without causing unnecessary re-renders.
* Guards against interval stacking and cleans up listeners upon component unmounting.

---

## 🚀 How to Run Any Project Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Pushpendra2002/<repository-name>.git
   cd <repository-name>
   ```

2. **Navigate to any mini-project folder:**
   ```bash
   cd 04passwordGenerator
   # or
   cd redux-shopping-cart
   # or
   cd currencyProject
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Start the local development server:**
   ```bash
   npm run dev
   ```

5. **Build for production:**
   ```bash
   npm run build
   ```

---

## 🧠 Core React Concepts Covered

* **State & Hooks**: `useState`, `useEffect`, `useCallback`, `useRef`, `useContext`
* **Global State Management**: Redux Toolkit (`createSlice`, `configureStore`, `useDispatch`, `useSelector`)
* **Routing**: React Router (`createBrowserRouter`, `RouterProvider`, `NavLink`)
* **Styling**: Tailwind CSS v4, dynamic class bindings, modern responsive layouts
* **Clean Code**: Modular components, separated concerns, performance memoization

---

## 👤 Author

* **Pushpendra** - [GitHub: @Pushpendra2002](https://github.com/Pushpendra2002)
