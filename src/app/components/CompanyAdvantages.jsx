import Image from 'next/image';
import {companyAdvantages} from '../utils/constants';

const getImageClassName = (title) => {
  if (title === "Free Shipping World Wide") {
    return "w-[51px] h-[40px]";
  } else if (title === "Money Back Guarantee") {
    return "w-[51px] h-[51px]";
  } else {
    return "w-[40px] h-[40px]";
  }
};

export default function CompanyAdvantages() {
  return (
    <div className="mx-auto flex gap-x-[153px]  items-center bg-custom-fade  max-w-[1616px] mt-[150px] py-[68px] px-[65px] rounded-[15px]">
      {
        companyAdvantages.map((advantage) => (
          <div key={advantage.title} className="flex items-center z-10 gap-x-4 border flex-1 max-w-[391px] py-[42px] pl-[22px] pr-[33px] rounded-xl text-center">
            <div className={`${getImageClassName(advantage.title)}`}>
              <Image className="w-full h-full" sizes='100vw' src={advantage.imageUrl} width="0" height="0" alt="delivery box" />
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