import React from "react";
import { RegisterForm } from "../../components/registrationForm/RegisterForm";
import { MainLayout } from "../../layout/MainLayout";

export const Registration = () => {
  return (
    <MainLayout>
      <div className="reg-form d-flex justify-content-center">
        <RegisterForm />
      </div>
    </MainLayout>
  );
};
