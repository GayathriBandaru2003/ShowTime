const Header = () => {
    return  (
        <div className="absolute z-10 w-full px-7 py-2 bg-gradient-to-b from-black flex justify-between">
            <img className="w-40"
               src = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
               alt = "netflix logo"
            />
            <div className="flex p-2 text-white items-center">
                <img className="rounded-sm h-8 w-8"
                   src="https://occ-0-6245-2186.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229"
                   alt="usericon"
                />
                <button className="font-bold p-1">(Sign Out)</button>
            </div>
        </div>
    );
};
export default Header;