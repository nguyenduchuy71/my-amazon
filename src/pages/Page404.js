import { Link } from "react-router-dom";
function Page404() {
  return (
    <div className="w-full flex flex-col items-center justify-center py-2">
      <img
        src="https://colorlib.com/wp/wp-content/uploads/sites/2/404-error-template-3.png"
        alt="img"
        className="object-contain"
      />
      <Link to='/' className="font-serif  bg-red-500 text-white p-2 rounded-md hover:bg-red-600">
        Go back home
      </Link>
    </div>
  );
}

export default Page404;
