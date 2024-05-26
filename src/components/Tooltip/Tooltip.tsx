import useTooltip from "../../hooks/useTooltip";
import useTooltipPosition from "../../hooks/useTooltipPosition";

import {
  DEFAULT_TOOLTIP_ARROW,
  DEFAULT_TOOLTIP_CLASSES,
  DEFAULT_TOOLTIP_DIRECTION,
  DEFAULT_TOOLTIP_DISABLE,
  DEFAULT_TOOLTIP_ENTER_DELAY,
  DEFAULT_TOOLTIP_HOVER_NOT_HIDDEN,
  DEFAULT_TOOLTIP_LEAVE_DELAY,
} from "../../config/constants";
import { ITooltipClasses, TooltipDirection, TooltipTitle } from "../../types";

import TooltipFrame from "./TooltipFrame";

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
  const {
    isVisible,
    handleTooltipHide,
    handleTooltipHover,
    handleTooltipShow,
  } = useTooltip({ enterDelay, leaveDelay, hoverNotHidden });

  const { childrenRef, tooltipRef } = useTooltipPosition({
    isVisible,
    direction,
  });

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
      <TooltipFrame
        ref={tooltipRef}
        title={title}
        direction={direction}
        isVisible={isVisible}
        arrow={arrow}
        classes={classes}
        onMouseEnter={handleTooltipHover}
        onMouseLeave={handleTooltipHide}
      />
    </div>
  );
}
