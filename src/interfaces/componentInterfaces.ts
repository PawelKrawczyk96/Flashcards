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
