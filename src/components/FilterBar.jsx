import { CATEGORIES } from "../data/regulations.js";

export default function FilterBar({ activeFilter, onFilterChange, search, onSearchChange }) {
  return (
    <div className="controls">
      <div className="search-wrap">
        <span className="search-icon">🔍</span>
        <input
          type="text"
          placeholder="Search regulations..."
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          id="search-input"
        />
      </div>
      <div className="filters">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.key}
            className={`filter-btn ${activeFilter === cat.key ? "active" : ""}`}
            onClick={() => onFilterChange(cat.key)}
            id={`filter-${cat.key}`}
          >
            {cat.label}
          </button>
        ))}
      </div>
    </div>
  );
}
