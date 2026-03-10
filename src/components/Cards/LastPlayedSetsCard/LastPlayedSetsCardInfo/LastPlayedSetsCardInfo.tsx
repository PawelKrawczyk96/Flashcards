import { IMeterCardInfo } from "@interfaces/componentInterfaces";
import { CardIcon } from "@components/Cards/CardIcon";
import "./style.css";
import { getTimeIndicator } from "@utils/utils";

export const LastPlayedSetsCardInfo = ({
  icon,
  iconColor,
  lastTimeInfo,
  flashcardsCount,
  onClick,
  name,
}: IMeterCardInfo) => {
  const time = getTimeIndicator(lastTimeInfo);
  return (
    <div className="meterCardInfo">
      <div className="meterCardInfo--info__main">
        <div className="meterCardInfo--info__main-wrapper">
          <CardIcon icon={icon} iconColor={iconColor} backgroundColor={"red"} />
          <div className="meterCardInfo--info">
            <h1 className="meterCardInfo--header">{name}</h1>
            <p className="meterCardInfo--stats">{`${flashcardsCount} fiszek • Ostatnio: ${time.timeCount} ${time.timeType}`}</p>
          </div>
        </div>
        <button onClick={onClick} className="meterCardInfo--arrow"></button>
      </div>
    </div>
  );
};
