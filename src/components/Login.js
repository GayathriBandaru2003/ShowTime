import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { USER_AVATAR } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    //validation
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);

    if (message) return;

    if (!isSignInForm) {
      //sign up logic
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;

          updateProfile(user, {
            displayName: name.current.value, 
            photoURL: USER_AVATAR
          })
            .then(() => {
              const {uid, email, displayName, photoURL} = auth.currentUser;
              dispatch(addUser({
                uid: uid,
                email: email, 
                displayName: displayName,
                photoURL: photoURL,
            }));
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
            console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(`${errorCode} - ${errorMessage}`)
        });
    } else {
      //sign in logic
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(`${errorCode} - ${errorMessage}`)
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/4da5d2b1-1b22-498d-90c0-4d86701dffcc/98a1cb1e-5a1d-4b98-a46f-995272b632dd/IN-en-20240129-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="bodyImage"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute w-1/3 p-12 my-24 mx-auto right-0 left-0 
                bg-black text-white bg-opacity-80 rounded"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            className="p-4 my-4 w-full rounded bg-black bg-opacity-50
                    border border-slate-400"
            ref={name}
            type="text"
            placeholder="Full Name"
          />
        )}
        <input
          className="p-4 my-4 w-full rounded bg-black bg-opacity-50
                    border border-slate-400"
          ref={email}
          type="text"
          placeholder="Email Address"
        />
        <input
          className="p-4 my-4 w-full rounded bg-black bg-opacity-50
                    border border-slate-400"
          ref={password}
          type="password"
          placeholder="Password"
        />
        <p className="font-bold text-red-500 py-2 text-lg">{errorMessage}</p>
        <button
          className="p-2 my-4 w-full rounded bg-red-700"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 text-slate-400" onClick={toggleSignInForm}>
          {isSignInForm ? "New to Netflix? " : "Already Registered? "}
          {isSignInForm ? (
            <span
              className="font-bold text-white cursor-pointer 
                           hover:underline"
            >
              Sign Up Now.
            </span>
          ) : (
            <span
              className="font-bold text-white cursor-pointer 
                           hover:underline"
            >
              Sign In Now.
            </span>
          )}
        </p>
      </form>
    </div>
  );
};
export default Login;
