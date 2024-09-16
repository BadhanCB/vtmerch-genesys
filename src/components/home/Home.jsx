import BestSelling from "./BestSelling/BestSelling";
import CompanySlogan from "./CompanySlogan/CompanySlogan";
import NewArrival from "./NewArrival/NewArrival";
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
        </main>
    );
};
export default Home;
