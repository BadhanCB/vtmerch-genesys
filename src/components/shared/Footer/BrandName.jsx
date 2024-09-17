import logo from "../../../assets/logo/valuetainment_red.svg";
const BrandName = () => {
    return (
        <div className="flex items-center gap-3">
            <img
                src={logo}
                alt="Brand logo"
                className="w-12 md:w-16 lg:w-20 xl:w-24 2xl:w-28"
            />
            <h1 className="uppercase font-extrabold font-montserrat tracking-widest text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-[6.25rem]">
                vtmerch
            </h1>
        </div>
    );
};
export default BrandName;
