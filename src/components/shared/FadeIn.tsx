"use client";

import { motion, useReducedMotion } from "framer-motion";
import type React from "react";

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  duration?: number;
  className?: string;
}

export function FadeIn({
  children,
  delay = 0,
  direction = "up",
  duration = 0.6,
  className,
}: FadeInProps) {
  // Membaca preferensi aksesibilitas sistem operasi pengguna
  const shouldReduceMotion = useReducedMotion();

  // Menentukan jarak pergeseran spasial berdasarkan arah
  const directionOffset = {
    up: 40,
    down: -40,
    left: 40,
    right: -40,
    none: 0,
  };

  // Jika user meminta reduced motion, paksa koordinat pergeseran spasial menjadi 0 (Hanya mainkan opacity)
  const offset = shouldReduceMotion ? 0 : directionOffset[direction];

  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        y: direction === "up" || direction === "down" ? offset : 0,
        x: direction === "left" || direction === "right" ? offset : 0,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        x: 0,
      }}
      viewport={{
        once: true, // Animasi hanya dipicu satu kali saat pertama kali masuk viewport
        margin: "-10% 0px -10% 0px", // Pemicu aktif sedikit sebelum elemen menyentuh batas layar
      }}
      transition={{
        duration: duration,
        delay: delay,
        ease: [0.25, 0.1, 0.25, 1], // Kurva adaptif Apple-style visual
      }}
    >
      {children}
    </motion.div>
  );
}
