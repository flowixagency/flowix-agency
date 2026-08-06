const G = "#00CC6A";
const NEON_CYAN = "#0EA5E9";
const NEON_PURPLE = "#a78bfa";

const trustBadges = [
  {
    icon: "⚡",
    title: "Garantía de Entrega Acelerada",
    desc: "Publicamos e implementamos tu proyecto en días, no en meses. Tiempos garantizados por contrato.",
    accent: G,
  },
  {
    icon: "☁️",
    title: "Servidores Cloud 99.9% Uptime",
    desc: "Infraestructura de alta disponibilidad con máxima velocidad de carga (<2s) y protección SSL.",
    accent: NEON_CYAN,
  },
  {
    icon: "💬",
    title: "Canal de Soporte Dedicado",
    desc: "Atención directa y prioritaria por WhatsApp con el equipo técnico. Sin tickets impersonales.",
    accent: NEON_PURPLE,
  },
];

export default function TrustBanner() {
  return (
    <section id="garantia" style={{ padding: "80px 40px", background: "#050508", borderTop: "1px solid rgba(255,255,255,0.06)", position: "relative" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }} className="services-grid">
          {trustBadges.map((badge, idx) => (
            <div
              key={badge.title}
              className="sr diff-card"
              style={{
                background: "rgba(15, 23, 42, 0.55)",
                border: "1px solid #1E293B",
                borderRadius: 24,
                padding: 32,
                position: "relative",
                overflow: "hidden",
                boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
              }}
            >
              <div aria-hidden style={{ position: "absolute", top: -40, right: -40, width: 120, height: 120, background: `radial-gradient(circle, ${badge.accent}15 0%, transparent 70%)`, pointerEvents: "none" }} />
              
              <div style={{ width: 48, height: 48, borderRadius: 16, background: `${badge.accent}14`, border: `1px solid ${badge.accent}28`, display: "grid", placeItems: "center", fontSize: 24, marginBottom: 20 }}>
                {badge.icon}
              </div>

              <h3 style={{ fontSize: 19, fontWeight: 800, letterSpacing: "-0.3px", marginBottom: 10, color: "#fff" }}>
                {badge.title}
              </h3>
              <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 14, lineHeight: 1.75, margin: 0 }}>
                {badge.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
