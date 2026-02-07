import { IFlashcardItem, IMenuItems } from "@interfaces/componentInterfaces";

export const menuItems: IMenuItems[] = [
  { name: "Home", path: "/" },
  { name: "Panel", path: "/panel" },
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
