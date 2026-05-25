"use client";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

// SplineHero se carga solo en el cliente (nunca en SSR)
const SplineHero = dynamic(() => import("./SplineHero"), { ssr: false });

const MIN_WIDTH = 900; // px — mobile no carga el robot

/* Fallback visual — CSS puro, cero peso, se ve en cualquier dispositivo */
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

      {/* Anillo exterior */}
      <div aria-hidden className="orb-ring orb-ring-1" style={{
        top: "50%", right: "4%",
        width: 420, height: 420,
        marginTop: -210, marginRight: -80,
      }} />

      {/* Anillo medio */}
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

      {/* Punto central */}
      <div aria-hidden style={{
        position: "absolute", top: "50%", right: "calc(4% - 40px)",
        transform: "translate(50%, -50%)",
        width: 48, height: 48,
        background: "radial-gradient(circle, rgba(0,204,106,0.5) 0%, transparent 70%)",
        borderRadius: "50%", pointerEvents: "none",
      }} />

      {/* Orbs flotantes */}
      <div aria-hidden className="float" style={{
        position: "absolute", top: "18%", right: "30%",
        width: 90, height: 90,
        background: "radial-gradient(circle, rgba(0,204,106,0.09) 0%, transparent 70%)",
        borderRadius: "50%", pointerEvents: "none",
        animationDelay: "-1.5s",
      }} />
      <div aria-hidden className="float" style={{
        position: "absolute", bottom: "20%", right: "22%",
        width: 60, height: 60,
        background: "radial-gradient(circle, rgba(0,204,106,0.07) 0%, transparent 70%)",
        borderRadius: "50%", pointerEvents: "none",
        animationDelay: "-3.5s",
      }} />

      {/* Líneas decorativas */}
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
    // Pantalla >= 900px → cargar Spline. En mobile → fallback CSS.
    if (window.innerWidth >= MIN_WIDTH) {
      setCanRender(true);
    }
  }, []);

  if (!canRender) return <HeroFallback />;

  return <SplineHero />;
}
