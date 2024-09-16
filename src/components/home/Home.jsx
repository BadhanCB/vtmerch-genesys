import BestSelling from "./BestSelling/BestSelling";
import SignedCollection from "./SignedCollection/SignedCollection";
import TopBanner from "./TopBanner/TopBanner";

const Home = () => {
    return (
        <main className="font-inter">
            <TopBanner />
            <BestSelling />
            <SignedCollection />
        </main>
    );
};
export default Home;
