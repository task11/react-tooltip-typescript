import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

import {
  calculateElementPosition,
  getArrowDirectionStyles,
  setPositionElement,
} from "./Tooltip.helpers";
import {
  DEFAULT_TOOLTIP_ARROW,
  DEFAULT_TOOLTIP_CLASSES,
  DEFAULT_TOOLTIP_DIRECTION,
  DEFAULT_TOOLTIP_DISABLE,
  DEFAULT_TOOLTIP_ENTER_DELAY,
  DEFAULT_TOOLTIP_HOVER_NOT_HIDDEN,
  DEFAULT_TOOLTIP_LEAVE_DELAY,
  TOOLTIP_HOVER_NOT_HIDDEN_DELAY,
} from "../../config/constants";
import { ITooltipClasses, TooltipDirection, TooltipTitle } from "../../types";

import "./Tooltip.css";

interface Props {
  children: React.ReactNode;
  title: TooltipTitle;
  direction?: TooltipDirection;
  enterDelay?: number;
  leaveDelay?: number;
  hoverNotHidden?: boolean;
  arrow?: boolean;
  classes?: ITooltipClasses;
  disable?: boolean;
}

export default function Tooltip({
  children,
  title,
  direction = DEFAULT_TOOLTIP_DIRECTION,
  enterDelay = DEFAULT_TOOLTIP_ENTER_DELAY,
  leaveDelay = DEFAULT_TOOLTIP_LEAVE_DELAY,
  hoverNotHidden = DEFAULT_TOOLTIP_HOVER_NOT_HIDDEN,
  arrow = DEFAULT_TOOLTIP_ARROW,
  classes = DEFAULT_TOOLTIP_CLASSES,
  disable = DEFAULT_TOOLTIP_DISABLE,
}: Props) {
  const [isVisible, setIsVisible] = useState(false);
  const enterTimeoutRef = useRef<number | undefined>();
  const leaveTimeoutRef = useRef<number | undefined>();
  const childrenRef = useRef<HTMLDivElement | null>(null);
  const tooltipRef = useRef<HTMLDivElement | null>(null);

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

  useEffect(() => () => clearTimers(), []);

  useEffect(() => {
    if (!isVisible || !tooltipRef.current || !childrenRef.current) return;

    const { offsetX, offsetY } = calculateElementPosition(
      childrenRef.current,
      tooltipRef.current,
      direction
    );

    setPositionElement(tooltipRef.current, offsetX, offsetY);
  }, [isVisible, direction]);

  if (disable) return <>{children}</>;

  return (
    <div className="tooltip">
      <div
        ref={childrenRef}
        onMouseEnter={handleTooltipShow}
        onMouseLeave={handleTooltipHide}
      >
        {children}
      </div>
      {isVisible &&
        createPortal(
          <div
            ref={tooltipRef}
            className="tooltip-container"
            onMouseEnter={handleTooltipHover}
            onMouseLeave={handleTooltipHide}
          >
            <div className="tooltip-inner" style={{ ...classes.tooltip }}>
              {title}
            </div>
            {arrow && (
              <div
                className={`tooltip-arrow ${getArrowDirectionStyles(
                  direction
                )}`}
                style={{ ...classes.arrow }}
              />
            )}
          </div>,
          document.body
        )}
    </div>
  );
}
