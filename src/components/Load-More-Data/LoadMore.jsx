import React, { useEffect, useState } from 'react'

const LoadMore = () => {
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const [errMsg, setErrMsg] = useState(null);
    const [count, setCount] = useState(0);

    async function fetchProducts() {
        try {
            setLoading(true);
            const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count * 20}`);
            const data = await response.json();
            if (data && data.products && data.products.length) {
                setProducts(data.products);
                setLoading(false);
            }
        }
        catch (e) {
            setErrMsg(e.message);
            setLoading(false);
        }
    }
    useEffect(() => {
        fetchProducts();
    }, []);
    console.log(products);
    if (loading) {
        return <div>Loading Data...Please wait!</div>;
    }
    if (errMsg !== null) {
        return <div>Something went wrong!!</div>;
    }
    return (
        <div className="product-container w-full grid grid-cols-4 max-lg:grid-cols-2 gap-4 px-6 py-8">
            {
                products && products.length
                    ? products.map((Item) => (
                        <div className="product px-4 py-4 border border-[rgba(0,0,0,0.2)] flex flex-col items-center justify-center gap-6" key={Item.id}>
                            <div className="img-box h-56 w-56 ">
                                <img src={Item.thumbnail} className='object-fill w-full h-full rounded-lg' alt={Item.title} />
                            </div>
                            <p className="product-name text-center">
                                {Item.title}
                            </p>
                        </div>
                    ))
                    : null
            }
        </div>
    )
}

export default LoadMore
