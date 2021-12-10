import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Login } from "../ui";
const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};
export default AppRoutes;
