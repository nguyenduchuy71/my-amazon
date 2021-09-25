import { useState, useEffect } from "react";
import Banner from "../components/Banner";
import Category from "../components/Category";
import BannerProduct from "../components/BannerProduct";

function Home() {
  const [products, setProducts] = useState([]);
  useEffect(async () => {
    const pds = await fetch("https://fakestoreapi.com/products").then((res) =>
      res.json()
    );
    setProducts(pds);
  });
  return (
    <div>
      <Banner />
      <Category />
      <BannerProduct products={products} />
    </div>
  );
}

export default Home;
