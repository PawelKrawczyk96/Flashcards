import { IStatisticsCard } from "@interfaces/componentInterfaces";
import "./style.css";
import { getProperIconColor } from "@utils/utils";
import { CSSProperties } from "react";

export const StatisticsCard = ({
  title,
  statisticNumber,
  icon,
  iconColor,
  statisticDescription,
}: IStatisticsCard) => {
  return (
    <div className="statistics-card">
      <div className="statistics-card__content">
        <h1 className="statistics-card__title">{title}</h1>
        <p className="statistics-card__number">{statisticNumber}</p>
        <h2
          className={`statistics-card__desc ${statisticDescription.isPositive ? "positive" : "negative"}`}
        >
          {statisticDescription.description}
        </h2>
      </div>
      <div
        className="statistics-card__image-wrapper"
        style={{ "--bg-color": getProperIconColor(iconColor) } as CSSProperties}
      >
        <span className="statistics-card__image">{icon}</span>
      </div>
    </div>
  );
};
