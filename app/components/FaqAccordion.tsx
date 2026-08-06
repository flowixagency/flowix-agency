"use client";

import { useState } from "react";

const G = "#00CC6A";
const NEON_GREEN = "#10B981";

const faqs = [
  {
    question: "¿Necesito conocimientos técnicos para operar el sistema o la web?",
    answer: "Cero conocimientos técnicos requeridos. Diseñamos la plataforma para que sea 100% intuitiva y fácil de usar desde cualquier celular o computadora. Además, te entregamos videos explicativos y brindamos capacitación directa a tu equipo.",
  },
  {
    question: "¿Cuánto tardan en entregar la web o el sistema completo?",
    answer: "Nuestros tiempos de implementación son acelerados: entre 3 y 7 días hábiles para Landings y Automatizaciones de WhatsApp, y de 7 a 15 días hábiles para Sitios Corporativos y Tiendas Online completas.",
  },
  {
    question: "¿Qué incluyen los servicios de mantenimiento mensual?",
    answer: "Incluyen alojamiento Cloud de alta velocidad, certificado SSL de seguridad, monitoreo preventivo 24/7, copias de seguridad continuas, soporte técnico prioritario por WhatsApp y pequeños ajustes o actualizaciones de contenido sin cargos adicionales.",
  },
  {
    question: "¿Puedo vincular la automatización a mi número de WhatsApp actual?",
    answer: "Sí, totalmente. Conectamos la infraestructura a tu número de WhatsApp de atención existente. No perdés tus chats previos, tus contactos ni la forma en que venís atendiendo.",
  },
];

export default function FaqAccordion() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" style={{ padding: "88px 40px", background: "#08080f", borderTop: "1px solid rgba(255,255,255,0.06)", position: "relative" }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <div className="sr" style={{ textAlign: "center", marginBottom: 56 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 16px", borderRadius: 999, background: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.25)", color: NEON_GREEN, fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", marginBottom: 16 }}>
            RESPUESTAS CLARA
          </div>
          <h2 style={{ fontSize: "clamp(32px, 4vw, 54px)", fontWeight: 800, letterSpacing: "-2px", lineHeight: 1.05, margin: "0 auto 16px" }}>
            Preguntas <em style={{ fontFamily: "Georgia, 'Times New Roman', serif", fontStyle: "italic", color: G }}>Frecuentes</em>
          </h2>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 16, lineHeight: 1.7, maxWidth: 580, margin: "0 auto" }}>
            Todo lo que necesitás saber antes de dar el paso con Flowix. Transparencia total, sin vueltas.
          </p>
        </div>

        <div style={{ display: "grid", gap: 16 }}>
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="sr"
                style={{
                  background: isOpen ? "rgba(15, 23, 42, 0.85)" : "rgba(255, 255, 255, 0.02)",
                  border: isOpen ? `1px solid ${NEON_GREEN}` : "1px solid rgba(255, 255, 255, 0.08)",
                  borderRadius: 20,
                  overflow: "hidden",
                  transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                  boxShadow: isOpen ? `0 0 30px ${NEON_GREEN}18` : "none",
                }}
              >
                <button
                  onClick={() => toggle(idx)}
                  style={{
                    width: "100%",
                    padding: "24px 28px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: 16,
                    background: "none",
                    border: "none",
                    color: "#fff",
                    cursor: "pointer",
                    textAlign: "left",
                  }}
                >
                  <span style={{ fontSize: "clamp(16px, 2vw, 18px)", fontWeight: 700, letterSpacing: "-0.3px", color: isOpen ? "#fff" : "rgba(255,255,255,0.9)" }}>
                    {faq.question}
                  </span>
                  <div
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: 10,
                      background: isOpen ? "rgba(16,185,129,0.15)" : "rgba(255,255,255,0.05)",
                      border: isOpen ? "1px solid rgba(16,185,129,0.3)" : "1px solid rgba(255,255,255,0.1)",
                      display: "grid",
                      placeItems: "center",
                      color: isOpen ? NEON_GREEN : "#888",
                      fontSize: 18,
                      fontWeight: 700,
                      flexShrink: 0,
                      transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                      transition: "transform 0.3s ease, background 0.3s ease",
                    }}
                  >
                    +
                  </div>
                </button>

                {isOpen && (
                  <div style={{ padding: "0 28px 24px", color: "rgba(255,255,255,0.7)", fontSize: 15, lineHeight: 1.8, borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: 16 }}>
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
