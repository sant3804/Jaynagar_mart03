import { assets } from '../assets/assets';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="f">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm ">
        <div className="">
          {/* <img src={assets.logo} alt="" className="mb-5 w-32 " /> */}
          <h1 className="text-4xl font-extrabold tracking-tight text-blue-900 flex items-center">
      <span className="bg-blue-900 text-white px-4 py-1 rounded-lg mr-2">JAYNAGAR</span>
      MART
    </h1>
          <p className="w-full sm:w-2/3 text-gray-600 mb-5">
            Shop with JAYNAGAR MART and experience the convenience of online shopping
            like never before.
          </p>
        </div>

        <div className="">
          <p className="text-xl font-medium mb-5">COMPANY</p>

          <ul className="flex flex-col flex-1 text-gray-600 cursor-pointer">
            <li onClick={scrollToTop} className="mb-2">
              Home
            </li>
            <li onClick={scrollToTop} className="mb-2">
              About Us
            </li>
            <li onClick={scrollToTop} className="mb-2">
              Delivery
            </li>
            <li onClick={scrollToTop} className="mb-2">
              Privacy policy
            </li>
          </ul>
        </div>

        <div className="">
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col flex-1 text-gray-600">
            <li className="mb-2">+91 9142532685</li>
            <li className="mb-2">contact@jaynagarmart.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2024@JAYNAGAR MART - All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
