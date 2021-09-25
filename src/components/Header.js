import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import { Link, useHistory } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import { selectItems } from "../slices/basketSlice";
import { useSelector } from "react-redux";
import { useRef, useState } from "react";

function Header() {
  const [user] = useAuthState(auth);
  const items = useSelector(selectItems);
  const [check, setCheck] = useState(false);
  const searchText = useRef(null);
  const history = useHistory();
  const searchItems = () => {
    const text = searchText.current.value;
    history.push(`/search/${text}`);
  };
  return (
    <header>
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
        <Link
          to="/"
          className="mt-2 flex items-center flex-grow sm:flex-grow-0"
        >
          <img
            src="https://links.papareact.com/f90"
            className="cursor-pointer px-2 w-32 h-auto object-contain"
            loading="lazy"
          />
        </Link>
        <div className="items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500 sm:hidden md:flex">
          <input
            className="p-2 h-full flex-grow flex-shrink rounded-l-md focus:outline-none"
            type="text"
            required
            ref={searchText}
          />
          <SearchIcon onClick={searchItems} className="h-12 p-4" />
        </div>
        <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
          <Link to="/signin" className="cursor-pointer hover:underline">
            {!user ? (
              <>
                <p>Hello, Sign In</p>
                <p className="font-extrabold md:text-sm">Account & Lists</p>
              </>
            ) : (
              <>
                <p>Hello</p>
                <p className="font-extrabold text-xs">
                  {user.name ? user.name : user.email}
                </p>
              </>
            )}
          </Link>
          <div
            onClick={() => auth.signOut()}
            className="cursor-pointer hover:underline"
          >
            {user ? (
              <>
                <p>Click for</p>
                <p className="font-bold text-sm">Sign Out</p>
              </>
            ) : (
              <></>
            )}
          </div>
          <div className="relative link flex items-center">
            <span className="absolute top-0 left-8 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">
              {items?.length}
            </span>
            <Link to="/basket">
              <ShoppingCartIcon className="h-10" />
            </Link>
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-3 pl-6 bg-amazon_blue-light text-white text-sm">
        <p className="cursor-pointer flex items-center">
          <MenuIcon className="h-6 mr-1" />
          All
        </p>
        <p className="cursor-pointer">Prime Video</p>
        <p className="cursor-pointer">Amazon Bussiness</p>
        <p className="cursor-pointer">Today's Deal</p>
        <p className="cursor-pointer hidden lg:inline-flex">Electronics</p>
        <p className="cursor-pointer hidden lg:inline-flex">Food & Grocery</p>
        <p className="cursor-pointer hidden lg:inline-flex">Prine</p>
        <p className="cursor-pointer hidden lg:inline-flex">Buy Again</p>
        <p className="cursor-pointer hidden lg:inline-flex">Shopper Toolkit</p>
        <p className="cursor-pointer hidden lg:inline-flex">
          Heath & Personal Care
        </p>
      </div>
    </header>
  );
}

export default Header;
