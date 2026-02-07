import { Box, Button } from "@mui/material";
import "./style.css";
import { getRandomFlashcards } from "@services/flashcardsApiService";
import { useState } from "react";
import { IFlashcardGameItem } from "@interfaces/componentInterfaces";
import { FlashcardGameItem } from "@components/FlashcardGameItem";
import { shuffle } from "@utils/utils";

export const GamePage = () => {
  const [flashcardsGameItems, setFlashcardsGameItems] = useState<
    IFlashcardGameItem[]
  >([]);
  const [gameStage, setGameStage] = useState<number>(0);

  const [isGameStarted, setIsGameStarted] = useState(false);
  const [isGameFinished, setIsGameFinished] = useState(false);
  const [points, setPoints] = useState<number>(0);

  const startGame = async () => {
    const data = await getRandomFlashcards();
    if (!data) {
      return;
    }
    setPoints(0);
    setIsGameFinished(false);
    const gameData: IFlashcardGameItem[] = data.map(
      ({ question, answer, id }) => {
        const flashcard: IFlashcardGameItem = {
          index: id,
          question,
          correctAnswer: answer,
          answers: [answer],
        };

        data
          .filter((item) => item.id !== id)
          .slice(0, 3)
          .map((item) => {
            flashcard.answers.push(item.answer);
          });
        shuffle(flashcard.answers);
        return flashcard;
      },
    );
    setIsGameStarted(true);
    setFlashcardsGameItems(gameData);
  };

  const onNextQuestion = (correctAnswer: boolean) => {
    setGameStage(gameStage + 1);
    if (correctAnswer) {
      setPoints(points + 1);
    }
    if (gameStage === flashcardsGameItems.length - 1) {
      setIsGameFinished(true);
      setIsGameStarted(false);
      setGameStage(0);
      return;
    }
  };

  return (
    // TODO: granulować to do mniejszych komponentów
    <div>
      <Button disabled={isGameStarted} variant="contained" onClick={startGame}>
        Start game
      </Button>
      {isGameStarted && (
        <Box width="100%" justifyContent={"center"} display={"flex"}>
          <Box width="50%">
            <FlashcardGameItem
              key={flashcardsGameItems[gameStage].index}
              index={flashcardsGameItems[gameStage].index}
              question={flashcardsGameItems[gameStage].question}
              answers={flashcardsGameItems[gameStage].answers}
              correctAnswer={flashcardsGameItems[gameStage].correctAnswer}
              onSubmit={onNextQuestion}
            />
          </Box>
        </Box>
      )}
      {isGameFinished && (
        <div>
          <p>Gratulacje! zdobyłeś {points} punktów</p>
        </div>
      )}
    </div>
  );
};
