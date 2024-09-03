import TestimonialCard from "../ReusableComponents/TestimonialCard";
import { customers } from "../utils/constants";

export default function CustomerTestimonials() {
  return (
    <section className="flex flex-col justify-center items-center pt-[200px] pb-[185px] diagonal-gradient-middle">
      <div className="flex flex-col justify-center items-center  ">
        <div className="text-center">
          <h1 className="text-[71px] font-semibold">What Our </h1>
          <span className="text-[71px] font-semibold">Happy customer Says</span>
        </div>
        <span className="text-center w-[134px] h-1 bg-white mt-[42px]"></span>
        </div>
        <div className="max-w-[851px] text-center">
          <p className="text-[24px] mt-[42px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
        </div>
      <div className="flex gap-x-[113px] mt-[84px]">
        {
          customers.map((customer) => (
            <TestimonialCard key={customer.id} customer={customer}/>
          ))
        }
      </div>
    </section>
  );
}