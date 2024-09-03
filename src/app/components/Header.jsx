'use client';

import Image from "next/image";
import { useEffect, useState } from "react";
import PropTypes from 'prop-types';


export default function Header({ cartItems, setCartItems, cartTotalValue, setCartTotalValue }) {
  const [isCartOpen, setIsCartOpen] = useState(false)
  
  const currencyFormatter = new Intl.NumberFormat(
      'pt-BR',
      {
        style: 'currency',
        currency: 'BRL',
      },
  );

  useEffect(() => {
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
        setCartTotalValue(JSON.parse(storedCartItems).reduce((acc, item) => acc + (item.price * item.quantity), 0))
        setCartItems(JSON.parse(storedCartItems));
    }
  }, [setCartItems, setCartTotalValue]);

useEffect(() => {
  const handleClickOutsideOfModal = (event) => {
    const cartModal = document.getElementById('cart-modal');
    const cartIcon = document.getElementById('cart-icon');
    if (cartModal && !cartModal.contains(event.target) && !cartIcon.contains(event.target)) {
      setIsCartOpen(false);
    }
  };
  if (isCartOpen) {
    document.addEventListener('mousedown', handleClickOutsideOfModal);
  } else {
    document.removeEventListener('mousedown', handleClickOutsideOfModal);
  }

  return () => {
    document.removeEventListener('mousedown', handleClickOutsideOfModal);
  };
}, [isCartOpen]);

const addOneItemToCart = (index) => {
    cartItems[index].quantity += 1;
    setCartTotalValue(cartTotalValue + cartItems[index].price)
    setCartItems([...cartItems])
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
}

const removeOneItemFromCart = (item) => {
  const cartItemIndex = cartItems.findIndex(cartItem => cartItem.id === item.id);
  
  if (cartItemIndex !== -1) {
    const updatedCartItems = [...cartItems];
    const itemToUpdate = updatedCartItems[cartItemIndex];

    if (itemToUpdate.quantity > 1) {
      itemToUpdate.quantity -= 1;
      setCartTotalValue(cartTotalValue - itemToUpdate.price);
    } else {
      updatedCartItems.splice(cartItemIndex, 1);
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
        <div className="w-[98px] h-[44px]">
          <Image className="w-full h-full" sizes="100vw" src="/assets/logo.png" width="0" height="0" alt="logo"/>
        </div>

      </div>
      <nav className="w-[786px] z-50 mt-[43px] rounded-l-full bg-custom-fade py-[32px]">
        <ul className="flex items-center text-white text-xl font-semibold leading-4	tracking-widest">
          <li className="pr-[52px] pl-[62px]">HOME</li>
          <div className="flex items-center pr-[83px] gap-x-3">
           <p className="">OUR PRODUCT&rsquo;S</p>
           <div className="w-[14px] h-[14px]">
              <Image className="w-full h-full" sizes="100vw" src="/assets/right-arrow-3.png" width="0" height="0" alt="right arrow"/>
           </div>
          </div>
          <div className="relative flex items-center gap-x-[45px]">
            <div className="w-[33px] h-[33px] max-w-[33px]">
               <Image className="w-full h-full" sizes="100vw" src="/assets/search-icon.png" width="0" height="0" alt="search icon"/>
            </div>
            <button id="cart-icon" className="relative" onClick={handleCartModel}>
              <span data-test-id="cart-length" className={`${cartItems.length === 0 ? "hidden" : "block absolute bg-red-500 rounded-full p-1 -bottom-2 -right-2"}`}>{cartItems.length}</span>
              <div className="w-[35] h-[33px]">
                <Image className="w-full h-full" sizes="100vw" src="/assets/bag.png" width="0" height="0" alt="cart icon" />
              </div>
            </button>
            <div className="ml-[39px] mr-[45px] w-[31px] h-[19px]">
              <Image className="w-full h-full" sizes="100vw" src="/assets/group-two.png" width="0" height="0" alt="sidebar icon"/>
            </div>
          </div>
        </ul>
      </nav>
      <div className="absolute inset-x-0 -z-10 top-[273px] flex justify-center">
        <div className="w-[1884px] h-auto">
          <Image className="w-full h-full" sizes="100vw" src="/assets/BIGAIR.png" width="0" height="0" alt="big air logo"/>
        </div>
      </div>
      <div className="absolute drop-shadow-white inset-x-0 -z-10 top-0 flex justify-center mb-4 filter-shadow ">
        <div className="w-[840px]">
          <Image className="w-full h-full" sizes="100vw" src="/assets/white-shoes.png" width="0" height="0" alt="white shoes"/>
        </div>
      </div>   
      <div className="absolute -z-20 ">
        <div className="w-[740px] h-[1460px]">
          <Image className="w-full h-full" sizes="100vw" src="/assets/ellipse-2.png" width="0" height="0" alt="ellipse 2"/>
        </div>

      </div>

        {
              isCartOpen && (
                  <div id={'cart-modal'} className={'absolute w-[600px] h-auto  overflow-y-scroll  max-h-[1400px] border  bg-[rgb(255,255,255,0.9)] right-0 shadow-3xl drop-shadow-sm mt-40 rounded-[40px] p-10 z-30 mr-20 text-black'}>
                        <h1 className="text-black text-center pb-4">Cart</h1>
                      {
                            cartItems.map((item, index) => (
                                <div id={`cart-item-${index}`} key={item.id} className={'border bg-[rgb(255,255,255,0.8)] shadow-xl rounded-[10px] pb-2 mb-2 mt-4 p-3'}>
                                    <div className={'flex justify-between items-center'}>
                                      <div className="flex gap-x-4">
                                        <div className="w-[100px] h-[100px] mb-4 bg-gray-200 rounded-sm">
                                          <Image className="w-full h-full" sizes="100vw" src={item.image} width="0" height="0" alt={item.name} />
                                        </div>
                                        <div className="space-y-2">
                                          <p className="text-[24px]">{item.name}</p>
                                          <p className="max-w-[200px] text-[12px]">{item.description}</p>
                                        </div>
                                      </div>
                                      <p className="text-[24px] font-bold">{currencyFormatter.format(item.price)}</p>
                                    </div>
                                    <div className="ml-auto flex justify-between">
                                      <div className="flex gap-x-2">
                                        <button className="" id={'add-item-button'} onClick={() => addOneItemToCart(index)}>
                                          <div className="border p-3 px-4 max-w-[65px]  flex items-center justify-center rounded-md">
                                            Add
                                          </div>
                                        </button>
                                        <button className="border max-w-[65px] flex items-center justify-center rounded-md mr-2" id={'remove-item-button'} onClick={() => removeOneItemFromCart(item)}>
                                          <div>Remove</div>
                                        </button>

                                      </div>
             
                                      <p data-test-id="item-quantity" className="text-[24px]">Qty: {item.quantity}</p>
                                    </div>

                                </div>
                            ))
                      }
                      <div className="flex pt-8 ">
                        <p id="cart-total-value" className="text-[24px]">Total Value: </p>
                        <span className="text-[24px] ml-auto">{currencyFormatter.format(cartTotalValue)}</span>
                      </div>
                      <div className="mx-auto flex flex-1 pt-8">
                        <button className="p-2 border-2 bg-[rgb(255,255,255,0.8)] rounded-md hover:bg-[#82c5eb] hover:text-white font-semibold text-[18px]"> Proceed to Checkout</button>
                      </div>
                  </div>
              )
          }
    </header>
  );
}
  //prop validation
  Header.propTypes = {
    cartItems: PropTypes.array,
    setCartItems: PropTypes.func,
    cartTotalValue: PropTypes.number,
    setCartTotalValue: PropTypes.func
  }
