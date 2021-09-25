import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

function BannerProduct({ products }) {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 6,
    speed: 500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
    ],
  };
  return (
    <div className="mb-4">
      <p className="p-4 text-center font-bold font-serif text-2xl">
        New Products
      </p>
      <div className="overflow-hidden slick-arrow px-8 py-4 bg-gray-300 ">
        <Slider {...settings}>
          {products.map((p) => (
            <div
              key={p.id}
              className="flex items-center transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
            >
              <Link to={`/product/${p.id}`}>
                <img
                  className="w-56 mt-1 h-40 p-4 cursor-pointer object-contain bg-white"
                  loading="lazy"
                  src={p.image}
                  alt="gi1"
                />
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default BannerProduct;
