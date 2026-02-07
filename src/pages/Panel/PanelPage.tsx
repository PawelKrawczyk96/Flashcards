import { FlashcardsList } from "@components/FlashcardsList/FlashcardsList";
import { Sidebar } from "@components/Sidebar/Sidebar";
import { Grid } from "@mui/material";
import {
  addFlashcard,
  updateFlashcard,
  deleteFlashcard,
} from "@services/flashcardsApiService";
import { useState } from "react";
import "./style.css";
import { useGetFlashcards } from "@hooks/useGetFlashcards";

export const PanelPage = () => {
  const [counter, setCounter] = useState(0);
  const { flashcards, loading } = useGetFlashcards(counter);

  const onAddFlashcard = async (question: string, answer: string) => {
    try {
      await addFlashcard(question, answer);
    } catch (error) {
      console.log(error); // TODO dodac to do toastera
    } finally {
      setCounter((prev) => prev + 1);
    }
  };

  const onUpdateFlashcard = async (
    question: string,
    answer: string,
    id: number,
  ) => {
    try {
      await updateFlashcard(question, answer, id);
    } catch (error) {
      console.log(error);
    } finally {
      setCounter((prev) => prev + 1);
    }
  };

  const onDeleteflashcard = async (id: number) => {
    try {
      await deleteFlashcard(id);
    } catch (error) {
      console.log(error);
    } finally {
      setCounter((prev) => prev + 1);
    }
  };

  return (
    <Grid container spacing={4}>
      <Grid size={{ sm: 12, md: 8 }}>
        <FlashcardsList
          onUpdate={onUpdateFlashcard} // TODO: zrobic use context zamiast przekazywania propsami na dół + hooki
          onDelete={onDeleteflashcard} // TODO: zrobic use context zamiast przekazywania propsami na dół + hooki
          isLoading={false}
          items={flashcards}
        />
      </Grid>
      <Grid size={{ sm: 12, md: 4 }}>
        <Sidebar onAddFlashcard={onAddFlashcard} />
      </Grid>
    </Grid>
  );
};
