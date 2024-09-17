import futureLooksImg from "../../../assets/img/img (2).jpeg";
import valueBooksImg from "../../../assets/img/img (2).png";
import bossCollectionImg from "../../../assets/img/img (3).jpeg";
import headWearImg from "../../../assets/img/img (7).png";
import accessoriesImg from "../../../assets/img/img (8).jpeg";
import topsImg from "../../../assets/img/img (9).jpeg";
import SectionLayout from "../../shared/SectionLayout/SectionLayout";
import ShopCollectionHeader from "./ShopCollectionHeader";
import ShopCollectionOptionCard from "./ShopCollectionOptionCard";

const ShopCollection = () => {
    return (
        <SectionLayout className="bg-gradient-to-b from-[#2C2A2A] to-black text-white font-montserrat h-[54.5625rem] grid grid-cols-12 grid-rows-12 gap-2 md:gap-3 lg:gap-4 xl:gap-6 2xl:gap-8">
            <ShopCollectionHeader />

            <ShopCollectionOptionCard
                className="col-start-1 col-end-7 row-start-3 row-end-7 md:col-start-9 md:col-end-13 md:row-start-1 md:row-end-7"
                title="The Future Looks Bright Collection"
                image={futureLooksImg}
            />

            <ShopCollectionOptionCard
                className="col-start-7 col-end-13 row-start-3 row-end-7 md:col-start-1 md:col-end-5 lg:col-start-1 lg:col-end-4 md:row-start-5 md:row-end-11 lg:row-start-6 lg:row-end-13"
                title="THE BOSS COLLECTION"
                image={bossCollectionImg}
            />

            <ShopCollectionOptionCard
                className="col-start-1 col-end-9 row-start-9 row-end-11 md:col-start-5 md:col-end-9 lg:col-start-4 lg:col-end-7 md:row-start-4 md:row-end-8 lg:row-start-5 lg:row-end-9"
                title="HEADWEAR"
                image={headWearImg}
            />

            <ShopCollectionOptionCard
                className="col-start-1 col-end-9 row-start-11 row-end-13 md:col-start-5 md:col-end-9 lg:col-start-4 lg:col-end-7 md:row-start-8 md:row-end-11 lg:row-start-9 lg:row-end-13"
                title="VALUE BOOKS"
                image={valueBooksImg}
            />

            <ShopCollectionOptionCard
                className="col-span-12 row-start-7 row-end-9 md:col-start-1 md:col-end-9 lg:col-start-7 lg:col-end-9 md:row-start-11 lg:row-start-3 md:row-end-13"
                title="Accessories"
                image={accessoriesImg}
            />

            <ShopCollectionOptionCard
                className="col-start-9 col-end-13 row-start-9 row-end-13 md:col-start-9 md:col-end-13 md:row-start-7 md:row-end-13"
                title="TOPS"
                image={topsImg}
            />
        </SectionLayout>
    );
};
export default ShopCollection;
