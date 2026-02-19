import React from "react";

export interface IMenuItems {
  name: string;
  path: string;
}

export interface IHeader {
  menuItems: IMenuItems[];
}

export interface IFlashcardItem {
  id: number;
  question: string;
  answer: string;
}

export interface IFlashCardItemProps extends IFlashcardItem {
  isEven: boolean;
  onUpdate: (question: string, answer: string, id: number) => void;
  onDelete: (id: number) => void;
}

export interface IFlashcardsList {
  isLoading: boolean;
  onUpdate: (question: string, answer: string, id: number) => void;
  onDelete: (id: number) => void;
  items: IFlashcardItem[];
}

export interface ISidebar {
  onAddFlashcard: (question: string, answer: string) => void;
}

export interface IUpdateModal {
  flashcardData: {
    question: string;
    answer: string;
  };
  onUpdate: (question: string, answer: string) => void;
  handleClose: () => void;
}

export interface IFlashcardGameItem {
  index: number;
  question: string;
  answers: string[];
  correctAnswer: string;
}

export interface IFlashcardGameItemProps extends IFlashcardGameItem {
  onSubmit: (correctAnswer: boolean) => void;
}

type buttonVariant =
  | "primary"
  | "primaryBig"
  | "secondary"
  | "dangerOutline"
  | "dangerSolid"
  | "ghost"
  | "filterChip";

export interface IButton {
  onClick: () => void;
  variant: buttonVariant;
  children: React.ReactNode;
  icon?: React.ReactNode;
}

interface IStatisticsDescription {
  description: string;
  isPositive: boolean;
}

export type cardColor = "purple" | "green" | "orange" | "red";

export interface IStatisticsCard {
  title: string;
  icon?: React.ReactNode;
  iconColor: cardColor;
  statisticNumber: number;
  statisticDescription: IStatisticsDescription;
}

export interface IHintCard {
  icon: React.ReactNode;
  header: string;
  text: string;
  buttonLabel: string;
}

export interface ICardIcon {
  icon: React.ReactNode;
  backgroundColor?: cardColor;
  opacity?: number;
  iconColor: string;
}
