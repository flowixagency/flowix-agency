import Image from "next/image";
import ScrollReveal from "../components/ScrollReveal";

const G = "#00CC6A";

const WA = `https://wa.me/5491126730927?text=Hola!%20Me%20interesa%20conocer%20m%C3%A1s%20sobre%20Flowix.`;

const PROJECTS = [
  {
    name: "Complejo Los Peques",
    url: "https://complejolospeques.com",
    display: "complejolospeques.com",
    category: "Turismo & Alojamiento",
    description:
      "Sitio web para un complejo de cabañas en Mar Azul. Diseño cálido y cercano que transmite desconexión del ruido urbano y contacto con el bosque y el mar. Incluye información detallada de las cabañas, reglamento de estadía y acceso a reservas online.",
    tags: ["Alojamiento", "Turismo", "Reservas online"],
    accent: "#00CC6A",
    accentAlpha: "rgba(0,204,106",
    image: "/portfolio/peques.png",
  },
  {
    name: "Tang Soo Do Escobar",
    url: "https://www.tangsoodoescobar.com",
    display: "tangsoodoescobar.com",
    category: "Deporte & Academia",
    description:
      "Landing institucional para una academia de artes marciales en Escobar. Comunica la propuesta del Tang Soo Do para niños, adolescentes y adultos, y facilita el contacto para la primera clase de prueba gratuita.",
    tags: ["Artes Marciales", "Academia", "Deporte"],
    accent: "#f59e0b",
    accentAlpha: "rgba(245,158,11",
    image: "/portfolio/tangsoo.png",
  },
];

const GRAIN = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`;

export default function Portfolio() {
  return (
    <main style={{ fontFamily: "'Outfit', system-ui, sans-serif", color: "#fff", background: "#050508", overflowX: "hidden" }}>

      {/* Grain */}
      <div aria-hidden style={{ position: "fixed", inset: 0, backgroundImage: GRAIN, opacity: 0.022, pointerEvents: "none", zIndex: 9999 }} />

      {/* Bg glow */}
      <div aria-hidden style={{ position: "fixed", top: 0, left: 0, right: 0, height: "90vh", background: "radial-gradient(ellipse 100% 70% at 50% 0%, rgba(0,204,106,0.18) 0%, transparent 65%)", pointerEvents: "none", zIndex: 0 }} />

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
            { label: "Inicio",     href: "/" },
            { label: "Servicios",  href: "/#servicios" },
            { label: "Productos",  href: "/#productos" },
            { label: "Contacto",   href: "/#contacto" },
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
      <section className="section-pad" style={{ paddingBottom: 80, position: "relative" }}>
        <div aria-hidden style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)", backgroundSize: "24px 24px", maskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, #000 10%, transparent 70%)", WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, #000 10%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>

          <a href="/" style={{ display: "flex", alignItems: "center", gap: 8, width: "fit-content", color: "#555", fontSize: 14, textDecoration: "none", marginBottom: 40, transition: "color 0.15s" }}
            className="footer-link">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
            Volver al inicio
          </a>

          <div className="anim-up" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(0,204,106,0.07)", border: "1px solid rgba(0,204,106,0.2)", borderRadius: 20, padding: "6px 16px", marginBottom: 28, fontSize: 12, color: G, fontWeight: 600, letterSpacing: "0.02em" }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: G, display: "inline-block" }} />
            Desarrollo web · Proyectos
          </div>

          <h1 className="anim-up" style={{ fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 800, letterSpacing: "-3px", lineHeight: 1.05, marginBottom: 20, animationDelay: "0.1s" }}>
            Trabajos que<br />hablan por sí solos.
          </h1>
          <p className="anim-up" style={{ fontSize: "clamp(15px, 1.8vw, 17px)", color: "rgba(255,255,255,0.45)", lineHeight: 1.75, maxWidth: 480, animationDelay: "0.2s" }}>
            Sitios web que construimos para negocios reales. Cada uno diseñado desde cero para comunicar bien y funcionar mejor.
          </p>
        </div>
      </section>

      {/* ── PROYECTOS ── */}
      <section style={{ padding: "0 40px 120px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", flexDirection: "column" as const, gap: 32 }}>

          {PROJECTS.map((p, i) => (
            <div key={i} className="portfolio-card sr" style={{
              background: "rgba(8,8,12,0.95)",
              border: `1px solid rgba(255,255,255,0.09)`,
              borderRadius: 24,
              overflow: "hidden",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              transitionDelay: `${i * 0.1}s`,
            }}>

              {/* Info */}
              <div style={{ padding: "52px 52px 52px 52px", display: "flex", flexDirection: "column" as const, justifyContent: "center" }}>
                <span style={{ fontSize: 11, fontWeight: 700, color: p.accent, letterSpacing: "0.1em", textTransform: "uppercase" as const, marginBottom: 14 }}>{p.category}</span>
                <h2 style={{ fontSize: "clamp(24px, 2.5vw, 36px)", fontWeight: 800, letterSpacing: "-1px", lineHeight: 1.1, marginBottom: 18 }}>{p.name}</h2>
                <p style={{ fontSize: 15, color: "#888", lineHeight: 1.8, marginBottom: 28, maxWidth: 380 }}>{p.description}</p>

                <div style={{ display: "flex", flexWrap: "wrap", gap: 7, marginBottom: 36 }}>
                  {p.tags.map(t => (
                    <span key={t} style={{
                      fontSize: 12, color: "#666",
                      background: `${p.accentAlpha},0.06)`,
                      border: `1px solid ${p.accentAlpha},0.15)`,
                      borderRadius: 8, padding: "4px 12px",
                    }}>{t}</span>
                  ))}
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
                  <a href={p.url} target="_blank" rel="noopener noreferrer" style={{
                    display: "inline-flex", alignItems: "center", gap: 8,
                    background: `linear-gradient(135deg, ${p.accent} 0%, ${p.accent}cc 100%)`,
                    color: p.accent === G ? "#000" : "#000",
                    fontWeight: 700, fontSize: 14, textDecoration: "none",
                    padding: "12px 24px", borderRadius: 10,
                  }}>
                    Ver sitio
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                  </a>
                  <span style={{ fontSize: 13, color: "#333", fontFamily: "monospace" }}>{p.display}</span>
                </div>
              </div>

              {/* Preview screenshot */}
              <div style={{ background: `${p.accentAlpha},0.04)`, borderLeft: `1px solid rgba(255,255,255,0.06)`, padding: 40, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div style={{
                  width: "100%", maxWidth: 420,
                  background: "rgba(6,6,10,0.98)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: 14,
                  overflow: "hidden",
                  boxShadow: `0 32px 64px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04), 0 0 60px ${p.accentAlpha},0.08)`,
                }}>
                  {/* Browser chrome */}
                  <div style={{ padding: "10px 14px", background: "rgba(255,255,255,0.03)", borderBottom: "1px solid rgba(255,255,255,0.06)", display: "flex", alignItems: "center", gap: 7 }}>
                    <div style={{ display: "flex", gap: 5 }}>
                      {["#ff5f56","#ffbd2e","#27c93f"].map(c => (
                        <div key={c} style={{ width: 9, height: 9, borderRadius: "50%", background: c }} />
                      ))}
                    </div>
                    <div style={{ flex: 1, margin: "0 8px", background: "rgba(255,255,255,0.04)", borderRadius: 6, padding: "4px 10px", display: "flex", alignItems: "center", gap: 6 }}>
                      <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                      <span style={{ fontSize: 9, color: "#2a2a2a", fontFamily: "monospace" }}>{p.display}</span>
                    </div>
                  </div>
                  {/* Screenshot */}
                  <div style={{ position: "relative", width: "100%", aspectRatio: "16/10", overflow: "hidden" }}>
                    <Image src={p.image} alt={`Preview de ${p.name}`} fill style={{ objectFit: "cover", objectPosition: "top" }} sizes="420px" />
                  </div>
                </div>
              </div>

            </div>
          ))}

        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: "0 40px 120px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="cta-box sr" style={{
            background: "linear-gradient(160deg, rgba(0,204,106,0.12) 0%, rgba(0,0,0,0) 55%)",
            border: "1px solid rgba(0,204,106,0.3)", borderRadius: 24,
            textAlign: "center" as const, position: "relative", overflow: "hidden",
            padding: "72px 48px",
          }}>
            <div aria-hidden style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg, transparent 0%, rgba(0,204,106,0.8) 50%, transparent 100%)" }} />
            <div aria-hidden style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 600, height: 400, background: "radial-gradient(ellipse, rgba(0,204,106,0.12) 0%, transparent 65%)", pointerEvents: "none" }} />
            <p style={{ color: G, fontSize: 12, fontWeight: 700, textTransform: "uppercase" as const, letterSpacing: "0.12em", marginBottom: 16, position: "relative" }}>¿Querés tu sitio?</p>
            <h2 style={{ fontSize: "clamp(24px, 4vw, 48px)", fontWeight: 800, letterSpacing: "-2px", lineHeight: 1.05, marginBottom: 18, position: "relative" }}>
              Construimos el tuyo también.
            </h2>
            <p style={{ fontSize: 16, color: "#888", lineHeight: 1.75, maxWidth: 400, margin: "0 auto 40px", position: "relative" }}>
              Hablemos de tu proyecto. Propuesta en 48 horas, sin compromiso.
            </p>
            <a href={WA} target="_blank" rel="noopener noreferrer" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "linear-gradient(135deg, #00CC6A 0%, #00E87A 100%)",
              color: "#000", fontWeight: 700, fontSize: 15, textDecoration: "none",
              padding: "14px 32px", borderRadius: 12,
              boxShadow: "0 0 30px rgba(0,204,106,0.25)",
              position: "relative",
            }}>
              Contactar por WhatsApp
            </a>
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
