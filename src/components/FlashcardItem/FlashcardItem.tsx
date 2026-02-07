import { useState } from "react";
import { Grid, Checkbox, Button } from "@mui/material";
import { Stack } from "@mui/system";
import { IFlashCardItemProps } from "@interfaces/componentInterfaces";
import { UpdateModal } from "@modals/UpdateModal/UpdateModal";
import "./style.css";

export const FlashcardItem = ({
  id,
  question,
  answer,
  isEven,
  onUpdate,
  onDelete,
}: IFlashCardItemProps) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const onDeleteClick = () => {
    console.log("onDelete click", id);
    onDelete(id);
  };

  const onUpdateClick = (question: string, answer: string) => {
    console.log("onUpdate click", id);
    onUpdate(question, answer, id);
  };
  return (
    <Grid
      container
      spacing={2}
      alignItems="center"
      className="flashcard__item"
      style={{ backgroundColor: isEven ? "#fafafa" : "#eeeeee" }}
    >
      <Grid size={1}>
        <Checkbox onChange={() => console.log(123)} />
      </Grid>
      <Grid size={4}>
        <p>{question}</p>
      </Grid>
      <Grid size={4}>
        <p>{answer}</p>
      </Grid>
      <Grid size={3}>
        <Stack spacing={2} direction="row">
          <Button variant="contained" onClick={() => setIsOpenModal(true)}>
            Update
          </Button>
          <Button variant="contained" onClick={onDeleteClick}>
            Delete
          </Button>
        </Stack>
      </Grid>
      {isOpenModal && (
        <UpdateModal
          flashcardData={{ question, answer }}
          handleClose={() => setIsOpenModal(false)}
          onUpdate={onUpdateClick}
        />
      )}
    </Grid>
  );
};
