import { useState, useMemo, useCallback } from "react";
import { REGULATIONS } from "./data/regulations.js";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import OverviewStats from "./components/OverviewStats.jsx";
import FilterBar from "./components/FilterBar.jsx";
import RegCard from "./components/RegCard.jsx";
import Modal from "./components/Modal.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [selectedReg, setSelectedReg] = useState(null);

  // Derived state — recalculates only when filter/search changes
  const filtered = useMemo(() => {
    return REGULATIONS.filter((r) => {
      const matchCat = activeFilter === "all" || r.cat === activeFilter;
      const q = search.toLowerCase();
      const matchQ =
        !q ||
        r.name.toLowerCase().includes(q) ||
        r.full.toLowerCase().includes(q) ||
        r.desc.toLowerCase().includes(q);
      return matchCat && matchQ;
    });
  }, [activeFilter, search]);

  const handleOpenModal = useCallback((reg) => setSelectedReg(reg), []);
  const handleCloseModal = useCallback(() => setSelectedReg(null), []);

  const resultsLabel =
    filtered.length === REGULATIONS.length
      ? `Showing all ${REGULATIONS.length} regulations`
      : `Showing ${filtered.length} of ${REGULATIONS.length} regulations`;

  return (
    <>
      <Navbar />
      <Hero />
      <OverviewStats regulations={filtered} />

      <FilterBar
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
        search={search}
        onSearchChange={setSearch}
      />

      <div className="results-label">{resultsLabel}</div>

      <div className="regs-grid">
        {filtered.length === 0 ? (
          <div className="empty">
            <div className="empty-icon">🔍</div>
            <div>No regulations found matching your search.</div>
          </div>
        ) : (
          filtered.map((reg) => (
            <RegCard key={reg.id} reg={reg} onClick={handleOpenModal} />
          ))
        )}
      </div>

      {selectedReg && (
        <Modal reg={selectedReg} onClose={handleCloseModal} />
      )}

      <Footer />
    </>
  );
}
