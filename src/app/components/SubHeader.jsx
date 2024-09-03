import Image from "next/image";
import FadingDivOnScroll from "./FadingDivOnScroll";

export default function SubHeader() {
  return (
    <section aria-labelledby="Trending Shoes Area" className="flex items-center mt-[744px] z-60 ">
      <div className="ml-[58px]">
        <p className="text-[58px] font-bold">Walk Like a Boss</p>
        <p className="text-lg font-bold pl-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
        <button className="bg-transparent border rounded-md mt-[28px] py-3 px-[43px]">Explore</button>
      </div>
      <div className="flex justify-evenly gap-x-[163px] pl-[86px]">
        <Image src="/assets/right-arrow-2.png" width={24} height={20} alt="chevron to the left" />
        <div className="flex text-base font-semibold">
          <p className="text-[22px]">01 / <span className="text-base">05</span></p>
        </div>
        <Image src="/assets/right-arrow-1.png" width={24} height={20}  alt="chevron to the right"/>
      </div>
      <div className="relative ml-[277px] bg-custom-fade max-h-[190px] max-w-[361px] rounded-md ">
        <div className=" ">
          <img className="absolute -top-9 left-16" src="/assets/discount50.png" alt="Discount 50%" />
          <div className="relative w-[470px]">
            <img className="absolute -top-14 -left-52 w-full h-auto object-cover" alt="Rose Gold Feminine Shoes" src="/assets/rose-gold-feminine-shoe.png" />
          </div>
        </div>
        <div className="pl-[158px] py-[37px] pr4">
          <p className="text-2xl font-bold">Our Trending Arrivals</p>
          <button className="px-[28px] py-2 border rounded-xl mt-[21px]">Explore</button>
        </div>
      </div>

      <FadingDivOnScroll />
  </section>
  );
}