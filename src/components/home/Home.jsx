import BestSelling from "./BestSelling/BestSelling";
import TopBanner from "./TopBanner/TopBanner";

const Home = () => {
    return (
        <main className="font-inter">
            <TopBanner />
            <BestSelling />
        </main>
    );
};
export default Home;
