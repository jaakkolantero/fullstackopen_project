import React from "react";
import Navigation from "./Navigation";
import { useFirebaseAuth } from "../utils/auth/hooks";

const WithNavigation = ({ children }) => {
  const { initializing, user } = useFirebaseAuth();
  return (
    <>
      <Navigation user={user} />
      <>{children}</>
    </>
  );
};

export default WithNavigation;
