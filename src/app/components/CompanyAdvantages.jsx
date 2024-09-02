
export default function CompanyAdvantages({

}) {
  const companyAdvantages = [{
    imageUrl: "/assets/delivery1.png",
    title: "Free Shipping World Wide",
    description: "Tell us About Your Service",
  }, {
    imageUrl: "/assets/money-back.png",
    title: "Money Back Guarantee",
    description: "Within 30 Day For On Exchange",
  }, {
    imageUrl: "/assets/online-support.png",
    title: "Online Support",
    description: "24 Hours a Day 7 Day in Week",
  }];

  return (
    <div className="mx-auto flex gap-x-[153px]  items-center bg-custom-fade  max-w-[1616px] mt-[150px] py-[68px] px-[65px]">
      {
        companyAdvantages.map((advantage) => (
          <div key={advantage.title} className="flex items-center z-10 gap-x-2 border flex-1 max-w-[391px] py-[42px] pl-[22px] pr-[33px] rounded-xl">
            <div className={advantage.title === "Free Shipping World Wide" ? "w-[51px] h-[40px]" : advantage.title === "Money Back Guarantee" ? "w-[51px] h-[51px]" : "w[40px] h-[40px]"}>
              <img className="w-full h-full object-fit" src={advantage.imageUrl} alt="delivery box" />
            </div>
            <div className="flex flex-col">
              <p className="text-[21px] font-semibold">{advantage.title}</p>
              <p className="text-center">{advantage.description}</p>
            </div>
          </div>
        ))
      }
    </div>
  );
}