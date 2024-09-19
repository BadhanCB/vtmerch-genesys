import About from "./About/About";
import BestSelling from "./BestSelling/BestSelling";
import CompanySlogan from "./CompanySlogan/CompanySlogan";
import FutureLooks from "./FutureLooks/FutureLooks";
import NewArrival from "./NewArrival/NewArrival";
import ProductOfTheMonth from "./ProductOfTheMonth/ProductOfTheMonth";
import Services from "./Services/Services";
import ShopCollection from "./ShopCollection/ShopCollection";
import SignedCollection from "./SignedCollection/SignedCollection";
import TopBanner from "./TopBanner/TopBanner";

const Home = () => {
    return (
        <main className="font-inter">
            <TopBanner />
            <BestSelling />
            <SignedCollection />
            <CompanySlogan />
            <ShopCollection />
            <NewArrival />
            <FutureLooks />
            <About />
            <ProductOfTheMonth />
            <Services />
        </main>
    );
};
export default Home;
