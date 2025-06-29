export const easings = {
  /**
   * A smooth, standard ease-out curve. Great for reveals and transitions.
   * Starts fast, decelerates to a stop. (Quintic)
   */
  easeOut: [0.22, 1, 0.36, 1],

  /**
   * NEW: A gentler, more traditional ease-out. Less aggressive start. (Cubic)
   * This is perfect for scroll-driven animations where you want a smoother takeoff.
   */
  gentleEaseOut: [0.33, 1, 0.68, 1],

  /**
   * An energetic and sharp curve. Good for UI elements that need to pop.
   */
  easeInAndOut: [0.87, 0, 0.13, 1],

  /**
   * A playful curve with a slight "overshoot" or bounce at the end.
   */
  easeOutWithOvershoot: [0.34, 1.56, 0.64, 1],
} as const;
