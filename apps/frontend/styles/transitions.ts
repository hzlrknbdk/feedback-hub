// ============================================================================
// GLOBAL TRANSITIONS & ANIMATIONS
// ============================================================================

export const TRANSITIONS = {
  // Duration presets
  fast: "0.15s",
  base: "0.2s",
  slow: "0.3s",

  // Easing functions
  easing: {
    easeInOut: "ease-in-out",
    easeIn: "ease-in",
    easeOut: "ease-out",
    linear: "linear",
  },

  // Common transitions
  smooth: "all 0.2s ease-in-out",
  color: "color 0.2s ease-in-out",
  transform: "transform 0.2s ease-in-out",
  shadow: "box-shadow 0.2s ease-in-out",
  all: "all 0.2s ease-in-out",
} as const;

export const SHADOWS = {
  none: "none",
  sm: "0 2px 8px rgba(0, 0, 0, 0.08)",
  md: "0 4px 12px rgba(99, 102, 241, 0.15)",
  lg: "0 8px 16px rgba(0, 0, 0, 0.1)",
  xl: "0 12px 24px rgba(0, 0, 0, 0.15)",
} as const;
