'use client';
import CompanyAdvantages from "./components/CompanyAdvantages";
import CustomerTestimonials from "./components/CustomerTestimonials";
import Footer from "./components/Footer";
import Header from "./components/Header";
import OurProductQuality from "./components/OurProductQuality";
import OurProducts from "./components/OurProducts";
import SubHeader from "./components/SubHeader";
import ToggleDarkMode from "./components/ToggleDarkmode";
import { useEffect, useState } from "react";
export default function Home() {

  const [cartItems, setCartItems] = useState([]);
  const [cartTotalValue, setCartTotalValue] = useState(0)

  useEffect(() => {
    console.log(cartItems);
  }
  , [cartItems]);
  

  return (
    <div className="">
      <Header cartItems={cartItems}  setCartItems={setCartItems} cartTotalValue={cartTotalValue} setCartTotalValue={setCartTotalValue}/>
      <SubHeader />
      <ToggleDarkMode  />
      <CompanyAdvantages  />
      <OurProducts cartItems={cartItems}  setCartItems={setCartItems} cartTotalValue={cartTotalValue} setCartTotalValue={setCartTotalValue} />
      <OurProductQuality  />
      <CustomerTestimonials  />
      <Footer  />
    </div>
  );
}
