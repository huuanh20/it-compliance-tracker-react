# IT Compliance Tracker — React Version

> **FWD IT Internship Portfolio** · Nguyen Huu Anh · 2026 · **Built with React + Vite**

A React rebuild of the IT Compliance Tracker dashboard — same content, modern component architecture.

**🔗 Live Demo:** [huuanh20.github.io/it-compliance-tracker-react](https://huuanh20.github.io/it-compliance-tracker-react)  
**📄 HTML Version:** [huuanh20.github.io/it-compliance-tracker](https://huuanh20.github.io/it-compliance-tracker)  
**👤 Author:** [Nguyen Huu Anh](https://github.com/huuanh20)

---

## ⚛️ Why React?

| Concern | HTML Version | React Version |
|---|---|---|
| **State management** | Manual DOM manipulation | `useState` hooks |
| **Derived data** | Recalculate on every event | `useMemo` — only re-runs when deps change |
| **Performance** | Full re-render | Virtual DOM diffing |
| **Component reuse** | Copy-paste HTML | `<RegCard />` component |
| **Cleanup** | Manual `removeEventListener` | `useEffect` cleanup fn |
| **Scalability** | One big file | Separated data / components / styles |

---

## 🗂️ Component Architecture

```
src/
├── data/
│   └── regulations.js      # Single source of truth for all 8 regulations
├── components/
│   ├── Navbar.jsx          # Sticky header
│   ├── Hero.jsx            # Page title + description
│   ├── OverviewStats.jsx   # Reactive stats (total/active/upcoming/monitoring)
│   ├── FilterBar.jsx       # Category filter + search (controlled components)
│   ├── RegCard.jsx         # Individual regulation card (accessible, keyboard nav)
│   ├── Modal.jsx           # Detail modal (useEffect for ESC + body scroll lock)
│   └── Footer.jsx          # Footer
├── App.jsx                 # Root state: filter, search, selectedReg
├── index.css               # Global CSS with design tokens
└── main.jsx                # Entry point
```

## 🧠 React Concepts Demonstrated

- `useState` — filter category, search query, selected regulation
- `useMemo` — filtered regulations list (derived state, memoized)
- `useCallback` — stable references for modal open/close handlers
- `useEffect` — ESC key listener + body overflow in Modal (with cleanup)
- **Controlled components** — FilterBar inputs driven by parent state
- **Props drilling** — data flows down, events bubble up
- **Conditional rendering** — Modal only renders when `selectedReg !== null`

---

*Built as part of FWD IT Internship application — demonstrating React proficiency alongside the HTML version to show framework understanding vs. pragmatic tool selection.*
