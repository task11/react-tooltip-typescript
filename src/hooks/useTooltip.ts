import { useState, useRef, useEffect } from "react";
import {
  DEFAULT_TOOLTIP_ENTER_DELAY,
  DEFAULT_TOOLTIP_LEAVE_DELAY,
  TOOLTIP_HOVER_NOT_HIDDEN_DELAY,
} from "../config/constants";

interface UseTooltipProps {
  enterDelay?: number;
  leaveDelay?: number;
  hoverNotHidden?: boolean;
}

export default function useTooltip({
  enterDelay = DEFAULT_TOOLTIP_ENTER_DELAY,
  leaveDelay = DEFAULT_TOOLTIP_LEAVE_DELAY,
  hoverNotHidden = false,
}: UseTooltipProps) {
  const [isVisible, setIsVisible] = useState(false);
  const enterTimeoutRef = useRef<number | undefined>();
  const leaveTimeoutRef = useRef<number | undefined>();

  const clearTimers = () => {
    clearTimeout(enterTimeoutRef.current);
    clearTimeout(leaveTimeoutRef.current);
  };

  const handleVisibility = (visible: boolean, delay?: number) => {
    clearTimers();

    const timeoutRef = visible ? enterTimeoutRef : leaveTimeoutRef;

    timeoutRef.current = window.setTimeout(() => {
      setIsVisible(visible);
    }, delay || 0);
  };

  const handleTooltipShow = () => handleVisibility(true, enterDelay);

  const handleTooltipHide = () =>
    handleVisibility(
      false,
      hoverNotHidden ? TOOLTIP_HOVER_NOT_HIDDEN_DELAY : leaveDelay
    );

  const handleTooltipHover = () => hoverNotHidden && handleVisibility(true);

  useEffect(() => {
    return () => clearTimers();
  }, []);

  return {
    isVisible,
    handleTooltipShow,
    handleTooltipHide,
    handleTooltipHover,
  };
}
