'use client';

import Image from "next/image";

import excludeSrc from '/public/assets/logo.png';
import { useEffect, useState } from "react";


export default function Header({ cartItems, setCartItems, cartTotalValue, setCartTotalValue }) {
  const [isCartOpen, setIsCartOpen] = useState(false)
  

  useEffect(() => {
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
        setCartTotalValue(JSON.parse(storedCartItems).reduce((acc, item) => acc + (item.price * item.quantity), 0))
        setCartItems(JSON.parse(storedCartItems));
    }
}, []);

useEffect(() => {
  const handleClickOutside = (event) => {
    const cartModal = document.getElementById('cart-modal');
    if (cartModal && !cartModal.contains(event.target)) {
      setIsCartOpen(false);
    }
  };

  if (isCartOpen) {
    document.addEventListener('mousedown', handleClickOutside);
  } else {
    document.removeEventListener('mousedown', handleClickOutside);
  }

  return () => {
    document.removeEventListener('mousedown', handleClickOutside);
  };
}, [isCartOpen]);

const AddOneMoreItemToCart = (index) => {
    cartItems[index].quantity += 1;
    setCartTotalValue(cartTotalValue + cartItems[index].price)
    setCartItems([...cartItems])
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
}

const RemoveOneItemFromCart = (item) => {
  const index = cartItems.findIndex(cartItem => cartItem.id === item.id);
  
  if (index !== -1) {
    const updatedCartItems = [...cartItems];
    const itemToUpdate = updatedCartItems[index];

    if (itemToUpdate.quantity > 1) {
      itemToUpdate.quantity -= 1;
      setCartTotalValue(cartTotalValue - itemToUpdate.price);
    } else {
      updatedCartItems.splice(index, 1);
      setCartTotalValue(cartTotalValue - itemToUpdate.price);
    }

    setCartItems(updatedCartItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  }
};

const handleCartModel = () => {
    setIsCartOpen(!isCartOpen)
}

  return (
    <header className="flex justify-between">
      <div className="pt-[70px] pl-[58px]">
        <Image
        src={excludeSrc}
        alt="logo"
      /></div>
      <nav className="w-[786px] z-50 mt-[43px] rounded-l-full bg-custom-fade py-[32px]">
        <ul className="flex items-center text-white text-xl font-semibold leading-4	tracking-widest">
          <li className="pr-[52px] pl-[62px]">HOME</li>
          <div className="flex items-center pr-[83px] gap-x-3">
           <p className="">OUR PRODUCT&rsquo;S</p>
           <img className="w-[14px] h-[14px]" src="/assets/right-arrow-3.png" alt="" />
          </div>
          <div className="relative flex items-center gap-x-[45px]">
            <div className="w-full max-w-[33px]">
               <Image className="w-[33px] h-auto" src="/assets/search-icon.png" width={33} height={20} alt="search icon"/>
            </div>
            <button id="cart-icon" className="relative" onClick={handleCartModel}>
              <span data-test-id="cart-length" className={`${cartItems.length === 0 ? "hidden" : "block absolute bg-red-500 rounded-full p-1 -bottom-2 -right-2"}`}>{cartItems.length}</span>
             <Image src="/assets/bag.png" width={34} height={20} alt="cart icon" />
            </button>
            <div className="ml-[39px] mr-[45px]">
            <Image className="" src="/assets/group-two.png" width={33} height={20} alt="sidebar icon"/>
            </div>
          </div>
        </ul>
      </nav>
      <div className="absolute inset-x-0 -z-10 top-[273px] flex justify-center">
        <Image src="/assets/BIGAIR.png" width={1904} height={20} alt="big air logo"/>
      </div>
    

      <div className="absolute drop-shadow-white inset-x-0 -z-10 top-0 flex justify-center mb-4 filter-shadow">
        <Image src="/assets/white-shoes.png" width={840} height={0} alt="white shoes"/>
      </div>
      
      <div className="absolute -z-20 ">
        <img src="/assets/ellipse-2.png" alt="ellipse 1 drawn"/>
      </div>

        {
              isCartOpen && (
                  <div id={'cart-modal'} className={'absolute w-[600px] h-auto  overflow-y-scroll  max-h-[1400px] border  bg-white right-0 shadow-3xl drop-shadow-sm mt-40 rounded-[40px] p-10 z-30 mr-20 text-black'}>
                        <h1 className="text-black text-center pb-4">Cart</h1>
                      {
                            cartItems.map((item, index) => (
                                <div id={`cart-item-${index}`} key={index} className={'border bg-white shadow-xl rounded-[10px] pb-2 mb-2 mt-4 p-3'}>
                                    <div className={'flex justify-between items-center'}>
                                      <div className="w-[100px] h-[100px]">
                                        <img className="w-full h-full object-contain" src={item.image} alt="" />
                                      </div>
                                        <p className="text-[24px]">{item.name}</p>
                                        <p data-test-id="item-quantity" className="text-[24px]">Quantity: {item.quantity}</p>
                                    </div>
                                    <div className="ml-auto flex ">
                                      <button className="" id={'add-item-button'} onClick={() => AddOneMoreItemToCart(index)}>
                                        <div className="border w-[50px] h-[50px] flex items-center justify-center rounded-md mr-2">
                                          +
                                        </div>
                                      </button>
                                      <button className="border w-[50px] h-[50px] flex items-center justify-center rounded-md mr-2" id={'remove-item-button'} onClick={() => RemoveOneItemFromCart(item)}>
                                        <div>-</div>
                                      </button>
                                    </div>

                                </div>
                            ))
                      }
                      <div>
                        <p id="cart-total-value" className="text-[24px] pt-8">Total Value: {cartTotalValue},00</p>
                      </div>
                  </div>
              )
          }
    </header>
  );
}
