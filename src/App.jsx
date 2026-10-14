import { Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";
import OtpPage from "./pages/OtpPage";
import Home from "./pages/Home";
import FoodDetail from "./pages/FoodDetail";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<SignUp />} />
      <Route path="/otp" element={<OtpPage />} />
      <Route path="/home" element={<Home />} />
      <Route path="/food/:id" element={<FoodDetail />} />
    </Routes>
  );
}
