import { useEffect, useState } from 'react'
import ProductList from './ProductList'
import StepsHeader from './StepsHeader'
import './style.css'
import { Product } from './types';
import { fetchProducts } from '../api';
function Order() {
    const [products, setProducts] = useState<Product[]>([]);   
    useEffect(()=>{
        fetchProducts()
            .then(res => setProducts(res.data))
            .catch(error => console.error(error));
    }, [])
    return (
        <div className="orders-container">
            <StepsHeader/>
            <ProductList products={products}/>
        </div>
    )
}

export default Order;