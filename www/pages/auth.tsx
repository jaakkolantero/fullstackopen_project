import React from "react";
import FirebaseAuth from "../components/FireBaseAuth";
import Navigation from "../components/Navigation";
import WithNavigation from "../components/WithNavigation";

const Auth = () => {
  return (
    <>
      <WithNavigation>
        <div>
          <h1 className="flex justify-center text-2xl font-bold py-8">
            Sign in to Pizza italia
          </h1>
          <div>
            <FirebaseAuth />
          </div>
        </div>
      </WithNavigation>
    </>
  );
};

export default Auth;
