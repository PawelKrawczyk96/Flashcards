import "./App.css";
import { PanelPage } from "@pages/Panel/PanelPage";
import { RootLayout } from "@layouts/RootLayout";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "@pages/Home/HomePage";
import { NotFoundPage } from "@pages/404/404";

function App() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path="panel" element={<PanelPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
