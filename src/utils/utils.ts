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
