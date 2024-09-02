'use client';
import data from "../../../data";
export default function OurProducts({
  cartItems,
  setCartItems,
  setCartTotalValue,
  cartTotalValue
}) {

  const AddItemToCart = (item) => {
    const itemIndex = cartItems.findIndex(cartItem => cartItem.id === item.id)
    if(itemIndex === -1) {
        cartItems.push({...item, quantity: 1})
        setCartTotalValue(cartTotalValue + item.price)
    } else {
        cartItems[itemIndex].quantity += 1;
        setCartTotalValue(cartTotalValue + item.price)
    }
    setCartItems([...cartItems])
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
}

  return (
    <section className="relative">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-[72px] font-semibold mt-[149px]">Our Products </h1>
        <span className="text-center w-[109px] h-1 bg-white"></span>
      </div>


      <div data-test-id="parent-grid-products" className="grid grid-cols-3 gap-x-10 m-[50px] gap-y-5">
        {
          data.map((product) => (
            <div data-test-id="grid-products" className="relative custom-gradient shadow-custom-shadow flex flex-col justify-center items-center rounded-[70px] max-h-[678px] " key={product.id}>
              <div className="absolute w-[461px] h-[461px] -top-2 ">
              <img className="drop-shadow-shoes w-full h-full object-cover" src={product.image} alt={product.alt} />
              </div>
              <p className="text-[38px] mt-[440px] font-semibold">{product.name}</p>
              <p className="text-[18px] font-semibold max-w-[241px] mt-[30px]">{product.description}</p>
              <div className="flex justify-between items-center max-w-[368px] w-full mt-[38px] mb-[90px]">
                <p className="text-[32px] font-semibold">Rs. {product.price},00</p>
                <button id="product-icon" onClick={() => AddItemToCart(product)} className="flex items-center border-2 rounded-xl p-3 border-white">
                  <img className="" src="assets/bag.png" alt="Bag Icon" />
                </button>
              </div>
            </div>
          ))
        }
      </div>
      <div className="absolute -z-10 -top-[336px] right-1">
        <img src="/assets/ellipse2.png" alt="" />
      </div>
    </section>
  );
}