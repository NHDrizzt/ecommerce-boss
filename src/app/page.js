import Header from "./Header";
import Image from "next/image";
export default function Home() {
  return (
    <>
      <Header  />
      <div className="flex items-center mt-[744px] z-60 ">
        <div className="ml-[58px]">
          <p className="text-[58px] font-bold">Walk Like a Boss</p>
          <p className="text-lg font-bold pl-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
          <button className="bg-transparent border rounded-md mt-[28px] py-3 px-[43px]">Explore</button>
        </div>
        <div className="pl-[86px]">
          <Image src="/assets/right-arrow-2.png" width={24} height={20} />

        </div>
      </div>
    </>
  );
}
