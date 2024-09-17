// eslint-disable-next-line react/prop-types
const RegularButton = ({ children, className }) => {
    return (
        <button
            className={`font-inter bg-white text-black text-sm md:text-base uppercase px-4 md:px-8 py-2 md:py-4 rounded-lg md:rounded-xl flex justify-center items-center gap-2 lg:gap-3 xl:gap-4 ${className}`}
        >
            {children}
        </button>
    );
};
export default RegularButton;
