import { ICardIcon } from "@interfaces/componentInterfaces";
import { getProperIconColor } from "@utils/utils";
import "./style.css";
import { CSSProperties } from "react";

export const CardIcon = ({
  icon,
  iconColor,
  backgroundColor,
  backgroundOpacity,
}: ICardIcon) => {
  return (
    <div
      className="cardIcon"
      style={{
        backgroundColor: `rgba(${getProperIconColor(backgroundColor)}, ${backgroundOpacity})`,
      }}
    >
      <span
        className="cardIcon--icon"
        style={{ "--icon-fill": iconColor } as CSSProperties}
      >
        {icon}
      </span>
    </div>
  );
};
