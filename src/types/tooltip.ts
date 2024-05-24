export interface ITooltipClasses {
  tooltip?: React.CSSProperties;
  arrow?: React.CSSProperties;
}

export type TooltipDirection =
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

export type TooltipTitle = React.ReactNode | string | number;
