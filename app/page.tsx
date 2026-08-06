import ScrollReveal from "./components/ScrollReveal";
import RoiCalculator from "./components/RoiCalculator";
import FaqAccordion from "./components/FaqAccordion";
import TrustBanner from "./components/TrustBanner";

const G = "#00CC6A";
const B = "#60a5fa";
const P = "#a78bfa";
const O = "#f59e0b";
const NEON_GREEN = "#10B981";
const NEON_CYAN = "#0EA5E9";

const WA = `https://wa.me/5491126730927?text=Hola%20Flowix%2C%20quiero%20agendar%20una%20demo%20para%20mi%20negocio.`;
const WA_DEMO = `https://wa.me/5491126730927?text=Hola%20Flowix%2C%20quiero%20ver%20la%20demo%20en%20vivo%20para%20mi%20negocio.`;
const WA_MARKETING = `https://wa.me/5491169215257?text=Hola!%20Me%20interesa%20el%20marketing%20de%20Flowix%20para%20mi%20negocio.%20%C2%BFMe%20pod%C3%A9s%20contar%20m%C3%A1s%3F`;
const WA_SOPORTE = `https://wa.me/5491133383949?text=Hola!%20Necesito%20asistencia%20t%C3%A9cnica%20con%20Flowix.%20%C2%BFMe%20pod%C3%A9s%20ayudar%3F`;
const INSTAGRAM = `https://www.instagram.com/flowixagency/`;

const industrySolutions = [
  {
    title: "Estéticas & Salones",
    desc: "Agendamiento 24/7 sin perder tiempo respondiendo mensajes a mano y reducción de faltas sin aviso.",
    accent: G,
    badge: "Belleza & Salud",
    cardClass: "diff-card",
  },
  {
    title: "Gimnasios & Fitness",
    desc: "Reserva de clases de prueba instantánea y captura de prospectos calificados.",
    accent: B,
    badge: "Deportes",
    cardClass: "diff-card diff-card-blue",
  },
  {
    title: "Gastronomía & Comercios",
    desc: "Menú digital de alta velocidad y acumulación de reseñas de 5 estrellas en Google Maps.",
    accent: P,
    badge: "Comercios",
    cardClass: "diff-card diff-card-purple",
  },
  {
    title: "Profesionales & Clínicas",
    desc: "Calificación automática de pacientes y filtro previo antes de la consulta.",
    accent: O,
    badge: "Salud & Consultoría",
    cardClass: "diff-card diff-card-amber",
  },
];

const modularServices = [
  {
    title: "Landing Page High-Conversion",
    desc: "Página web ligera y de carga ultra rápida (<2s), diseñada para transformar visitas en consultas de WhatsApp o llamadas.",
    deliverables: [
      "Diseño Responsive optimizado para celulares",
      "Copywriting comercial enfocado en ventas",
      "Formulario e integración directa a WhatsApp",
    ],
    time: "3 a 5 días hábiles",
    icon: "🚀",
    accent: NEON_GREEN,
    waParam: "Landing%20Page%20High-Conversion",
  },
  {
    title: "Sitio Web Corporativo",
    desc: "Presencia digital completa para empresas y estudios que necesitan mostrar autoridad, catálogo de servicios y equipo.",
    deliverables: [
      "Hasta 5 secciones personalizadas + Blog",
      "Optimización SEO On-Page para aparecer en Google",
      "Integración con CRM, Email y WhatsApp",
    ],
    time: "7 a 12 días hábiles",
    icon: "🏢",
    accent: NEON_CYAN,
    waParam: "Sitio%20Web%20Corporativo",
  },
  {
    title: "Ecommerce / Tienda Online Standard",
    desc: "Catálogo digital de productos optimizado para vender 24/7 sin comisiones por plataforma.",
    deliverables: [
      "Carga de catálogo e integración con Mercado Pago / Stripe",
      "Configuración de métodos de envío y stock",
      "Panel autogestionable fácil de usar",
    ],
    time: "10 a 15 días hábiles",
    icon: "🛒",
    accent: NEON_GREEN,
    waParam: "Ecommerce%20%2F%20Tienda%20Online%20Standard",
  },
  {
    title: "Automatizaciones con IA & Bots de WhatsApp",
    desc: "Flujos inteligentes en n8n/Make para responder consultas frecuentes, calificar clientes y agendar turnos automáticamente.",
    deliverables: [
      "Bot de WhatsApp habilitado 24/7",
      "Conexión con Google Calendar / Agenda",
      "Filtro previo de preguntas antes de la atención humana",
    ],
    time: "4 a 7 días hábiles",
    icon: "🤖",
    accent: NEON_CYAN,
    waParam: "Automatizaciones%20con%20IA%20%26%20Bots%20de%20WhatsApp",
  },
  {
    title: "Infraestructura NFC & Smart Signage",
    desc: "Configuración de tarjetas y stickers NFC dinámicos para mostradores con QR impreso y vinculación directa a Google Maps o Flowix Book.",
    deliverables: [
      "Stickers y tarjetas NFC Smart impresos y programados",
      "Códigos QR de alta resolución listos para imprimir",
      "Vinculación a reseñas de Google Maps o Flowix Book",
      "Configuración inicial y capacitación para tu equipo",
    ],
    time: "$120.000 ARS Setup + $25.000 ARS/mes",
    icon: "📡",
    accent: NEON_GREEN,
    waParam: "Infraestructura%20NFC%20%26%20Smart%20Signage",
  },
];

const processSteps = [
  {
    num: "01",
    title: "Captura",
    desc: "El cliente entra desde Google Maps, Instagram o un código QR.",
    icon: "📍",
  },
  {
    num: "02",
    title: "Agendamiento Automático",
    desc: "Elige servicio y turno en una web optimizada para celulares en segundos.",
    icon: "📲",
  },
  {
    num: "03",
    title: "Reputación & Fidelización",
    desc: "El sistema redirige automáticamente a clientes satisfechos a calificar con 5 estrellas en Google Maps.",
    icon: "⭐",
  },
];

const growthPackageFeatures = [
  "Landing Page de Alta Conversión optimizada para móviles.",
  "Sistema Flowix Book: Plataforma propia de agendamiento de turnos y gestión de clientes.",
  "Bot de WhatsApp con integración de agendamiento automático.",
  "Sistema de filtrado inteligente de reseñas para Google Maps.",
  "Tecnología NFC + Código QR: Sticker Smart impreso/programado + QR de alta resolución.",
  "Hosting Cloud rápido + mantenimiento preventivo continuo.",
];

const trustItems = [
  {
    icon: "⚡",
    title: "Implementación rápida",
    desc: "Lanzamos tu infraestructura digital sin largos procesos. Todo listo para vender en semanas.",
  },
  {
    icon: "📌",
    title: "Estrategia local",
    desc: "Construimos para el cliente de tu barrio: Google Maps, WhatsApp y mobile-first son el centro.",
  },
  {
    icon: "💬",
    title: "Soporte directo",
    desc: "Hablás con el equipo que desarrolla y mantiene. No hay tickets invisibles ni respuestas genéricas.",
  },
];

const footerLinks = [
  { label: "Soluciones", href: "#soluciones" },
  { label: "Servicios Modulares", href: "#servicios-modulares" },
  { label: "Calculadora ROI", href: "#calculadora" },
  { label: "FAQ", href: "#faq" },
  { label: "Planes", href: "#planes" },
];

const contactLinks = [
  { label: "Agendar Demo", href: WA },
  { label: "Ver Demo", href: WA_DEMO },
  { label: "Marketing", href: WA_MARKETING },
  { label: "Soporte técnico", href: WA_SOPORTE },
];

export default function FlowixAgency() {
  return (
    <main style={{ fontFamily: "'Outfit', system-ui, sans-serif", color: "#fff", background: "#050508", overflowX: "hidden" }}>
      {/* Background Noise Texture & Ambient Glows */}
      <div aria-hidden style={{ position: "fixed", inset: 0, backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`, opacity: 0.022, pointerEvents: "none", zIndex: 9999 }} />
      <div className="float" aria-hidden style={{ position: "fixed", top: 0, left: 0, right: 0, height: "90vh", background: "radial-gradient(ellipse 100% 70% at 50% 0%, rgba(0,204,106,0.25) 0%, transparent 65%)", pointerEvents: "none", zIndex: 0 }} />
      <div className="float-rev" aria-hidden style={{ position: "fixed", bottom: 0, right: "-12%", width: "56vw", height: "56vh", background: "radial-gradient(ellipse, rgba(0,150,255,0.06) 0%, transparent 65%)", pointerEvents: "none", zIndex: 0 }} />

      {/* NAVBAR */}
      <nav style={{ position: "sticky", top: 0, zIndex: 50, background: "rgba(0,0,0,0.84)", backdropFilter: "blur(24px)", WebkitBackdropFilter: "blur(24px)", borderBottom: "1px solid rgba(255,255,255,0.07)", padding: "0 40px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 68 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}>
          <span style={{ fontFamily: "monospace", fontWeight: 800, fontSize: 22, color: G, textShadow: "0 0 5px rgba(0,204,106,0.55), 0 0 12px rgba(0,204,106,0.25)", letterSpacing: "-1px" }}>{"</>"}</span>
          <span style={{ fontWeight: 700, fontSize: 22, letterSpacing: "-0.5px" }}><span style={{ color: "#fff" }}>Flo</span><span style={{ color: G }}>wix</span></span>
        </div>
        <div className="nav-links-row" style={{ display: "flex", gap: 8 }}>
          {footerLinks.map((link) => (
            <a key={link.label} href={link.href} className="nav-link" style={{ color: "#71717a", fontSize: 14, textDecoration: "none", padding: "8px 16px", borderRadius: 8 }}>{link.label}</a>
          ))}
        </div>
        <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-primary-hover nav-cta-btn" style={{ background: "linear-gradient(135deg, #00CC6A 0%, #00E87A 100%)", color: "#000", fontSize: 14, fontWeight: 700, textDecoration: "none", padding: "10px 24px", borderRadius: 10, flexShrink: 0 }}>
          <span className="desktop-only">Hablemos por WhatsApp</span>
          <span className="mobile-only">WhatsApp 💬</span>
        </a>
      </nav>

      {/* HERO SECTION */}
      <section style={{ padding: "80px 40px 96px", position: "relative", overflow: "hidden" }}>
        {/* Dot Grid Background Overlay */}
        <div aria-hidden style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)", backgroundSize: "24px 24px", maskImage: "radial-gradient(ellipse 90% 90% at 50% 40%, #000 10%, transparent 70%)", WebkitMaskImage: "radial-gradient(ellipse 90% 90% at 50% 40%, #000 10%, transparent 70%)", pointerEvents: "none", zIndex: 1 }} />
        
        <div className="hero-grid" style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: 52, alignItems: "center", position: "relative", zIndex: 2 }}>
          <div>
            <div className="anim-up pulse-badge" style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "7px 18px", borderRadius: 999, background: "rgba(0,204,106,0.08)", border: "1px solid rgba(0,204,106,0.22)", color: G, fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", marginBottom: 28, animationDelay: "0.1s" }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: G, display: "inline-block" }} />
              Agencia de Infraestructura Digital B2B
            </div>

            <h1 className="anim-up" style={{ fontSize: "clamp(42px, 5.2vw, 68px)", fontWeight: 800, lineHeight: 1.05, letterSpacing: "-2.5px", margin: 0, animationDelay: "0.2s" }}>
              Transformamos tu comercio en una <em style={{ fontFamily: "Georgia, 'Times New Roman', serif", fontStyle: "italic", color: G }}>máquina</em> de agendamiento automático.
            </h1>

            <p className="anim-up" style={{ marginTop: 28, maxWidth: 540, color: "rgba(255,255,255,0.55)", fontSize: "clamp(16px, 1.8vw, 18px)", lineHeight: 1.8, animationDelay: "0.3s" }}>
              Diseñamos la infraestructura digital que los comercios locales necesitan: landing pages de alta velocidad, automatización por WhatsApp y captura inteligente de reseñas.
            </p>

            <div className="anim-up" style={{ display: "flex", flexWrap: "wrap", gap: 14, marginTop: 36, animationDelay: "0.4s" }}>
              <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-primary-hover" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", minWidth: 200, padding: "14px 28px", borderRadius: 12, background: "linear-gradient(135deg, #00CC6A 0%, #00E87A 100%)", color: "#000", textDecoration: "none", fontWeight: 700, fontSize: 15, boxShadow: "0 0 35px rgba(0,204,106,0.3)" }}>
                Agendar Demo
              </a>
              <a href={WA_DEMO} target="_blank" rel="noopener noreferrer" className="path-card path-card--neutral" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", minWidth: 200, padding: "14px 28px", borderRadius: 12, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.12)", color: "#ccc", textDecoration: "none", fontWeight: 600, fontSize: 15 }}>
                Ver Demo Interactiva
              </a>
            </div>
          </div>

          {/* Interactive Demo Card Widget with macOS style header */}
          <div className="anim-up" style={{ display: "flex", justifyContent: "center", animationDelay: "0.5s" }}>
            <div className="dash-3d glow-card" style={{ width: "100%", maxWidth: 420, borderRadius: 28, background: "rgba(8,8,10,0.95)", border: "1px solid rgba(0,204,106,0.22)", boxShadow: "0 40px 90px rgba(0,0,0,0.7), 0 0 60px rgba(0,204,106,0.08)", overflow: "hidden", position: "relative" }}>
              <div style={{ padding: "14px 20px", display: "flex", justifyContent: "space-between", alignItems: "center", background: "rgba(255,255,255,0.03)", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
                <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
                  <div style={{ width: 9, height: 9, borderRadius: "50%", background: "#ff5f56" }} />
                  <div style={{ width: 9, height: 9, borderRadius: "50%", background: "#ffbd2e" }} />
                  <div style={{ width: 9, height: 9, borderRadius: "50%", background: "#27c93f" }} />
                  <span style={{ color: "#fff", fontSize: 12, fontWeight: 700, marginLeft: 6 }}>Flowix Demo</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <div className="dot-blink" style={{ width: 6, height: 6, borderRadius: "50%", background: G }} />
                  <span style={{ color: G, fontSize: 11, fontWeight: 600 }}>Móvil-first</span>
                </div>
              </div>

              <div style={{ padding: "24px 20px", display: "grid", gap: 18 }}>
                <div className="slide-row" style={{ display: "flex", alignItems: "center", gap: 14, background: "rgba(0,204,106,0.06)", border: "1px solid rgba(0,204,106,0.18)", padding: 14, borderRadius: 16, animationDelay: "0.6s" }}>
                  <div style={{ width: 38, height: 38, borderRadius: 12, background: "rgba(0,204,106,0.15)", display: "grid", placeItems: "center", color: G, fontWeight: 800, fontSize: 18 }}>W</div>
                  <p style={{ margin: 0, color: "rgba(255,255,255,0.85)", fontSize: 14, lineHeight: 1.5 }}>
                    <strong>Turno confirmado por WhatsApp</strong>
                  </p>
                </div>

                <div style={{ background: "rgba(255,255,255,0.02)", borderRadius: 20, border: "1px solid rgba(255,255,255,0.07)", padding: "18px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
                    <span style={{ fontSize: 11, color: "rgba(255,255,255,0.5)", textTransform: "uppercase", letterSpacing: "0.1em" }}>Agenda rápida</span>
                    <span style={{ fontSize: 11, color: G, fontWeight: 700 }}>Disponible ahora</span>
                  </div>
                  {[
                    { label: "Corte clásico", time: "10:00", accent: G },
                    { label: "Clase prueba", time: "12:30", accent: B },
                    { label: "Consulta", time: "15:00", accent: P },
                  ].map((item, idx) => (
                    <div key={idx} className="slide-row" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "11px 0", borderBottom: idx < 2 ? "1px solid rgba(255,255,255,0.05)" : undefined, animationDelay: `${0.7 + idx * 0.1}s` }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                        <div style={{ width: 3, height: 16, borderRadius: 2, background: item.accent }} />
                        <span style={{ color: "#fff", fontWeight: 600, fontSize: 14 }}>{item.label}</span>
                      </div>
                      <span style={{ color: "rgba(255,255,255,0.6)", fontSize: 13, fontFamily: "monospace" }}>{item.time} hs</span>
                    </div>
                  ))}
                </div>

                <a href={WA_DEMO} target="_blank" rel="noopener noreferrer" className="btn-primary-hover" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 10, padding: "14px 18px", borderRadius: 14, background: "rgba(0,204,106,0.12)", border: "1px solid rgba(0,204,106,0.25)", color: "#fff", textDecoration: "none", fontWeight: 700, fontSize: 14 }}>
                  <span style={{ width: 18, height: 18, display: "inline-flex", alignItems: "center", justifyContent: "center", borderRadius: "50%", background: G, color: "#000", fontSize: 10 }}>▶</span>
                  Ver Demo Interactiva
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bouncing Scroll Down Indicator */}
        <div className="bounce-y" style={{ position: "absolute", bottom: 28, left: "50%", zIndex: 4, pointerEvents: "none" }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9" /></svg>
        </div>
      </section>

      {/* SOLUCIONES POR RUBRO (Multicolor Animated Cards) */}
      <section id="soluciones" style={{ padding: "80px 40px", background: "#08080f", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="sr" style={{ textAlign: "center", marginBottom: 56 }}>
            <p style={{ color: G, fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 14 }}>Soluciones por rubro</p>
            <h2 style={{ fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 800, letterSpacing: "-2px", lineHeight: 1.05, maxWidth: 720, margin: "0 auto" }}>
              Soluciones diseñadas para el flujo <em style={{ fontFamily: "Georgia, 'Times New Roman', serif", fontStyle: "italic", color: G }}>real</em> de tu comercio.
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", gap: 18 }} className="services-grid">
            {industrySolutions.map((item) => (
              <div key={item.title} className={`sr ${item.cardClass}`} style={{ background: "rgba(255,255,255,0.03)", border: `1px solid ${item.accent}25`, borderRadius: 24, padding: 28, position: "relative", overflow: "hidden", display: "flex", flexDirection: "column" }}>
                <div aria-hidden style={{ position: "absolute", top: -40, right: -40, width: 120, height: 120, background: `radial-gradient(circle, ${item.accent}15 0%, transparent 65%)`, pointerEvents: "none" }} />
                
                <div style={{ display: "inline-flex", alignSelf: "flex-start", padding: "4px 10px", borderRadius: 8, background: `${item.accent}12`, border: `1px solid ${item.accent}25`, color: item.accent, fontSize: 11, fontWeight: 700, marginBottom: 16 }}>
                  {item.badge}
                </div>
                
                <h3 style={{ fontSize: 20, fontWeight: 800, marginBottom: 14 }}>{item.title}</h3>
                <p style={{ color: "rgba(255,255,255,0.72)", fontSize: 14, lineHeight: 1.75, margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RUBROS (Grid Secundario) */}
      <section id="rubros" style={{ padding: "80px 40px", background: "#050508", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="sr" style={{ textAlign: "center", marginBottom: 56 }}>
            <p style={{ color: G, fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 14 }}>Rubros</p>
            <h2 style={{ fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 800, letterSpacing: "-2px", lineHeight: 1.05, maxWidth: 720, margin: "0 auto" }}>
              Impacto directo en tu <em style={{ fontFamily: "Georgia, 'Times New Roman', serif", fontStyle: "italic", color: G }}>industria.</em>
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: 20 }} className="products-grid">
            {industrySolutions.map((item) => (
              <div key={item.title} className={`sr ${item.cardClass}`} style={{ background: "rgba(255,255,255,0.03)", border: `1px solid ${item.accent}22`, borderRadius: 24, padding: 32, display: "flex", gap: 20, alignItems: "flex-start" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 52, height: 52, borderRadius: 16, background: `${item.accent}15`, border: `1px solid ${item.accent}30`, color: item.accent, fontSize: 18, fontWeight: 800, flexShrink: 0 }}>
                  {item.title.substring(0, 2).toUpperCase()}
                </div>
                <div>
                  <h3 style={{ fontSize: 20, fontWeight: 800, marginBottom: 10 }}>{item.title}</h3>
                  <p style={{ color: "rgba(255,255,255,0.72)", fontSize: 15, lineHeight: 1.75, margin: 0 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CÓMO FUNCIONA */}
      <section id="como-funciona" style={{ padding: "80px 40px", background: "#08080f", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="sr" style={{ textAlign: "center", marginBottom: 56 }}>
            <p style={{ color: G, fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 14 }}>Cómo Funciona</p>
            <h2 style={{ fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 800, letterSpacing: "-2px", lineHeight: 1.05, maxWidth: 720, margin: "0 auto" }}>
              De la búsqueda a la reserva en <em style={{ fontFamily: "Georgia, 'Times New Roman', serif", fontStyle: "italic", color: G }}>tres pasos.</em>
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 20 }} className="steps-grid">
            {processSteps.map((step) => (
              <div key={step.num} className="sr diff-card" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 24, padding: 32 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
                  <div style={{ width: 48, height: 48, borderRadius: 16, background: "rgba(0,204,106,0.12)", border: "1px solid rgba(0,204,106,0.22)", display: "grid", placeItems: "center", fontSize: 22 }}>{step.icon}</div>
                  <span style={{ fontSize: 13, fontWeight: 800, color: G, background: "rgba(0,204,106,0.1)", padding: "4px 12px", borderRadius: 8, letterSpacing: "-0.5px" }}>Paso {step.num}</span>
                </div>
                <h3 style={{ fontSize: 20, fontWeight: 800, marginBottom: 12 }}>{step.title}</h3>
                <p style={{ color: "rgba(255,255,255,0.72)", fontSize: 15, lineHeight: 1.8, margin: 0 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN: NUESTROS DIFERENCIALES TECNOLÓGICOS Y TABLA COMPARATIVA */}
      <section id="diferenciales" style={{ padding: "88px 40px", background: "#08080f", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ maxWidth: 1150, margin: "0 auto" }}>
          {/* Header */}
          <div className="sr" style={{ textAlign: "center", marginBottom: 56 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 16px", borderRadius: 999, background: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.25)", color: NEON_GREEN, fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", marginBottom: 16 }}>
              TECNOLOGÍA Y SOFTWARE PROPIO
            </div>
            <h2 style={{ fontSize: "clamp(32px, 4vw, 54px)", fontWeight: 800, letterSpacing: "-2px", lineHeight: 1.05, maxWidth: 820, margin: "0 auto 16px" }}>
              Nuestros <em style={{ fontFamily: "Georgia, 'Times New Roman', serif", fontStyle: "italic", color: G }}>Diferenciales Tecnológicos</em>
            </h2>
            <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 16, lineHeight: 1.75, maxWidth: 680, margin: "0 auto" }}>
              Innovación físico-digital en tu mostrador combinada con nuestro propio software de agendamiento para automatizar tu negocio sin pagar comisiones por turno.
            </p>
          </div>

          {/* Grid 2 Tarjetas Destacadas */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 28, marginBottom: 72 }}>
            {/* Tarjeta 1: Tecnología Smart NFC */}
            <div className="sr diff-card" style={{ background: "#0F172A", border: `1px solid ${NEON_GREEN}`, borderRadius: 28, padding: 36, position: "relative", overflow: "hidden", boxShadow: `0 0 40px ${NEON_GREEN}18` }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
                <div style={{ width: 56, height: 56, borderRadius: 18, background: "rgba(16,185,129,0.12)", border: "1px solid rgba(16,185,129,0.3)", display: "grid", placeItems: "center", fontSize: 26 }}>
                  📡
                </div>
                <span style={{ fontSize: 11, fontWeight: 800, color: NEON_GREEN, background: "rgba(16,185,129,0.12)", padding: "6px 14px", borderRadius: 999, letterSpacing: "0.08em", textTransform: "uppercase" }}>
                  Hardware Físico-Digital
                </span>
              </div>
              <h3 style={{ fontSize: 24, fontWeight: 800, marginBottom: 14, letterSpacing: "-0.5px" }}>Tecnología Smart NFC</h3>
              <p style={{ color: "rgba(255,255,255,0.72)", fontSize: 15, lineHeight: 1.75, marginBottom: 24 }}>
                Stickers y tarjetas inteligentes NFC colocados en tu mostrador o mesas. Tus clientes solo tienen que acercar su teléfono para agendar turnos o dejar reseñas de 5 estrellas en Google Maps al instante.
              </p>
              <div style={{ display: "grid", gap: 12, borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 20 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <span style={{ color: NEON_GREEN, fontWeight: 900 }}>✓</span>
                  <span style={{ color: "rgba(255,255,255,0.85)", fontSize: 14 }}>Reseñas y agendamiento instantáneo acercando el celular</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <span style={{ color: NEON_GREEN, fontWeight: 900 }}>✓</span>
                  <span style={{ color: "rgba(255,255,255,0.85)", fontSize: 14 }}>Stickers duraderos personalizados con la gráfica de tu marca</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <span style={{ color: NEON_GREEN, fontWeight: 900 }}>✓</span>
                  <span style={{ color: "rgba(255,255,255,0.85)", fontSize: 14 }}>Cero fricción: sin descargar apps ni ingresar URLs manualmente</span>
                </div>
              </div>
            </div>

            {/* Tarjeta 2: Sistema Flowix Book */}
            <div className="sr diff-card" style={{ background: "#0F172A", border: `1px solid ${NEON_GREEN}`, borderRadius: 28, padding: 36, position: "relative", overflow: "hidden", boxShadow: `0 0 40px ${NEON_GREEN}18` }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
                <div style={{ width: 56, height: 56, borderRadius: 18, background: "rgba(16,185,129,0.12)", border: "1px solid rgba(16,185,129,0.3)", display: "grid", placeItems: "center", fontSize: 26 }}>
                  📅
                </div>
                <span style={{ fontSize: 11, fontWeight: 800, color: NEON_GREEN, background: "rgba(16,185,129,0.12)", padding: "6px 14px", borderRadius: 999, letterSpacing: "0.08em", textTransform: "uppercase" }}>
                  Software Propio • 0% Comisiones
                </span>
              </div>
              <h3 style={{ fontSize: 24, fontWeight: 800, marginBottom: 14, letterSpacing: "-0.5px" }}>Sistema Flowix Book</h3>
              <p style={{ color: "rgba(255,255,255,0.72)", fontSize: 15, lineHeight: 1.75, marginBottom: 24 }}>
                Nuestra propia plataforma de agendamiento y gestión de clientes a medida. Mantené el control total de tu negocio sin pagar comisiones por turno agendado ni compartir tu base con la competencia.
              </p>
              <div style={{ display: "grid", gap: 12, borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 20 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <span style={{ color: NEON_GREEN, fontWeight: 900 }}>✓</span>
                  <span style={{ color: "rgba(255,255,255,0.85)", fontSize: 14 }}>0% comisiones por reserva efectuada</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <span style={{ color: NEON_GREEN, fontWeight: 900 }}>✓</span>
                  <span style={{ color: "rgba(255,255,255,0.85)", fontSize: 14 }}>Panel de control intuitivo para gestionar turnos y clientes</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <span style={{ color: NEON_GREEN, fontWeight: 900 }}>✓</span>
                  <span style={{ color: "rgba(255,255,255,0.85)", fontSize: 14 }}>Integración directa con WhatsApp y tu Landing Page</span>
                </div>
              </div>
            </div>
          </div>

          {/* TABLA COMPARATIVA: Flowix vs. Softwares Tradicionales */}
          <div className="sr" style={{ background: "rgba(15, 23, 42, 0.9)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 28, padding: "40px 32px", boxShadow: "0 20px 50px rgba(0,0,0,0.4)" }}>
            <div style={{ textAlign: "center", marginBottom: 36 }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 16px", borderRadius: 999, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.8)", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", marginBottom: 14 }}>
                COMPARATIVA DIRECTA
              </div>
              <h3 style={{ fontSize: "clamp(24px, 3.5vw, 36px)", fontWeight: 800, letterSpacing: "-1px", marginBottom: 10 }}>
                Flowix vs. Softwares Tradicionales
              </h3>
              <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 15, maxWidth: 620, margin: "0 auto" }}>
                Descubrí por qué nuestros clientes eligen Flowix frente a plataformas tradicionales como AgendaPro o TuTurno.
              </p>
            </div>

            {/* Desktop / Mobile responsive table container */}
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left", minWidth: 650 }}>
                <thead>
                  <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.12)" }}>
                    <th style={{ padding: "16px 20px", color: "rgba(255,255,255,0.5)", fontSize: 12, textTransform: "uppercase", letterSpacing: "0.08em", width: "22%" }}>Punto Clave</th>
                    <th style={{ padding: "16px 20px", color: "rgba(255,255,255,0.5)", fontSize: 12, textTransform: "uppercase", letterSpacing: "0.08em", width: "39%" }}>Softwares Tradicionales (AgendaPro / TuTurno)</th>
                    <th style={{ padding: "16px 20px", color: NEON_GREEN, fontSize: 12, textTransform: "uppercase", letterSpacing: "0.08em", width: "39%", background: "rgba(16,185,129,0.06)", borderRadius: "12px 12px 0 0" }}>Flowix Ecosistema 360 🚀</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      feature: "Soporte",
                      trad: "Ticket genérico y tiempos de espera prolongados.",
                      flowix: "Atención directa por WhatsApp.",
                    },
                    {
                      feature: "Personalización",
                      trad: "Plantilla idéntica estandarizada a la competencia.",
                      flowix: "Landing Page única a medida.",
                    },
                    {
                      feature: "Captura en Local",
                      trad: "Ninguna integración física en el local.",
                      flowix: "Tecnología Smart NFC + QR impreso.",
                    },
                    {
                      feature: "Posicionamiento",
                      trad: "Solo agendamiento básico de turnos.",
                      flowix: "Integración con Google Maps para Reseñas.",
                    },
                  ].map((row, i) => (
                    <tr key={i} style={{ borderBottom: i < 3 ? "1px solid rgba(255,255,255,0.06)" : "none" }}>
                      <td style={{ padding: "20px", fontWeight: 700, fontSize: 14, color: "#fff" }}>{row.feature}</td>
                      <td style={{ padding: "20px", color: "rgba(255,255,255,0.55)", fontSize: 14 }}>
                        <span style={{ color: "#EF4444", fontWeight: 700, marginRight: 8 }}>✕</span>
                        {row.trad}
                      </td>
                      <td style={{ padding: "20px", color: "#fff", fontWeight: 600, fontSize: 14, background: "rgba(16,185,129,0.06)", borderLeft: "1px solid rgba(16,185,129,0.15)", borderRight: "1px solid rgba(16,185,129,0.15)" }}>
                        <span style={{ color: NEON_GREEN, fontWeight: 900, marginRight: 8 }}>✓</span>
                        {row.flowix}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN: SHOWROOM FÍSICO & TARJETAS SMART NFC */}
      <section id="showroom-nfc" style={{ padding: "88px 40px", background: "#050508", borderTop: "1px solid rgba(255,255,255,0.06)", position: "relative", overflow: "hidden" }}>
        <div style={{ maxWidth: 1150, margin: "0 auto" }}>
          {/* Header */}
          <div className="sr" style={{ textAlign: "center", marginBottom: 56 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 16px", borderRadius: 999, background: "rgba(14,165,233,0.1)", border: "1px solid rgba(14,165,233,0.25)", color: NEON_CYAN, fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", marginBottom: 16 }}>
              HARDWARE INCLUIDO Y PROGRAMADO
            </div>
            <h2 style={{ fontSize: "clamp(32px, 4vw, 54px)", fontWeight: 800, letterSpacing: "-2px", lineHeight: 1.05, maxWidth: 820, margin: "0 auto 16px" }}>
              Tecnología Físico-Digital para tu Mostrador 🏷️
            </h2>
            <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 16, lineHeight: 1.75, maxWidth: 720, margin: "0 auto" }}>
              Incluido en tu paquete: Tarjetas y carteles Smart NFC personalizados con la marca de tu local. Apoyás el teléfono o escaneás el QR.
            </p>
          </div>

          {/* Container de Tarjetas Físicas (Showroom) */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 32, marginBottom: 48 }} className="products-grid">
            
            {/* Tarjeta 1: Turnos (Azul Neón / Cyan Accents) */}
            <div className="sr diff-card" style={{ background: "#0F172A", border: "1px solid rgba(14,165,233,0.35)", borderRadius: 32, padding: 36, position: "relative", overflow: "hidden", boxShadow: "0 0 50px rgba(14,165,233,0.12)", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
              <div aria-hidden style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(90deg, transparent 0%, #0EA5E9 50%, transparent 100%)", pointerEvents: "none" }} />
              
              {/* Tarjeta Física Simulada (Blanca Elegante) */}
              <div style={{ width: "100%", maxWidth: 340, background: "linear-gradient(145deg, #FFFFFF 0%, #F8FAFC 100%)", color: "#0F172A", borderRadius: 24, padding: "28px 24px", boxShadow: "0 20px 40px rgba(0,0,0,0.5), 0 0 25px rgba(14,165,233,0.25)", border: "1px solid rgba(14,165,233,0.2)", position: "relative" }}>
                {/* Chip NFC Visual Indicator */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <div style={{ width: 32, height: 32, borderRadius: 10, background: "rgba(14,165,233,0.12)", border: "1px solid rgba(14,165,233,0.3)", display: "grid", placeItems: "center", fontSize: 16 }}>
                      🏢
                    </div>
                    <span style={{ fontSize: 13, fontWeight: 800, color: "#0F172A", letterSpacing: "-0.3px" }}>Tu Local / Marca</span>
                  </div>
                  <span style={{ fontSize: 10, fontWeight: 800, background: "#0EA5E9", color: "#FFF", padding: "3px 8px", borderRadius: 6, letterSpacing: "0.05em" }}>
                    NFC ACTIVE
                  </span>
                </div>

                {/* Encabezado Opción */}
                <h4 style={{ fontSize: 22, fontWeight: 900, color: "#0F172A", margin: "0 0 6px", letterSpacing: "-0.5px" }}>
                  Reservá tu turno
                </h4>
                <p style={{ margin: "0 0 20px", fontSize: 12, color: "#64748B", fontWeight: 600 }}>
                  Agendamiento online en 30 segundos
                </p>

                {/* Ilustración QR Code elegante */}
                <div style={{ background: "#F1F5F9", border: "2px dashed rgba(14,165,233,0.4)", borderRadius: 16, padding: 16, display: "inline-block", marginBottom: 20 }}>
                  <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="#0F172A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 3h6v6H3zM15 3h6v6h-6zM3 15h6v6H3z" fill="#0F172A" fillOpacity="0.1" />
                    <path d="M5 5h2v2H5zM17 5h2v2h-2zM5 17h2v2H5z" fill="#0EA5E9" />
                    <path d="M10 3h1v4h-1zM13 3h1v2h-1zM10 8h4v1h-4zM3 10h2v1H3zM7 10h1v4H7zM10 10h3v1h-3zM14 10h2v3h-2zM17 10h4v1h-4zM10 13h1v3h-1zM12 14h2v1h-2zM15 14h1v3h-1zM18 13h1v4h-1zM10 17h3v1h-3zM14 17h2v4h-2zM17 18h4v1h-4zM3 12h1v2H3zM5 13h1v1H5zM3 19h1v2H3zM5 20h3v1H5zM18 20h3v1h-3z" fill="#0F172A" />
                  </svg>
                </div>

                {/* Pill NFC Instruction */}
                <div style={{ background: "rgba(14,165,233,0.1)", border: "1px solid rgba(14,165,233,0.3)", borderRadius: 999, padding: "8px 14px", display: "flex", alignItems: "center", justifyContent: "center", gap: 6, color: "#0284C7", fontSize: 11, fontWeight: 800, marginBottom: 14 }}>
                  <span>📶</span>
                  <span>NFC - Apoyá el celu · o escaneá el QR</span>
                </div>

                {/* Footer Brand Credit */}
                <div style={{ borderTop: "1px solid #E2E8F0", paddingTop: 10, fontSize: 10, color: "#94A3B8", fontWeight: 700 }}>
                  Powered by Flowix · <span style={{ color: "#0EA5E9" }}>flowixagency.com</span>
                </div>
              </div>
            </div>

            {/* Tarjeta 2: Reseñas ⭐ (Dorado / Amarillo Accents) */}
            <div className="sr diff-card" style={{ background: "#0F172A", border: "1px solid rgba(245,158,11,0.35)", borderRadius: 32, padding: 36, position: "relative", overflow: "hidden", boxShadow: "0 0 50px rgba(245,158,11,0.12)", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
              <div aria-hidden style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(90deg, transparent 0%, #F59E0B 50%, transparent 100%)", pointerEvents: "none" }} />
              
              {/* Tarjeta Física Simulada (Blanca Elegante) */}
              <div style={{ width: "100%", maxWidth: 340, background: "linear-gradient(145deg, #FFFFFF 0%, #F8FAFC 100%)", color: "#0F172A", borderRadius: 24, padding: "28px 24px", boxShadow: "0 20px 40px rgba(0,0,0,0.5), 0 0 25px rgba(245,158,11,0.25)", border: "1px solid rgba(245,158,11,0.2)", position: "relative" }}>
                {/* Chip NFC Visual Indicator */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <div style={{ width: 32, height: 32, borderRadius: 10, background: "rgba(245,158,11,0.12)", border: "1px solid rgba(245,158,11,0.3)", display: "grid", placeItems: "center", fontSize: 16 }}>
                      🏢
                    </div>
                    <span style={{ fontSize: 13, fontWeight: 800, color: "#0F172A", letterSpacing: "-0.3px" }}>Tu Local / Marca</span>
                  </div>
                  <span style={{ fontSize: 10, fontWeight: 800, background: "#F59E0B", color: "#FFF", padding: "3px 8px", borderRadius: 6, letterSpacing: "0.05em" }}>
                    NFC ACTIVE
                  </span>
                </div>

                {/* Encabezado Opción */}
                <h4 style={{ fontSize: 22, fontWeight: 900, color: "#0F172A", margin: "0 0 4px", letterSpacing: "-0.5px" }}>
                  Dejanos tu reseña ⭐
                </h4>
                <div style={{ color: "#F59E0B", fontSize: 14, marginBottom: 16 }}>
                  ⭐⭐⭐⭐⭐
                </div>

                {/* Ilustración QR Code elegante */}
                <div style={{ background: "#FEF3C7", border: "2px dashed rgba(245,158,11,0.5)", borderRadius: 16, padding: 16, display: "inline-block", marginBottom: 20 }}>
                  <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="#0F172A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 3h6v6H3zM15 3h6v6h-6zM3 15h6v6H3z" fill="#0F172A" fillOpacity="0.1" />
                    <path d="M5 5h2v2H5zM17 5h2v2h-2zM5 17h2v2H5z" fill="#F59E0B" />
                    <path d="M10 3h1v4h-1zM13 3h1v2h-1zM10 8h4v1h-4zM3 10h2v1H3zM7 10h1v4H7zM10 10h3v1h-3zM14 10h2v3h-2zM17 10h4v1h-4zM10 13h1v3h-1zM12 14h2v1h-2zM15 14h1v3h-1zM18 13h1v4h-1zM10 17h3v1h-3zM14 17h2v4h-2zM17 18h4v1h-4zM3 12h1v2H3zM5 13h1v1H5zM3 19h1v2H3zM5 20h3v1H5zM18 20h3v1h-3z" fill="#0F172A" />
                  </svg>
                </div>

                {/* Pill NFC Instruction */}
                <div style={{ background: "rgba(245,158,11,0.1)", border: "1px solid rgba(245,158,11,0.3)", borderRadius: 999, padding: "8px 14px", display: "flex", alignItems: "center", justifyContent: "center", gap: 6, color: "#D97706", fontSize: 11, fontWeight: 800, marginBottom: 14 }}>
                  <span>📶</span>
                  <span>NFC - Apoyá el celu · o escaneá el QR</span>
                </div>

                {/* Footer Brand Credit */}
                <div style={{ borderTop: "1px solid #E2E8F0", paddingTop: 10, fontSize: 10, color: "#94A3B8", fontWeight: 700 }}>
                  Powered by Flowix · <span style={{ color: "#D97706" }}>flowixagency.com</span>
                </div>
              </div>
            </div>

          </div>

          {/* Bloque Informativo en la base (Note Card) */}
          <div className="sr" style={{ background: "rgba(15, 23, 42, 0.85)", border: "1px solid rgba(16,185,129,0.3)", borderRadius: 20, padding: "20px 28px", display: "flex", alignItems: "center", gap: 16, maxWidth: 900, margin: "0 auto", boxShadow: "0 10px 30px rgba(0,0,0,0.3)" }}>
            <div style={{ width: 44, height: 44, borderRadius: 14, background: "rgba(16,185,129,0.12)", border: "1px solid rgba(16,185,129,0.3)", display: "grid", placeItems: "center", fontSize: 22, flexShrink: 0 }}>
              📦
            </div>
            <p style={{ margin: 0, color: "rgba(255,255,255,0.85)", fontSize: 14, lineHeight: 1.65, fontWeight: 600 }}>
              Todas las tarjetas se entregan impresas, programadas con chip NFC de alta velocidad y personalizadas con el logo y colores de tu comercio.
            </p>
          </div>

        </div>
      </section>

      {/* PLANES / CRECIMIENTO LOCAL 360 */}
      <section id="planes" style={{ padding: "80px 40px", background: "#050508", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ maxWidth: 1150, margin: "0 auto" }}>
          <div className="sr" style={{ textAlign: "center", marginBottom: 56 }}>
            <p style={{ color: G, fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 14 }}>Crecimiento Local 360</p>
            <h2 style={{ fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 800, letterSpacing: "-2px", lineHeight: 1.05, maxWidth: 780, margin: "0 auto" }}>
              El Motor Tecnológico de tu Negocio
            </h2>
            <p style={{ color: "rgba(255,255,255,0.65)", maxWidth: 700, margin: "18px auto 0", fontSize: 16, lineHeight: 1.75 }}>
              Infraestructura integral que combina nuestro software propio de agendamiento con tecnología físico-digital NFC y automatización completa.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1.25fr 0.75fr", gap: 28, alignItems: "stretch" }} className="products-grid">
            {/* Main Package Glow Card */}
            <div className="sr glow-card" style={{ background: "rgba(15, 23, 42, 0.75)", border: "1px solid rgba(16,185,129,0.35)", borderRadius: 32, padding: 36, position: "relative", overflow: "hidden", boxShadow: "0 0 70px rgba(16,185,129,0.12)" }}>
              <div aria-hidden style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: "linear-gradient(90deg, transparent 0%, #10B981 50%, transparent 100%)", pointerEvents: "none" }} />
              
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12, marginBottom: 24 }}>
                <div className="pulse-badge" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "8px 16px", borderRadius: 999, background: "rgba(16,185,129,0.12)", color: NEON_GREEN, fontSize: 12, fontWeight: 700 }}>
                  <span style={{ width: 6, height: 6, borderRadius: "50%", background: NEON_GREEN, display: "inline-block" }} />
                  Paquete Estrella Premium
                </div>
                <span style={{ fontSize: 11, fontWeight: 800, color: NEON_GREEN, background: "rgba(16,185,129,0.15)", border: "1px solid rgba(16,185,129,0.3)", padding: "5px 12px", borderRadius: 8, letterSpacing: "0.08em", textTransform: "uppercase" }}>
                  Tecnología Propia
                </span>
              </div>

              <h3 style={{ fontSize: 32, fontWeight: 800, marginBottom: 12, letterSpacing: "-1px" }}>Crecimiento Local 360</h3>
              <p style={{ color: "rgba(255,255,255,0.72)", fontSize: 15, lineHeight: 1.75, marginBottom: 28 }}>
                Solución de automatización y agendamiento 100% personalizada. Todo lo que tu comercio necesita para multiplicar clientes y reservas en un solo ecosistema.
              </p>

              {/* 1. BLOQUE DESTACADO / CORE: Nuestros Diferenciales Únicos */}
              <div style={{ marginBottom: 32 }}>
                <p style={{ fontSize: 12, color: NEON_GREEN, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 14 }}>
                  NUESTROS DIFERENCIALES ÚNICOS (CORE)
                </p>
                <div style={{ display: "grid", gap: 14 }}>
                  {/* Diferencial 1 */}
                  <div style={{ background: "rgba(16,185,129,0.08)", border: "1px solid rgba(16,185,129,0.3)", borderRadius: 18, padding: "18px 20px", position: "relative" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
                      <span style={{ fontSize: 20 }}>📅</span>
                      <strong style={{ color: "#fff", fontSize: 16, fontWeight: 800 }}>Flowix Book (Panel de Gestión Propio)</strong>
                    </div>
                    <p style={{ margin: 0, color: "rgba(255,255,255,0.75)", fontSize: 13, lineHeight: 1.6 }}>
                      Control total de turnos, clientes, agenda online y registro centralizado sin pagar comisiones por plataforma.
                    </p>
                  </div>
                  {/* Diferencial 2 */}
                  <div style={{ background: "rgba(16,185,129,0.08)", border: "1px solid rgba(16,185,129,0.3)", borderRadius: 18, padding: "18px 20px", position: "relative" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
                      <span style={{ fontSize: 20 }}>📡</span>
                      <strong style={{ color: "#fff", fontSize: 16, fontWeight: 800 }}>Stack de Tecnología NFC (Hardware Físico)</strong>
                    </div>
                    <p style={{ margin: 0, color: "rgba(255,255,255,0.75)", fontSize: 13, lineHeight: 1.6 }}>
                      Tarjetas y stickers Smart NFC programados para colocar en mostradores/mesas y capturar clientes o reseñas al instante.
                    </p>
                  </div>
                </div>
              </div>

              {/* 2. COMPLEMENTOS Y SERVICIOS INCLUIDOS */}
              <div style={{ marginBottom: 32 }}>
                <p style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 14 }}>
                  COMPLEMENTOS & SERVICIOS INCLUIDOS
                </p>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 12 }}>
                  {[
                    { title: "Portal / Web de Reservas", desc: "Landing page ultra rápida optimizada para celulares." },
                    { title: "Automatización por WhatsApp", desc: "Bot inteligente para confirmaciones y respuestas 24/7." },
                    { title: "Captación de Reseñas", desc: "Sistema de filtrado directo hacia Google Maps para posicionar el local." },
                    { title: "Hosting Cloud + Mantenimiento", desc: "Servidores rápidos, seguridad SSL y soporte continuo." },
                  ].map((comp) => (
                    <div key={comp.title} style={{ display: "flex", alignItems: "flex-start", gap: 10, background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", padding: "12px 14px", borderRadius: 14 }}>
                      <div style={{ width: 18, height: 18, borderRadius: 6, background: "rgba(16,185,129,0.15)", border: "1px solid rgba(16,185,129,0.3)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2 }}>
                        <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke={NEON_GREEN} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                      </div>
                      <div>
                        <strong style={{ display: "block", color: "#fff", fontSize: 13, fontWeight: 700, marginBottom: 2 }}>{comp.title}</strong>
                        <span style={{ color: "rgba(255,255,255,0.65)", fontSize: 12, lineHeight: 1.5 }}>{comp.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 3. PRECIOS EN PESOS */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: 14 }} className="stats-bar">
                <div style={{ borderRadius: 20, padding: "20px", background: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.25)" }}>
                  <p style={{ margin: 0, fontSize: 12, color: "rgba(255,255,255,0.6)", marginBottom: 8 }}>Desarrollo e Implementación (Setup)</p>
                  <p style={{ margin: 0, fontSize: 24, fontWeight: 800, color: "#fff", letterSpacing: "-1px" }}>$250.000 ARS</p>
                  <span style={{ fontSize: 11, color: NEON_GREEN, fontWeight: 700 }}>Pago único inicial</span>
                </div>
                <div style={{ borderRadius: 20, padding: "20px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
                  <p style={{ margin: 0, fontSize: 12, color: "rgba(255,255,255,0.6)", marginBottom: 8 }}>Servidores, Licencia y Mantenimiento</p>
                  <p style={{ margin: 0, fontSize: 24, fontWeight: 800, color: "#fff", letterSpacing: "-1px" }}>$45.000 ARS/mes</p>
                  <span style={{ fontSize: 11, color: "rgba(255,255,255,0.5)", fontWeight: 600 }}>Soporte y cloud continuo</span>
                </div>
              </div>
            </div>

            {/* Right Card CTA */}
            <div className="sr diff-card" style={{ borderRadius: 32, background: "#0F172A", border: "1px solid rgba(16,185,129,0.3)", padding: 32, display: "flex", flexDirection: "column", gap: 22, height: "100%", justifyContent: "space-between" }}>
              <div>
                <div style={{ display: "grid", gap: 10, padding: "18px", background: "rgba(16,185,129,0.08)", border: "1px solid rgba(16,185,129,0.2)", borderRadius: 20, marginBottom: 24 }}>
                  <span style={{ color: NEON_GREEN, fontSize: 12, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.1em" }}>Crecimiento Local 360</span>
                  <h3 style={{ margin: 0, fontSize: 22, fontWeight: 800, letterSpacing: "-0.5px" }}>El Motor Tecnológico de tu Negocio</h3>
                </div>
                
                <div style={{ display: "grid", gap: 16 }}>
                  {[
                    "Flowix Book: Panel propio sin comisiones por turno.",
                    "Stack NFC + QR Smart listo para mostradores.",
                    "Web de reservas ultrarrápida + WhatsApp 24/7.",
                    "Reseñas en Google Maps y servidores cloud.",
                  ].map((item) => (
                    <div key={item} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                      <div style={{ width: 8, height: 8, marginTop: 6, borderRadius: "50%", background: NEON_GREEN, flexShrink: 0 }} />
                      <p style={{ margin: 0, color: "rgba(255,255,255,0.8)", fontSize: 14, lineHeight: 1.6 }}>{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-primary-hover" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", padding: "16px 24px", borderRadius: 14, background: "linear-gradient(135deg, #00CC6A 0%, #00E87A 100%)", color: "#000", textDecoration: "none", fontWeight: 800, fontSize: 15, boxShadow: "0 0 30px rgba(0,204,106,0.3)" }}>
                Quiero mi Paquete 360 🚀
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN: SERVICIOS INDIVIDUALES / MODULARES */}
      <section id="servicios-modulares" style={{ padding: "88px 40px", background: "#08080f", borderTop: "1px solid rgba(255,255,255,0.06)", position: "relative" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="sr" style={{ textAlign: "center", marginBottom: 60 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 16px", borderRadius: 999, background: "rgba(14,165,233,0.1)", border: "1px solid rgba(14,165,233,0.25)", color: NEON_CYAN, fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", marginBottom: 16 }}>
              MODULAR & A LA CARTA
            </div>
            <h2 style={{ fontSize: "clamp(32px, 4vw, 54px)", fontWeight: 800, letterSpacing: "-2px", lineHeight: 1.05, maxWidth: 740, margin: "0 auto 16px" }}>
              Servicios Individuales / <em style={{ fontFamily: "Georgia, 'Times New Roman', serif", fontStyle: "italic", color: NEON_GREEN }}>Modulares</em>
            </h2>
            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 16, lineHeight: 1.7, maxWidth: 620, margin: "0 auto" }}>
              ¿Buscás una solución específica sin contratar el paquete completo? Elegí el módulo exacto que tu negocio necesita y solicitá una cotización personalizada.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 24 }} className="products-grid">
            {modularServices.map((service, idx) => {
              const waCotizarLink = `https://wa.me/5491126730927?text=Hola%20Flowix%2C%20quiero%20cotizar%20el%20servicio%20de%20${service.waParam}`;
              return (
                <div
                  key={service.title}
                  className="sr diff-card"
                  style={{
                    background: "rgba(15, 23, 42, 0.65)",
                    border: "1px solid #1E293B",
                    borderRadius: 24,
                    padding: 32,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    position: "relative",
                    overflow: "hidden",
                    transitionDelay: "0s",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
                  }}
                >
                  <div aria-hidden style={{ position: "absolute", top: -50, right: -50, width: 160, height: 160, background: `radial-gradient(circle, ${service.accent}18 0%, transparent 70%)`, pointerEvents: "none" }} />

                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 18 }}>
                      <div style={{ width: 52, height: 52, borderRadius: 16, background: `${service.accent}14`, border: `1px solid ${service.accent}30`, display: "grid", placeItems: "center", fontSize: 24, flexShrink: 0 }}>
                        {service.icon}
                      </div>
                      <div>
                        <h3 style={{ fontSize: 21, fontWeight: 800, letterSpacing: "-0.5px", margin: 0, color: "#fff" }}>{service.title}</h3>
                        <span style={{ fontSize: 11, color: service.accent, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>Módulo independiente</span>
                      </div>
                    </div>

                    <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 14, lineHeight: 1.75, marginBottom: 22 }}>
                      {service.desc}
                    </p>

                    <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: 16, padding: "16px", marginBottom: 22 }}>
                      <p style={{ margin: "0 0 10px", fontSize: 11, color: "rgba(255,255,255,0.45)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em" }}>Entregables clave:</p>
                      <div style={{ display: "grid", gap: 8 }}>
                        {service.deliverables.map((item) => (
                          <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                            <span style={{ color: service.accent, fontWeight: 900, fontSize: 14, lineHeight: 1 }}>✓</span>
                            <span style={{ color: "rgba(255,255,255,0.85)", fontSize: 13, lineHeight: 1.6 }}>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 20, padding: "8px 14px", borderRadius: 10, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", width: "fit-content" }}>
                      <span style={{ fontSize: 14 }}>⏱️</span>
                      <span style={{ fontSize: 12, color: "rgba(255,255,255,0.7)", fontWeight: 600 }}>Entrega estimada: <strong style={{ color: "#fff" }}>{service.time}</strong></span>
                    </div>

                    <a
                      href={waCotizarLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary-hover"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 10,
                        width: "100%",
                        padding: "16px 24px",
                        borderRadius: 14,
                        background: `linear-gradient(135deg, ${service.accent} 0%, #00E87A 100%)`,
                        color: "#000",
                        textDecoration: "none",
                        fontWeight: 800,
                        fontSize: 15,
                        boxShadow: `0 0 30px ${service.accent}40`,
                      }}
                    >
                      Cotizar por WhatsApp →
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* POR QUÉ FLOWIX */}
      <section style={{ padding: "80px 40px", background: "#050508", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="sr" style={{ textAlign: "center", marginBottom: 56 }}>
            <p style={{ color: G, fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 14 }}>Por qué Flowix</p>
            <h2 style={{ fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 800, letterSpacing: "-2px", lineHeight: 1.05, maxWidth: 720, margin: "0 auto" }}>
              Mismo idioma. Mismo contexto. Software que produce <em style={{ fontFamily: "Georgia, 'Times New Roman', serif", fontStyle: "italic", color: G }}>reservas.</em>
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 20 }} className="steps-grid">
            {trustItems.map((item) => (
              <div key={item.title} className="sr diff-card" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 24, padding: 32 }}>
                <div style={{ width: 48, height: 48, borderRadius: 16, background: "rgba(0,204,106,0.12)", border: "1px solid rgba(0,204,106,0.22)", display: "grid", placeItems: "center", fontSize: 24, marginBottom: 20 }}>{item.icon}</div>
                <h3 style={{ fontSize: 20, fontWeight: 800, marginBottom: 12 }}>{item.title}</h3>
                <p style={{ color: "rgba(255,255,255,0.72)", fontSize: 15, lineHeight: 1.8, margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NUEVAS 3 SECCIONES FINALES (Antes del CTA Final y Footer) */}

      {/* 1. CALCULADORA / WIDGET DE PÉRDIDA DE CLIENTES */}
      <RoiCalculator />

      {/* 2. SECCIÓN DE PREGUNTAS FRECUENTES (FAQ ACCORDION) */}
      <FaqAccordion />

      {/* 3. BANNER DE GARANTÍA Y CONFIANZA */}
      <TrustBanner />

      {/* FINAL CTA SECTION */}
      <section style={{ padding: "96px 40px", background: "#050508", borderTop: "1px solid rgba(255,255,255,0.06)", position: "relative", overflow: "hidden" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <div className="sr glow-card" style={{ background: "linear-gradient(135deg, rgba(0,204,106,0.1) 0%, rgba(15,23,42,0.95) 50%, rgba(96,165,250,0.08) 100%)", border: "1px solid rgba(0,204,106,0.3)", borderRadius: 36, padding: "72px 48px", textAlign: "center", position: "relative", overflow: "hidden", boxShadow: "0 0 100px rgba(0,204,106,0.15), 0 30px 90px rgba(0,0,0,0.6)" }}>
            
            {/* Background Ambient Orbs inside CTA */}
            <div aria-hidden style={{ position: "absolute", top: "-50%", left: "50%", transform: "translateX(-50%)", width: 600, height: 400, background: "radial-gradient(ellipse, rgba(0,204,106,0.25) 0%, transparent 70%)", pointerEvents: "none" }} />
            <div aria-hidden style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)", backgroundSize: "20px 20px", pointerEvents: "none" }} />

            <div className="pulse-badge" style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "8px 20px", borderRadius: 999, background: "rgba(0,204,106,0.12)", border: "1px solid rgba(0,204,106,0.28)", color: G, fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", marginBottom: 28, position: "relative" }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: G, display: "inline-block" }} />
              EMPEZÁ HOY
            </div>

            <h2 style={{ fontSize: "clamp(34px, 4.5vw, 62px)", fontWeight: 800, letterSpacing: "-2.5px", lineHeight: 1.05, marginBottom: 22, position: "relative", maxWidth: 800, margin: "0 auto 22px" }}>
              Construimos la infraestructura que tu comercio <em style={{ fontFamily: "Georgia, 'Times New Roman', serif", fontStyle: "italic", color: G }}>necesita.</em>
            </h2>

            <p style={{ fontSize: "clamp(16px, 1.8vw, 18px)", color: "rgba(255,255,255,0.65)", lineHeight: 1.75, maxWidth: 540, margin: "0 auto 40px", position: "relative" }}>
              Hablemos hoy mismo. Analizamos tu negocio sin compromiso y te presentamos una propuesta en 24 a 48 horas.
            </p>

            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap", position: "relative" }}>
              <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-primary-hover" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 10, padding: "16px 36px", borderRadius: 14, background: "linear-gradient(135deg, #00CC6A 0%, #00E87A 100%)", color: "#000", fontWeight: 700, fontSize: 16, textDecoration: "none", boxShadow: "0 0 45px rgba(0,204,106,0.4)" }}>
                Contactar por WhatsApp →
              </a>
              <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="path-card path-card--neutral" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 10, padding: "16px 32px", borderRadius: 14, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.12)", color: "#ccc", fontWeight: 600, fontSize: 15, textDecoration: "none" }}>
                Seguinos en Instagram
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ borderTop: "1px solid rgba(255,255,255,0.06)", background: "#050508" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "64px 40px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: 52, marginBottom: 48 }} className="footer-grid">
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 11, marginBottom: 16 }}>
                <span style={{ fontFamily: "monospace", fontWeight: 800, fontSize: 18, color: G, textShadow: "0 0 5px rgba(0,204,106,0.55)" }}>{"</>"}</span>
                <span style={{ fontWeight: 700, fontSize: 22, letterSpacing: "-0.5px" }}><span style={{ color: "#fff" }}>Flo</span><span style={{ color: G }}>wix</span></span>
              </div>
              <p style={{ color: "#71717a", fontSize: 14, lineHeight: 1.65, maxWidth: 320 }}>
                Agencia de infraestructura digital y automatización para comercios locales. Tu socio técnico para reservas, reputación y crecimiento.
              </p>
            </div>
            <div>
              <p style={{ fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "#666", marginBottom: 18 }}>Links rápidos</p>
              {footerLinks.map((link) => (
                <a key={link.label} href={link.href} className="footer-link" style={{ display: "block", color: "#666", fontSize: 14, textDecoration: "none", marginBottom: 11 }}>{link.label}</a>
              ))}
            </div>
            <div>
              <p style={{ fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "#666", marginBottom: 18 }}>Contacto</p>
              {contactLinks.map((item) => (
                <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" className="footer-link" style={{ display: "block", color: "#666", fontSize: 14, textDecoration: "none", marginBottom: 11 }}>{item.label}</a>
              ))}
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12, borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: 28 }}>
            <span style={{ color: "#666", fontSize: 13 }}>© 2026 Flowix. Todos los derechos reservados.</span>
            <span style={{ color: "#555", fontSize: 13 }}>Hecho en Argentina 🇦🇷</span>
          </div>
        </div>
      </footer>

      <ScrollReveal />
    </main>
  );
}
