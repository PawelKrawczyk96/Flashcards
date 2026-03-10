import { IMeterCardStatusBar } from "@interfaces/componentInterfaces";
import { getPercent } from "@utils/utils";
import "./style.css";
import { CSSProperties } from "react";

export const LastPlayedSetsCardStatusBar = ({
  flashcardsCount,
  flashcardsCompleted,
}: IMeterCardStatusBar) => {
  const percentage = getPercent(flashcardsCount, flashcardsCompleted) + "%";
  return (
    <div className="meterCardStatusBar">
      <div
        style={{ "--progress": `${percentage}` } as CSSProperties}
        className="meterCardStatusBar--bar"
      ></div>
      <div className="meterCardStatusBar--text">
        <p>Postęp</p>
        <p>{percentage} opanowane</p>
      </div>
    </div>
  );
};
