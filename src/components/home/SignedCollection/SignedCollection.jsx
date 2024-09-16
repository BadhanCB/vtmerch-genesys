import SignedCollectionContent from "./SignedCollectionContent";
import SignedCollectionMedia from "./SignedCollectionMedia";

const SignedCollection = () => {
    return (
        <section className="bg-[#111111] px-12 md:px-20 lg:px-28 xl:px-36 2xl:px-[9.375rem] py-8 md:py-16 lg:py-20 xl:py-28 2xl:py-[8.3125rem] grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-12 lg:gap-14 xl:gap-16 2xl:gap-20">
            <SignedCollectionContent />
            <SignedCollectionMedia />
        </section>
    );
};
export default SignedCollection;
