const NarrowButton = ({ children, className }) => {
    return (
        <button
            className={`px-6 py-3 rounded-xl text-base font-medium font-inter w-full ${className}`}
        >
            {children}
        </button>
    );
};
export default NarrowButton;
