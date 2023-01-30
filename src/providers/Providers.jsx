import React, { useState } from "react";
import { AuthProvider } from "./AuthContext";
import { TechProvider } from "./TechContext";

export const Providers = ({ children }) => {
  return (
    <AuthProvider>
      <TechProvider>{children}</TechProvider>
    </AuthProvider>
  );
};
