import Image from "next/image";

export default function Footer() {

  return (
    <section className="bg-black h-[567px] max-h-[567px] mt-[185px]">
        <div className="pt-[82px] flex justify-center">
            <div className="w-[168px] h-[73px]">
              <Image className="w-full h-full object-cover" src="/assets/logo.png" width={168} height={73} />
            </div>
        </div>
        <div className="flex ml-[367px]  mt-[106px] gap-x-[154px] text-[28px] font-medium">
          <p>Terms Of Service</p>
          <p>Privacy Policy</p>
          <p>Security</p>
          <p>Faq</p>
        </div>
        <div className="flex mt-[138px]">
          <div className="flex items-center gap-x-1 ml-[77px]">
            <p className="text-[24px] font-medium">English</p>
            <Image src="/assets/polygon1.png" width={20} height={10} alt="chevron down"/>
          </div>
          <div className="flex ml-[585px] gap-x-10 text-[24px] font-extrabold">
            <p>FB</p>
            <p>TW</p>
            <p>LI</p>
            <p>IN</p>
          </div>
          <p className="ml-[270px] text-[24px] font-medium">BOSS SHOES © All right Reserved</p>
        </div>
    </section>
  );
}