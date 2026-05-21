import { IFlashcardItem, IMenuItems } from "@interfaces/componentInterfaces";
import { ReactComponent as PanelIcon } from "@icons/panel.svg";
import { ReactComponent as BookIcon } from "@icons/book.svg";
import { ReactComponent as BrainIcon } from "@icons/brain.svg";
import { ReactComponent as SettingsIcon } from "@icons/settings.svg";

export const menuItems: IMenuItems[] = [
  { icon: PanelIcon, name: "Home", path: "/" },
  { icon: PanelIcon, name: "Panel", path: "/panel" },
  { icon: BookIcon, name: "Fiszki", path: "/flashcards" },
  { icon: BrainIcon, name: "Quizy", path: "/game" },
  { icon: SettingsIcon, name: "Ustawienia", path: "/settings" },
];

export const errorTypes = {
  ERROR: "ERROR",
  SUCCESS: "SUCCESS",
};

export const flashcards: IFlashcardItem[] = [
  {
    id: 1,
    question: "question 1",
    answer: "answer 1",
  },
  {
    id: 2,
    question: "question 2",
    answer: "answer 2",
  },
  {
    id: 3,
    question: "question 3",
    answer: "answer 3",
  },
];

export type errorCodes = (typeof errorTypes)[keyof typeof errorTypes];
