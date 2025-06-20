// src/app/components/HOC/smoothScroll.tsx
let locomotiveScroll: LocomotiveScroll | null = null;

export const initializeScroll = async (options = {}) => {
  const LocomotiveScroll = (await import("locomotive-scroll")).default;

  //@ts-ignore
  locomotiveScroll = new LocomotiveScroll({
    lenisOptions: {
      lerp: 0.06,
      wheelMultiplier: 1.3,
    },
  });

  return locomotiveScroll;
};

export const getScrollInstance = () => {
  return locomotiveScroll;
};

export const destroyScroll = () => {
  locomotiveScroll?.destroy();
  locomotiveScroll = null;
};
