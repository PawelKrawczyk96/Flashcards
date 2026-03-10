import { cardColor } from "@interfaces/componentInterfaces";

export const shuffle = (array: any[]) => {
  let currentIndex = array.length;

  while (currentIndex !== 0) {
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
};

export const getProperIconColor = (colors: cardColor) => {
  switch (colors) {
    case "purple":
      return "99, 102, 241";
    case "green":
      return "16, 185, 129";
    case "orange":
      return "245, 158, 11";
    case "red":
      return "244, 63, 94";
  }
};

export const getPercent = (all: number, part: number): number => {
  if (all > 0 && part < all && part >= 0) return (part / all) * 100;
  return 0;
};

export const getTimeIndicator = (
  timestamp: number,
): {
  timeType: string;
  timeCount: number;
} => {
  const now: number = Date.now();
  const actionDiffInSeconds: number = (now - timestamp) / 1000;
  switch (true) {
    case Math.floor(actionDiffInSeconds / 604800) > 1:
      return {
        timeType: "week",
        timeCount: Math.floor(actionDiffInSeconds / 604800),
      };

    case Math.floor(actionDiffInSeconds / 86400) > 1:
      return {
        timeType: "day",
        timeCount: Math.floor(actionDiffInSeconds / 86400),
      };

    case Math.floor(actionDiffInSeconds / 3600) > 1:
      return {
        timeType: "hour",
        timeCount: Math.floor(actionDiffInSeconds / 3600),
      };

    default:
      return {
        timeType: "minute",
        timeCount: Math.floor(actionDiffInSeconds / 60),
      };
  }
};
