import { BrowserRouter, Route, Routes } from "react-router-dom";

import MainLayout from "./components/layouts/MainLayout";
import Home from "./pages/Home";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
