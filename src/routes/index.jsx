import { LoginForm } from "../pages/Login";
import { Route, Routes } from "react-router-dom";
import { RegisterForm } from "../pages/Register";
import { DashBoard } from "../pages/DashBoard";
import { ProtectedRoutes } from "../components/ProtectRoute";

export const MyRoutes = () => {
  return (
    <Routes>
      <Route index element={<LoginForm />} />
      <Route path="login" element={<LoginForm />} />
      <Route element={<ProtectedRoutes />}>
        <Route path="dashboard" element={<DashBoard />} />
      </Route>
      <Route path="register" element={<RegisterForm />} />
    </Routes>
  );
};
