import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "../components/Product";
import Spinner from "../components/Spinner";
function ProductsCaterory() {
  const { name } = useParams();
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const loadProducts = async () => {
    const pds = await fetch(
      `https://fakestoreapi.com/products/category/${name}`
    ).then((res) => res.json());
    setProducts(pds);
    setLoading(false);
  };
  useEffect(() => {
    loadProducts();
  }, []);
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map(
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
      )}
    </>
  );
}

export default ProductsCaterory;
