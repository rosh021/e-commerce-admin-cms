import React from "react";
import { LoginForm } from "../../components/loginForm/LoginForm";
import { MainLayout } from "../../layout/MainLayout";

export const Login = () => {
  return (
    <MainLayout>
      <LoginForm />
    </MainLayout>
  );
};
