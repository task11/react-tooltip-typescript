import { getArrowDirectionStyles } from "../../utils/tooltip.helpers";

import { ITooltipClasses, TooltipDirection, TooltipTitle } from "../../types";

interface Props {
  title: TooltipTitle;
  direction: TooltipDirection;
  arrow: boolean;
  classes: ITooltipClasses;
}

export default function TooltipContent({
  title,
  direction,
  arrow,
  classes,
}: Props) {
  return (
    <div className="tooltip-inner" style={{ ...classes.tooltip }}>
      {title}
      {arrow && (
        <div
          className={`tooltip-arrow ${getArrowDirectionStyles(direction)}`}
          style={{ ...classes.arrow }}
        />
      )}
    </div>
  );
}
