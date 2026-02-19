import { ICardIcon } from "@interfaces/componentInterfaces";
import { getProperIconColor } from "@utils/utils";
import "./style.css";
import { CSSProperties } from "react";

export const CardIcon = ({
  icon,
  iconColor,
  backgroundColor,
  opacity,
}: ICardIcon) => {
  return (
    <div
      className="cardIcon"
      style={{
        backgroundColor: backgroundColor
          ? `rgba(${getProperIconColor(backgroundColor)}, ${opacity ? opacity : 0.1})`
          : "transparent",
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
