import book2 from "../../../assets/img/Front.png";
import book1 from "../../../assets/img/img (1).png";

const SignedCollectionMedia = () => {
    return (
        <div className="grid grid-cols-2 gap-6 xl:gap-8 2xl:gap-12 order-1 md:order-2">
            <div>
                <img
                    src={book1}
                    alt="book 1"
                    className="h-full w-full object-contain"
                />
            </div>
            <div>
                <img
                    src={book2}
                    alt="book 2"
                    className="h-full w-full object-contain"
                />
            </div>
        </div>
    );
};
export default SignedCollectionMedia;
