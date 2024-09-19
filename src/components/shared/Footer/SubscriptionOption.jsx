import NarrowButton from "../NarrowButton/NarrowButton";

const SubscriptionOption = () => {
    return (
        <div className="col-span-12 lg:col-span-5 xl:col-span-5 2xl:col-span-4 mb-16 lg:mb-0">
            {/* <div className="col-span-12 md:col-span-6 lg:col-span-6 xl:col-span-5"> */}
            <p className="text-2xl font-montserrat mb-12">
                Subscribe and be the first to receive notifications about our
                upcoming releases and the latest news.
            </p>
            <input
                className="px-6 py-3 rounded-xl border border-white/50 bg-transparent text-center text-base block w-full mb-4"
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
            />
            <NarrowButton className="block bg-white text-[#222222] hover:bg-green-500 hover:text-white">
                Subscribe
            </NarrowButton>
        </div>
    );
};
export default SubscriptionOption;
