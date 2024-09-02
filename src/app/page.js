import CompanyAdvantages from "./components/CompanyAdvantages";
import CustomerTestimonials from "./components/CustomerTestimonials";
import Footer from "./components/Footer";
import Header from "./components/Header";
import OurProductQuality from "./components/OurProductQuality";
import OurProducts from "./components/OurProducts";
import SubHeader from "./components/SubHeader";
import ToggleDarkMode from "./components/ToggleDarkmode";
export default function Home() {

  return (
    <div className="">
      <Header  />
      <SubHeader />
      <ToggleDarkMode  />
      <CompanyAdvantages  />
      <OurProducts  />
      <OurProductQuality  />
      <CustomerTestimonials  />
      <Footer  />
    </div>
  );
}
