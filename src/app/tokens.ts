/**
 * Token desain statis yang dapat diekspor ke lingkungan JavaScript/TypeScript
 * jika dibutuhkan oleh library animasi (seperti GSAP/Framer Motion) di sprint mendatang.
 * Konstitusi: Nilai di sini harus sinkron secara matematis dengan berkas CSS.
 */
export const tokens = {
  duration: {
    instant: "0s",
    fast: "0.2s",
    editorial: "0.45s",
    slow: "0.8s",
  },
  ease: {
    standard: "cubic-bezier(0.25, 1, 0.5, 1)", // easeOutQuart
    dramatic: "cubic-bezier(0.85, 0, 0.15, 1)", // easeInOutQuint
    apple: "cubic-bezier(0.25, 0.1, 0.25, 1)",
  },
  zIndex: {
    hide: -1,
    base: 1,
    dock: 10,
    dropdown: 50,
    overlay: 100,
    modal: 200,
    cursor: 999,
  },
} as const;
