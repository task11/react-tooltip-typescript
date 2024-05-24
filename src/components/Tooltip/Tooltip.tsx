import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

import "./Tooltip.css";

interface Props {
  children: React.ReactNode;
  title: React.ReactNode | string | number;
  direction?: DirectionType;
  enterDelay?: number;
  leaveDelay?: number;
  hoverNotHidden?: boolean;
  arrow?: boolean;
  classes?: ClassesType;
  disable?: boolean;
}

interface ClassesType {
  tooltip?: React.CSSProperties;
  arrow?: React.CSSProperties;
}

type DirectionType =
  | "top"
  | "left"
  | "right"
  | "bottom"
  | "topLeft"
  | "topRight"
  | "bottomLeft"
  | "bottomRight"
  | "leftTop"
  | "leftBottom"
  | "rightTop"
  | "rightBottom";

export default function Tooltip({
  children,
  title,
  direction = "top",
  enterDelay = 0,
  leaveDelay = 0,
  hoverNotHidden = false,
  arrow = true,
  classes = {},
  disable = false,
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
    handleVisibility(false, hoverNotHidden ? 1000 : leaveDelay);

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
                className={`tooltip-arrow ${getDirectionStyles(direction)}`}
                style={{ ...classes.arrow }}
              />
            )}
          </div>,
          document.body
        )}
    </div>
  );
}

function calculateElementPosition(
  referenceElement: HTMLDivElement,
  targetElement: HTMLDivElement,
  direction: DirectionType
): {
  offsetX: number;
  offsetY: number;
} {
  const referenceElementRect = referenceElement.getBoundingClientRect();

  const getOffset = (offsetX: number, offsetY: number) => ({
    offsetX,
    offsetY,
  });

  const positionCalculators = {
    top: () =>
      getOffset(
        referenceElementRect.left +
          window.scrollX -
          (targetElement.offsetWidth / 2 - referenceElementRect.width / 2),
        window.scrollY +
          referenceElementRect.top -
          targetElement.offsetHeight -
          10
      ),
    topLeft: () =>
      getOffset(
        referenceElementRect.left + window.scrollX,
        window.scrollY +
          referenceElementRect.top -
          targetElement.offsetHeight -
          10
      ),
    topRight: () =>
      getOffset(
        referenceElementRect.right - targetElement.offsetWidth + window.scrollX,
        window.scrollY +
          referenceElementRect.top -
          targetElement.offsetHeight -
          10
      ),
    bottom: () =>
      getOffset(
        referenceElementRect.left +
          window.scrollX -
          (targetElement.offsetWidth / 2 - referenceElementRect.width / 2),
        window.scrollY + referenceElementRect.bottom + 10
      ),
    bottomLeft: () =>
      getOffset(
        referenceElementRect.left + window.scrollX,
        window.scrollY + referenceElementRect.bottom + 10
      ),
    bottomRight: () =>
      getOffset(
        referenceElementRect.right - targetElement.offsetWidth + window.scrollX,
        window.scrollY + referenceElementRect.bottom + 10
      ),
    left: () =>
      getOffset(
        referenceElementRect.left +
          window.scrollX -
          targetElement.offsetWidth -
          10,
        window.scrollY +
          referenceElementRect.top -
          (targetElement.offsetHeight / 2 - referenceElementRect.height / 2)
      ),
    leftTop: () =>
      getOffset(
        referenceElementRect.left +
          window.scrollX -
          targetElement.offsetWidth -
          10,
        window.scrollY + referenceElementRect.top
      ),
    leftBottom: () =>
      getOffset(
        referenceElementRect.left +
          window.scrollX -
          targetElement.offsetWidth -
          10,
        window.scrollY +
          referenceElementRect.top -
          (targetElement.offsetHeight - referenceElementRect.height)
      ),
    right: () =>
      getOffset(
        referenceElementRect.left +
          window.scrollX +
          referenceElementRect.width +
          10,
        window.scrollY +
          referenceElementRect.top -
          (targetElement.offsetHeight / 2 - referenceElementRect.height / 2)
      ),
    rightTop: () =>
      getOffset(
        referenceElementRect.left +
          window.scrollX +
          referenceElementRect.width +
          10,
        window.scrollY + referenceElementRect.top
      ),
    rightBottom: () =>
      getOffset(
        referenceElementRect.left +
          window.scrollX +
          referenceElementRect.width +
          10,
        window.scrollY +
          referenceElementRect.top -
          (targetElement.offsetHeight - referenceElementRect.height)
      ),
  };

  const calculatePosition = positionCalculators[direction];

  if (!calculatePosition) {
    throw new Error(`Error Direction: ${direction}`);
  }

  return calculatePosition();
}
function setPositionElement(
  element: HTMLDivElement,
  offsetX: number,
  offsetY: number
) {
  element.style.left = `${offsetX}px`;
  element.style.top = `${offsetY}px`;
}

function getDirectionStyles(direction: DirectionType) {
  const directionStyles = {
    top: "arrow-top-center",
    topLeft: "arrow-top-left",
    topRight: "arrow-top-right",
    bottom: "arrow-bottom-center",
    bottomLeft: "arrow-bottom-left",
    bottomRight: "arrow-bottom-right",
    left: "arrow-left-center",
    leftTop: "arrow-left-top",
    leftBottom: "arrow-left-bottom",
    right: "arrow-right-center",
    rightTop: "arrow-right-top",
    rightBottom: "arrow-right-bottom",
  };

  return directionStyles[direction];
}
