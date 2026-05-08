import { useEffect } from "react";
import { CAT_LABELS } from "../data/regulations.js";

function statusLabel(s) {
  return s === "active" ? "Active" : s === "upcoming" ? "Upcoming" : "Monitoring";
}

export default function Modal({ reg, onClose }) {
  // Close on Escape key
  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="modal-overlay"
      onClick={(e) => e.target === e.currentTarget && onClose()}
      role="dialog"
      aria-modal="true"
      aria-label={`Details for ${reg.name}`}
    >
      <div className="modal">
        <button className="modal-close" onClick={onClose} aria-label="Close modal">✕</button>

        {/* Header */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 6 }}>
          <span style={{ fontSize: 36 }}>{reg.icon}</span>
          <div>
            <div className="modal-title">{reg.name}</div>
            <div style={{ fontSize: 12, color: "var(--muted)" }}>{reg.full}</div>
          </div>
          <span className={`status-badge ${reg.status}`} style={{ marginLeft: "auto" }}>
            {statusLabel(reg.status)}
          </span>
        </div>

        <div style={{ display: "flex", gap: 8, marginBottom: 20 }}>
          <span className={`cat-tag cat-${reg.cat}`}>{CAT_LABELS[reg.cat]}</span>
          <span className={`deadline ${reg.urgency === "urgent" ? "urgent" : reg.urgency === "soon" ? "soon" : ""}`}>
            📅 Deadline: {reg.deadline}
          </span>
        </div>

        {/* Overview */}
        <div className="modal-section">
          <h4>Overview</h4>
          <p>{reg.desc}</p>
        </div>

        {/* Business Impact */}
        <div className="modal-section">
          <h4>Business Impact for Insurance</h4>
          <p>{reg.impact}</p>
        </div>

        {/* Action Items */}
        <div className="modal-section">
          <h4>Action Items</h4>
          {reg.actions.map((action, i) => (
            <div className="action-item" key={i}>
              <span>✅</span>
              <span>{action}</span>
            </div>
          ))}
        </div>

        {/* References */}
        <div className="modal-section">
          <h4>References</h4>
          {reg.refs.map((ref, i) => (
            <div key={i} style={{ marginBottom: 4 }}>
              <a href={ref} target="_blank" rel="noopener noreferrer"
                style={{ color: "var(--primary)", fontSize: 13, wordBreak: "break-all" }}>
                {ref}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
