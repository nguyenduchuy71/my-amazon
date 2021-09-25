function Footer() {
  return (
    <div className="flex flex-col bg-amazon_blue">
      <div className="flex justify-evenly py-4 px-2">
        <div className="flex flex-col">
          <p className="text-xl cursor-default font-bold text-white xl:text-lg lg:text-base sm:text-xs">
            Get to Know Us
          </p>
          <p className="py-1 hover:underline text-sm cursor-pointer text-gray-300">
            Carrers
          </p>
          <p className="py-1 hover:underline text-sm cursor-pointer text-gray-300">
            Blog
          </p>
          <p className="py-1 hover:underline text-sm cursor-pointer text-gray-300">
            About Amazon
          </p>
          <p className="py-1 hover:underline text-sm cursor-pointer text-gray-300">
            Investor Relations
          </p>
        </div>
        <div className="flex flex-col">
          <p className="text-xl cursor-default font-bold text-white xl:text-lg lg:text-base sm:text-xs">
            Make Money with Us
          </p>
          <p className="py-1 hover:underline text-sm cursor-pointer text-gray-300">
            Sell products on Amazon
          </p>
          <p className="py-1 hover:underline text-sm cursor-pointer text-gray-300">
            Sell on Amazon Bussiness
          </p>
          <p className="py-1 hover:underline text-sm cursor-pointer text-gray-300">
            Sell apps on Amazon
          </p>
          <p className="py-1 hover:underline text-sm cursor-pointer text-gray-300">
            Become an Affiliate
          </p>
        </div>
        <div className="flex flex-col">
          <p className="text-xl cursor-default font-bold text-white xl:text-lg lg:text-base sm:text-xs">
            Amazon Payment Products
          </p>
          <p className="py-1 hover:underline text-sm cursor-pointer text-gray-300">
            Amazon Business Card
          </p>
          <p className="py-1 hover:underline text-sm cursor-pointer text-gray-300">
            Shop with Points
          </p>
          <p className="py-1 hover:underline text-sm cursor-pointer text-gray-300">
            Reload Your Balance
          </p>
          <p className="py-1 hover:underline text-sm cursor-pointer text-gray-300">
            Amazon Currency Converter
          </p>
        </div>
        <div className="flex flex-col">
          <p className="text-xl cursor-default font-bold text-white xl:text-lg lg:text-base sm:text-xs">
            Let Us Help You
          </p>
          <p className="py-1 hover:underline text-sm cursor-pointer text-gray-300">
            Amazon an COVID-19
          </p>
          <p className="py-1 hover:underline text-sm cursor-pointer text-gray-300">
            Your Account
          </p>
          <p className="py-1 hover:underline text-sm cursor-pointer text-gray-300">
            Your Orders
          </p>
          <p className="py-1 hover:underline text-sm cursor-pointer text-gray-300">
            Help
          </p>
        </div>
      </div>
      <div className="flex justify-center border-t py-4">
        <img
          src="https://links.papareact.com/f90"
          width={100}
          height={50}
          className="cursor-pointer py-4 object-contain"
          loading="lazy"
        />
      </div>
    </div>
  );
}

export default Footer;
