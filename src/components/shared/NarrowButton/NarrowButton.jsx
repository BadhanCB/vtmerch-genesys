const NarrowButton = ({ children, className }) => {
    return (
        <button
            className={`px-6 py-3 rounded-xl text-base font-medium font-inter w-full hover:scale-95 transition-all duration-500 ${className}`}
        >
            {children}
        </button>
    );
};
export default NarrowButton;
