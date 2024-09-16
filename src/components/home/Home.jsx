import BestSelling from "./BestSelling/BestSelling";
import CompanySlogan from "./CompanySlogan/CompanySlogan";
import SignedCollection from "./SignedCollection/SignedCollection";
import TopBanner from "./TopBanner/TopBanner";

const Home = () => {
    return (
        <main className="font-inter">
            <TopBanner />
            <BestSelling />
            <SignedCollection />
            <CompanySlogan />
        </main>
    );
};
export default Home;
