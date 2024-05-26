import { TOOLTIP_OFFSET } from "../config/constants";
import { TooltipDirection } from "../types/tooltip";

export function calculateElementPosition(
  referenceElement: HTMLDivElement,
  targetElement: HTMLDivElement,
  direction: TooltipDirection
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
          TOOLTIP_OFFSET
      ),
    topLeft: () =>
      getOffset(
        referenceElementRect.left + window.scrollX,
        window.scrollY +
          referenceElementRect.top -
          targetElement.offsetHeight -
          TOOLTIP_OFFSET
      ),
    topRight: () =>
      getOffset(
        referenceElementRect.right - targetElement.offsetWidth + window.scrollX,
        window.scrollY +
          referenceElementRect.top -
          targetElement.offsetHeight -
          TOOLTIP_OFFSET
      ),
    bottom: () =>
      getOffset(
        referenceElementRect.left +
          window.scrollX -
          (targetElement.offsetWidth / 2 - referenceElementRect.width / 2),
        window.scrollY + referenceElementRect.bottom + TOOLTIP_OFFSET
      ),
    bottomLeft: () =>
      getOffset(
        referenceElementRect.left + window.scrollX,
        window.scrollY + referenceElementRect.bottom + TOOLTIP_OFFSET
      ),
    bottomRight: () =>
      getOffset(
        referenceElementRect.right - targetElement.offsetWidth + window.scrollX,
        window.scrollY + referenceElementRect.bottom + TOOLTIP_OFFSET
      ),
    left: () =>
      getOffset(
        referenceElementRect.left +
          window.scrollX -
          targetElement.offsetWidth -
          TOOLTIP_OFFSET,
        window.scrollY +
          referenceElementRect.top -
          (targetElement.offsetHeight / 2 - referenceElementRect.height / 2)
      ),
    leftTop: () =>
      getOffset(
        referenceElementRect.left +
          window.scrollX -
          targetElement.offsetWidth -
          TOOLTIP_OFFSET,
        window.scrollY + referenceElementRect.top
      ),
    leftBottom: () =>
      getOffset(
        referenceElementRect.left +
          window.scrollX -
          targetElement.offsetWidth -
          TOOLTIP_OFFSET,
        window.scrollY +
          referenceElementRect.top -
          (targetElement.offsetHeight - referenceElementRect.height)
      ),
    right: () =>
      getOffset(
        referenceElementRect.left +
          window.scrollX +
          referenceElementRect.width +
          TOOLTIP_OFFSET,
        window.scrollY +
          referenceElementRect.top -
          (targetElement.offsetHeight / 2 - referenceElementRect.height / 2)
      ),
    rightTop: () =>
      getOffset(
        referenceElementRect.left +
          window.scrollX +
          referenceElementRect.width +
          TOOLTIP_OFFSET,
        window.scrollY + referenceElementRect.top
      ),
    rightBottom: () =>
      getOffset(
        referenceElementRect.left +
          window.scrollX +
          referenceElementRect.width +
          TOOLTIP_OFFSET,
        window.scrollY +
          referenceElementRect.top -
          (targetElement.offsetHeight - referenceElementRect.height)
      ),
  };

  return positionCalculators[direction]();
}
export function setPositionElement(
  element: HTMLDivElement,
  offsetX: number,
  offsetY: number
) {
  element.style.left = `${offsetX}px`;
  element.style.top = `${offsetY}px`;
}

export function getArrowDirectionStyles(direction: TooltipDirection) {
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
