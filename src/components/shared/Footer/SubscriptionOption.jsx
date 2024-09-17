const SubscriptionOption = () => {
    return (
        <div>
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
            <button className="px-6 py-3 rounded-xl bg-white text-[#222222] text-base block w-full">
                Subscribe
            </button>
        </div>
    );
};
export default SubscriptionOption;
