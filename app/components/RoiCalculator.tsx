"use client";

import { useState } from "react";

const G = "#00CC6A";
const R = "#ef4444";
const NEON_CYAN = "#0EA5E9";

export default function RoiCalculator() {
  const [queriesPerDay, setQueriesPerDay] = useState<number>(10);
  const [ticketValue, setTicketValue] = useState<number>(15000);

  // Estimation: 35% of unattended queries after-hours are lost without automation
  const lostCustomersPerMonth = Math.round(queriesPerDay * 30 * 0.35);
  const lostRevenuePerMonth = lostCustomersPerMonth * ticketValue;
  const lostRevenuePerYear = lostRevenuePerMonth * 12;

  const formattedLostMonth = new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    maximumFractionDigits: 0,
  }).format(lostRevenuePerMonth);

  const formattedLostYear = new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    maximumFractionDigits: 0,
  }).format(lostRevenuePerYear);

  return (
    <section id="calculadora" style={{ padding: "88px 40px", background: "#050508", borderTop: "1px solid rgba(255,255,255,0.06)", position: "relative" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div className="sr" style={{ textAlign: "center", marginBottom: 56 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 16px", borderRadius: 999, background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.25)", color: R, fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", marginBottom: 16 }}>
            CALCULADORA DE IMPACTO
          </div>
          <h2 style={{ fontSize: "clamp(32px, 4vw, 54px)", fontWeight: 800, letterSpacing: "-2px", lineHeight: 1.05, maxWidth: 740, margin: "0 auto 16px" }}>
            ¿Cuánto dinero estás <em style={{ fontFamily: "Georgia, 'Times New Roman', serif", fontStyle: "italic", color: R }}>perdiendo</em> sin automatización?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 16, lineHeight: 1.7, maxWidth: 620, margin: "0 auto" }}>
            Los mensajes de WhatsApp no respondidos a tiempo o fuera de horario son ventas directas para tu competencia. Calculá tu pérdida estimada.
          </p>
        </div>

        <div className="sr glow-card products-grid" style={{ background: "rgba(15, 23, 42, 0.75)", border: "1px solid #1E293B", borderRadius: 32, padding: "44px 40px", boxShadow: "0 20px 60px rgba(0,0,0,0.5)", display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: 48, alignItems: "center" }}>
          
          {/* Left Column: Interactive Controls */}
          <div style={{ display: "grid", gap: 32 }}>
            {/* Slider 1: Consultas fuera de hora */}
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                <label style={{ fontSize: 14, color: "rgba(255,255,255,0.85)", fontWeight: 600 }}>
                  Consultas recibidas por día en WhatsApp:
                </label>
                <span style={{ fontSize: 18, fontWeight: 800, color: G, background: "rgba(0,204,106,0.12)", padding: "4px 12px", borderRadius: 8, border: "1px solid rgba(0,204,106,0.25)" }}>
                  {queriesPerDay} / día
                </span>
              </div>
              <input
                type="range"
                min={3}
                max={60}
                value={queriesPerDay}
                onChange={(e) => setQueriesPerDay(Number(e.target.value))}
                style={{ width: "100%", accentColor: G, height: 6, cursor: "pointer" }}
              />
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, color: "rgba(255,255,255,0.4)", marginTop: 6 }}>
                <span>3 por día</span>
                <span>30 por día</span>
                <span>60 por día</span>
              </div>
            </div>

            {/* Slider 2: Ticket Promedio */}
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                <label style={{ fontSize: 14, color: "rgba(255,255,255,0.85)", fontWeight: 600 }}>
                  Valor promedio de tu servicio o venta (Ticket Promedio):
                </label>
                <span style={{ fontSize: 16, fontWeight: 800, color: NEON_CYAN, background: "rgba(14,165,233,0.12)", padding: "4px 12px", borderRadius: 8, border: "1px solid rgba(14,165,233,0.25)" }}>
                  $ {ticketValue.toLocaleString("es-AR")} ARS
                </span>
              </div>
              <input
                type="range"
                min={5000}
                max={80000}
                step={2500}
                value={ticketValue}
                onChange={(e) => setTicketValue(Number(e.target.value))}
                style={{ width: "100%", accentColor: NEON_CYAN, height: 6, cursor: "pointer" }}
              />
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, color: "rgba(255,255,255,0.4)", marginTop: 6 }}>
                <span>$5.000 ARS</span>
                <span>$40.000 ARS</span>
                <span>$80.000 ARS</span>
              </div>
            </div>
          </div>

          {/* Right Column: ROI Results Display Box */}
          <div style={{ background: "rgba(8, 8, 12, 0.9)", border: "1px solid rgba(239,68,68,0.25)", borderRadius: 24, padding: "32px 28px", textAlign: "center", position: "relative", overflow: "hidden" }}>
            <div aria-hidden style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: "linear-gradient(90deg, transparent 0%, #ef4444 50%, transparent 100%)", pointerEvents: "none" }} />
            
            <p style={{ margin: 0, fontSize: 12, color: "rgba(255,255,255,0.5)", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 700, marginBottom: 8 }}>
              Pérdida estimada por falta de respuesta instantánea:
            </p>

            <p style={{ margin: "12px 0 4px", fontSize: "clamp(32px, 3.5vw, 42px)", fontWeight: 900, color: R, letterSpacing: "-1.5px", lineHeight: 1 }}>
              {formattedLostMonth}
            </p>
            <p style={{ margin: "0 0 20px", fontSize: 13, color: "rgba(255,255,255,0.6)" }}>
              perdidos todos los meses (~{lostCustomersPerMonth} clientes no atendidos)
            </p>

            <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 18, marginBottom: 24 }}>
              <span style={{ fontSize: 12, color: "rgba(255,255,255,0.5)" }}>Equivalente anual: </span>
              <strong style={{ fontSize: 16, color: "#fff", marginLeft: 4 }}>{formattedLostYear} / año</strong>
            </div>

            {/* Impact Message */}
            <div style={{ background: "rgba(0,204,106,0.08)", border: "1px solid rgba(0,204,106,0.25)", borderRadius: 14, padding: "14px 16px" }}>
              <p style={{ margin: 0, fontSize: 13, color: "rgba(255,255,255,0.9)", lineHeight: 1.6 }}>
                💡 <strong>Con Flowix:</strong> Automatizás el agendamiento 24/7 y recuperás hasta el <strong>100%</strong> de estas ventas en tu primer mes.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
