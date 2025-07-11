"use client";

import { useTransitionRouter } from "next-view-transitions";
import Link, { type LinkProps } from "next/link";
import type { PropsWithChildren } from "react";
import { usePathname } from "next/navigation";

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

// ✨ 1. UPDATE: Define props to explicitly include an optional onClick handler.
interface TransitionLinkProps extends LinkProps {
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export default function TransitionLink({
  children,
  href,
  onClick, // ✨ 2. UPDATE: Destructure the onClick prop here.
  ...props
}: PropsWithChildren<TransitionLinkProps>) {
  const router = useTransitionRouter();
  const pathname = usePathname();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // ✨ 3. UPDATE: If an onClick prop was passed from the parent, call it first!
    // This is what will trigger the menu to close.
    if (onClick) {
      onClick(e);
    }

    // Now, continue with the original transition logic.
    e.preventDefault();

    if (href.toString() === pathname) {
      return;
    }

    router.push(href.toString(), { onTransitionReady: pageAnimate });
  };

  return (
    <Link href={href} {...props} onClick={handleLinkClick}>
      {children}
    </Link>
  );
}
