import { Box, Button, Input, Typography } from "@mui/material";
import "./style.css";
import { ISidebar } from "@interfaces/componentInterfaces";
import { useState } from "react";

export const Sidebar = ({ onAddFlashcard }: ISidebar) => {
  const [question, setQuestion] = useState<string>("");
  const [answer, setAnswer] = useState<string>("");
  return (
    <Box className="sidebar">
      <Typography className="sidebar__header">
        Add your flashcard here:
      </Typography>
      <Input
        onChange={(e) => setQuestion(e.target.value)}
        color="primary"
        className="sidebar__input"
        placeholder="input question here..."
      />
      <Input
        onChange={(e) => setAnswer(e.target.value)}
        color="primary"
        className="sidebar__input"
        placeholder="input answer here..."
      />
      <Button
        variant="contained"
        onClick={() => onAddFlashcard(question, answer)}
      >
        Add flashcard
      </Button>
    </Box>
  );
};
