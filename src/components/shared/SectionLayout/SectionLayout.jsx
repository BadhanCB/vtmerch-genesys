// eslint-disable-next-line react/prop-types
const SectionLayout = ({ children, className }) => {
    return (
        <section
            className={`px-4 md:px-12 lg:px-16 xl:px-20 2xl:px-[5.625rem] py-4 md:py-6 lg:py-8 xl:py-10 2xl:py-12 ${className}`}
        >
            {children}
        </section>
    );
};
export default SectionLayout;
