import ScrollReveal from "./components/ScrollReveal";

const G = "#00CC6A";

type FVal = boolean | string;
const tableFeatures: { name: string; base: FVal; pro: FVal; elite: FVal }[] = [
  { name: "Agenda de turnos",            base: true,  pro: true,  elite: true  },
  { name: "Base de clientes + historial",base: true,  pro: true,  elite: true  },
  { name: "Caja y cobros",               base: true,  pro: true,  elite: true  },
  { name: "Reportes",                    base: true,  pro: true,  elite: true  },
  { name: "Inventario + gestión del local",base: false,pro: true, elite: true  },
  { name: "Reservas online",             base: false, pro: true,  elite: true  },
  { name: "Profesionales / usuarios",    base: "2",   pro: "5",   elite: "∞"   },
  { name: "Recordatorios WhatsApp",      base: false, pro: false, elite: true  },
  { name: "Exportar reportes PDF",       base: false, pro: false, elite: true  },
  { name: "Soporte prioritario",         base: false, pro: false, elite: true  },
];

function PlanCell({ val, color }: { val: FVal; color: string }) {
  if (typeof val === "string") return <span style={{ fontWeight: 700, fontSize: 16, color }}>{val}</span>;
  if (val) return <span style={{ color, fontWeight: 700, fontSize: 18 }}>✓</span>;
  return <span style={{ color: "#3f3f46", fontSize: 18 }}>—</span>;
}
const GRAIN = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`;

const WA          = `https://wa.me/5491126730927?text=Hola!%20Me%20interesa%20conocer%20m%C3%A1s%20sobre%20Flowix.`;
const WA_MARKETING= `https://wa.me/5491169215257?text=Hola!%20Me%20interesa%20el%20marketing%20de%20Flowix%20para%20mi%20negocio.%20%C2%BFMe%20pod%C3%A9s%20contar%20m%C3%A1s%3F`;
const WA_SOPORTE  = `https://wa.me/5491133383949?text=Hola!%20Necesito%20asistencia%20t%C3%A9cnica%20con%20Flowix.%20%C2%BFMe%20pod%C3%A9s%20ayudar%3F`;
const SALON_URL  = "https://flowix-landing-six.vercel.app";
const SALUD_URL  = "https://flowix-salud.vercel.app";

const differentiators = [
  {
    title: "Activación en 24hs",
    desc: "Tu sistema configurado y funcionando en un día. Sin meses de implementación ni consultores externos.",
    icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>),
  },
  {
    title: "Especialización vertical",
    desc: "No hacemos software genérico. Cada producto está diseñado específicamente para su rubro.",
    icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/></svg>),
  },
  {
    title: "Mejora continua",
    desc: "El software evoluciona junto con tu negocio. Actualizaciones basadas en feedback real de cada cliente.",
    icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>),
  },
  {
    title: "Soporte local",
    desc: "Estamos en Argentina. Misma zona horaria, mismo contexto, atención real cuando la necesitás.",
    icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>),
  },
  {
    title: "Soporte directo",
    desc: "Hablás con quien construyó el sistema. Sin call centers ni tickets. Respuesta real por WhatsApp.",
    icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>),
  },
  {
    title: "Automatizaciones",
    desc: "Integramos n8n y otras herramientas para automatizar los procesos repetitivos de tu negocio.",
    icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 9h.01M15 9h.01M9 15h.01M15 15h.01M12 12h.01"/></svg>),
  },
];

const BARS = [38, 60, 42, 78, 52, 88, 65];
const DAYS = ["L","M","X","J","V","S","D"];

const APPOINTMENTS = [
  { time: "09:00", name: "Matías G.", service: "Corte + barba",  color: G,         status: "done"    },
  { time: "10:30", name: "Lucas P.",  service: "Corte clásico",  color: "#a78bfa",  status: "active"  },
  { time: "12:00", name: "Diego M.",  service: "Degradé",         color: "#60a5fa",  status: "pending" },
  { time: "14:00", name: "Ramiro S.", service: "Barba",           color: "#f59e0b",  status: "pending" },
];

export default function FlowixAgency() {
  return (
    <main style={{ fontFamily: "'Outfit', system-ui, sans-serif", color: "#fff", background: "#000", overflowX: "hidden" }}>

      {/* Grain */}
      <div aria-hidden style={{ position: "fixed", inset: 0, backgroundImage: GRAIN, opacity: 0.022, pointerEvents: "none", zIndex: 9999 }} />

      {/* ── NAV ──────────────────────────────────────────────── */}
      <nav style={{
        position: "sticky", top: 0, zIndex: 50,
        background: "rgba(0,0,0,0.82)", backdropFilter: "blur(24px)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        padding: "0 40px", display: "flex", alignItems: "center",
        justifyContent: "space-between", height: 68,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ background: G, color: "#000", fontFamily: "monospace", fontWeight: 800, fontSize: 13, padding: "5px 11px", borderRadius: 9 }}>{"</>"}</div>
          <span style={{ fontWeight: 700, fontSize: 22, letterSpacing: "-0.5px" }}>
            <span style={{ color: "#fff" }}>Flo</span><span style={{ color: G }}>wix</span>
          </span>
        </div>

        <div className="nav-links-row">
          {[
            { label: "Productos",       href: "#productos" },
            { label: "Por qué Flowix",  href: "#por-que" },
            { label: "Contacto",        href: "#contacto" },
          ].map(l => (
            <a key={l.label} href={l.href} className="nav-link" style={{ color: "#71717a", fontSize: 14, textDecoration: "none", padding: "8px 16px", borderRadius: 8 }}>{l.label}</a>
          ))}
        </div>

        <a href={WA} target="_blank" rel="noopener noreferrer" style={{
          background: G, color: "#000", fontSize: 14, fontWeight: 700,
          textDecoration: "none", padding: "10px 24px", borderRadius: 10,
        }}>Hablemos</a>
      </nav>

      {/* ── HERO — dos columnas: texto + mockup 3D ───────────── */}
      <section style={{
        minHeight: "calc(100vh - 68px)", display: "flex", alignItems: "center",
        position: "relative", overflow: "hidden",
        padding: "80px 40px",
      }}>
        {/* Fondo glow */}
        <div aria-hidden style={{ position: "absolute", top: "30%", right: "5%", width: 800, height: 800, background: "radial-gradient(circle, rgba(0,204,106,0.09) 0%, transparent 60%)", pointerEvents: "none" }} />
        <div aria-hidden style={{ position: "absolute", top: "60%", left: "-10%", width: 600, height: 600, background: "radial-gradient(circle, rgba(0,204,106,0.04) 0%, transparent 65%)", pointerEvents: "none" }} />
        <div aria-hidden style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 200, background: "linear-gradient(to bottom, transparent, #000)", pointerEvents: "none", zIndex: 2 }} />

        <div className="hero-grid" style={{ maxWidth: 1200, margin: "0 auto", width: "100%", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center", position: "relative", zIndex: 3 }}>

          {/* TEXTO */}
          <div>
            <div className="anim-up pulse-badge" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "rgba(0,204,106,0.07)", border: "1px solid rgba(0,204,106,0.2)",
              borderRadius: 20, padding: "6px 16px", marginBottom: 36,
              fontSize: 12, color: G, fontWeight: 600, letterSpacing: "0.02em",
              animationDelay: "0s",
            }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: G, display: "inline-block" }} />
              Agencia de software · Argentina
            </div>

            <h1 className="anim-up" style={{
              fontSize: "clamp(40px, 5.5vw, 72px)", fontWeight: 800,
              lineHeight: 1.0, letterSpacing: "-3.5px",
              margin: "0 0 28px", animationDelay: "0.1s",
            }}>
              El sistema que<br />tu negocio<br /><em style={{ fontFamily: "Georgia, 'Times New Roman', serif", fontStyle: "italic", color: G, letterSpacing: "-1px" }}>necesitaba.</em>
            </h1>

            <p className="anim-up" style={{
              fontSize: "clamp(15px, 1.8vw, 18px)", color: "rgba(255,255,255,0.5)", lineHeight: 1.75,
              maxWidth: 420, animationDelay: "0.2s", fontWeight: 400, marginBottom: 40,
            }}>
              Sistemas de gestión a medida para negocios de servicios. Soluciones reales, sin complejidad innecesaria.
            </p>

            <div className="anim-up" style={{ display: "flex", gap: 14, flexWrap: "wrap", animationDelay: "0.3s" }}>
              <a href={WA} target="_blank" rel="noopener noreferrer" style={{
                background: G, color: "#000", fontWeight: 700, fontSize: 15,
                textDecoration: "none", padding: "14px 32px", borderRadius: 12,
              }}>Hablemos →</a>
              <a href={SALON_URL} target="_blank" rel="noopener noreferrer" style={{
                background: "rgba(255,255,255,0.05)", color: "#aaa", fontWeight: 500, fontSize: 15,
                textDecoration: "none", padding: "14px 32px", borderRadius: 12,
                border: "1px solid rgba(255,255,255,0.1)",
              }}>Ver el producto</a>
            </div>
          </div>

          {/* MOCKUP 3D */}
          <div className="hero-mockup" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div className="dash-3d" style={{
              width: "100%", maxWidth: 420,
              background: "rgba(8,8,10,0.95)",
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: 18,
              boxShadow: "0 60px 120px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.05), 40px 40px 80px rgba(0,204,106,0.04), inset 0 1px 0 rgba(255,255,255,0.08)",
              overflow: "hidden",
            }}>
              {/* Barra de título */}
              <div style={{
                padding: "12px 16px",
                background: "rgba(255,255,255,0.03)",
                borderBottom: "1px solid rgba(255,255,255,0.07)",
                display: "flex", alignItems: "center", gap: 8,
              }}>
                <div style={{ display: "flex", gap: 5 }}>
                  {["#ff5f56","#ffbd2e","#27c93f"].map(c => (
                    <div key={c} style={{ width: 10, height: 10, borderRadius: "50%", background: c }} />
                  ))}
                </div>
                <div style={{ flex: 1, textAlign: "center", fontSize: 10, color: "#3a3a3a", fontWeight: 600, letterSpacing: "0.04em" }}>
                  Flowix Book · Dashboard
                </div>
                <div className="dot-blink" style={{ width: 7, height: 7, borderRadius: "50%", background: G }} />
              </div>

              <div style={{ padding: 18 }}>
                {/* KPIs */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8, marginBottom: 14 }}>
                  {[
                    { label: "Ingresos hoy", value: "$45.200", color: G },
                    { label: "Turnos",        value: "12",       color: "#a78bfa" },
                    { label: "Clientes",      value: "8",        color: "#60a5fa" },
                  ].map((kpi, i) => (
                    <div key={i} className="slide-row" style={{
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.07)",
                      borderRadius: 10, padding: "10px 12px",
                      animationDelay: `${0.4 + i * 0.1}s`,
                    }}>
                      <p style={{ margin: 0, fontSize: 8, color: "#444", marginBottom: 4 }}>{kpi.label}</p>
                      <p style={{ margin: 0, fontSize: 18, fontWeight: 800, color: kpi.color, letterSpacing: "-0.5px" }}>{kpi.value}</p>
                    </div>
                  ))}
                </div>

                {/* Gráfico de barras */}
                <div style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: 10, padding: "12px 14px", marginBottom: 12,
                }}>
                  <p style={{ margin: "0 0 10px", fontSize: 8, color: "#3a3a3a", fontWeight: 700, textTransform: "uppercase" as const, letterSpacing: "0.09em" }}>Ingresos — Últimos 7 días</p>
                  <div style={{ display: "flex", alignItems: "flex-end", gap: 4, height: 50 }}>
                    {BARS.map((h, i) => (
                      <div key={i} className="bar-grow" style={{
                        flex: 1, height: `${h}%`, borderRadius: "3px 3px 0 0",
                        background: i === 6 ? G : `rgba(0,204,106,${0.12 + i * 0.06})`,
                        animationDelay: `${0.5 + i * 0.08}s`,
                      }} />
                    ))}
                  </div>
                  <div style={{ display: "flex", marginTop: 5 }}>
                    {DAYS.map(d => (
                      <span key={d} style={{ flex: 1, textAlign: "center", fontSize: 7, color: "#2a2a2a" }}>{d}</span>
                    ))}
                  </div>
                </div>

                {/* Lista de turnos */}
                <div style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: 10, padding: "11px 13px",
                }}>
                  <p style={{ margin: "0 0 9px", fontSize: 8, color: "#3a3a3a", fontWeight: 700, textTransform: "uppercase" as const, letterSpacing: "0.09em" }}>Turnos de hoy</p>
                  {APPOINTMENTS.map((a, i) => (
                    <div key={i} className="slide-row" style={{
                      display: "flex", alignItems: "center", gap: 7, padding: "5px 0",
                      borderBottom: i < APPOINTMENTS.length - 1 ? "1px solid rgba(255,255,255,0.04)" : undefined,
                      animationDelay: `${0.6 + i * 0.1}s`,
                    }}>
                      <span style={{ fontSize: 8, color: "#3a3a3a", width: 28, fontFamily: "monospace" }}>{a.time}</span>
                      <div style={{ width: 2, height: 22, borderRadius: 2, background: a.color, flexShrink: 0 }} />
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <p style={{ margin: 0, fontSize: 10, fontWeight: 600, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{a.name}</p>
                        <p style={{ margin: 0, fontSize: 8, color: "#4a4a4a" }}>{a.service}</p>
                      </div>
                      <div style={{
                        width: 16, height: 16, borderRadius: "50%", flexShrink: 0,
                        background: a.status === "done" ? "rgba(0,204,106,0.15)" : a.status === "active" ? "rgba(167,139,250,0.15)" : "rgba(255,255,255,0.04)",
                        border: `1px solid ${a.status === "done" ? "rgba(0,204,106,0.35)" : a.status === "active" ? "rgba(167,139,250,0.35)" : "rgba(255,255,255,0.08)"}`,
                        display: "flex", alignItems: "center", justifyContent: "center",
                      }}>
                        {a.status === "done"    && <svg width="7" height="7" viewBox="0 0 24 24" fill="none" stroke={G} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>}
                        {a.status === "active"  && <div className="dot-blink" style={{ width: 5, height: 5, borderRadius: "50%", background: "#a78bfa" }} />}
                        {a.status === "pending" && <div style={{ width: 4, height: 4, borderRadius: "50%", background: "#333" }} />}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Flecha scroll-down */}
        <div className="bounce-y" style={{ position: "absolute", bottom: 28, left: "50%", zIndex: 4, pointerEvents: "none" }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9"/>
          </svg>
        </div>
      </section>

      {/* ── STATS BAR ────────────────────────────────────────── */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.05)", background: "rgba(255,255,255,0.01)" }}>
        <div className="stats-bar stats-inner sr" style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4,1fr)", textAlign: "center" as const }}>
          {[
            { value: "1",    label: "Producto activo" },
            { value: "+8",   label: "Rubros cubiertos" },
            { value: "100%", label: "Foco en resultados" },
            { value: "ARG",  label: "Desarrollo local" },
          ].map((s, i) => (
            <div key={i} style={{ padding: "0 24px", borderRight: i < 3 ? "1px solid rgba(255,255,255,0.05)" : undefined }}>
              <p style={{ margin: 0, fontSize: "clamp(24px, 3vw, 32px)", fontWeight: 800, letterSpacing: "-1.5px", color: G }}>{s.value}</p>
              <p style={{ margin: "6px 0 0", fontSize: 13, color: "#444" }}>{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── DEMO DEL SISTEMA ─────────────────────────────────── */}
      <section className="section-pad" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="sr" style={{ marginBottom: 48, textAlign: "center" as const }}>
            <p style={{ color: G, fontSize: 12, fontWeight: 700, textTransform: "uppercase" as const, letterSpacing: "0.12em", marginBottom: 14 }}>En acción</p>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 800, letterSpacing: "-2.5px", lineHeight: 1.04, marginBottom: 16 }}>
              Mirá cómo funciona.
            </h2>
            <p style={{ color: "#6b6b6b", fontSize: 16, maxWidth: 480, margin: "0 auto" }}>
              Una mirada rápida al sistema real. Así se ve en el día a día de una barbería.
            </p>
          </div>

          {/* Placeholder — reemplazar con <iframe> de YouTube/Vimeo o <video> local */}
          <div className="sr" style={{
            maxWidth: 880, margin: "0 auto",
            background: "rgba(255,255,255,0.02)", border: "2px dashed rgba(255,255,255,0.1)",
            borderRadius: 20, overflow: "hidden", aspectRatio: "16/9",
            display: "flex", flexDirection: "column" as const, alignItems: "center", justifyContent: "center", gap: 16,
          }}>
            <div style={{ width: 72, height: 72, borderRadius: "50%", background: "rgba(0,204,106,0.08)", border: `1px solid rgba(0,204,106,0.2)`, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={G} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>
            </div>
            <p style={{ color: "#555", fontSize: 15, margin: 0, fontWeight: 600 }}>Demo del sistema — próximamente</p>
            <p style={{ color: "#2a2a2a", fontSize: 12, margin: 0 }}>Reemplazar con embed de YouTube / Vimeo o archivo de video</p>
          </div>
        </div>
      </section>

      {/* ── ¿RECONOCÉS ESTO? ─────────────────────────────────── */}
      <section className="section-pad" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="pain-grid" style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>

          {/* Texto */}
          <div className="sr">
            <p style={{ color: G, fontSize: 12, fontWeight: 700, textTransform: "uppercase" as const, letterSpacing: "0.12em", marginBottom: 14 }}>El problema</p>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 800, letterSpacing: "-2.5px", lineHeight: 1.05, marginBottom: 14 }}>
              ¿Tu negocio<br />todavía funciona así?
            </h2>
            <p style={{ color: "#6b6b6b", fontSize: 16, lineHeight: 1.7, marginBottom: 40, maxWidth: 420 }}>
              La mayoría de los negocios pierden clientes y tiempo por no tener las herramientas digitales adecuadas.
            </p>

            <div style={{ display: "flex", flexDirection: "column" as const, gap: 0 }}>
              {[
                "Agenda en papel o por WhatsApp — perdés turnos sin darte cuenta",
                "No sabés exactamente cuánto ganaste hoy ni esta semana — tu plata pasa sin quedar registrada",
                "Cada dato en un lugar distinto: Instagram, papel, memoria — cuando lo necesitás, no lo encontrás",
                "Si vos no estás, el negocio se para — sin sistema, sin proceso, sin continuidad",
              ].map((pain, i) => (
                <div key={i} style={{
                  display: "flex", alignItems: "flex-start", gap: 14,
                  padding: "18px 0",
                  borderBottom: "1px solid rgba(255,255,255,0.05)",
                }}>
                  <div style={{
                    width: 22, height: 22, borderRadius: 6, flexShrink: 0, marginTop: 1,
                    background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.2)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="3" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                  </div>
                  <p style={{ margin: 0, fontSize: 14, color: "#888", lineHeight: 1.6 }}>
                    <strong style={{ color: "#bbb" }}>{pain.split("—")[0].trim()}</strong>
                    {pain.includes("—") ? ` — ${pain.split("—")[1]}` : ""}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Card "Sin sistema" */}
          <div className="sr" style={{ transitionDelay: "0.15s" }}>
            <div style={{
              background: "rgba(8,8,10,0.95)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 20, overflow: "hidden",
              boxShadow: "0 40px 80px rgba(0,0,0,0.5)",
            }}>
              <div style={{ padding: "12px 16px", background: "rgba(255,255,255,0.03)", borderBottom: "1px solid rgba(255,255,255,0.06)", display: "flex", alignItems: "center", gap: 6 }}>
                {["#ff5f56","#ffbd2e","#27c93f"].map(c => (
                  <div key={c} style={{ width: 9, height: 9, borderRadius: "50%", background: c }} />
                ))}
                <span style={{ flex: 1, textAlign: "center", fontSize: 10, color: "#333", fontWeight: 600, letterSpacing: "0.04em" }}>Sin sistema</span>
              </div>
              <div style={{ padding: 28 }}>
                <p style={{ fontSize: 10, color: "#333", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" as const, marginBottom: 8 }}>Tiempo perdido por semana</p>
                <p style={{ fontSize: 52, fontWeight: 900, color: "#ef4444", letterSpacing: "-3px", margin: 0, lineHeight: 1 }}>+8hs</p>
                <p style={{ fontSize: 13, color: "#444", marginTop: 6, marginBottom: 20 }}>en tareas que un sistema haría solo</p>
                <div style={{ height: 4, background: "rgba(239,68,68,0.15)", borderRadius: 4, marginBottom: 20, overflow: "hidden" }}>
                  <div style={{ width: "72%", height: "100%", background: "#ef4444", borderRadius: 4 }} />
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
                  {["Turnos perdidos","Caja sin control","Sin reportes","Clientes olvidados"].map(t => (
                    <span key={t} style={{ fontSize: 11, color: "#555", background: "rgba(239,68,68,0.06)", border: "1px solid rgba(239,68,68,0.12)", borderRadius: 6, padding: "4px 10px" }}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── PRODUCTOS ────────────────────────────────────────── */}
      <section id="productos" className="section-pad" style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div className="sr" style={{ marginBottom: 68 }}>
          <p style={{ color: G, fontSize: 12, fontWeight: 700, textTransform: "uppercase" as const, letterSpacing: "0.12em", marginBottom: 14 }}>Nuestros productos</p>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 56px)", fontWeight: 800, letterSpacing: "-2.5px", lineHeight: 1.04, maxWidth: 580 }}>
            Software diseñado<br />para cada rubro.
          </h2>
          <p style={{ color: "#6b6b6b", fontSize: 17, lineHeight: 1.75, marginTop: 18, maxWidth: 500 }}>
            Cada producto nace del entendimiento profundo del negocio al que sirve. Sin funciones de relleno, sin complicaciones.
          </p>
        </div>

        {/* Fila 1 — Flowix Book + Flowix Salud */}
        <div className="products-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 20 }}>

          {/* Flowix Book */}
          <div className="product-card glow-card sr" style={{
            background: "rgba(0,204,106,0.04)", border: "1px solid rgba(0,204,106,0.12)",
            borderRadius: 24, padding: 40, position: "relative", overflow: "hidden",
            display: "flex", flexDirection: "column" as const,
          }}>
            <div aria-hidden style={{ position: "absolute", top: -60, right: -60, width: 220, height: 220, background: `radial-gradient(circle, rgba(0,204,106,0.08) 0%, transparent 65%)`, pointerEvents: "none" }} />

            <div className="pulse-badge" style={{
              display: "inline-flex", alignItems: "center", gap: 7,
              background: "rgba(0,204,106,0.1)", border: "1px solid rgba(0,204,106,0.2)",
              borderRadius: 20, padding: "5px 14px", marginBottom: 28, fontSize: 11, fontWeight: 700, color: G, letterSpacing: "0.04em",
            }}>
              <span style={{ width: 5, height: 5, borderRadius: "50%", background: G, display: "inline-block" }} />
              Disponible ahora
            </div>

            <h3 style={{ fontSize: "clamp(22px, 2.5vw, 30px)", fontWeight: 800, letterSpacing: "-1px", marginBottom: 14, lineHeight: 1.1 }}>
              Flowix Book
            </h3>
            <p style={{ fontSize: 15, color: "#6b6b6b", lineHeight: 1.75, marginBottom: 28 }}>
              Plataforma completa para negocios de cuidado personal. Agenda inteligente, caja, clientes, reportes e inventario en un solo lugar.
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 7, marginBottom: 36 }}>
              {["Barberías", "Peluquerías", "Estéticas", "Nail Studios", "Spas", "Masajes", "Depilación", "Tattoo"].map(n => (
                <span key={n} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 8, padding: "4px 12px", fontSize: 12, color: "#777" }}>{n}</span>
              ))}
            </div>

            <div style={{ background: "rgba(0,0,0,0.5)", borderRadius: 14, padding: 16, border: "1px solid rgba(255,255,255,0.06)", marginBottom: 36, flex: 1 }}>
              <p style={{ fontSize: 9, color: "#333", marginBottom: 10, fontWeight: 700, textTransform: "uppercase" as const, letterSpacing: "0.1em" }}>Vista previa — Agenda</p>
              {[
                { time: "09:00", name: "Matías G.", service: "Corte + barba",  color: G },
                { time: "10:30", name: "Lucas P.",  service: "Corte clásico", color: "#a78bfa" },
                { time: "12:00", name: "Diego M.",  service: "Degradé",       color: "#60a5fa" },
              ].map((a, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 9, padding: "7px 0", borderBottom: i < 2 ? "1px solid rgba(255,255,255,0.04)" : undefined }}>
                  <span style={{ fontSize: 10, color: "#444", width: 34 }}>{a.time}</span>
                  <div style={{ width: 3, height: 26, borderRadius: 2, background: a.color }} />
                  <div>
                    <p style={{ margin: 0, fontSize: 12, fontWeight: 600 }}>{a.name}</p>
                    <p style={{ margin: 0, fontSize: 10, color: "#555" }}>{a.service}</p>
                  </div>
                </div>
              ))}
            </div>

            <a href={SALON_URL} target="_blank" rel="noopener noreferrer" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: G, color: "#000", fontWeight: 700, fontSize: 14,
              textDecoration: "none", padding: "13px 28px", borderRadius: 10,
            }}>
              Ver producto →
            </a>
          </div>

          {/* Flowix Salud */}
          <div className="product-card sr" style={{
            background: "rgba(96,165,250,0.03)", border: "1px solid rgba(96,165,250,0.14)",
            borderRadius: 24, padding: 40, position: "relative", overflow: "hidden",
            display: "flex", flexDirection: "column" as const, transitionDelay: "0.1s",
          }}>
            <div aria-hidden style={{ position: "absolute", top: -60, right: -60, width: 220, height: 220, background: "radial-gradient(circle, rgba(96,165,250,0.07) 0%, transparent 65%)", pointerEvents: "none" }} />

            <div style={{
              display: "inline-flex", alignItems: "center", gap: 7,
              background: "rgba(96,165,250,0.1)", border: "1px solid rgba(96,165,250,0.2)",
              borderRadius: 20, padding: "5px 14px", marginBottom: 28, fontSize: 11, fontWeight: 700, color: "#60a5fa", letterSpacing: "0.04em",
            }}>
              <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#60a5fa", display: "inline-block" }} />
              En desarrollo
            </div>

            <h3 style={{ fontSize: "clamp(22px, 2.5vw, 30px)", fontWeight: 800, letterSpacing: "-1px", marginBottom: 14, lineHeight: 1.1 }}>
              Flowix Salud
            </h3>
            <p style={{ fontSize: 15, color: "#6b6b6b", lineHeight: 1.75, marginBottom: 28 }}>
              Sistema para centros de salud y bienestar. Historia clínica digital, planes de tratamiento y agenda en un solo lugar.
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 7, marginBottom: 36 }}>
              {["Kinesiología", "Quiropraxia", "Psicología", "Nutrición", "Estética médica"].map(n => (
                <span key={n} style={{ background: "rgba(96,165,250,0.06)", border: "1px solid rgba(96,165,250,0.12)", borderRadius: 8, padding: "4px 12px", fontSize: 12, color: "#4a7fa5" }}>{n}</span>
              ))}
            </div>

            {/* Mini mockup — Paciente */}
            <div style={{ background: "rgba(0,0,0,0.5)", borderRadius: 14, padding: 16, border: "1px solid rgba(255,255,255,0.06)", marginBottom: 36, flex: 1 }}>
              <p style={{ fontSize: 9, color: "#333", marginBottom: 10, fontWeight: 700, textTransform: "uppercase" as const, letterSpacing: "0.1em" }}>Vista previa — Paciente</p>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10, padding: "8px 10px", background: "rgba(96,165,250,0.05)", borderRadius: 9, border: "1px solid rgba(96,165,250,0.1)" }}>
                <div style={{ width: 28, height: 28, borderRadius: "50%", background: "rgba(96,165,250,0.15)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 800, color: "#60a5fa", flexShrink: 0 }}>M</div>
                <div>
                  <p style={{ margin: 0, fontSize: 11, fontWeight: 600 }}>María González</p>
                  <p style={{ margin: 0, fontSize: 9, color: "#555" }}>Lumbalgia L4-L5</p>
                </div>
                <span style={{ marginLeft: "auto", fontSize: 10, color: "#60a5fa", fontWeight: 700 }}>Ses. 7/12</span>
              </div>
              <div style={{ height: 3, background: "rgba(255,255,255,0.05)", borderRadius: 3, overflow: "hidden", marginBottom: 10 }}>
                <div style={{ width: "58%", height: "100%", background: "#60a5fa", borderRadius: 3 }} />
              </div>
              <p style={{ margin: 0, fontSize: 10, color: "#555", lineHeight: 1.5 }}>
                <span style={{ color: "#3a3a3a" }}>Última nota:</span> Mejora en flexión lumbar. Continuar ejercicios de estabilización core.
              </p>
            </div>

            <a href={SALUD_URL} target="_blank" rel="noopener noreferrer" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "#60a5fa", color: "#000", fontWeight: 700, fontSize: 14,
              textDecoration: "none", padding: "13px 28px", borderRadius: 10,
            }}>
              Ver landing →
            </a>
          </div>

        </div>

        {/* Fila 2 — Flowix Deporte (horizontal, roadmap) */}
        <div className="product-card deporte-card sr" style={{
          background: "rgba(167,139,250,0.02)", border: "1px solid rgba(167,139,250,0.1)",
          borderRadius: 24, padding: "32px 40px",
          display: "grid", gridTemplateColumns: "auto 1fr auto", alignItems: "center", gap: 36,
          transitionDelay: "0.15s",
        }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 7, background: "rgba(167,139,250,0.06)", border: "1px solid rgba(167,139,250,0.14)", borderRadius: 20, padding: "5px 14px", fontSize: 11, fontWeight: 700, color: "#a78bfa", letterSpacing: "0.04em", whiteSpace: "nowrap" as const }}>
            <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#a78bfa", display: "inline-block" }} />
            Roadmap
          </div>
          <div>
            <h3 style={{ fontSize: "clamp(18px, 2vw, 22px)", fontWeight: 800, letterSpacing: "-0.6px", marginBottom: 6, lineHeight: 1.1, color: "#888" }}>
              Flowix Deporte
            </h3>
            <p style={{ fontSize: 13, color: "#3a3a3a", lineHeight: 1.6, margin: "0 0 12px" }}>
              Sistema de gestión para espacios deportivos. Control de asistencia, membresías, clases y seguimiento de alumnos.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
              {["Gimnasios", "Pilates", "Yoga", "Crossfit", "Academias deportivas"].map(n => (
                <span key={n} style={{ background: "rgba(167,139,250,0.04)", border: "1px solid rgba(167,139,250,0.1)", borderRadius: 7, padding: "3px 10px", fontSize: 11, color: "#6a5fa5" }}>{n}</span>
              ))}
            </div>
          </div>
          <a href={WA} target="_blank" rel="noopener noreferrer" className="deporte-btn" style={{
            display: "inline-flex", alignItems: "center", gap: 8, whiteSpace: "nowrap" as const,
            background: "rgba(255,255,255,0.04)", color: "#666", fontWeight: 600, fontSize: 13,
            textDecoration: "none", padding: "11px 22px", borderRadius: 10,
            border: "1px solid rgba(255,255,255,0.07)",
          }}>
            Avisarme →
          </a>
        </div>

      </section>

      {/* ── CÓMO TRABAJAMOS ──────────────────────────────────── */}
      <section className="section-pad" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="sr" style={{ marginBottom: 68, textAlign: "center" as const }}>
            <p style={{ color: G, fontSize: 12, fontWeight: 700, textTransform: "uppercase" as const, letterSpacing: "0.12em", marginBottom: 14 }}>Cómo trabajamos</p>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 56px)", fontWeight: 800, letterSpacing: "-2.5px", lineHeight: 1.04 }}>
              Simple, directo<br />y <em style={{ fontFamily: "Georgia, 'Times New Roman', serif", fontStyle: "italic", color: G }}>sin vueltas.</em>
            </h2>
          </div>

          <div className="steps-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 2 }}>
            {[
              { num: "01", title: "Reunión inicial", desc: "Nos contás tu negocio, tus objetivos y qué necesitás. Sin formularios largos, solo una charla directa." },
              { num: "02", title: "Propuesta concreta", desc: "Te presentamos una propuesta con tiempos, etapas y presupuesto. Sin sorpresas." },
              { num: "03", title: "Desarrollo ágil", desc: "Trabajamos con revisiones periódicas para que el resultado sea exactamente lo que imaginaste." },
              { num: "04", title: "Entrega y soporte", desc: "Lanzamos tu proyecto y nos quedamos para asegurarnos de que todo funcione perfecto." },
            ].map((step, i) => (
              <div key={i} className="sr diff-card" style={{
                background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: 18, padding: 28, transitionDelay: `${i * 0.08}s`,
                position: "relative",
              }}>
                <div style={{
                  width: 40, height: 40, borderRadius: 10,
                  background: "rgba(0,204,106,0.08)", border: "1px solid rgba(0,204,106,0.15)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 13, fontWeight: 800, color: G, letterSpacing: "-0.5px",
                  marginBottom: 20,
                }}>
                  {step.num}
                </div>
                <h3 style={{ fontSize: 17, fontWeight: 700, letterSpacing: "-0.3px", marginBottom: 10 }}>{step.title}</h3>
                <p style={{ fontSize: 14, color: "#6b6b6b", lineHeight: 1.7, margin: 0 }}>{step.desc}</p>
                {i < 3 && (
                  <div aria-hidden style={{
                    position: "absolute", top: 36, right: -14, zIndex: 1,
                    width: 28, height: 1, background: "rgba(0,204,106,0.2)",
                  }} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── POR QUÉ FLOWIX ───────────────────────────────────── */}
      <section id="por-que" className="section-pad" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="sr" style={{ marginBottom: 68 }}>
            <p style={{ color: G, fontSize: 12, fontWeight: 700, textTransform: "uppercase" as const, letterSpacing: "0.12em", marginBottom: 14 }}>Por qué elegirnos</p>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 56px)", fontWeight: 800, letterSpacing: "-2.5px", lineHeight: 1.04, maxWidth: 520 }}>
              Software que entiende<br />tu negocio.
            </h2>
          </div>

          <div className="diff-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
            {differentiators.map((d, i) => (
              <div key={i} className="diff-card sr" style={{
                background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: 18, padding: "30px", transitionDelay: `${i * 0.07}s`,
              }}>
                <div style={{ width: 40, height: 40, borderRadius: 10, background: "rgba(0,204,106,0.08)", border: "1px solid rgba(0,204,106,0.12)", display: "flex", alignItems: "center", justifyContent: "center", color: G, marginBottom: 20 }}>
                  {d.icon}
                </div>
                <h3 style={{ fontSize: 16, fontWeight: 700, letterSpacing: "-0.3px", marginBottom: 10 }}>{d.title}</h3>
                <p style={{ fontSize: 14, color: "#6b6b6b", lineHeight: 1.7 }}>{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── QUIÉNES SOMOS ────────────────────────────────────── */}
      <section className="section-pad" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="sr" style={{ marginBottom: 64 }}>
            <p style={{ color: G, fontSize: 12, fontWeight: 700, textTransform: "uppercase" as const, letterSpacing: "0.12em", marginBottom: 14 }}>El equipo</p>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 56px)", fontWeight: 800, letterSpacing: "-2.5px", lineHeight: 1.04, maxWidth: 560 }}>
              Personas reales,<br />no una empresa.
            </h2>
          </div>

          <div className="about-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "start" }}>
            <div className="sr">
              <p style={{ fontSize: 17, color: "#888", lineHeight: 1.85, marginBottom: 22 }}>
                Somos <strong style={{ color: "#ccc" }}>dos desarrolladores de Buenos Aires</strong> que construyen software para negocios reales. No venimos del mundo corporativo — venimos de entender que la mayoría de las herramientas son demasiado genéricas o demasiado caras para el negocio chico argentino.
              </p>
              <p style={{ fontSize: 17, color: "#888", lineHeight: 1.85, marginBottom: 22 }}>
                Antes de escribir una línea de código para un cliente, pasamos tiempo en el local entendiendo cómo funciona de verdad. Esa mentalidad es lo que diferencia nuestro software de cualquier solución genérica.
              </p>
              <p style={{ fontSize: 17, color: "#888", lineHeight: 1.85 }}>
                Los negocios que usan Flowix hoy son negocios que conocemos personalmente. Cuando algo falla, lo sabemos antes que ellos.
              </p>
            </div>

            <div className="sr" style={{ transitionDelay: "0.12s" }}>
              <div style={{ display: "flex", flexDirection: "column" as const, gap: 12 }}>
                {[
                  { icon: "🇦🇷", title: "100% argentinos", desc: "Desarrollamos desde Buenos Aires. Mismo idioma, misma realidad económica, mismo contexto de negocios." },
                  { icon: "🏪", title: "Experiencia con negocios reales", desc: "Nuestros primeros clientes son personas que conocemos. El feedback es directo, sin filtros y sin intermediarios." },
                  { icon: "💬", title: "Respuesta directa", desc: "Cuando hablás con Flowix, hablás con quien construyó el sistema. Sin call centers, sin tickets, sin esperas." },
                ].map((item, i) => (
                  <div key={i} style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 16, padding: "20px 22px", display: "flex", gap: 18, alignItems: "flex-start" }}>
                    <span style={{ fontSize: 24, flexShrink: 0 }}>{item.icon}</span>
                    <div>
                      <p style={{ margin: "0 0 6px", fontWeight: 700, fontSize: 15 }}>{item.title}</p>
                      <p style={{ margin: 0, fontSize: 14, color: "#6b6b6b", lineHeight: 1.65 }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRECIOS ──────────────────────────────────────────── */}
      <section className="section-pad" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="sr" style={{ marginBottom: 64, textAlign: "center" as const }}>
            <p style={{ color: G, fontSize: 12, fontWeight: 700, textTransform: "uppercase" as const, letterSpacing: "0.12em", marginBottom: 14 }}>Planes</p>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 800, letterSpacing: "-2.5px", lineHeight: 1.04, marginBottom: 14 }}>
              Precio fijo.<br />Sin sorpresas.
            </h2>
            <p style={{ color: "#6b6b6b", fontSize: 16, maxWidth: 460, margin: "0 auto" }}>
              Suscripción mensual. Sin contratos de permanencia. Los mismos planes para todos los sistemas Flowix.
            </p>
          </div>

          <div className="sr" style={{ overflowX: "auto" as const, borderRadius: 20, border: "1px solid rgba(255,255,255,0.08)" }}>
            <table style={{ width: "100%", borderCollapse: "collapse" as const, minWidth: 680, tableLayout: "fixed" as const }}>
              <colgroup>
                <col style={{ width: "28%" }} />
                <col style={{ width: "24%" }} />
                <col style={{ width: "24%" }} />
                <col style={{ width: "24%" }} />
              </colgroup>
              <thead>
                <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
                  <th style={{ padding: "36px 32px", textAlign: "left" as const, fontWeight: "normal" as const }}>
                    <span style={{ fontSize: 13, color: "#333", fontWeight: 500 }}>Incluye</span>
                  </th>
                  {/* BASE */}
                  <th style={{ padding: "36px 24px", textAlign: "center" as const, background: "rgba(255,255,255,0.015)", fontWeight: "normal" as const }}>
                    <p style={{ margin: "0 0 8px", fontSize: 16, fontWeight: 600, color: "#888" }}>Base</p>
                    <p style={{ margin: "0 0 22px" }}>
                      <span style={{ fontSize: 38, fontWeight: 800, letterSpacing: "-2px" }}>$25.000</span>
                      <span style={{ fontSize: 13, color: "#444" }}>/mes</span>
                    </p>
                    <a href={WA} target="_blank" rel="noopener noreferrer" style={{ display: "block", background: "rgba(255,255,255,0.06)", color: "#888", fontSize: 13, fontWeight: 600, textDecoration: "none", padding: "11px 16px", borderRadius: 10, border: "1px solid rgba(255,255,255,0.08)" }}>Empezar</a>
                  </th>
                  {/* PRO */}
                  <th style={{ padding: "36px 24px", textAlign: "center" as const, background: "rgba(0,204,106,0.05)", fontWeight: "normal" as const, borderLeft: `2px solid ${G}`, borderRight: `2px solid ${G}`, borderTop: `2px solid ${G}`, position: "relative" as const }}>
                    <div style={{ position: "absolute" as const, top: -1, left: "50%", transform: "translateX(-50%)", background: G, color: "#000", fontSize: 10, fontWeight: 800, padding: "4px 14px", borderRadius: "0 0 10px 10px", letterSpacing: "0.07em", whiteSpace: "nowrap" as const }}>MÁS ELEGIDO</div>
                    <p style={{ margin: "14px 0 8px", fontSize: 16, fontWeight: 700, color: G }}>Pro</p>
                    <p style={{ margin: "0 0 22px" }}>
                      <span style={{ fontSize: 38, fontWeight: 800, letterSpacing: "-2px", color: G }}>$45.000</span>
                      <span style={{ fontSize: 13, color: "#444" }}>/mes</span>
                    </p>
                    <a href={WA} target="_blank" rel="noopener noreferrer" style={{ display: "block", background: G, color: "#000", fontSize: 13, fontWeight: 700, textDecoration: "none", padding: "11px 16px", borderRadius: 10 }}>Empezar</a>
                  </th>
                  {/* ELITE */}
                  <th style={{ padding: "36px 24px", textAlign: "center" as const, background: "rgba(167,139,250,0.04)", fontWeight: "normal" as const }}>
                    <p style={{ margin: "0 0 8px", fontSize: 16, fontWeight: 600, color: "#a78bfa" }}>Elite</p>
                    <p style={{ margin: "0 0 22px" }}>
                      <span style={{ fontSize: 38, fontWeight: 800, letterSpacing: "-2px", color: "#a78bfa" }}>$85.000</span>
                      <span style={{ fontSize: 13, color: "#444" }}>/mes</span>
                    </p>
                    <a href={WA} target="_blank" rel="noopener noreferrer" style={{ display: "block", background: "rgba(167,139,250,0.1)", color: "#a78bfa", fontSize: 13, fontWeight: 600, textDecoration: "none", padding: "11px 16px", borderRadius: 10, border: "1px solid rgba(167,139,250,0.2)" }}>Contactar</a>
                  </th>
                </tr>
              </thead>
              <tbody>
                {tableFeatures.map((f, i) => (
                  <tr key={f.name} style={{ borderBottom: "1px solid rgba(255,255,255,0.03)", background: i % 2 !== 0 ? "rgba(255,255,255,0.008)" : "transparent" }}>
                    <td style={{ padding: "12px 32px", fontSize: 13, color: "#6b6b6b" }}>{f.name}</td>
                    <td style={{ textAlign: "center" as const, padding: "12px 24px", background: "rgba(255,255,255,0.008)" }}>
                      <PlanCell val={f.base} color="#e4e4e7" />
                    </td>
                    <td style={{ textAlign: "center" as const, padding: "12px 24px", background: "rgba(0,204,106,0.03)", borderLeft: `2px solid ${G}`, borderRight: `2px solid ${G}` }}>
                      <PlanCell val={f.pro} color={G} />
                    </td>
                    <td style={{ textAlign: "center" as const, padding: "12px 24px", background: "rgba(167,139,250,0.015)" }}>
                      <PlanCell val={f.elite} color="#a78bfa" />
                    </td>
                  </tr>
                ))}
                <tr>
                  <td style={{ padding: "24px 32px" }} />
                  <td style={{ padding: "20px 24px", textAlign: "center" as const, background: "rgba(255,255,255,0.01)" }}>
                    <a href={WA} target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: "rgba(255,255,255,0.06)", color: "#888", fontSize: 13, fontWeight: 600, textDecoration: "none", padding: "11px 24px", borderRadius: 10, border: "1px solid rgba(255,255,255,0.08)" }}>Empezar</a>
                  </td>
                  <td style={{ padding: "20px 24px", textAlign: "center" as const, background: "rgba(0,204,106,0.04)", borderLeft: `2px solid ${G}`, borderRight: `2px solid ${G}`, borderBottom: `2px solid ${G}` }}>
                    <a href={WA} target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: G, color: "#000", fontSize: 13, fontWeight: 700, textDecoration: "none", padding: "11px 28px", borderRadius: 10 }}>Empezar</a>
                  </td>
                  <td style={{ padding: "20px 24px", textAlign: "center" as const, background: "rgba(167,139,250,0.03)" }}>
                    <a href={WA} target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: "rgba(167,139,250,0.1)", color: "#a78bfa", fontSize: 13, fontWeight: 600, textDecoration: "none", padding: "11px 24px", borderRadius: 10, border: "1px solid rgba(167,139,250,0.2)" }}>Contactar</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="sr" style={{ textAlign: "center" as const, fontSize: 13, color: "#333", marginTop: 24 }}>
            Precios en pesos argentinos · IVA no incluido · Cancelás cuando querés
          </p>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <section className="section-pad" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <div className="sr" style={{ marginBottom: 52, textAlign: "center" as const }}>
            <p style={{ color: G, fontSize: 12, fontWeight: 700, textTransform: "uppercase" as const, letterSpacing: "0.12em", marginBottom: 14 }}>FAQ</p>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 800, letterSpacing: "-2.5px", lineHeight: 1.04 }}>
              Preguntas frecuentes
            </h2>
          </div>

          <div className="sr" style={{ display: "flex", flexDirection: "column" as const }}>
            {[
              { q: "¿Funciona sin internet?", a: "El sistema requiere conexión a internet ya que los datos se guardan en la nube. Esto garantiza acceso desde cualquier dispositivo y que nunca pierdas información." },
              { q: "¿Puedo cancelar en cualquier momento?", a: "Sí. No hay contratos de permanencia. Podés cancelar tu suscripción cuando quieras, sin penalidades ni cargos adicionales." },
              { q: "¿Qué pasa con mis datos si cancelo?", a: "Tus datos son tuyos. Antes de cancelar podés exportarlos. Nada se elimina sin tu autorización expresa." },
              { q: "¿Necesito conocimientos técnicos para usar el sistema?", a: "Para nada. El sistema está diseñado para personas que no son técnicas. Si sabés usar WhatsApp, podés usar Flowix." },
              { q: "¿Cuánto tarda la implementación?", a: "En menos de 24 horas tu sistema está configurado y funcionando. Nos encargamos de la carga inicial de servicios, profesionales y configuración." },
              { q: "¿El precio incluye actualizaciones?", a: "Sí. Todas las actualizaciones están incluidas en la suscripción mensual. El sistema mejora continuamente basado en feedback de clientes reales." },
            ].map((item, i) => (
              <details key={i} className="faq-item" style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                <summary style={{ padding: "20px 4px", fontSize: 16, fontWeight: 600, color: "#ccc", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16 }}>
                  {item.q}
                  <span className="faq-arrow" style={{ color: G, fontSize: 22, fontWeight: 300, flexShrink: 0, lineHeight: 1 }}>+</span>
                </summary>
                <p style={{ fontSize: 15, color: "#6b6b6b", lineHeight: 1.75, paddingBottom: 20, paddingLeft: 4, margin: 0 }}>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIO ───────────────────────────────────────── */}
      <section className="section-pad" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div className="sr" style={{
            background: "rgba(0,204,106,0.03)", border: "1px solid rgba(0,204,106,0.1)",
            borderRadius: 24, padding: "48px 56px", position: "relative", overflow: "hidden",
          }}>
            <div aria-hidden style={{ position: "absolute", top: -40, right: -40, width: 200, height: 200, background: "radial-gradient(circle, rgba(0,204,106,0.07) 0%, transparent 65%)", pointerEvents: "none" }} />
            <svg width="36" height="36" viewBox="0 0 24 24" fill="rgba(0,204,106,0.25)" style={{ marginBottom: 24 }}><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/></svg>
            <p style={{ fontSize: "clamp(16px, 2vw, 20px)", color: "#d4d4d8", lineHeight: 1.75, fontStyle: "italic", marginBottom: 32, position: "relative" }}>
              "Fácil de usar y muy práctico. Nos permite gestionar los turnos de forma fluida, tener todos los datos bien organizados y ver el rendimiento real del negocio de un vistazo. Es exactamente lo que necesitábamos."
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <div style={{ width: 44, height: 44, borderRadius: "50%", background: "rgba(0,204,106,0.15)", border: "1px solid rgba(0,204,106,0.25)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, fontWeight: 800, color: G }}>
                F
              </div>
              <div>
                <p style={{ margin: 0, fontWeight: 700, fontSize: 15 }}>Fernando</p>
                <p style={{ margin: 0, fontSize: 13, color: "#555" }}>Fundador · Flow K'Pital</p>
              </div>
              <div style={{ marginLeft: "auto", display: "flex", gap: 3 }}>
                {[1,2,3,4,5].map(s => (
                  <svg key={s} width="14" height="14" viewBox="0 0 24 24" fill={G}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ────────────────────────────────────────── */}
      <section id="contacto" className="section-pad" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="cta-box sr" style={{
            background: "linear-gradient(135deg, rgba(0,204,106,0.06) 0%, rgba(0,0,0,0) 60%)",
            border: "1px solid rgba(0,204,106,0.12)", borderRadius: 28,
            textAlign: "center" as const, position: "relative", overflow: "hidden",
          }}>
            <div aria-hidden style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 700, height: 400, background: `radial-gradient(ellipse, rgba(0,204,106,0.07) 0%, transparent 65%)`, pointerEvents: "none" }} />
            <p style={{ color: G, fontSize: 12, fontWeight: 700, textTransform: "uppercase" as const, letterSpacing: "0.12em", marginBottom: 20, position: "relative" }}>¿No encontrás tu rubro?</p>
            <h2 style={{ fontSize: "clamp(26px, 4.5vw, 60px)", fontWeight: 800, letterSpacing: "-3px", lineHeight: 1.02, marginBottom: 22, position: "relative" }}>
              Construimos lo que<br />tu negocio necesita.
            </h2>
            <p style={{ fontSize: 17, color: "#6b6b6b", lineHeight: 1.75, maxWidth: 460, margin: "0 auto 48px", position: "relative" }}>
              Si tenés un negocio de servicios y necesitás un sistema a medida, hablemos. Analizamos tu caso sin compromiso.
            </p>
            <div className="cta-buttons">
              <a href={WA} target="_blank" rel="noopener noreferrer" style={{ background: G, color: "#000", fontWeight: 700, fontSize: 15, textDecoration: "none", padding: "16px 36px", borderRadius: 12 }}>
                Contactar por WhatsApp
              </a>
              <a href="https://www.instagram.com/flowixagency/" target="_blank" rel="noopener noreferrer" style={{ background: "rgba(255,255,255,0.05)", color: "#ccc", fontWeight: 500, fontSize: 15, textDecoration: "none", padding: "16px 36px", borderRadius: 12, border: "1px solid rgba(255,255,255,0.1)" }}>
                Seguinos en Instagram
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────── */}
      <footer className="footer-outer" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="footer-grid" style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: 52, marginBottom: 48 }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 11, marginBottom: 16 }}>
                <div style={{ background: G, color: "#000", fontFamily: "monospace", fontWeight: 800, fontSize: 13, padding: "4px 10px", borderRadius: 8 }}>{"</>"}</div>
                <span style={{ fontWeight: 700, fontSize: 22, letterSpacing: "-0.5px" }}>
                  <span style={{ color: "#fff" }}>Flo</span><span style={{ color: G }}>wix</span>
                </span>
              </div>
              <p style={{ color: "#444", fontSize: 14, lineHeight: 1.65, maxWidth: 280 }}>
                Agencia de software especializada en soluciones digitales para negocios de servicios. Hecho en Argentina.
              </p>
            </div>

            <div>
              <p style={{ fontSize: 12, fontWeight: 700, textTransform: "uppercase" as const, letterSpacing: "0.08em", color: "#333", marginBottom: 18 }}>Productos</p>
              <a href={SALON_URL} target="_blank" rel="noopener noreferrer" className="footer-link" style={{ display: "block", color: "#444", fontSize: 14, textDecoration: "none", marginBottom: 11 }}>Flowix Book</a>
              <p style={{ color: "#222", fontSize: 13, marginTop: 8 }}>Más próximamente...</p>
            </div>

            <div>
              <p style={{ fontSize: 12, fontWeight: 700, textTransform: "uppercase" as const, letterSpacing: "0.08em", color: "#333", marginBottom: 18 }}>Contacto</p>
              {[
                { label: "Consultas generales", href: WA },
                { label: "Marketing",           href: WA_MARKETING },
                { label: "Soporte técnico",     href: WA_SOPORTE },
              ].map(l => (
                <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" className="footer-link" style={{ display: "flex", alignItems: "center", gap: 7, color: "#444", fontSize: 14, textDecoration: "none", marginBottom: 13 }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" style={{ color: "#25d366", flexShrink: 0 }}><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                  {l.label}
                </a>
              ))}
              <a href="https://www.instagram.com/flowixagency/" target="_blank" rel="noopener noreferrer" className="footer-link" style={{ display: "flex", alignItems: "center", gap: 7, color: "#444", fontSize: 14, textDecoration: "none" }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" style={{ color: "#e1306c" }}><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                Instagram
              </a>
            </div>
          </div>

          <div className="footer-bottom">
            <span style={{ color: "#333", fontSize: 13 }}>© 2026 Flowix. Todos los derechos reservados.</span>
            <span style={{ color: "#222", fontSize: 13 }}>Hecho en Argentina 🇦🇷</span>
          </div>
        </div>
      </footer>

      <ScrollReveal />
    </main>
  );
}
