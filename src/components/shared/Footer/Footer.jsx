import CopyrightInfo from "./CopyrightInfo";
import FooterLinks from "./FooterLinks";

const Footer = () => {
    return (
        <footer className="bg-black text-white">
            <FooterLinks />
            <CopyrightInfo />
        </footer>
    );
};
export default Footer;
