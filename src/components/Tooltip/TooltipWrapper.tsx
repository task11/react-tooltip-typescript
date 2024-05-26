import { type ForwardedRef, forwardRef } from "react";
import { createPortal } from "react-dom";

import { ITooltipClasses, TooltipDirection, TooltipTitle } from "../../types";

import TooltipContent from "./TooltipContent";

const portalElement = document.getElementById("tooltip-root") as HTMLElement;

interface Props {
  title: TooltipTitle;
  direction: TooltipDirection;
  isVisible: boolean;
  arrow: boolean;
  classes: ITooltipClasses;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

export default forwardRef(function TooltipWrapper(
  {
    title,
    direction,
    isVisible,
    arrow,
    classes,
    onMouseEnter,
    onMouseLeave,
  }: Props,
  ref: ForwardedRef<HTMLDivElement>
) {
  if (!isVisible) return <></>;
  return createPortal(
    <div
      ref={ref}
      className="tooltip-container"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <TooltipContent
        title={title}
        direction={direction}
        arrow={arrow}
        classes={classes}
      />
    </div>,
    portalElement
  );
});
