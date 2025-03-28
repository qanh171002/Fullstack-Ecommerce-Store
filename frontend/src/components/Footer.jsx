import { assets } from "../assets/assets";

function Footer() {
  return (
    <div>
      <div className="my-10 mt-40 flex grid-cols-[3fr_1fr_1fr] flex-col gap-14 text-sm sm:grid">
        <div>
          <img src={assets.adidas_logo} className="mb-5 w-24" alt="" />
          <p className="w-full text-gray-600 md:w-2/3">
            Adidas is about more than sportswear and workout clothes. We partner
            with the best in the industry to co-create. This way we offer our
            fans the sports apparel and style that match their athletic needs,
            while keeping sustainability in mind.
          </p>
        </div>
        <div>
          <p className="mb-5 text-xl font-medium">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery information</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div>
          <p className="mb-5 text-xl font-medium">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+1-212-456-7890</li>
            <li>info@example.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr className="text-gray-200" />
        <p className="py-5 text-center text-sm">
          Copyright 2025. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
