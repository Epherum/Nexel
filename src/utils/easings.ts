// src/utils/easings.ts

// A collection of premium cubic-bezier easing curves.
// You can use a site like https://cubic-bezier.com/ to visualize and create them.

export const easings = {
  /**
   * A smooth, standard ease-out curve. Great for reveals and transitions.
   * Starts fast, decelerates to a stop.
   */
  easeOut: [0.22, 1, 0.36, 1],

  /**
   * An energetic and sharp curve. Good for UI elements that need to pop.
   * Very fast start and a quick stop.
   */
  easeInAndOut: [0.87, 0, 0.13, 1],

  /**
   * A playful curve with a slight "overshoot" or bounce at the end.
   * Use sparingly for emphasis, great for pills or icons.
   */
  easeOutWithOvershoot: [0.34, 1.56, 0.64, 1],
};
