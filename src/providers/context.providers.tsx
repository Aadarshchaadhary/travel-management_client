import React from "react";

import AuthProvider from "../context/auth.context";

const ContextProviders = ({ children }: { children: React.ReactNode }) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export default ContextProviders;
