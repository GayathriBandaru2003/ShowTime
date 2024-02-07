import {useState} from "react";
import Header from "./Header";

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    }

    return (
        <div>
            <Header />
            <div className="absolute">
                <img 
                  src="https://assets.nflxext.com/ffe/siteui/vlv3/4da5d2b1-1b22-498d-90c0-4d86701dffcc/98a1cb1e-5a1d-4b98-a46f-995272b632dd/IN-en-20240129-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
                  alt="bodyImage"
                />
            </div>
            <form className="absolute w-1/3 p-12 my-24 mx-auto right-0 left-0 
                bg-black text-white bg-opacity-80 rounded">
                <h1 className="font-bold text-3xl py-4">
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </h1>
                {!isSignInForm && (
                <input 
                    className="p-4 my-4 w-full rounded bg-black bg-opacity-50
                    border border-slate-400" 
                    type="text" placeholder="Full Name" 
                 />
                )}
                <input 
                    className="p-4 my-4 w-full rounded bg-black bg-opacity-50
                    border border-slate-400" 
                    type="text" placeholder="Email Address" 
                />
                <input 
                    className="p-4 my-4 w-full rounded bg-black bg-opacity-50
                    border border-slate-400" 
                    type="password" placeholder="Password" 
                />
                <button className="p-2 my-4 w-full rounded bg-red-700">
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </button>
                <p className="py-4 text-slate-400" onClick={toggleSignInForm}> 
                    {isSignInForm ? "New to Netflix? " : "Already Registered? "}
                    {isSignInForm 
                      ? (<span 
                           className="font-bold text-white cursor-pointer 
                           hover:underline"
                        >Sign Up Now.</span>)
                      : (<span 
                           className="font-bold text-white cursor-pointer 
                           hover:underline"
                        >Sign In Now.</span>)
                    }
                </p>
            </form>
        </div>
    );
};
export default Login;