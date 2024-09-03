import { qualities } from "../utils/constants";
import Image from 'next/image';

export default function OurProductQuality() {
  return (
    <section className="mt-[524px] mx-auto flex gap-x-10 bg-diagonal-gradient-start">
      <div className="pl-[165px]">
        <h1 className="text-[71px] font-semibold w-[677px]">Our Product Quality</h1>
        <div className="flex flex-col gap-y-[40px] mt-[56px]">
          {
            qualities.map((quality) => (
              <div key={quality.title} className="flex gap-x-[31px] ">
                <div className="border-2 flex items-center rounded-[20px] w-[73px] h-[73px] justify-center">
                  <div className="w-[42px] h-[41px]">
                    <Image className="w-full h-full" sizes='100vw' src={quality.imageUrl} width="0" height="0" alt={quality.alt} />
                  </div>
                </div>
                <div className="flex flex-col max-w-[275px]">
                  <p className="text-[24px] font-semibold">{quality.title}</p>
                  <p className="text-[14px] font-semibold">{quality.description}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
      <div className="relative">
        <img src="/assets/ellipse3.png " alt="" />
        <div className="w-[841px]">
          <img className="absolute -rotate-12 right-40 -top-24 w-full h-full object-cover " src="/assets/greenshoes.png" alt="Green Shoes" />  
        </div>
      </div>
    </section>
  );
}