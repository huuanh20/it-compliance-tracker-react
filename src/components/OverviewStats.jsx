export default function OverviewStats({ regulations }) {
  const total = regulations.length;
  const active = regulations.filter((r) => r.status === "active").length;
  const upcoming = regulations.filter((r) => r.status === "upcoming").length;
  const monitor = regulations.filter((r) => r.status === "monitor").length;

  return (
    <div className="overview">
      <div className="ov-card total">
        <div className="ov-num">{total}</div>
        <div className="ov-label">Total Regulations</div>
      </div>
      <div className="ov-card active">
        <div className="ov-num">{active}</div>
        <div className="ov-label">🟢 Active / In Force</div>
      </div>
      <div className="ov-card upcoming">
        <div className="ov-num">{upcoming}</div>
        <div className="ov-label">🟡 Upcoming / Transition</div>
      </div>
      <div className="ov-card monitor">
        <div className="ov-num">{monitor}</div>
        <div className="ov-label">🔵 Monitoring</div>
      </div>
    </div>
  );
}
