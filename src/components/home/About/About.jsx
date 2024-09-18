import chessImg from "../../../assets/img/img (3).png";
import companyLogo from "../../../assets/logo/valuetainment.svg";
import AboutContent from "./AboutContent";
import AboutMedia from "./AboutMedia";
import AboutTitle from "./AboutTitle";

const About = () => {
    return (
        <section className="px-4 md:px-16 lg:px-28 xl:px-36 2xl:px-[9.375rem] py-12 md:py-16 lg:py-20 xl:py-24 2xl:py-28 bg-gradient-to-r from-[#3B3B3B] to-[#000000] relative">
            <AboutTitle />
            <div className="w-11/12 grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 xl:gap-16">
                <AboutMedia />
                <AboutContent />
            </div>

            {/* logo image */}
            <img
                src={companyLogo}
                alt="company logo"
                className="w-64 md:w-72 lg:w-80 xl:w-96 2xl:w-[30rem] absolute top-8 right-8 opacity-5"
            />

            {/* chess image */}
            <img
                src={chessImg}
                alt="chess image"
                className="w-1/12 h-auto absolute bottom-0 right-4"
            />
        </section>
    );
};
export default About;
