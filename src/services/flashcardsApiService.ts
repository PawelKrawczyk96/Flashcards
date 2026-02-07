import axios from "axios";
import { IFlashcardItem } from "@interfaces/componentInterfaces";
import { ILoginData, IRegisterData } from "@interfaces/dataInterfaces";

export const getAllFlashcard = async (): Promise<
  IFlashcardItem[] | undefined
> => {
  try {
    const response = await axios({
      method: "GET",
      url: "http://localhost:3001/flashcards",
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getRandomFlashcards = async (): Promise<
  IFlashcardItem[] | undefined
> => {
  try {
    const response = await axios({
      method: "GET",
      url: "http://localhost:3001/flashcards/generate",
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const addFlashcard = async (question: string, answer: string) => {
  try {
    await axios({
      method: "POST",
      url: "http://localhost:3001/flashcard/add",
      data: {
        question,
        answer,
      },
    });
    console.log("flashcard send successfully");
  } catch (error) {
    throw error; // TODO: dodać error handler pod toaster
  } finally {
    console.log("end to sending data");
  }
};

export const updateFlashcard = async (
  question: string,
  answer: string,
  id: number,
) => {
  try {
    await axios({
      method: "PUT",
      url: `http://localhost:3001/flashcard/${id}`,
      data: {
        question,
        answer,
      },
    });
    console.log("flashcard send successfully");
  } catch (error) {
    throw error; // TODO: dodać error handler pod toaster
  } finally {
    console.log("end to sending data");
  }
};

export const deleteFlashcard = async (id: number) => {
  try {
    await axios({
      method: "DELETE",
      url: `http://localhost:3001/flashcard/${id}`,
    });
    console.log("flashcard send successfully");
  } catch (error) {
    throw error; // TODO: dodać error handler pod toaster
  } finally {
    console.log("end to sending data");
  }
};

export const registerUser = async ({
  name,
  email,
  password,
}: IRegisterData) => {
  try {
    await axios({
      method: "POST",
      url: "http://localhost:3001/register",
      data: {
        name,
        email,
        password,
      },
    });
  } catch (error) {
    throw error;
  }
};

export const loginUser = async ({ email, password }: ILoginData) => {
  try {
    await axios.post(
      "http://localhost:3001/login",
      {
        email,
        password,
      },
      {
        withCredentials: true,
      },
    );
  } catch (error) {
    throw error;
  }
};
