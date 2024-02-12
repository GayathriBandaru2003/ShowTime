import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((store) => store.user);

    const handleSignOut = () => {
        signOut(auth).then(() => {})
          .catch((error) => {
            navigate("/error");
          });
    };

    useEffect( () => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              const {uid, email, displayName, photoURL} = user;
              dispatch(addUser({
                uid: uid,
                email: email, 
                displayName: displayName,
                photoURL: photoURL,
              })
             );
             navigate("/browse");
            } else {
              dispatch(removeUser());
              navigate("/");
            }
        });
        return () => unsubscribe();
    }, [dispatch, navigate]);

    return  (
        <div className="absolute z-10 w-full px-7 py-2 bg-gradient-to-b from-black flex justify-between">
            <img className="w-40"
               src = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
               alt = "netflix logo"
            />
            {user && (<div className="flex p-2 text-white items-center">
                <img className="rounded-sm h-8 w-8"
                   src="https://occ-0-6245-2186.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229"
                   alt="usericon"
                />
                <button 
                   className="font-bold p-1"
                   onClick={handleSignOut}
                >
                    (Sign Out)
                </button>
            </div>)}
        </div>
    );
};
export default Header;