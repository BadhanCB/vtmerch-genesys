// eslint-disable-next-line react/prop-types
const SectionLayout = ({ children, className }) => {
    return (
        <section
            className={`px-6 sm:px-12 md:px-16 lg:px-24 xl:px-28 2xl:px-[9.25rem] py-10 sm:py-12 md:py-16 lg:py-20 xl:py-24 2xl:py-[6.3125rem] ${className}`}
        >
            {children}
        </section>
    );
};
export default SectionLayout;
