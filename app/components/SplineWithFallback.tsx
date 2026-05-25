"use client";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

// Cargamos SplineHero (que usa /next internamente) solo en el cliente, sin SSR
const SplineHero = dynamic(() => import("./SplineHero"), { ssr: false });

const MIN_WIDTH  = 900;   // px — por debajo = mobile, no carga
const MIN_MEMORY = 4;     // GB — deviceMemory API (Chrome only)

function checkWebGL(): boolean {
  try {
    const canvas = document.createElement("canvas");
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
    );
  } catch {
    return false;
  }
}

/* Fallback visual — CSS puro, sin peso, se ve bien en cualquier dispositivo */
function HeroFallback() {
  return (
    <div style={{ width: "100%", height: "100%", position: "relative", overflow: "hidden" }}>

      {/* Glow central derecha */}
      <div aria-hidden style={{
        position: "absolute", top: "50%", right: -60,
        transform: "translateY(-50%)",
        width: 640, height: 640,
        background: "radial-gradient(circle, rgba(0,204,106,0.13) 0%, transparent 60%)",
        borderRadius: "50%", pointerEvents: "none",
      }} />

      {/* Anillo exterior girando */}
      <div aria-hidden className="orb-ring orb-ring-1" style={{
        top: "50%", right: "4%",
        width: 420, height: 420,
        marginTop: -210, marginRight: -80,
      }} />

      {/* Anillo medio (reverso) */}
      <div aria-hidden className="orb-ring orb-ring-2" style={{
        top: "50%", right: "4%",
        width: 280, height: 280,
        marginTop: -140, marginRight: -20,
      }} />

      {/* Anillo interior */}
      <div aria-hidden className="orb-ring orb-ring-3" style={{
        top: "50%", right: "4%",
        width: 160, height: 160,
        marginTop: -80, marginRight: 40,
        borderColor: "rgba(0,204,106,0.2)",
      }} />

      {/* Punto central brillante */}
      <div aria-hidden style={{
        position: "absolute", top: "50%", right: "calc(4% - 40px)",
        transform: "translate(50%, -50%)",
        width: 48, height: 48,
        background: "radial-gradient(circle, rgba(0,204,106,0.5) 0%, transparent 70%)",
        borderRadius: "50%", pointerEvents: "none",
      }} />

      {/* Orb flotante superior */}
      <div aria-hidden className="float" style={{
        position: "absolute", top: "18%", right: "30%",
        width: 90, height: 90,
        background: "radial-gradient(circle, rgba(0,204,106,0.09) 0%, transparent 70%)",
        borderRadius: "50%", pointerEvents: "none",
        animationDelay: "-1.5s",
      }} />

      {/* Orb flotante inferior */}
      <div aria-hidden className="float" style={{
        position: "absolute", bottom: "20%", right: "22%",
        width: 60, height: 60,
        background: "radial-gradient(circle, rgba(0,204,106,0.07) 0%, transparent 70%)",
        borderRadius: "50%", pointerEvents: "none",
        animationDelay: "-3.5s",
      }} />

      {/* Líneas decorativas (circuito) */}
      <svg aria-hidden style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none", overflow: "visible" }}>
        <path d="M 75% 30% L 75% 50% L 85% 50%" stroke="rgba(0,204,106,0.1)" strokeWidth="1" fill="none" />
        <path d="M 60% 65% L 70% 65% L 70% 75%" stroke="rgba(0,204,106,0.07)" strokeWidth="1" fill="none" />
        <circle cx="75%" cy="30%" r="3" fill="rgba(0,204,106,0.2)" />
        <circle cx="85%" cy="50%" r="2" fill="rgba(0,204,106,0.15)" />
        <circle cx="70%" cy="75%" r="2.5" fill="rgba(0,204,106,0.12)" />
      </svg>
    </div>
  );
}

export default function SplineWithFallback() {
  const [canRender, setCanRender] = useState(false);

  useEffect(() => {
    // 1. Pantalla chica → mobile → no carga
    if (window.innerWidth < MIN_WIDTH) return;

    // 2. Poca RAM (API disponible solo en Chrome) → no carga
    const mem = (navigator as { deviceMemory?: number }).deviceMemory;
    if (mem !== undefined && mem < MIN_MEMORY) return;

    // 3. WebGL no soportado → no carga
    if (!checkWebGL()) return;

    setCanRender(true);
  }, []);

  if (!canRender) return <HeroFallback />;

  return <SplineHero />;
}
