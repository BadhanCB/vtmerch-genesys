import SectionLayout from "../../shared/SectionLayout/SectionLayout";

const ShopCollection = () => {
    return (
        <SectionLayout className="bg-gradient-to-r from-[#2C2A2A] to-black text-white font-montserrat h-[54.5625rem] grid grid-cols-12 grid-rows-12 gap-2 md:gap-4 lg:gap-6 xl:gap-8 2xl:gap-12">
            {/* <ShopCollectionHeader /> */}
            <div className="bg-red-400 col-span-12 row-span-2 md:col-span-8 lg:col-span-6 md:row-span-4">
                <h3>Shop collection</h3>
            </div>

            <div className="bg-slate-400 col-start-1 col-end-7 row-start-3 row-end-7 md:col-start-9 md:col-end-13 md:row-start-1 md:row-end-7">
                <h3>The Future Looks Bright Collection</h3>
            </div>

            <div className="bg-green-700 col-start-7 col-end-13 row-start-3 row-end-7 md:col-start-1 md:col-end-4 md:row-start-6 md:row-end-13">
                <h3>THE BOSS COLLECTION</h3>
            </div>
            <div className="bg-blue-400 col-start-1 col-end-9 row-start-9 row-end-11 md:col-start-4 md:col-end-7 md:row-start-5 md:row-end-9">
                <h3>HEADWEAR</h3>
            </div>
            <div className="bg-yellow-400 col-start-1 col-end-9 row-start-11 row-end-13 md:col-start-4 md:col-end-7 md:row-start-9 md:row-end-13">
                <h3>VALUE BOOKS</h3>
            </div>
            <div className="bg-pink-800 col-span-12 row-start-7 row-end-9 md:col-start-7 md:col-end-9 md:row-start-5 lg:row-start-3 md:row-end-13">
                <h3>Accessories</h3>
            </div>

            <div className="bg-rose-400 col-start-9 col-end-13 row-start-9 row-end-13 md:col-start-9 md:col-end-13 md:row-start-7 md:row-end-13">
                <h3>TOPS</h3>
            </div>
        </SectionLayout>
    );
};
export default ShopCollection;
