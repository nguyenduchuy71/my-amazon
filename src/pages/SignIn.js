import { Link } from "react-router-dom";
import { auth, provider } from "../firebase";
import { useHistory } from "react-router-dom";
import { useEffect, useRef } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
function SignIn() {
  const email = useRef(null);
  const password = useRef(null);
  const [user] = useAuthState(auth);
  const history = useHistory();
  const signIn = async () => {
    await auth.signInWithPopup(provider).catch((error) => {
      alert(error.message);
    });
    history.push("/");
  };
  const signInWithEmail = async (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email.current.value, password.current.value)
      .then((user) => {
        history.push("/");
      })
      .catch((err) => {
        alert("Lỗi xảy ra. Vui lòng đăng nhập lại!");
      });
  };
  useEffect(() => {
    if (user) {
      history.push("/");
    }
  }, []);
  return (
    <div className="flex items-center flex-col flex-shrink py-4">
      <div>
        <img
          src="data:image/png;base64,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"
          width={200}
          height={80}
          objectFit="contain"
          className="cursor-pointer px-2"
          loading="lazy"
        />
      </div>
      <div className="w-full max-w-md border-2 px-4 py-2 rounded-md">
        <p className="text-2xl font-bold mb-4">Sign-In</p>
        <form>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border-2 border-opacity-4 border-gray-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email"
              required
              ref={email}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border-2 border-opacity-4 border-gray-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Password"
              required
              ref={password}
            />
          </div>
          <div className="mb-4">
            <button
              type="submit"
              onClick={signInWithEmail}
              className="w-full p-2 md:text-sm bg-gradient-to-b from-yellow-200 to-yellow-400 rounded-sm focus:ring-2 active:from-yellow-500"
            >
              Continue
            </button>
          </div>
        </form>
        <div className="w-full flex items-center flex-col p-2">
          <p className="font-medium cursor-default">Or login with Google</p>
          <img
            src="data:image/png;base64,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"
            width={60}
            height={60}
            objectFit="contain"
            className="cursor-pointer border-2 rounded-full border-gray-400 p-2 mt-2"
            loading="lazy"
            onClick={signIn}
          />
        </div>
      </div>
      <div className="relative w-full max-w-md mt-8 border-t-2 border-opacity-4 border-gray-400">
        <p className="absolute -top-4 left-40 text-md text-gray-600 bg-white px-2">
          New to Amazon?
        </p>
        <Link to="/register">
          <button className="w-full mt-8 p-2 md:text-sm bg-gradient-to-r from-gray-300 to-gray-400 rounded-sm focus:ring-2 focus:ring-gray-500 active:from-gray-500">
            Create your Amazon account
          </button>
        </Link>
      </div>
    </div>
  );
}

export default SignIn;
