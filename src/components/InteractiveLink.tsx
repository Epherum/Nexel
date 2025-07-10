"use client";

import {
  useContext,
  forwardRef,
  type MouseEvent,
  type PropsWithChildren,
} from "react"; // 1. Import forwardRef and MouseEvent

import { usePathname } from "next/navigation";
import { useTransitionRouter } from "next-view-transitions";
import Link, { type LinkProps } from "next/link";
import { CursorContext } from "@/components/cursor/CursorContext"; // 1. Import CursorContext

// The animation function remains the same
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

interface InteractiveLinkProps extends LinkProps {
  className?: string;
  onClick?: (e: MouseEvent<HTMLAnchorElement>) => void;
}

// 3. Wrap the component definition in forwardRef
const InteractiveLink = forwardRef<
  HTMLAnchorElement,
  PropsWithChildren<InteractiveLinkProps>
>(({ children, href, className, onClick, ...props }, ref) => {
  const router = useTransitionRouter();
  const pathname = usePathname();
  const { setHoveringLink } = useContext(CursorContext);

  const handleLinkClick = (e: MouseEvent<HTMLAnchorElement>) => {
    // 4. Call the passed-in onClick function first, if it exists
    if (onClick) {
      onClick(e);
    }

    // Prevent default link behavior to allow for custom transition
    e.preventDefault();

    if (href.toString() === pathname) {
      return;
    }

    router.push(href.toString(), { onTransitionReady: pageAnimate });
  };

  return (
    <Link
      ref={ref} // 5. Attach the forwarded ref
      href={href}
      className={className}
      {...props}
      onClick={handleLinkClick}
      onMouseEnter={() => setHoveringLink(true)}
      onMouseLeave={() => setHoveringLink(false)}
    >
      {children}
    </Link>
  );
});

InteractiveLink.displayName = "InteractiveLink"; // Good practice for debugging

export default InteractiveLink;
