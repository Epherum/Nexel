"use client";

import { useTransitionRouter } from "next-view-transitions";
import Link, { type LinkProps } from "next/link";
import type { PropsWithChildren } from "react";
import { usePathname } from "next/navigation"; // ✨ 1. Import the usePathname hook

// The animation function remains unchanged
function pageAnimate() {
  document.documentElement.animate(
    [
      { opacity: 1, transform: "translateX(0)" },
      { opacity: 0, transform: "translateX(-50px)" },
    ],
    {
      duration: 400,
      easing: "cubic-bezier(0.4, 0.0, 0.2, 1)",
      fill: "forwards",
      pseudoElement: "::view-transition-old(root)",
    }
  );

  document.documentElement.animate(
    [
      { opacity: 0, transform: "translateX(50px)" },
      { opacity: 1, transform: "translateX(0)" },
    ],
    {
      duration: 400,
      easing: "cubic-bezier(0.4, 0.0, 0.2, 1)",
      fill: "forwards",
      pseudoElement: "::view-transition-new(root)",
    }
  );
}

// The reusable Link component
export default function TransitionLink({
  children,
  href,
  ...props
}: PropsWithChildren<LinkProps>) {
  const router = useTransitionRouter();
  const pathname = usePathname(); // ✨ 2. Get the current path

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    // ✨ 3. Compare the link's href to the current pathname
    if (href.toString() === pathname) {
      // If they are the same, do nothing.
      return;
    }

    // If they are different, proceed with the transition.
    router.push(href.toString(), { onTransitionReady: pageAnimate });
  };

  return (
    <Link href={href} {...props} onClick={handleLinkClick}>
      {children}
    </Link>
  );
}
