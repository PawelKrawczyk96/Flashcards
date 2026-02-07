import { createBrowserRouter } from "react-router";
import { RootLayout } from "@layouts/RootLayout";
import { HomePage } from "@pages/Home/HomePage";
import { PanelPage } from "@pages/Panel/PanelPage";
import { NotFoundPage } from "@pages/404/404";
import { RegisterPage } from "@pages/Register/RegisterPage";
import { LoginPage } from "@pages/Login/LoginPage";
import { GamePage } from "@pages/Game/GamePage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    errorElement: NotFoundPage,
    children: [
      { index: true, Component: HomePage },
      { path: "panel", Component: PanelPage },
      { path: "game", Component: GamePage },
    ],
  },
  {
    path: "/register",
    Component: RegisterPage,
    errorElement: NotFoundPage,
  },
  {
    path: "/login",
    Component: LoginPage,
    errorElement: NotFoundPage,
  },
]);
