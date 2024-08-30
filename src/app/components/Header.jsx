'use client';

import Image from "next/image";

import excludeSrc from '/public/assets/logo.png'; // import the image


export default function Header() {
  return (
    <header className="flex justify-between">
      <div className="pt-[70px] pl-[58px]">
        <Image
        src={excludeSrc}
        alt="logo"
      /></div>
      <nav className="w-[786px] z-50 mt-[43px] rounded-l-full bg-custom-fade py-[32px]">
        <ul className="flex items-center text-white text-xl font-semibold leading-4	tracking-widest">
          <li className="pr-[52px] pl-[62px]">HOME</li>
          <div className="flex items-center pr-[83px] gap-x-3">
           <p className="">OUR PRODUCT'S</p>
           <img className="w-[14px] h-[14px]" src="/assets/right-arrow-3.png" alt="" />
          </div>
          <div className="flex items-center gap-x-[45px]">
            <Image className="" src="/assets/search-icon.png" width={33} height={20} />
            <Image src="/assets/bag.png" width={34} height={20} />
            <div className="ml-[39px] mr-[45px]">
            <Image src="/assets/group-two.png" width={33} height={20} />
            </div>
          </div>
        </ul>
      </nav>
      <div className="absolute inset-x-0 -z-10 top-[273px] flex justify-center">
        <Image src="/assets/BIGAIR.png" width={1904} height={20} />
      </div>
    

      <div className="absolute inset-x-0 top-0 flex justify-center mb-4 filter-shadow">
        <Image src="/assets/white-shoes.png" width={840} height={0} /> {/* Adjust width and height as needed */}
      </div>
      
      <div className="absolute -z-10 ">
        <img src="/assets/ellipse-2.png" alt=""/>
      </div>

    </header>
  );
}
