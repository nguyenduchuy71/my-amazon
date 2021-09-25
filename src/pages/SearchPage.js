import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";
import ProductNotFound from "../components/ProductNotFound";
function SearchPage() {
  const { text } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchData = async () => {
    const pds = await fetch("https://fakestoreapi.com/products").then((res) =>
      res.json()
    );
    if (text) {
      let filteredItems = pds.filter((item) => {
        if (
          item.title.toLowerCase().includes(text.toLowerCase()) ||
          item.category.toLowerCase().includes(text.toLowerCase()) ||
          item.description.toLowerCase().includes(text.toLowerCase())
        ) {
          return true;
        } else {
          return false;
        }
      });
      setItems(filteredItems);
    }
    setLoading(false);
  };
  useEffect(() => {
    fetchData();
    setLoading(true);
  }, [text]);
  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
        <>
          {items.length > 0 ? (
            <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {items.map(
                ({ id, title, price, description, category, image }) => (
                  <Product
                    key={id}
                    id={id}
                    title={title}
                    price={price}
                    description={description}
                    category={category}
                    image={image}
                  />
                )
              )}
            </div>
          ) : (
            <ProductNotFound />
          )}
        </>
      )}
    </div>
  );
}

export default SearchPage;
