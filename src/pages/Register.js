import { useRef, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

function Register() {
  const email = useRef(null);
  const password = useRef(null);
  const repassword = useRef(null);
  const username = useRef(null);
  const history = useHistory();
  const [user] = useAuthState(auth);
  const register = async (e) => {
    e.preventDefault();
    if (password.current.value === repassword.current.value) {
      await auth
        .createUserWithEmailAndPassword(
          email.current.value,
          password.current.value
        )
        .then((user) => {
          history.push("/signin");
        })
        .catch((err) => {
          window.alert("Xảy ra lỗi vui lòng thử lại");
        });
    } else {
      window.alert("Mật khẩu không khớp");
    }
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
      <div className="w-full max-w-md p-4 border-2 rounded-md border-gray-300">
        <p className="text-2xl font-bold mb-4">Create account</p>
        <form>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Your name
            </label>
            <input
              className="shadow appearance-none border-2 border-opacity-4 border-gray-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Your name"
              required
              ref={username}
            />
          </div>
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
              ref={email}
              required
            />
          </div>
          <div className="mb-4">
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
              ref={password}
              required
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="repassword"
            >
              Re-enter password
            </label>
            <input
              className="shadow appearance-none border-2 border-opacity-4 border-gray-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline"
              id="repassword"
              type="password"
              ref={repassword}
              placeholder="Re-enter Password"
              required
            />
          </div>
          <div className="mb-4">
            <button
              onClick={register}
              type="submit"
              className="w-full p-2 md:text-sm bg-gradient-to-b from-yellow-200 to-yellow-400 rounded-sm focus:ring-2 focus:ring-yellow-500 active:from-yellow-500"
            >
              Create your Amazon account
            </button>
          </div>
        </form>
        <div className="w-full max-w-md flex flex-row mt-4">
          <p className="text-sm">Already have an account?</p>
          <Link to="/signin">
            <p className=" font-bold text-sm text-blue-500 pl-2 hover:underline hover:text-yellow-500">
              Sign-In
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Register;
