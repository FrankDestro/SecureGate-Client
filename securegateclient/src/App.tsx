import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Associacao from "./pages/Associacao/Associacao";
import Configuracao from "./pages/Configuracao/Configuracao";
import Home from "./pages/Home/Home";
import Sistema from "./pages/Sistemas/Sistema";
import UserPage from "./pages/UserPage/UserPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Auth />}>
            <Route index element={<Login />} />
            <Route path="recovery" element={<Recovery />} />
          </Route> */}
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/user" element={<UserPage />} />
          <Route path="/association" element={<Associacao />} />
          <Route path="/sistemas" element={<Sistema />} />
          <Route path="/configuracao" element={<Configuracao />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
