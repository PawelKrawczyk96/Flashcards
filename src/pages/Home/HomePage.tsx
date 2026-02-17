import "./style.css";
import { StatisticsCard } from "@components/Cards";
import { ReactComponent as BookIcon } from "icons/book.svg";

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
    </div>
  );
};
