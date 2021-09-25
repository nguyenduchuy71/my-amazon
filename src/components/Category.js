import { Link } from "react-router-dom";
function Category() {
  return (
    <div className="flex items-center flex-col py-2 bg-gray-200 z-30 xl:-mt-40 lg:-mt-40 sm:mt-0">
      <p className="p-2 font-bold text-2xl z-40 font-serif">Categories</p>
      <div className="grid grid-flow-row-dense md:grid-cols-2 xl:grid-cols-4 px-2 gap-2 z-30  ">
        <Link
          to="/category/electronics"
          className="flex items-center cursor-pointer"
        >
          <img
            className="w-50 h-full p-4 rounded-2xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 mb-4"
            alt="img"
            src="https://www.online-tech-tips.com/wp-content/uploads/2019/12/electronic-gadgets.jpeg"
          />
        </Link>
        <Link
          to="/category/jewelery"
          className="flex items-center cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 mb-4"
        >
          <img
            className="w-50 h-full p-2 rounded-2xl	"
            alt="img"
            src="http://locphuc.com.vn/Content/Images/Thang%2010-2020/day-chuyen-vang-18k-VMP0948ANWYG-00-LP07200044-g1.jpg"
          />
        </Link>
        <Link
          to="/category/men's clothing"
          className="flex items-center cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 mb-4"
        >
          <img
            className="w-50 h-full p-2 rounded-2xl	"
            alt="img"
            src="https://www.next.ro/nxtcms/resource/blob/4091246/f1f7c39d33b0a2bb6591a3fd5e6007c9/g86-mens-mb-data.jpg"
          />
        </Link>
        <Link
          to="/category/women's clothing"
          className="flex items-center cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 mb-4"
        >
          <img
            className="w-50 h-full p-2 rounded-2xl	"
            alt="img"
            src="https://narawoman.co.uk/wp-content/uploads/2020/11/home-2-2.jpg"
          />
        </Link>
      </div>
    </div>
  );
}

export default Category;
