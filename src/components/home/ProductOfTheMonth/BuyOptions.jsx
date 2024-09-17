import NarrowButton from "../../shared/NarrowButton/NarrowButton";

const BuyOptions = () => {
    return (
        <div className="grid grid-cols-2 gap-4">
            <NarrowButton className="uppercase bg-transparent border border-black">
                add to cart
            </NarrowButton>
            <NarrowButton className="uppercase bg-black text-white">
                buy it now
            </NarrowButton>
        </div>
    );
};
export default BuyOptions;
