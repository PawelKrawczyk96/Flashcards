import "./style.css";
import { HintCard, StatisticsCard } from "@components/Cards";
import { ReactComponent as BookIcon } from "icons/book.svg";
import { ReactComponent as BulbIcon } from "icons/bulb.svg";

export const HomePage = () => {
  return (
    <div>
      <StatisticsCard
        statisticNumber={156}
        statisticDescription={{
          description: "+12 w tym tyg.",
          isPositive: true,
        }}
        icon={<BookIcon />}
        iconColor="red"
        title={"Total fiszek"}
      />
      <HintCard
        icon={<BulbIcon />}
        text="Regularne powtarzanie materiału w odstępach czasu zwiększa zapamiętywanie o 300%."
        buttonLabel="Dowiedz się więcej"
        header="Spaced Repetition"
      />
    </div>
  );
};
