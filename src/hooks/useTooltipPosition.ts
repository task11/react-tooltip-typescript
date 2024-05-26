import { useEffect, useRef } from "react";

import {
  calculateElementPosition,
  setPositionElement,
} from "../utils/Tooltip.helpers";

import { TooltipDirection } from "../types";

interface UseTooltipPositionProps {
  isVisible: boolean;
  direction: TooltipDirection;
}

export default function useTooltipPosition({
  isVisible,
  direction,
}: UseTooltipPositionProps) {
  const childrenRef = useRef<HTMLDivElement | null>(null);
  const tooltipRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!isVisible || !tooltipRef.current || !childrenRef.current) return;

    const { offsetX, offsetY } = calculateElementPosition(
      childrenRef.current,
      tooltipRef.current,
      direction
    );

    setPositionElement(tooltipRef.current, offsetX, offsetY);
  }, [isVisible, direction]);

  return { childrenRef, tooltipRef };
}
