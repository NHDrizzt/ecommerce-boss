
export default function OurProductQuality({

}) {

  const qualities = [{
    imageUrl: "/assets/medal.png",
    title: "Best quality shoes",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ...",
  }, {
    imageUrl: "/assets/flexarm.png",
    title: "Long Lasting Shoes",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ...",
  }, {
    imageUrl: "/assets/diamond.png",
    title: "Best Value",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ...",
  }];

  return (
    <section className="mt-[524px] mx-auto flex">
      <div className="pl-[165px]">
        <h1 className="text-[71px] font-semibold">Our Product Quality</h1>
        <div className="flex flex-col gap-y-[40px] mt-[56px]">
          {
            qualities.map((quality) => (
              <div key={quality.title} className="flex gap-x-[31px] ">
                <div className="border-2 flex items-center rounded-[20px] w-[73px] h-[73px] justify-center">
                  <img src={quality.imageUrl} alt="" />
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
      <div className="relative ml-10">
        <img src="/assets/ellipse3.png " alt="" />
        <div className="w-[841px] ">
          <img className="absolute -rotate-12 right-40 -top-24 w-full h-full object-cover " src="/assets/tests.png" alt="Green Shoes" />

        </div>
      </div>
    </section>
  );
}