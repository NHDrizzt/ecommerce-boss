import React, { useEffect, useState } from 'react';

const FadingDivOnScroll = () => {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const maxScroll = 300;
      const newOpacity = Math.max(1 - scrollPosition / maxScroll, 0);
      setOpacity(newOpacity);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      style={{ opacity, transition: 'opacity 0.5s ease-out' }}
      className={'absolute bg-transparent w-[150px] mx-auto inset-x-0 flex justify-center rounded-xl p-5 mt-64 right-10'}
    >
      <div className={'flex items-center bg-gradient-to-b from-white justify-center w-[50px] h-[80px] rounded-full'}>
        <div className={'bg-original w-[40px] h-[65px] rounded-full bg-gradient-to-b from-transparent pl-[6px] pt-[5px]'}>
          <div className={'w-[28px] h-[28px] mb-[50px] rounded-full bg-white bg-gradient-to-b from-white to-blue-300 bolinha '}></div>
        </div>
      </div>
    </div>
  );
};

export default FadingDivOnScroll;
