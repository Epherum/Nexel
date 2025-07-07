"use client";

import React, { useContext, ReactNode } from "react";
import Link, { LinkProps } from "next/link";
import { CursorContext } from "@/components/cursor/CursorContext";

// Extend the standard LinkProps to accept children
interface HoverableLinkProps extends LinkProps {
  children: ReactNode;
  className?: string;
}

const HoverableLink = ({
  children,
  className,
  ...props
}: HoverableLinkProps) => {
  const { setHoveringLink } = useContext(CursorContext);

  return (
    <Link
      {...props}
      className={className}
      onMouseEnter={() => setHoveringLink(true)}
      onMouseLeave={() => setHoveringLink(false)}
    >
      {children}
    </Link>
  );
};

export default HoverableLink;
