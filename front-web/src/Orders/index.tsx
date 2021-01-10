import { useEffect, useState } from 'react'
import ProductList from './ProductList'
import StepsHeader from './StepsHeader'
import './style.css'
import { OrderLocationData, Product } from './types';
import { fetchProducts } from '../api';
import OrderLocation from './OrderLocation';
function Order() {
    const [products, setProducts] = useState<Product[]>([]);   
    const [orderLocation, setOrderLocation] = useState<OrderLocationData>();
    useEffect(()=>{
        fetchProducts()
            .then(res => setProducts(res.data))
            .catch(error => console.error(error));
    }, [])
    return (
        <div className="orders-container">
            <StepsHeader/>
            <ProductList products={products}/>
            <OrderLocation onChangeLocation={location => setOrderLocation(location)}/>
        </div>
    )
}

export default Order;