import React, { useEffect } from "react";
import withAuthUserInfo from "../utils/pageWrappers/withAuthUserInfo";
import withAuthUser from "../utils/pageWrappers/withAuthUser";
import { get } from "../utils/get";
import firebase from "firebase/app";
import "firebase/firestore";
import initFirebase from "../utils/auth/initFirebase";
import { useDocumentOnce } from "react-firebase-hooks/firestore";
import { useForm } from "react-hook-form";
import WithNavigation from "../components/WithNavigation";
import Router from "next/router";

initFirebase();

interface UserProps {
  AuthUserInfo: {
    AuthUser: {
      id: string;
      email: string;
      emailVerified: boolean;
    };
    token: string;
  };
}

const User = ({ AuthUserInfo }: UserProps) => {
  const {
    AuthUser: { id },
  } = AuthUserInfo;
  const userDoc = `user/${id}`;
  const userRef = firebase.firestore().doc(userDoc);
  const [user, loading, error] = useDocumentOnce(userRef, {});
  const { register, handleSubmit: onSubmit, errors, reset } = useForm();

  useEffect(() => {
    if (user?.data()) {
      reset(user.data());
    }
  }, [user]);

  const handleSubmit = async data => {
    if (Object.keys(errors).length !== 0) {
      console.log("errors! not updated!", errors);
      return;
    }
    if (user.data()) {
      userRef
        .set({ ...data, updatedOn: new Date().getTime() }, { merge: true })
        .then(() => {
          console.log("updated");
          Router.push("/");
        })
        .catch(err => console.log("err", err));
    } else {
      userRef
        .set({
          ...data,
          createdOn: new Date().getTime(),
        })
        .then(() => {
          console.log("created");
          Router.push("/");
        })
        .catch(err => console.log("err", err));
    }
  };

  if (!AuthUserInfo?.AuthUser?.id) {
    return <div>please login</div>;
  }
  return (
    <WithNavigation>
      <div className="mt-12 w-full max-w-2xl mx-auto">
        <p>
          {error && <strong>Error: {JSON.stringify(error)}</strong>}
          {loading && <span>Loading...</span>}
          {!error && !loading && <span>account</span>}
        </p>
        <div className="mt-12">
          <form
            className="flex flex-col items-center"
            onSubmit={onSubmit(handleSubmit)}
          >
            <input
              type="text"
              placeholder="name"
              name="fullName"
              ref={register({ required: true })}
            />
            <input
              type="email"
              placeholder="email"
              name="email"
              ref={register({ required: true, pattern: /^\S+@\S+$/i })}
            />
            <input
              type="tel"
              placeholder="phone"
              name="phone"
              ref={register({ required: true, maxLength: 12 })}
            />
            <input
              type="text"
              placeholder="city"
              name="city"
              ref={register({ required: true })}
            />
            <input
              type="text"
              placeholder="postalCode"
              name="postalCode"
              ref={register({ required: true })}
            />
            <input
              type="text"
              placeholder="street"
              name="streetAddress"
              ref={register({ required: true })}
            />
            <button className="py-2 px-4 bg-gray-200 rounded" type="submit">
              Update billing address
            </button>
          </form>
        </div>
      </div>
    </WithNavigation>
  );
};

User.getInitialProps = ctx => {
  const AuthUserInfo = get(ctx, "myCustomData.AuthUserInfo", null);
  console.log("AuthUserInfo", AuthUserInfo);

  return {
    AuthUserInfo,
  };
};

export default withAuthUser(withAuthUserInfo(User));
