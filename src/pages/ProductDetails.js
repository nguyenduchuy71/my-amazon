import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner";
import Currency from "react-currency-formatter";
import { addToBasket } from "../slices/basketSlice";
import { useDispatch } from "react-redux";

function ProductDetails() {
  const { id } = useParams();
  const [qty, setQty] = useState(1);
  const [product, setProduct] = useState();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const loadProducts = async () => {
    const pd = await fetch(`https://fakestoreapi.com/products/${id}`).then(
      (res) => res.json()
    );
    setProduct(pd);
    setLoading(false);
  };
  const handleChange = (e) => {
    setQty(e.target.value);
  };
  const addItemToBasket = () => {
    const p = {
      id: product.id,
      title: product.title,
      price: product.price,
      description: product.description,
      category: product.category,
      image: product.image,
      qty,
    };
    dispatch(addToBasket(p));
  };
  useEffect(async () => {
    await loadProducts();
  }, []);
  return (
    <div className="max-w-5xl p-5 m-auto">
      {loading ? (
        <Spinner />
      ) : (
        <div className="flex flex-grow-0 items-center p-2 lg:flex-row sm:flex-col">
          <div className="max-w-2xl border-gray-400 p-2 lg:border-r-2 sm:border-r-0">
            <p className="w-full font-bold text-xl mb-2 bg-amazon_blue text-white p-2 rounded-md">
              {product.title}
            </p>
            <div className="w-full flex items-center justify-center">
              <img
                src={product.image}
                alt="img"
                objectFit="contain"
                className="w-80 h-80 mt-4 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
              />
            </div>
            <div className="hidden md:block flex-col mt-10">
              <p className="font-bold text-xl">About the product</p>
              <p className="p-2">{product.description}</p>
            </div>
          </div>
          <div className="flex-1 max-w-xl h-full p-4 ml-4 justify-start">
            <div className="flex-col mb-10">
              <p className="font-bold text-xl text-green-500">In Stock</p>
              <p className="font-bold ">
                Want it tomorrow. Order within 22hrs and chose One-Day-Shipping
                at checkout
              </p>
            </div>
            <div className="flex flex-row justify-between mb-10 border-b-2 pb-2">
              <Currency
                className="text-2xl"
                quantity={product.price * qty}
                currency="USD"
              />
              <div className="flex flex-row">
                <p className="mr-3">Q.ty:</p>
                <select onChange={handleChange}>
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
                </select>
              </div>
            </div>
            <div>
              <button
                onClick={addItemToBasket}
                className="w-full p-2 md:text-sm bg-gradient-to-b from-yellow-200 to-yellow-400 rounded-sm focus:ring-2 active:from-yellow-500"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductDetails;
