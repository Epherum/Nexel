"use client";

import React, { useContext, ReactNode } from "react";
import { CursorContext } from "@/components/cursor/CursorContext";

interface HoverableDraggableProps {
  children: ReactNode;
  className?: string;
}

const HoverableDraggable = ({
  children,
  className,
}: HoverableDraggableProps) => {
  const { setHoveringDraggable } = useContext(CursorContext);

  return (
    <div
      className={className}
      onMouseEnter={() => setHoveringDraggable(true)}
      onMouseLeave={() => setHoveringDraggable(false)}
    >
      {children}
    </div>
  );
};

export default HoverableDraggable;
