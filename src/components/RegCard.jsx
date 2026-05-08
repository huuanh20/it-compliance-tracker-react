import { CAT_LABELS } from "../data/regulations.js";

function statusLabel(s) {
  return s === "active" ? "Active" : s === "upcoming" ? "Upcoming" : "Monitoring";
}

export default function RegCard({ reg, onClick }) {
  const catClass = `cat-${reg.cat}`;
  const urgencyClass = reg.urgency === "urgent" ? "urgent" : reg.urgency === "soon" ? "soon" : "";

  return (
    <div
      className={`reg-card status-${reg.status}`}
      onClick={() => onClick(reg)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onClick(reg)}
      aria-label={`View details for ${reg.name}`}
      id={`card-${reg.id}`}
    >
      <div className="reg-top">
        <span className="reg-icon">{reg.icon}</span>
        <span className={`status-badge ${reg.status}`}>{statusLabel(reg.status)}</span>
      </div>
      <div className="reg-name">{reg.name}</div>
      <div className="reg-full">{reg.full}</div>
      <div className="reg-desc">{reg.desc.substring(0, 120)}...</div>
      <div className="reg-meta">
        <span className={`cat-tag ${catClass}`}>{CAT_LABELS[reg.cat]}</span>
        <span className={`deadline ${urgencyClass}`}>📅 {reg.deadline}</span>
      </div>
      <div className="click-hint">Click for details →</div>
    </div>
  );
}
