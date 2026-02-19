import { IHintCard } from "@interfaces/componentInterfaces";
import { Button } from "@components/Button";
import { CardIcon } from "@components/Cards";
import "./style.css";

export const HintCard = ({ icon, text, header, buttonLabel }: IHintCard) => {
  return (
    <div className="hintCard">
      <CardIcon
        icon={icon}
        iconColor="white"
        backgroundColor="purple"
        opacity={0.3}
      />
      <h1 className="hintCard--header">{header}</h1>
      <p className="hintCard--text">{text}</p>
      <Button onClick={() => {}} variant="ghost">
        {buttonLabel}
      </Button>
    </div>
  );
};
