import About from "./About/About";
import BestSelling from "./BestSelling/BestSelling";
import CompanySlogan from "./CompanySlogan/CompanySlogan";
import FutureLooks from "./FutureLooks/FutureLooks";
import NewArrival from "./NewArrival/NewArrival";
import Services from "./Services/Services";
import SignedCollection from "./SignedCollection/SignedCollection";
import TopBanner from "./TopBanner/TopBanner";

const Home = () => {
    return (
        <main className="font-inter">
            <TopBanner />
            <BestSelling />
            <SignedCollection />
            <CompanySlogan />
            <NewArrival />
            <FutureLooks />
            <About />
            <Services />
        </main>
    );
};
export default Home;
