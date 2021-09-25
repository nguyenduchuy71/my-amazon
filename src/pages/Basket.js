import { selectItems, selectTotal } from "../slices/basketSlice";
import { useSelector } from "react-redux";
import Currency from "react-currency-formatter";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeFromBasket } from "../slices/basketSlice";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import { useHistory } from "react-router-dom";
function Basket() {
  const [user] = useAuthState(auth);
  const history = useHistory();
  const total = useSelector(selectTotal);
  const [deliverFee, setDeliverFee] = useState(0);
  const items = useSelector(selectItems);
  const handleChange = (e) => {
    setDeliverFee(parseFloat(e.target.value));
  };
  const dispatch = useDispatch();
  const createCheckoutSession = async () => {
    console.log("go for checkout");
  };
  return (
    <>
      {items.length > 0 ? (
        <div className="max-w-6xl m-auto flex items-stretch justify-center p-4 xl:flex-row lg:flex-col md:flex-col sm:flex-col sm:flex-grow">
          <div className="flex-4 px-4">
            <div className="flex justify-between pb-2">
              <p className="font-bold text-xl">Shopping Cart</p>
              <p className="font-bold text-xl">{items.length} Items</p>
            </div>
            <div className="flex flex-col">
              {items.map((item) => (
                <div className="grid grid-flow-row-dense grid-cols-5 mt-4 py-2 border-t-2 border-gray-200">
                  <div className="flex justify-center ">
                    <Link to={`/product/${item.id}`}>
                      <img
                        src={item.image}
                        alt="alt"
                        className="max-w-20 max-h-20"
                      />
                    </Link>
                  </div>
                  <div className="flex flex-col ml-2">
                    <p className="font-bold text-sm my-1 xl:block lg:block md:block sm:hidden">
                      {item.title}
                    </p>
                    <p className="text-md text-gray-400 cursor-default">
                      {item.category}
                    </p>
                    <p
                      className="w-32 mt-1 bg-red-500 cursor-pointer hover:bg-red-600 text-white font-bold px-8 rounded-sm"
                      onClick={() => {
                        dispatch(removeFromBasket({ id: item.id }));
                      }}
                    >
                      Remove
                    </p>
                  </div>
                  <div className="flex justify-center pl-2">
                    <p className="font-bold cursor-default">{item.qty}</p>
                  </div>
                  <div className="flex justify-center">
                    <Currency quantity={item.price} currency="USD" />
                  </div>
                  <div className="flex justify-center">
                    <Currency quantity={item.price * item.qty} currency="USD" />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gray-100 px-10">
            <p className="font-bold text-xl pb-6 text-center">Order Summary</p>
            <div className="flex flex-col border-t-2 border-gray-300">
              <div className="flex items-stretch justify-between pt-2 mb-6">
                <p className="font-bold text-sm ">ITEMS {items.length}</p>
                <Currency quantity={total} currency="USD" />
              </div>
              <div className="flex flex-col w-full mb-6">
                <p className="font-bold mb-3">Shipping</p>
                <select
                  onChange={handleChange}
                  className="p-1 border-2 border-gray-300"
                >
                  <option value={0}>Please chose your delivery</option>
                  <option value={5}>Standard Delivery - $5.00</option>
                  <option value={7}>Fast Delivery - $7.00</option>
                </select>
              </div>
              <div className="flex flex-col w-full mb-16">
                <p className="font-bold mb-3">Code</p>
                <input
                  type="text"
                  className="border-2 border-gray-300 py-1 mb-4"
                />
                <button className="bg-red-500 hover:bg-red-600 rounded-sm p-1 text-white">
                  Apply
                </button>
              </div>
              <div className="flex flex-col border-t-2 border-gray-400">
                <div className="flex flex-row justify-between pt-2">
                  <p className="font-bold">Toal Cost</p>
                  <Currency quantity={total + deliverFee} currency="USD" />
                </div>
                {user ? (
                  <button
                    onClick={createCheckoutSession}
                    className="p-2  bg-blue-500 hover:bg-blue-600 rounded-sm mt-6 font-medium text-white"
                  >
                    CHECKOUT
                  </button>
                ) : (
                  <button
                    onClick={() => history.push("/signin")}
                    className="p-2  bg-red-500 hover:bg-red-600 rounded-sm mt-6 font-medium text-white"
                  >
                    Login for checkout
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full flex flex-col items-center justify-center py-10">
          <img
            src="data:image/png;base64,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"
            alt="cart empty"
            className="w-52 h-52"
          />
          <Link to="/">
            <div className="flex items-center text-blue-600 hover:underline">
              <span className="font-bold  ">Go Shopping</span>
              <i
                className="fa fa-arrow-right pl-1 pt-1 text-sm"
                aria-hidden="true"
              ></i>
            </div>
          </Link>
        </div>
      )}
    </>
  );
}

export default Basket;
