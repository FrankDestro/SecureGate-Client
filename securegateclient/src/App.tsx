import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./features/Login/Login";
import MainLayout from "./layout/MainLayout";
import AssociacaoPage from "./pages/AssociacaoPage/AssociacaoPage";
import Auth from "./pages/Auth/AuthPage";
import ConfiguracaoPage from "./pages/ConfiguracaoPage/ConfiguracaoPage";
import Home from "./pages/HomePage/HomePage";
import SistemaPage from "./pages/SistemasPage/SistemaPage";
import UserPage from "./pages/UserPage/UserPage";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate to="/auth" replace />} />
      <Route path="/auth" element={<Auth />}>
        <Route index element={<Login />} />
      </Route>
      <Route element={<MainLayout />}>
        <Route path="home" element={<Home />} />
        <Route path="user" element={<UserPage />} />
        <Route path="association" element={<AssociacaoPage />} />
        <Route path="sistemas" element={<SistemaPage />} />
        <Route path="configuracao" element={<ConfiguracaoPage />} />
      </Route>
    </Routes>
      <ToastContainer position="top-right" autoClose={2500} />
  </BrowserRouter>
  );
}

export default App;
