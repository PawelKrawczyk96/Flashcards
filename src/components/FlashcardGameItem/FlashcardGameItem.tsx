import {
  Button,
  CardContent,
  List,
  Typography,
  Box,
  Card,
  Grid,
} from "@mui/material";
import { useState } from "react";
import { IFlashcardGameItemProps } from "@interfaces/componentInterfaces";
import "./styles.css";

export const FlashcardGameItem = ({
  question,
  answers,
  correctAnswer,
  onSubmit,
}: IFlashcardGameItemProps) => {
  const [correctAnswerIndex, setCorrectAnswerIndex] = useState<number | null>(
    null,
  );
  const [wrongAnswerIndex, setWrongAnswerIndex] = useState<number | null>(null);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(false);

  const checkAnswer = (submittedAnswer: string, index: number) => {
    if (correctAnswerIndex || wrongAnswerIndex) return;
    const isCorrectAnswer = submittedAnswer === correctAnswer;

    if (isCorrectAnswer) {
      setIsCorrectAnswer(true);
      setCorrectAnswerIndex(index);
    } else {
      setCorrectAnswerIndex(
        answers.findIndex((answer) => answer === correctAnswer),
      );
      setWrongAnswerIndex(index);
    }
  };

  const checkAnswerStyleHelper = (currentIndex: number) => {
    if (currentIndex === correctAnswerIndex) {
      return "green";
    }
    if (currentIndex === wrongAnswerIndex) {
      return "red";
    }
    return "";
  };

  const renderAnswers = () => {
    return answers.map((item, i) => {
      return (
        <Grid size={6} key={i}>
          <Button
            sx={{
              backgroundColor: checkAnswerStyleHelper(i),
              border: "1px solid black",
            }}
            className="flashcardGame__item--answer"
            key={i}
            onClick={() => checkAnswer(item, i)}
          >
            <Typography textTransform={"none"} color={"black"}>
              {item}
            </Typography>
          </Button>
        </Grid>
      );
    });
  };

  const item = () => (
    <Grid container spacing={1} className="flashcardGame__item">
      {renderAnswers()}
    </Grid>
  );

  const card = (
    <>
      <CardContent>
        <Typography variant="h4" className="flashcard-question">
          {question}
        </Typography>
        <List component={item} />
      </CardContent>
    </>
  );

  return (
    <>
      <Box marginBottom={2}>
        <Card variant="outlined">{card}</Card>
      </Box>
      <Button
        className=""
        disabled={correctAnswerIndex === null}
        variant="contained"
        onClick={() => onSubmit(isCorrectAnswer)}
      >
        Next &gt;&gt;
      </Button>
    </>
  );
};
