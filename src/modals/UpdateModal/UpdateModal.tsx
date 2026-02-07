import { IUpdateModal } from "@interfaces/componentInterfaces";
import { createPortal } from "react-dom";
import { Button, Input, Grid, Typography, Box } from "@mui/material";
import { useState } from "react";
import "./style.css";

export const UpdateModal = ({
  flashcardData: { question, answer },
  onUpdate,
  handleClose,
}: IUpdateModal) => {
  const [newQuestion, setQuestion] = useState<string>(question);
  const [newAnswer, setAnswer] = useState<string>(answer);
  return createPortal(
    <Grid className="update-modal">
      <Grid className="update-modal__content">
        <Typography className={"update-modal__content--header"} variant="h4">
          Enter your flashcard data here
        </Typography>
        <Box className="update-modal__content--inputs">
          <Input
            onChange={(e) => setQuestion(e.target.value)}
            color="primary"
            className="sidebar__input"
            placeholder="input question here..."
            value={newQuestion}
          />
          <Input
            onChange={(e) => setAnswer(e.target.value)}
            color="primary"
            className="sidebar__input"
            placeholder="input answer here..."
            value={newAnswer}
          />
        </Box>
        <Box className="update-modal__content--buttons">
          <Button onClick={() => onUpdate(newQuestion, newAnswer)}>
            Update
          </Button>
          <Button onClick={handleClose}>Discard</Button>
        </Box>
      </Grid>
    </Grid>,
    document.body,
  );
};
