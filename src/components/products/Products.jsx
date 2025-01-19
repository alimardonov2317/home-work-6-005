import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "./Products.css"
import Loading from '../loading/Loading'

const Products = () => {
    const [products, setProducts] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        axios
            .get("https://dummyjson.com/products", { params: { limit: 10 } })
            .then(res => setProducts(res.data.products))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
    }, [])
    return (
        <div className='container'>
            {
                loading && <Loading count={10} />
            }
            <div className="wrapper">
                {
                    products?.map((product) => (
                        <div key={product.id} className="card">
                            <img src={product.thumbnail} alt={product.title} />
                            <h3>{product.title}</h3>
                            <p>${product.price} USD</p>
                            <button className="buy__btn">Buy now</button>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Products