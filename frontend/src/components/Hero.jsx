import { assets } from "../assets/assets";
function Hero() {
  return (
    <div className="flex flex-col border border-gray-400 sm:flex-row">
      {/* left */}
      <div className="flex w-full items-center justify-center py-10 sm:w-1/2 sm:py-0">
        <div className="text-[#414141]">
          <div className="flex items-center gap-2">
            <p className="h-[2px] w-8 bg-[#414141] md:w-11"></p>
            <p className="text-sm font-medium uppercase md:text-base">
              Our best seller
            </p>
          </div>
          <h1 className="prata-regular text-3xl leading-relaxed sm:py-3 lg:text-5xl">
            Latest Arrivals
          </h1>
          <div className="flex items-center gap-2">
            <p className="text-sm font-semibold uppercase md:text-base">
              Shop Now
            </p>
            <p className="h-[2px] w-8 bg-[#414141] md:w-11"></p>
          </div>
        </div>
      </div>
      {/* right */}
      <img src={assets.adidas_hero} alt="hero" className="w-full sm:w-1/2" />
    </div>
  );
}

export default Hero;
