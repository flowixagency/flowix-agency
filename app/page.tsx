import ScrollReveal from "./components/ScrollReveal";

const G = "#00CC6A";
const GRAIN = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`;

const WA       = `https://wa.me/5491126730927?text=Hola!%20Me%20interesa%20conocer%20m%C3%A1s%20sobre%20Flowix.`;
const SALON_URL = "https://flowix-landing-six.vercel.app";

const differentiators = [
  {
    title: "Desarrollo veloz",
    desc: "De la idea al producto en semanas, no meses. Metodología ágil centrada en resultados.",
    icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>),
  },
  {
    title: "Especialización vertical",
    desc: "No hacemos software genérico. Cada producto está diseñado específicamente para su rubro.",
    icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/></svg>),
  },
  {
    title: "Mejora continua",
    desc: "El software evoluciona junto con tu negocio. Actualizaciones basadas en feedback real.",
    icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>),
  },
  {
    title: "Soporte local",
    desc: "Estamos en Argentina. Misma zona horaria, mismo contexto, atención real cuando la necesitás.",
    icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>),
  },
  {
    title: "100% en la nube",
    desc: "Tus datos siempre disponibles y seguros. Accedé desde cualquier dispositivo, en cualquier momento.",
    icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>),
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
        <div aria-hidden style={{ position: "absolute", top: "40%", right: "10%", width: 700, height: 700, background: "radial-gradient(circle, rgba(0,204,106,0.06) 0%, transparent 60%)", pointerEvents: "none" }} />
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
              Construimos<br />el software de<br /><span className="shimmer-green">tu negocio.</span>
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
                  BarberSGI · Dashboard
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
                "No sabés exactamente cuánto ganaste hoy ni esta semana",
                "Cada dato en un lugar distinto: Instagram, papel, memoria",
                "Si vos no estás, el negocio se para",
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

        <div className="products-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>

          {/* Card 1 — producto activo */}
          <div className="product-card glow-card sr" style={{
            background: "rgba(0,204,106,0.04)",
            borderRadius: 24, padding: 40, position: "relative", overflow: "hidden",
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
              Suite de gestión<br />para servicios
            </h3>
            <p style={{ fontSize: 15, color: "#6b6b6b", lineHeight: 1.75, marginBottom: 28 }}>
              Plataforma completa para negocios de cuidado personal. Agenda inteligente, caja, clientes, reportes e inventario en un solo lugar.
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 7, marginBottom: 36 }}>
              {["Barberías", "Peluquerías", "Estéticas", "Nail Studios", "Spas", "Masajes", "Depilación", "Tattoo"].map(n => (
                <span key={n} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 8, padding: "4px 12px", fontSize: 12, color: "#777" }}>{n}</span>
              ))}
            </div>

            <div style={{ background: "rgba(0,0,0,0.5)", borderRadius: 14, padding: 16, border: "1px solid rgba(255,255,255,0.06)", marginBottom: 36 }}>
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

          {/* Card 2 — próximamente */}
          <div className="product-card sr" style={{
            background: "rgba(255,255,255,0.015)", border: "1px solid rgba(255,255,255,0.07)",
            borderRadius: 24, padding: 40, display: "flex", flexDirection: "column" as const,
            justifyContent: "space-between", transitionDelay: "0.1s",
          }}>
            <div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 7, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.09)", borderRadius: 20, padding: "5px 14px", marginBottom: 28, fontSize: 11, fontWeight: 700, color: "#555", letterSpacing: "0.04em" }}>
                <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#555", display: "inline-block" }} />
                Próximamente
              </div>

              <h3 style={{ fontSize: "clamp(22px, 2.5vw, 30px)", fontWeight: 800, letterSpacing: "-1px", marginBottom: 14, lineHeight: 1.1, color: "#555" }}>
                Más verticales<br />en camino
              </h3>
              <p style={{ fontSize: 15, color: "#3a3a3a", lineHeight: 1.75, marginBottom: 36 }}>
                Estamos desarrollando soluciones para nuevos rubros. Si tenés un negocio de servicios y necesitás un sistema a medida, podemos construirlo juntos.
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 36 }}>
                {["Próximo vertical", "En desarrollo", "Nuevo rubro", "Por definir"].map((l, i) => (
                  <div key={i} style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: 10, padding: "14px 16px" }}>
                    <div style={{ width: 32, height: 3, background: "rgba(255,255,255,0.06)", borderRadius: 2, marginBottom: 8 }} />
                    <p style={{ margin: 0, fontSize: 11, color: "#333" }}>{l}</p>
                  </div>
                ))}
              </div>
            </div>

            <a href={WA} target="_blank" rel="noopener noreferrer" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "rgba(255,255,255,0.05)", color: "#777", fontWeight: 600, fontSize: 14,
              textDecoration: "none", padding: "13px 28px", borderRadius: 10,
              border: "1px solid rgba(255,255,255,0.09)",
            }}>
              Consultar →
            </a>
          </div>

        </div>
      </section>

      {/* ── CÓMO TRABAJAMOS ──────────────────────────────────── */}
      <section className="section-pad" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="sr" style={{ marginBottom: 68, textAlign: "center" as const }}>
            <p style={{ color: G, fontSize: 12, fontWeight: 700, textTransform: "uppercase" as const, letterSpacing: "0.12em", marginBottom: 14 }}>Cómo trabajamos</p>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 56px)", fontWeight: 800, letterSpacing: "-2.5px", lineHeight: 1.04 }}>
              Simple, directo<br />y <span className="shimmer-green">sin vueltas.</span>
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
              <a href="https://www.instagram.com/flowix.ar/" target="_blank" rel="noopener noreferrer" style={{ background: "rgba(255,255,255,0.05)", color: "#ccc", fontWeight: 500, fontSize: 15, textDecoration: "none", padding: "16px 36px", borderRadius: 12, border: "1px solid rgba(255,255,255,0.1)" }}>
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
              <p style={{ color: "#444", fontSize: 14, lineHeight: 1.65, marginBottom: 20, maxWidth: 280 }}>
                Agencia de software especializada en soluciones digitales para negocios de servicios. Hecho en Argentina.
              </p>
              <a href="https://www.instagram.com/flowix.ar/" target="_blank" rel="noopener noreferrer" className="footer-link" style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "#555", fontSize: 13, textDecoration: "none", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 9, padding: "8px 14px" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                @flowix.ar
              </a>
            </div>

            <div>
              <p style={{ fontSize: 12, fontWeight: 700, textTransform: "uppercase" as const, letterSpacing: "0.08em", color: "#333", marginBottom: 18 }}>Productos</p>
              <a href={SALON_URL} target="_blank" rel="noopener noreferrer" className="footer-link" style={{ display: "block", color: "#444", fontSize: 14, textDecoration: "none", marginBottom: 11 }}>Suite de gestión para servicios</a>
              <p style={{ color: "#222", fontSize: 13, marginTop: 8 }}>Más próximamente...</p>
            </div>

            <div>
              <p style={{ fontSize: 12, fontWeight: 700, textTransform: "uppercase" as const, letterSpacing: "0.08em", color: "#333", marginBottom: 18 }}>Contacto</p>
              <a href={WA} target="_blank" rel="noopener noreferrer" className="footer-link" style={{ display: "flex", alignItems: "center", gap: 7, color: "#444", fontSize: 14, textDecoration: "none", marginBottom: 13 }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" style={{ color: "#25d366" }}><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                WhatsApp
              </a>
              <a href="https://www.instagram.com/flowix.ar/" target="_blank" rel="noopener noreferrer" className="footer-link" style={{ display: "flex", alignItems: "center", gap: 7, color: "#444", fontSize: 14, textDecoration: "none" }}>
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
