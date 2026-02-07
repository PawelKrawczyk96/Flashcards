import { IFlashcardsList } from "@interfaces/componentInterfaces";
import { FlashcardItem } from "@components/FlashcardItem/FlashcardItem";
import "./style.css";
import { JSX } from "react";

export const FlashcardsList = ({
  items,
  isLoading,
  onUpdate,
  onDelete,
}: IFlashcardsList) => {
  const renderLoader = (): JSX.Element => {
    return (
      <div>
        <p className="flashcards-list__loader">Loading...</p>
      </div>
    );
  };

  const renderFlashcardsList = () => {
    return items.map(({ id, answer, question }, i) => {
      return isLoading ? (
        <div>
          <p className="">Loading...</p>
        </div>
      ) : (
        <FlashcardItem
          id={id}
          question={question}
          answer={answer}
          onUpdate={onUpdate}
          onDelete={onDelete}
          isEven={i % 2 === 0}
        />
      );
    });
  };

  return (
    <div className="flashcards-list">
      {isLoading ? renderLoader() : renderFlashcardsList()}
    </div>
  );
};
