import NarrowButton from "../../shared/NarrowButton/NarrowButton";

const BuyOptions = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 lg:gap-4">
            <NarrowButton className="uppercase bg-transparent border border-black hover:bg-orange-600 hover:text-white hover:border-none">
                add to cart
            </NarrowButton>
            <NarrowButton className="uppercase bg-black text-white hover:bg-blue-800">
                buy it now
            </NarrowButton>
        </div>
    );
};
export default BuyOptions;
