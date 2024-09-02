import Image from "next/image";

export default function SubHeader() {
  return (
    <div className="flex items-center mt-[744px] z-60 ">
      <div className="ml-[58px]">
        <p className="text-[58px] font-bold">Walk Like a Boss</p>
        <p className="text-lg font-bold pl-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
        <button className="bg-transparent border rounded-md mt-[28px] py-3 px-[43px]">Explore</button>
      </div>
      <div className="flex justify-evenly gap-x-[163px] pl-[86px]">
        <Image src="/assets/right-arrow-2.png" width={24} height={20} />
        <div className="flex text-base font-semibold">
          <p className="text-[22px]">01 / <span className="text-base">05</span></p>
        </div>
        <Image src="/assets/right-arrow-1.png" width={24} height={20} />
      </div>
      <div className="relative ml-[277px] bg-custom-fade max-h-[190px] max-w-[361px] rounded-md">
        <div className=" ">
          <img className="absolute -top-9 left-16" src="/assets/discount50.png" />
          <img className="absolute -top-10 -left-36 w-full " alt="Rose Gold Feminine Shoes" src="/assets/rose-gold-feminine-shoe.png" />
        </div>
        <div className="pl-[158px] py-[37px]">
          <p className="text-2xl font-bold">Our Trending Arrivals</p>
          <button className="px-[28px] py-2 border rounded-xl mt-[21px]">Explore</button>
        </div>
      </div>

      <div className={'absolute bg-transparent w-[150px] mx-auto inset-x-0 flex justify-center rounded-xl p-5 mt-64 right-10'}>
                <div className={'flex items-center bg-gradient-to-b from-white justify-center w-[50px] h-[80px] rounded-full'}>
                    <div className={'bg-original w-[40px] h-[65px] rounded-full bg-gradient-to-b from-transparent pl-[6px] pt-[5px]'}>
                        <div className={'w-[28px] h-[28px] mb-[50px] rounded-full bg-white bg-gradient-to-b from-white to-blue-300 bolinha '}></div>
                </div>
            </div>
      </div>
  </div>
  );
}