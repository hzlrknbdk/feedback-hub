// ============================================================================
// GLOBAL SIZING & SPACING
// ============================================================================

export const SIZES = {
  // Spacing scale
  spacing: {
    xs: 1,
    sm: 2,
    md: 3,
    lg: 4,
    xl: 5,
    "2xl": 6,
    "3xl": 8,
  },

  // Border radius
  radius: {
    none: 0,
    sm: 0.5,
    md: 1,
    lg: 1.5,
    xl: 2,
    full: 9999,
  },

  // Typography
  fontSize: {
    xs: 12,
    sm: 13,
    md: 14,
    lg: 16,
    xl: 18,
    "2xl": 20,
    "3xl": 24,
  },

  fontWeight: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },

  maxWidth: {
    sm: 300,
    md: 650,
    lg: 1024,
  },

  // Common sizes
  iconSize: 28,
  iconSizeSmall: 20,
  buttonHeight: 40,
} as const;
