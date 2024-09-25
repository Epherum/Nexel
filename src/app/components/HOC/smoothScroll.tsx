// scrollManager.ts

let locomotiveScroll: LocomotiveScroll | null = null;

export const initializeScroll = async (options = {}) => {
  const LocomotiveScroll = (await import("locomotive-scroll")).default;

  locomotiveScroll = new LocomotiveScroll({
    //@ts-ignore
    lenisOptions: {
      lerp: 0.08,
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
