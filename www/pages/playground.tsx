import React, { useEffect } from "react";
import withAuthUserInfo from "../utils/pageWrappers/withAuthUserInfo";
import withAuthUser from "../utils/pageWrappers/withAuthUser";
import { get } from "../utils/get";
import firebase from "firebase/app";
import "firebase/firestore";
import initFirebase from "../utils/auth/initFirebase";

initFirebase();

const Playground = ({ AuthUserInfo, AuthUserToken }) => {
  console.log("AuthUserInfo", AuthUserInfo);
  console.log("AuthUserToken", AuthUserToken);
  useEffect(() => {
    firebase
      .firestore()
      .collection("users")
      .doc("LA")
      .set({
        name: "Los Angeles",
        state: "CA",
        country: "USA",
      })
      .then(function() {
        console.log("Document successfully written!");
      })
      .catch(function(error) {
        console.error("Error writing document: ", error);
      });
  }, []);
  return <>asdf</>;
};

Playground.getInitialProps = ctx => {
  const AuthUserInfo = get(ctx, "myCustomData.AuthUserInfo", null);
  const AuthUserToken = get(AuthUserInfo, "token", null);
  console.log("AuthUserInfo", AuthUserInfo);
  console.log("AuthUserToken", AuthUserToken);

  return {
    AuthUserInfo,
    AuthUserToken,
  };
};

export default withAuthUser(withAuthUserInfo(Playground));
