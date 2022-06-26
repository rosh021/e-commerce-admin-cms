import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Login } from "./pages/login-page/Login";
import { Registration } from "./pages/register-page/Registration";
import { ToastContainer } from "react-toastify";
import { EmailVerification } from "./pages/EmailVerification";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/admin-verification" element={<EmailVerification />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
};

export default App;
