const Products = () => {
    return (
        <div>
            <h3 className="text-xl font-medium capitalize mb-6">products</h3>
            <ul className="flex flex-col gap-4">
                <li>
                    <a href="#" className="capitalize">
                        featured products
                    </a>
                </li>
                <li>
                    <a href="#" className="capitalize">
                        bestseller
                    </a>
                </li>
                <li>
                    <a href="#" className="capitalize">
                        latest product
                    </a>
                </li>
                <li>
                    <a href="#" className="capitalize">
                        all collections
                    </a>
                </li>
                <li>
                    <a href="#" className="capitalize">
                        all products
                    </a>
                </li>
            </ul>
        </div>
    );
};
export default Products;
