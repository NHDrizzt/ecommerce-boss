
'use client'
import PropTypes from 'prop-types';
import Image from "next/image";
export default function TestimonialCard({
  customer
}) {

  return (
    <section className="">
        <div className='max-w-[730px] bg-custom-fade rounded-[60px] pt-[56px] max-h-[458px] px-[71px] ' key={customer.name}>
          <div className='flex justify-between items-start max-h-[85px] mb-10'>
            <div className='relative mr-5 w-[500px]'>
              <div className='absolute -left-[71px]'>
                <Image className='w-full h-full' sizes='100vw' src={customer.imageUrl} width='0' height='0' alt={customer.alt} />
              </div>
            </div>
            <div className='w-[85px] h-[85px]'>
              <Image className='w-full h-full' sizes='100vw' src='/assets/chat.png' alt='chat icon' width="0" height="0"/>
            </div>
          </div>
          <p className='text-[24px] pb-[40px]'>{customer.description}</p>
          <div className='pb-[56px]'>
            <p className='text-[28px] font-semibold'>{customer.name}</p>
            <p className='text-[18px] font-semibold'>Happy Customer</p>
          </div>
        </div>
    </section>
  );
}

//propTypes
TestimonialCard.propTypes = {
  customer: PropTypes.object,
}