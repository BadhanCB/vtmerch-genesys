const CustomerServices = () => {
    return (
        <div>
            {/* <div className="col-span-12 md:col-span-6 lg:col-span-3 xl:col-span-2"> */}
            <h3 className="text-xl font-medium capitalize mb-6">
                customer services
            </h3>
            <ul className="flex flex-col gap-4">
                <li>
                    <a href="#" className="capitalize">
                        about us
                    </a>
                </li>
                <li>
                    <a href="#" className="capitalize">
                        search
                    </a>
                </li>
                <li>
                    <a href="#" className="capitalize">
                        privacy policy
                    </a>
                </li>
                <li>
                    <a href="#" className="capitalize">
                        contact us
                    </a>
                </li>
                <li>
                    <a href="#" className="capitalize">
                        Terms of service
                    </a>
                </li>
                <li>
                    <a href="#" className="capitalize">
                        refund policy
                    </a>
                </li>
                <li>
                    <a href="#" className="capitalize">
                        track order
                    </a>
                </li>
            </ul>
        </div>
    );
};
export default CustomerServices;
