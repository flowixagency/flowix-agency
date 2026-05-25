import SplineHero from "./components/SplineHero";
import ScrollReveal from "./components/ScrollReveal";

const G = "#00CC6A";
const GRAIN = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`;

const WA      = `https://wa.me/5491126730927?text=Hola!%20Me%20interesa%20conocer%20m%C3%A1s%20sobre%20Flowix.`;
const SALON_URL = "https://flowix-web-production.up.railway.app";

const differentiators = [
  {
    title: "Desarrollo veloz",
    desc: "De la idea al producto en semanas, no meses. Metodología ágil centrada en resultados.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
      </svg>
    ),
  },
  {
    title: "Especialización vertical",
    desc: "No hacemos software genérico. Cada producto está diseñado específicamente para su rubro.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
      </svg>
    ),
  },
  {
    title: "Mejora continua",
    desc: "El software evoluciona junto con tu negocio. Actualizaciones basadas en feedback real.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/>
        <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>
      </svg>
    ),
  },
  {
    title: "Soporte local",
    desc: "Estamos en Argentina. Misma zona horaria, mismo contexto, atención real cuando la necesitás.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
      </svg>
    ),
  },
  {
    title: "100% en la nube",
    desc: "Tus datos siempre disponibles y seguros. Accedé desde cualquier dispositivo, en cualquier momento.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>
      </svg>
    ),
  },
  {
    title: "Automatizaciones",
    desc: "Integramos n8n y otras herramientas para automatizar los procesos repetitivos de tu negocio.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 9h.01M15 9h.01M9 15h.01M15 15h.01M12 12h.01"/>
      </svg>
    ),
  },
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

        <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
          {[
            { label: "Productos",     href: "#productos" },
            { label: "Por qué Flowix", href: "#por-que" },
            { label: "Contacto",      href: "#contacto" },
          ].map(l => (
            <a key={l.label} href={l.href} className="nav-link" style={{ color: "#71717a", fontSize: 14, textDecoration: "none", padding: "8px 16px", borderRadius: 8, transition: "color 0.15s" }}>{l.label}</a>
          ))}
        </div>

        <a href={WA} target="_blank" rel="noopener noreferrer" style={{
          background: G, color: "#000", fontSize: 14, fontWeight: 700,
          textDecoration: "none", padding: "10px 24px", borderRadius: 10,
        }}>Hablemos</a>
      </nav>

      {/* ── HERO — pantalla completa con Spline interactivo ───── */}
      <section style={{ position: "relative", height: "calc(100vh - 68px)", overflow: "hidden" }}>

        {/* Spline ocupa todo el hero — interactivo con el cursor */}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: -100 }}>
          <SplineHero />
        </div>

        {/* Gradiente izquierdo para legibilidad del texto */}
        <div aria-hidden style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(90deg, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.35) 50%, transparent 100%)",
          pointerEvents: "none", zIndex: 5,
        }} />

        {/* Gradiente inferior para transición suave a la siguiente sección */}
        <div aria-hidden style={{
          position: "absolute", bottom: 0, left: 0, right: 0, height: 180,
          background: "linear-gradient(to bottom, transparent, #000)",
          pointerEvents: "none", zIndex: 6,
        }} />

        {/* Texto overlay — sin pointer events para no bloquear el robot */}
        <div style={{
          position: "absolute", inset: 0, zIndex: 10,
          display: "flex", alignItems: "center",
          padding: "0 64px",
          pointerEvents: "none",
        }}>
          <div style={{ maxWidth: 560 }}>
            <div className="anim-up" style={{
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
              fontSize: "clamp(44px, 5.5vw, 76px)", fontWeight: 800,
              lineHeight: 1.0, letterSpacing: "-3.5px",
              margin: "0 0 28px", animationDelay: "0.1s",
            }}>
              Construimos<br />el software de<br /><span style={{ color: G }}>tu negocio.</span>
            </h1>

            <p className="anim-up" style={{
              fontSize: 18, color: "rgba(255,255,255,0.5)", lineHeight: 1.75,
              maxWidth: 420, animationDelay: "0.2s", fontWeight: 400,
            }}>
              Sistemas de gestión a medida para negocios de servicios. Soluciones reales, sin complejidad innecesaria.
            </p>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ────────────────────────────────────────── */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.05)", background: "rgba(255,255,255,0.01)" }}>
        <div className="stats-bar sr" style={{ maxWidth: 1200, margin: "0 auto", padding: "32px 40px", display: "grid", gridTemplateColumns: "repeat(4,1fr)", textAlign: "center" as const }}>
          {[
            { value: "1",    label: "Producto activo" },
            { value: "+8",   label: "Rubros cubiertos" },
            { value: "100%", label: "Foco en resultados" },
            { value: "ARG",  label: "Desarrollo local" },
          ].map((s, i) => (
            <div key={i} style={{ padding: "0 24px", borderRight: i < 3 ? "1px solid rgba(255,255,255,0.05)" : undefined }}>
              <p style={{ margin: 0, fontSize: 32, fontWeight: 800, letterSpacing: "-1.5px", color: G }}>{s.value}</p>
              <p style={{ margin: "6px 0 0", fontSize: 13, color: "#444" }}>{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── PRODUCTOS ────────────────────────────────────────── */}
      <section id="productos" style={{ padding: "110px 40px", maxWidth: 1200, margin: "0 auto" }}>
        <div className="sr" style={{ marginBottom: 68 }}>
          <p style={{ color: G, fontSize: 12, fontWeight: 700, textTransform: "uppercase" as const, letterSpacing: "0.12em", marginBottom: 14 }}>Nuestros productos</p>
          <h2 style={{ fontSize: "clamp(32px, 4vw, 56px)", fontWeight: 800, letterSpacing: "-2.5px", lineHeight: 1.04, maxWidth: 580 }}>
            Software diseñado<br />para cada rubro.
          </h2>
          <p style={{ color: "#6b6b6b", fontSize: 17, lineHeight: 1.75, marginTop: 18, maxWidth: 500 }}>
            Cada producto nace del entendimiento profundo del negocio al que sirve. Sin funciones de relleno, sin complicaciones.
          </p>
        </div>

        <div className="products-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>

          {/* Card 1 — producto activo */}
          <div className="product-card sr" style={{
            background: "rgba(0,204,106,0.04)", border: "1px solid rgba(0,204,106,0.14)",
            borderRadius: 24, padding: 40, position: "relative", overflow: "hidden",
            boxShadow: "0 8px 40px rgba(0,0,0,0.4)",
          }}>
            <div aria-hidden style={{ position: "absolute", top: -60, right: -60, width: 220, height: 220, background: `radial-gradient(circle, rgba(0,204,106,0.08) 0%, transparent 65%)`, pointerEvents: "none" }} />

            <div style={{ display: "inline-flex", alignItems: "center", gap: 7, background: "rgba(0,204,106,0.1)", border: "1px solid rgba(0,204,106,0.2)", borderRadius: 20, padding: "5px 14px", marginBottom: 28, fontSize: 11, fontWeight: 700, color: G, letterSpacing: "0.04em" }}>
              <span style={{ width: 5, height: 5, borderRadius: "50%", background: G, display: "inline-block" }} />
              Disponible ahora
            </div>

            <h3 style={{ fontSize: 30, fontWeight: 800, letterSpacing: "-1px", marginBottom: 14, lineHeight: 1.1 }}>
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

            {/* Preview */}
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

              <h3 style={{ fontSize: 30, fontWeight: 800, letterSpacing: "-1px", marginBottom: 14, lineHeight: 1.1, color: "#555" }}>
                Más verticales<br />en camino
              </h3>
              <p style={{ fontSize: 15, color: "#3a3a3a", lineHeight: 1.75, marginBottom: 36 }}>
                Estamos desarrollando soluciones para nuevos rubros. Si tenés un negocio de servicios y necesitás un sistema a medida, podemos construirlo juntos.
              </p>

              {/* Placeholder dots */}
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

      {/* ── POR QUÉ FLOWIX ───────────────────────────────────── */}
      <section id="por-que" style={{ padding: "110px 40px", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="sr" style={{ marginBottom: 68 }}>
            <p style={{ color: G, fontSize: 12, fontWeight: 700, textTransform: "uppercase" as const, letterSpacing: "0.12em", marginBottom: 14 }}>Por qué elegirnos</p>
            <h2 style={{ fontSize: "clamp(32px, 4vw, 56px)", fontWeight: 800, letterSpacing: "-2.5px", lineHeight: 1.04, maxWidth: 520 }}>
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
      <section id="contacto" style={{ padding: "110px 40px", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="sr" style={{
            background: "linear-gradient(135deg, rgba(0,204,106,0.06) 0%, rgba(0,0,0,0) 60%)",
            border: "1px solid rgba(0,204,106,0.12)", borderRadius: 28,
            padding: "90px 64px", textAlign: "center" as const, position: "relative", overflow: "hidden",
          }}>
            <div aria-hidden style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 700, height: 400, background: `radial-gradient(ellipse, rgba(0,204,106,0.07) 0%, transparent 65%)`, pointerEvents: "none" }} />
            <p style={{ color: G, fontSize: 12, fontWeight: 700, textTransform: "uppercase" as const, letterSpacing: "0.12em", marginBottom: 20, position: "relative" }}>¿No encontrás tu rubro?</p>
            <h2 style={{ fontSize: "clamp(30px, 4.5vw, 60px)", fontWeight: 800, letterSpacing: "-3px", lineHeight: 1.02, marginBottom: 22, position: "relative" }}>
              Construimos lo que<br />tu negocio necesita.
            </h2>
            <p style={{ fontSize: 17, color: "#6b6b6b", lineHeight: 1.75, maxWidth: 460, margin: "0 auto 48px", position: "relative" }}>
              Si tenés un negocio de servicios y necesitás un sistema a medida, hablemos. Analizamos tu caso sin compromiso.
            </p>
            <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap", position: "relative" }}>
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
      <footer style={{ borderTop: "1px solid rgba(255,255,255,0.05)", padding: "60px 40px 36px" }}>
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

          <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: 28, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
            <span style={{ color: "#333", fontSize: 13 }}>© 2026 Flowix. Todos los derechos reservados.</span>
            <span style={{ color: "#222", fontSize: 13 }}>Hecho en Argentina 🇦🇷</span>
          </div>
        </div>
      </footer>

      <ScrollReveal />
    </main>
  );
}
