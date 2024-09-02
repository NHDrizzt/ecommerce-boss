import TestimonialCard from "../ReusableComponents/TestimonialCard";

export default function CustomerTestimonials() {
  const customers = [{
    id: 1,
    imageUrl: "/assets/customerimage1.png",
    alt: "customer image",
    name: "Ajex Vento",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  }, {
    id: 2,
    imageUrl: "/assets/customerimage2.png",
    alt: "customer image",
    name: "Ajex Ventos",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  }];


  return (
    <section className="flex flex-col justify-center items-center mt-[200px]">
      <div>
        <div className="flex flex-col justify-center items-center  ">
          <div className="text-center">
            <p className="text-[71px] font-semibold">What Our </p>
            <p className="text-[71px] font-semibold">Happy customer Says</p>
          </div>
          <span className="text-center w-[134px] h-1 bg-white mt-[42px]"></span>
          </div>
          <div className="max-w-[851px] text-center">
            <p className="text-[24px] mt-[42px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
          </div>
      </div>
      <div>

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