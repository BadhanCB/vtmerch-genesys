import image from "../../../assets/img/img (10).png";

const AboutMedia = () => {
    return (
        <div className="h-full w-full overflow-hidden rounded-xl">
            <img
                src={image}
                alt="about our image"
                className="h-full w-full object-cover object-center"
            />
        </div>
    );
};
export default AboutMedia;
