import ScrollReveal from "../components/ScrollReveal";

const G  = "#00CC6A";
const WA = `https://wa.me/5491126730927?text=Hola!%20Me%20interesa%20conocer%20m%C3%A1s%20sobre%20las%20automatizaciones%20de%20Flowix.`;

const GRAIN = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`;

const USE_CASES = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.38 2 2 0 0 1 3.6 1.21h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.18 6.18l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    ),
    title: "Respuestas automáticas por WhatsApp",
    desc: "El bot responde consultas frecuentes al instante, 24/7. Precios, horarios, disponibilidad — sin que tengas que estar.",
    color: "#25d366",
    colorAlpha: "rgba(37,211,102",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
      </svg>
    ),
    title: "Recordatorios de turno",
    desc: "Mensaje automático al cliente 24hs antes de su cita. Reduce cancelaciones sin que muevas un dedo.",
    color: "#a78bfa",
    colorAlpha: "rgba(167,139,250",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
    title: "Reportes automáticos",
    desc: "Recibís un resumen diario o semanal de tus métricas clave directo por WhatsApp o email. Sin entrar al sistema.",
    color: "#60a5fa",
    colorAlpha: "rgba(96,165,250",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/>
        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
      </svg>
    ),
    title: "Sincronización entre plataformas",
    desc: "Conectamos tu sistema de gestión con Google Sheets, Instagram, email u otras herramientas que ya usás.",
    color: G,
    colorAlpha: "rgba(0,204,106",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: "Seguimiento de nuevos leads",
    desc: "Cuando alguien te contacta, el flujo lo registra, manda un mensaje de bienvenida y te avisa a vos también.",
    color: "#f59e0b",
    colorAlpha: "rgba(245,158,11",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
      </svg>
    ),
    title: "Acciones disparadas por eventos",
    desc: "Cuando se genera una venta, llega un nuevo cliente o se cumple una condición — el sistema actúa solo.",
    color: "#f472b6",
    colorAlpha: "rgba(244,114,182",
  },
];

// Nodos del mockup de flujo
const FLOW_NODES = [
  { label: "Trigger", sub: "Nuevo mensaje WA",  color: "#25d366", x: 0   },
  { label: "Filtro",  sub: "¿Es consulta?",      color: G,         x: 180 },
  { label: "Bot",     sub: "Respuesta automática", color: "#a78bfa", x: 360 },
  { label: "CRM",     sub: "Registrar lead",     color: "#60a5fa", x: 540 },
];

export default function Automatizaciones() {
  return (
    <main style={{ fontFamily: "'Outfit', system-ui, sans-serif", color: "#fff", background: "#050508", overflowX: "hidden" }}>

      {/* Grain */}
      <div aria-hidden style={{ position: "fixed", inset: 0, backgroundImage: GRAIN, opacity: 0.022, pointerEvents: "none", zIndex: 9999 }} />

      {/* Bg glow */}
      <div aria-hidden style={{ position: "fixed", top: 0, left: 0, right: 0, height: "90vh", background: "radial-gradient(ellipse 100% 70% at 50% 0%, rgba(167,139,250,0.2) 0%, transparent 65%)", pointerEvents: "none", zIndex: 0 }} />
      <div aria-hidden style={{ position: "fixed", bottom: 0, right: "-10%", width: "55vw", height: "55vh", background: "radial-gradient(ellipse, rgba(0,204,106,0.05) 0%, transparent 65%)", pointerEvents: "none", zIndex: 0 }} />

      {/* ── NAV ── */}
      <nav style={{
        position: "sticky", top: 0, zIndex: 50,
        background: "rgba(0,0,0,0.82)", backdropFilter: "blur(24px)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        padding: "0 40px", display: "flex", alignItems: "center",
        justifyContent: "space-between", height: 68,
      }}>
        <a href="/" style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none" }}>
          <span style={{ fontFamily: "monospace", fontWeight: 800, fontSize: 22, color: G, textShadow: "0 0 5px rgba(0,204,106,0.55), 0 0 12px rgba(0,204,106,0.25)", letterSpacing: "-1px" }}>{"</>"}</span>
          <span style={{ fontWeight: 700, fontSize: 22, letterSpacing: "-0.5px" }}>
            <span style={{ color: "#fff" }}>Flo</span><span style={{ color: G }}>wix</span>
          </span>
        </a>

        <div className="nav-links-row">
          {[
            { label: "Inicio",    href: "/" },
            { label: "Servicios", href: "/#servicios" },
            { label: "Productos", href: "/#productos" },
            { label: "Contacto",  href: "/#contacto" },
          ].map(l => (
            <a key={l.label} href={l.href} className="nav-link" style={{ color: "#71717a", fontSize: 14, textDecoration: "none", padding: "8px 16px", borderRadius: 8 }}>{l.label}</a>
          ))}
        </div>

        <a href={WA} target="_blank" rel="noopener noreferrer" style={{
          background: "linear-gradient(135deg, #00CC6A 0%, #00E87A 100%)", color: "#000", fontSize: 14, fontWeight: 700,
          textDecoration: "none", padding: "10px 24px", borderRadius: 10,
        }}>Hablemos</a>
      </nav>

      {/* ── HERO ── */}
      <section className="hero-section" style={{
        minHeight: "calc(100vh - 68px)", display: "flex", alignItems: "center",
        position: "relative", overflow: "hidden", padding: "80px 40px",
      }}>
        <div aria-hidden style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(255,255,255,0.07) 1px, transparent 1px)", backgroundSize: "24px 24px", maskImage: "radial-gradient(ellipse 90% 90% at 50% 40%, #000 10%, transparent 70%)", WebkitMaskImage: "radial-gradient(ellipse 90% 90% at 50% 40%, #000 10%, transparent 70%)", pointerEvents: "none", zIndex: 1 }} />
        <div aria-hidden style={{ position: "absolute", top: "30%", right: "5%", width: 800, height: 800, background: "radial-gradient(circle, rgba(167,139,250,0.14) 0%, transparent 60%)", pointerEvents: "none" }} />
        <div aria-hidden style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 200, background: "linear-gradient(to bottom, transparent, #000)", pointerEvents: "none", zIndex: 2 }} />

        <div className="hero-grid" style={{ maxWidth: 1200, margin: "0 auto", width: "100%", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center", position: "relative", zIndex: 3 }}>

          {/* TEXTO */}
          <div>
            <a href="/" style={{ display: "flex", alignItems: "center", gap: 8, width: "fit-content", color: "#555", fontSize: 13, textDecoration: "none", marginBottom: 32 }} className="footer-link">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
              Volver al inicio
            </a>

            <div className="anim-up" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "rgba(167,139,250,0.08)", border: "1px solid rgba(167,139,250,0.22)",
              borderRadius: 20, padding: "6px 16px", marginBottom: 36,
              fontSize: 12, color: "#a78bfa", fontWeight: 600, letterSpacing: "0.02em",
            }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#a78bfa", display: "inline-block" }} />
              Automatizaciones · n8n + WhatsApp
            </div>

            <h1 className="anim-up" style={{
              fontSize: "clamp(38px, 5.5vw, 68px)", fontWeight: 800,
              lineHeight: 1.0, letterSpacing: "-3.5px",
              margin: "0 0 28px", animationDelay: "0.1s",
            }}>
              Tu negocio<br />trabajando solo,<br /><em style={{ fontFamily: "Georgia, 'Times New Roman', serif", fontStyle: "italic", color: "#a78bfa", letterSpacing: "-1px" }}>mientras dormís.</em>
            </h1>

            <p className="anim-up" style={{
              fontSize: "clamp(15px, 1.8vw, 17px)", color: "rgba(255,255,255,0.45)", lineHeight: 1.75,
              maxWidth: 420, animationDelay: "0.2s", fontWeight: 400, marginBottom: 40,
            }}>
              Automatizamos los procesos repetitivos de tu negocio con n8n y WhatsApp bots. Menos tiempo en tareas manuales, más tiempo para lo que importa.
            </p>

            <div className="anim-up" style={{ display: "flex", gap: 12, flexWrap: "wrap", animationDelay: "0.3s" }}>
              <a href={WA} target="_blank" rel="noopener noreferrer" style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: "linear-gradient(135deg, #a78bfa 0%, #c4b5fd 100%)",
                color: "#000", fontWeight: 700, fontSize: 14,
                textDecoration: "none", padding: "13px 28px", borderRadius: 10,
                boxShadow: "0 0 30px rgba(167,139,250,0.25)",
              }}>
                Quiero automatizar mi negocio
              </a>
              <a href="#casos" style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: "rgba(255,255,255,0.04)", color: "#888", fontWeight: 500, fontSize: 14,
                textDecoration: "none", padding: "13px 28px", borderRadius: 10,
                border: "1px solid rgba(255,255,255,0.1)",
              }}>
                Ver casos de uso ↓
              </a>
            </div>

            {/* Badges herramientas */}
            <div className="anim-up" style={{ display: "flex", gap: 10, marginTop: 36, flexWrap: "wrap", animationDelay: "0.4s" }}>
              {[
                { label: "n8n", color: "#ef4444" },
                { label: "WhatsApp API", color: "#25d366" },
                { label: "Webhooks", color: "#60a5fa" },
                { label: "OpenAI", color: "#a78bfa" },
              ].map(t => (
                <span key={t.label} style={{
                  fontSize: 12, fontWeight: 600, color: t.color,
                  background: `${t.color}11`, border: `1px solid ${t.color}33`,
                  borderRadius: 8, padding: "4px 12px",
                }}>{t.label}</span>
              ))}
            </div>
          </div>

          {/* MOCKUP — flujo de nodos */}
          <div className="hero-mockup" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div style={{
              width: "100%", maxWidth: 460,
              background: "rgba(8,8,12,0.95)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 18,
              boxShadow: "0 60px 120px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.04), inset 0 1px 0 rgba(255,255,255,0.07)",
              overflow: "hidden",
            }}>
              {/* Chrome */}
              <div style={{ padding: "11px 16px", background: "rgba(255,255,255,0.03)", borderBottom: "1px solid rgba(255,255,255,0.06)", display: "flex", alignItems: "center", gap: 8 }}>
                <div style={{ display: "flex", gap: 5 }}>
                  {["#ff5f56","#ffbd2e","#27c93f"].map(c => (
                    <div key={c} style={{ width: 10, height: 10, borderRadius: "50%", background: c }} />
                  ))}
                </div>
                <span style={{ flex: 1, textAlign: "center", fontSize: 10, color: "#2a2a2a", fontWeight: 600, letterSpacing: "0.04em" }}>Automatización activa — Editor de flujo</span>
                <div className="dot-blink" style={{ width: 7, height: 7, borderRadius: "50%", background: G }} />
              </div>

              <div style={{ padding: "28px 20px 24px" }}>
                {/* Nodos conectados */}
                <div style={{ position: "relative", overflowX: "auto", paddingBottom: 8 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 0, minWidth: 560 }}>
                    {FLOW_NODES.map((node, i) => (
                      <div key={i} style={{ display: "flex", alignItems: "center", flex: i < FLOW_NODES.length - 1 ? "0 0 auto" : "0 0 auto" }}>
                        {/* Nodo */}
                        <div className="slide-row" style={{
                          background: "rgba(255,255,255,0.04)",
                          border: `1px solid ${node.color}44`,
                          borderRadius: 12, padding: "10px 14px",
                          display: "flex", flexDirection: "column" as const, alignItems: "flex-start", gap: 4,
                          minWidth: 110,
                          animationDelay: `${0.4 + i * 0.12}s`,
                          boxShadow: `0 0 20px ${node.color}11`,
                        }}>
                          <div style={{ width: 28, height: 28, borderRadius: 8, background: `${node.color}18`, border: `1px solid ${node.color}33`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <div style={{ width: 8, height: 8, borderRadius: "50%", background: node.color }} />
                          </div>
                          <p style={{ margin: 0, fontSize: 11, fontWeight: 700, color: "#ccc" }}>{node.label}</p>
                          <p style={{ margin: 0, fontSize: 9, color: "#444", lineHeight: 1.4 }}>{node.sub}</p>
                        </div>
                        {/* Conector */}
                        {i < FLOW_NODES.length - 1 && (
                          <div style={{ display: "flex", alignItems: "center", width: 32, flexShrink: 0 }}>
                            <div style={{ flex: 1, height: 1, background: `linear-gradient(90deg, ${node.color}44, ${FLOW_NODES[i+1].color}44)` }} />
                            <svg width="6" height="8" viewBox="0 0 6 8" fill="none"><path d="M1 1l4 3-4 3" stroke={FLOW_NODES[i+1].color} strokeOpacity="0.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Log de ejecuciones */}
                <div style={{ marginTop: 20, background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 10, padding: "12px 14px" }}>
                  <p style={{ margin: "0 0 10px", fontSize: 8, color: "#2a2a2a", fontWeight: 700, textTransform: "uppercase" as const, letterSpacing: "0.1em" }}>Últimas ejecuciones</p>
                  {[
                    { time: "hace 2 min",  label: "Mensaje respondido automáticamente", ok: true  },
                    { time: "hace 8 min",  label: "Lead registrado en CRM",              ok: true  },
                    { time: "hace 14 min", label: "Recordatorio de turno enviado",       ok: true  },
                    { time: "hace 31 min", label: "Reporte diario generado",             ok: true  },
                  ].map((log, i) => (
                    <div key={i} className="slide-row" style={{
                      display: "flex", alignItems: "center", gap: 8, padding: "5px 0",
                      borderBottom: i < 3 ? "1px solid rgba(255,255,255,0.04)" : undefined,
                      animationDelay: `${0.6 + i * 0.08}s`,
                    }}>
                      <div style={{ width: 14, height: 14, borderRadius: "50%", background: "rgba(0,204,106,0.12)", border: "1px solid rgba(0,204,106,0.3)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <svg width="7" height="7" viewBox="0 0 24 24" fill="none" stroke={G} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                      </div>
                      <p style={{ margin: 0, fontSize: 10, color: "#666", flex: 1 }}>{log.label}</p>
                      <span style={{ fontSize: 8, color: "#2a2a2a", fontFamily: "monospace", flexShrink: 0 }}>{log.time}</span>
                    </div>
                  ))}
                </div>

                {/* Stats rápidas */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8, marginTop: 12 }}>
                  {[
                    { label: "Ejecuciones hoy", value: "147", color: G },
                    { label: "Tiempo ahorrado", value: "3.2hs", color: "#a78bfa" },
                    { label: "Tasa de éxito",   value: "99.3%", color: "#60a5fa" },
                  ].map((s, i) => (
                    <div key={i} className="slide-row" style={{
                      background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)",
                      borderRadius: 9, padding: "9px 11px",
                      animationDelay: `${0.8 + i * 0.07}s`,
                    }}>
                      <p style={{ margin: 0, fontSize: 7, color: "#444", marginBottom: 3 }}>{s.label}</p>
                      <p style={{ margin: 0, fontSize: 16, fontWeight: 800, color: s.color, letterSpacing: "-0.5px" }}>{s.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="bounce-y" style={{ position: "absolute", bottom: 28, left: "50%", zIndex: 4, pointerEvents: "none" }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
        </div>
      </section>

      {/* ── PAIN POINTS ── */}
      <section className="section-pad" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
        <div className="pain-grid" style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>

          <div className="sr">
            <p style={{ color: "#a78bfa", fontSize: 12, fontWeight: 700, textTransform: "uppercase" as const, letterSpacing: "0.12em", marginBottom: 14 }}>El problema</p>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 800, letterSpacing: "-2.5px", lineHeight: 1.05, marginBottom: 14 }}>
              ¿Cuánto tiempo<br />perdés por semana<br />en esto?
            </h2>
            <p style={{ color: "#999", fontSize: 16, lineHeight: 1.7, marginBottom: 40, maxWidth: 420 }}>
              Las tareas repetitivas consumen horas que podrías dedicar a hacer crecer tu negocio.
            </p>
            <div style={{ display: "flex", flexDirection: "column" as const, gap: 0 }}>
              {[
                "Respondés las mismas preguntas por WhatsApp todos los días — horarios, precios, disponibilidad",
                "Mandás recordatorios de turno a mano — uno por uno, antes de cada cita",
                "Pasás datos de un sistema a otro manualmente — errores, duplicados, tiempo perdido",
                "No sabés cómo está tu negocio hasta que te sentás a revisar — sin reportes automáticos",
              ].map((pain, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 14, padding: "18px 0", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                  <div style={{ width: 22, height: 22, borderRadius: 6, flexShrink: 0, marginTop: 1, background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.2)", display: "flex", alignItems: "center", justifyContent: "center" }}>
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

          <div className="sr" style={{ transitionDelay: "0.15s" }}>
            <div style={{ background: "rgba(8,8,12,0.95)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 20, overflow: "hidden", boxShadow: "0 40px 80px rgba(0,0,0,0.5)" }}>
              <div style={{ padding: "12px 16px", background: "rgba(255,255,255,0.03)", borderBottom: "1px solid rgba(255,255,255,0.06)", display: "flex", alignItems: "center", gap: 6 }}>
                {["#ff5f56","#ffbd2e","#27c93f"].map(c => <div key={c} style={{ width: 9, height: 9, borderRadius: "50%", background: c }} />)}
                <span style={{ flex: 1, textAlign: "center", fontSize: 10, color: "#333", fontWeight: 600, letterSpacing: "0.04em" }}>Sin automatizar</span>
              </div>
              <div style={{ padding: 28 }}>
                <p style={{ fontSize: 10, color: "#333", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" as const, marginBottom: 8 }}>Tiempo perdido por semana</p>
                <p style={{ fontSize: 52, fontWeight: 900, color: "#ef4444", letterSpacing: "-3px", margin: 0, lineHeight: 1 }}>+6hs</p>
                <p style={{ fontSize: 13, color: "#666", marginTop: 6, marginBottom: 20 }}>en tareas que un flujo automático haría solo</p>
                <div style={{ height: 4, background: "rgba(239,68,68,0.15)", borderRadius: 4, marginBottom: 20, overflow: "hidden" }}>
                  <div style={{ width: "78%", height: "100%", background: "#ef4444", borderRadius: 4 }} />
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
                  {["Respuestas manuales","Recordatorios","Carga de datos","Sin reportes"].map(t => (
                    <span key={t} style={{ fontSize: 11, color: "#555", background: "rgba(239,68,68,0.06)", border: "1px solid rgba(239,68,68,0.12)", borderRadius: 6, padding: "4px 10px" }}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICIOS ── */}
      <section className="section-pad" style={{ borderTop: "1px solid rgba(255,255,255,0.08)", background: "#08080f" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="sr" style={{ marginBottom: 64 }}>
            <p style={{ color: "#a78bfa", fontSize: 12, fontWeight: 700, textTransform: "uppercase" as const, letterSpacing: "0.12em", marginBottom: 14 }}>Lo que hacemos</p>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 800, letterSpacing: "-2.5px", lineHeight: 1.04, maxWidth: 540 }}>
              Dos herramientas,<br />infinitas posibilidades.
            </h2>
          </div>

          <div className="services-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>

            {/* n8n */}
            <div className="diff-card sr" style={{ background: "rgba(239,68,68,0.05)", border: "1px solid rgba(239,68,68,0.18)", borderRadius: 24, padding: 40, display: "flex", flexDirection: "column" as const, position: "relative", overflow: "hidden" }}>
              <div aria-hidden style={{ position: "absolute", top: -50, right: -50, width: 180, height: 180, background: "radial-gradient(circle, rgba(239,68,68,0.1) 0%, transparent 65%)", pointerEvents: "none" }} />
              <div style={{ width: 52, height: 52, borderRadius: 14, background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.22)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 24 }}>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
              </div>
              <h3 style={{ fontSize: 24, fontWeight: 800, letterSpacing: "-0.5px", marginBottom: 12 }}>Flujos con n8n</h3>
              <p style={{ fontSize: 15, color: "#999", lineHeight: 1.75, marginBottom: 28 }}>
                Diseñamos e implementamos flujos de automatización visuales que conectan tus herramientas y ejecutan acciones de forma automática, sin intervención humana.
              </p>
              <div style={{ display: "flex", flexDirection: "column" as const, gap: 10, marginBottom: 32, flex: 1 }}>
                {[
                  "Flujos disparados por eventos (webhook, schedule, form)",
                  "Conexión con +400 servicios y APIs",
                  "Lógica condicional y manejo de errores",
                  "Hosting propio o en la nube",
                ].map(item => (
                  <div key={item} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <div style={{ width: 16, height: 16, borderRadius: 5, background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.2)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    </div>
                    <span style={{ fontSize: 13, color: "#888" }}>{item}</span>
                  </div>
                ))}
              </div>
              <a href={WA} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(239,68,68,0.1)", color: "#ef4444", fontWeight: 700, fontSize: 14, textDecoration: "none", padding: "12px 24px", borderRadius: 10, border: "1px solid rgba(239,68,68,0.25)", width: "fit-content" }}>
                Quiero un flujo →
              </a>
            </div>

            {/* WhatsApp bots */}
            <div className="diff-card sr" style={{ background: "rgba(37,211,102,0.05)", border: "1px solid rgba(37,211,102,0.18)", borderRadius: 24, padding: 40, display: "flex", flexDirection: "column" as const, position: "relative", overflow: "hidden", transitionDelay: "0.1s" }}>
              <div aria-hidden style={{ position: "absolute", top: -50, right: -50, width: 180, height: 180, background: "radial-gradient(circle, rgba(37,211,102,0.1) 0%, transparent 65%)", pointerEvents: "none" }} />
              <div style={{ width: 52, height: 52, borderRadius: 14, background: "rgba(37,211,102,0.1)", border: "1px solid rgba(37,211,102,0.22)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 24 }}>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="#25d366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
              </div>
              <h3 style={{ fontSize: 24, fontWeight: 800, letterSpacing: "-0.5px", marginBottom: 12 }}>WhatsApp Bots</h3>
              <p style={{ fontSize: 15, color: "#999", lineHeight: 1.75, marginBottom: 28 }}>
                Bots inteligentes que atienden a tus clientes automáticamente. Responden preguntas, toman datos, mandan recordatorios y escalan al humano cuando es necesario.
              </p>
              <div style={{ display: "flex", flexDirection: "column" as const, gap: 10, marginBottom: 32, flex: 1 }}>
                {[
                  "Respuestas automáticas a consultas frecuentes",
                  "Flujos de conversación personalizados",
                  "Recordatorios y notificaciones automáticas",
                  "Integración con tu sistema de gestión",
                ].map(item => (
                  <div key={item} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <div style={{ width: 16, height: 16, borderRadius: 5, background: "rgba(37,211,102,0.1)", border: "1px solid rgba(37,211,102,0.2)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#25d366" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    </div>
                    <span style={{ fontSize: 13, color: "#888" }}>{item}</span>
                  </div>
                ))}
              </div>
              <a href={WA} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(37,211,102,0.1)", color: "#25d366", fontWeight: 700, fontSize: 14, textDecoration: "none", padding: "12px 24px", borderRadius: 10, border: "1px solid rgba(37,211,102,0.25)", width: "fit-content" }}>
                Quiero un bot →
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* ── CASOS DE USO ── */}
      <section id="casos" className="section-pad" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="sr" style={{ marginBottom: 64 }}>
            <p style={{ color: "#a78bfa", fontSize: 12, fontWeight: 700, textTransform: "uppercase" as const, letterSpacing: "0.12em", marginBottom: 14 }}>Casos de uso</p>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 800, letterSpacing: "-2.5px", lineHeight: 1.04, maxWidth: 540 }}>
              ¿Qué podemos<br />automatizar para vos?
            </h2>
            <p style={{ color: "#999", fontSize: 17, lineHeight: 1.75, marginTop: 18, maxWidth: 500 }}>
              Estos son algunos de los flujos más comunes que implementamos. Si tenés algo específico en mente, lo construimos.
            </p>
          </div>

          <div className="diff-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14 }}>
            {USE_CASES.map((uc, i) => (
              <div key={i} className="diff-card sr" style={{
                background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 18, padding: 28, transitionDelay: `${i * 0.07}s`,
              }}>
                <div style={{ width: 42, height: 42, borderRadius: 11, background: `${uc.colorAlpha},0.1)`, border: `1px solid ${uc.colorAlpha},0.22)`, display: "flex", alignItems: "center", justifyContent: "center", color: uc.color, marginBottom: 18 }}>
                  {uc.icon}
                </div>
                <h3 style={{ fontSize: 16, fontWeight: 700, letterSpacing: "-0.3px", marginBottom: 10 }}>{uc.title}</h3>
                <p style={{ fontSize: 14, color: "#999", lineHeight: 1.7, margin: 0 }}>{uc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CÓMO LO IMPLEMENTAMOS ── */}
      <section className="section-pad" style={{ borderTop: "1px solid rgba(255,255,255,0.08)", background: "#08080f" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="sr" style={{ marginBottom: 64, textAlign: "center" as const }}>
            <p style={{ color: "#a78bfa", fontSize: 12, fontWeight: 700, textTransform: "uppercase" as const, letterSpacing: "0.12em", marginBottom: 14 }}>El proceso</p>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 800, letterSpacing: "-2.5px", lineHeight: 1.04 }}>
              De cero a automatizado<br />en <em style={{ fontFamily: "Georgia, 'Times New Roman', serif", fontStyle: "italic", color: "#a78bfa" }}>días, no meses.</em>
            </h2>
          </div>

          <div className="steps-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 2 }}>
            {[
              { num: "01", title: "Mapeamos tu flujo", desc: "Entendemos qué hacés a mano hoy, cuántas veces por semana y qué debería pasar en cada caso." },
              { num: "02", title: "Diseñamos la automatización", desc: "Armamos el flujo en n8n o el bot de WhatsApp con toda la lógica que necesitás." },
              { num: "03", title: "Testeamos juntos", desc: "Probamos cada escenario posible con vos hasta que el flujo funcione exactamente como querés." },
              { num: "04", title: "Lo dejamos andando", desc: "Activamos la automatización y queda corriendo sola. Soporte incluido si algo cambia." },
            ].map((step, i) => (
              <div key={i} className="sr diff-card" style={{
                background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.09)",
                borderRadius: 18, padding: 28, transitionDelay: `${i * 0.08}s`, position: "relative",
              }}>
                <div style={{ width: 40, height: 40, borderRadius: 10, background: "rgba(167,139,250,0.12)", border: "1px solid rgba(167,139,250,0.25)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 800, color: "#a78bfa", letterSpacing: "-0.5px", marginBottom: 20 }}>
                  {step.num}
                </div>
                <h3 style={{ fontSize: 16, fontWeight: 700, letterSpacing: "-0.3px", marginBottom: 10 }}>{step.title}</h3>
                <p style={{ fontSize: 14, color: "#999", lineHeight: 1.7, margin: 0 }}>{step.desc}</p>
                {i < 3 && (
                  <div aria-hidden style={{ position: "absolute", top: 36, right: -14, zIndex: 1, width: 28, height: 1, background: "rgba(167,139,250,0.2)" }} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section-pad" style={{ borderTop: "1px solid rgba(255,255,255,0.08)", position: "relative" }}>
        <div aria-hidden style={{ position: "absolute", bottom: 0, left: "50%", transform: "translateX(-50%)", width: "90%", height: "60%", background: "radial-gradient(ellipse, rgba(167,139,250,0.1) 0%, transparent 65%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative" }}>
          <div className="cta-box sr" style={{
            background: "linear-gradient(160deg, rgba(167,139,250,0.12) 0%, rgba(0,0,0,0) 55%)",
            border: "1px solid rgba(167,139,250,0.3)", borderRadius: 28,
            textAlign: "center" as const, position: "relative", overflow: "hidden",
            boxShadow: "0 0 120px rgba(167,139,250,0.12), 0 40px 120px rgba(0,0,0,0.55), inset 0 1px 0 rgba(167,139,250,0.18)",
          }}>
            <div aria-hidden style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg, transparent 0%, rgba(167,139,250,0.9) 50%, transparent 100%)" }} />
            <div aria-hidden style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)", backgroundSize: "28px 28px", maskImage: "radial-gradient(ellipse 85% 85% at 50% 50%, #000 10%, transparent 80%)", WebkitMaskImage: "radial-gradient(ellipse 85% 85% at 50% 50%, #000 10%, transparent 80%)", pointerEvents: "none" }} />
            <div aria-hidden style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 800, height: 500, background: "radial-gradient(ellipse, rgba(167,139,250,0.15) 0%, transparent 65%)", pointerEvents: "none" }} />
            <p style={{ color: "#a78bfa", fontSize: 12, fontWeight: 700, textTransform: "uppercase" as const, letterSpacing: "0.12em", marginBottom: 20, position: "relative" }}>Empezá hoy</p>
            <h2 style={{ fontSize: "clamp(26px, 4.5vw, 56px)", fontWeight: 800, letterSpacing: "-3px", lineHeight: 1.02, marginBottom: 22, position: "relative" }}>
              Contanos qué hacés<br />a mano. Lo automatizamos.
            </h2>
            <p style={{ fontSize: 17, color: "#999", lineHeight: 1.75, maxWidth: 460, margin: "0 auto 48px", position: "relative" }}>
              Una charla de 20 minutos alcanza para entender tu caso y ver qué se puede hacer.
            </p>
            <div className="cta-buttons">
              <a href={WA} target="_blank" rel="noopener noreferrer" style={{ background: "linear-gradient(135deg, #a78bfa 0%, #c4b5fd 100%)", color: "#000", fontWeight: 700, fontSize: 15, textDecoration: "none", padding: "16px 36px", borderRadius: 12, boxShadow: "0 0 40px rgba(167,139,250,0.3)" }}>
                Contactar por WhatsApp
              </a>
              <a href="/" style={{ background: "rgba(255,255,255,0.05)", color: "#ccc", fontWeight: 500, fontSize: 15, textDecoration: "none", padding: "16px 36px", borderRadius: 12, border: "1px solid rgba(255,255,255,0.1)" }}>
                Ver todos los servicios
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER minimal ── */}
      <footer style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "32px 40px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
        <a href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
          <span style={{ fontFamily: "monospace", fontWeight: 800, fontSize: 18, color: G }}>{"</>"}</span>
          <span style={{ fontWeight: 700, fontSize: 18, letterSpacing: "-0.5px" }}>
            <span style={{ color: "#fff" }}>Flo</span><span style={{ color: G }}>wix</span>
          </span>
        </a>
        <span style={{ color: "#555", fontSize: 13 }}>© 2026 Flowix. Hecho en Argentina 🇦🇷</span>
      </footer>

      <ScrollReveal />
    </main>
  );
}
