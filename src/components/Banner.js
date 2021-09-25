import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
function Banner() {
  return (
    <div className="relative">
      <div className="absolute w-full bg-gradient-to-b from-gray-100 to-transparent" />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div>
          <img loading="lazy" src="https://links.papareact.com/gi1" alt="gi1" />
        </div>
        <div>
          <img loading="lazy" src="https://links.papareact.com/6ff" alt="6ff" />
        </div>
        <div>
          <img loading="lazy" src="https://links.papareact.com/7ma" alt="7ma" />
        </div>
      </Carousel>
    </div>
  );
}

export default Banner;
