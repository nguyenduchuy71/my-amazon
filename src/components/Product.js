import { useState } from "react";
import Currency from "react-currency-formatter";
import { StarIcon } from "@heroicons/react/solid";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { addToBasket } from "../slices/basketSlice";
const MAX_RATING = 5;
const MIN_RATING = 1;
const qty = 1;
function Product({ id, title, price, description, category, image }) {
  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  );
  const dispatch = useDispatch();
  const history = useHistory();
  const [hasPrime] = useState(Math.random() < 0.5);
  const addItemToBasket = () => {
    const product = {
      id,
      title,
      price,
      description,
      category,
      image,
      qty,
    };
    dispatch(addToBasket(product));
  };
  const moveToProductDetails = () => {
    history.push(`/product/${id}`);
  };
  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10">
      <p className="absolute top-2 right-2 text-xs italic text-gray-400 ">
        {category}
      </p>
      <div className="cursor-pointer" onClick={moveToProductDetails}>
        <img
          src={image}
          alt="image"
          objectFit="contain"
          className="w-44 h-44 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
        />
      </div>
      <h4 className="my-3 line-clamp-1">{title}</h4>
      <div className="flex">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <StarIcon className="h-5 text-yellow-500" />
          ))}
      </div>
      <p className="text-xs my-2 line-clamp-2">{description}</p>
      <div className="mb-5">
        <Currency quantity={price} currency="GBP" />
      </div>
      {hasPrime && (
        <div className="flex items-center space-x-2 mt-5">
          <img
            className="w-12"
            src="https://links.papareact.com/fdw"
            alt="fwd"
          />
          <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
        </div>
      )}
      <button
        onClick={addItemToBasket}
        className="mt-auto w-full p-2 md:text-sm bg-gradient-to-b from-yellow-200 to-yellow-400 rounded-sm focus:ring-2 active:from-yellow-500"
      >
        Add to Basket
      </button>
    </div>
  );
}

export default Product;
