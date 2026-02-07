import { useState, useEffect } from "react";
import { IFlashcardItem } from "../interfaces/componentInterfaces";
import { getAllFlashcard } from "@services/flashcardsApiService";

export const useGetFlashcards = (refreshCouonter: number) => {
  const [flashcards, setFlashcards] = useState<IFlashcardItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isCancelled = false;

    const fetchFlashcards = async () => {
      try {
        setLoading(true);
        setError(null);

        const data: IFlashcardItem[] | undefined = await getAllFlashcard();
        if (!data) {
          setError("Flashcards not found!");
          return;
        }
        if (!isCancelled) setFlashcards(data);
      } catch (error) {
        if (!isCancelled) setError("Something went wrong!");
      } finally {
        if (!isCancelled) setLoading(false);
      }
    };
    fetchFlashcards();

    return () => {
      isCancelled = true;
    };
  }, [refreshCouonter]);

  return { flashcards, loading, error };
};
