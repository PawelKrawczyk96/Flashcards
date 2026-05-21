import { IMeterCard } from "@interfaces/componentInterfaces";
import { LastPlayedSetsCardInfo } from "@components/Cards/LastPlayedSetsCard/LastPlayedSetsCardInfo";
import { LastPlayedSetsCardStatusBar } from "@components/Cards/LastPlayedSetsCard/LastPlayedSetsCardStatusBar";
import "./style.css";

export const LastPlayedSetsCard = ({
  icon,
  iconColor,
  flashcardsCount,
  flashcardsCompleted,
  onClick,
  name,
  lastTimeInfo,
}: IMeterCard) => {
  return (
    <div className="meterCard">
      <LastPlayedSetsCardInfo
        icon={icon}
        iconColor={iconColor}
        flashcardsCount={flashcardsCount}
        onClick={onClick}
        name={name}
        lastTimeInfo={lastTimeInfo}
      />
      <LastPlayedSetsCardStatusBar
        flashcardsCount={flashcardsCount}
        flashcardsCompleted={flashcardsCompleted}
      />
    </div>
  );
};
