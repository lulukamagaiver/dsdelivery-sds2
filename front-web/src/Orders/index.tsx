import { toast } from 'react-toastify';
import { useEffect, useState } from 'react'
import ProductList from './ProductList'
import StepsHeader from './StepsHeader'
import './style.css'
import { OrderLocationData, Product } from './types';
import { fetchProducts, saveOrder } from '../api';
import OrderLocation from './OrderLocation';
import OrderSummary from './OrderSummary';
import Footer from '../Footer';
import { checkIsSelected } from './helpers';
function Order() {
    const [products, setProducts] = useState<Product[]>([]);
    const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
    const [orderLocation, setOrderLocation] = useState<OrderLocationData>();
    const totalPrice = selectedProducts.reduce((sum,item) => {
        return sum + item.price;
    }, 0);
    useEffect(() => {
        fetchProducts()
            .then(res => setProducts(res.data))
            .catch((error: Error) => toast.warning(error.message));
    }, [])

    const handleSelectProduct = (product: Product) => {
        const isAlreadySelected = checkIsSelected(selectedProducts, product);
      
        if (isAlreadySelected) {
          const selected = selectedProducts.filter(item => item.id !== product.id);
          setSelectedProducts(selected);
        } else {
          setSelectedProducts(previous => [...previous, product]);
        }
      }

      const handleSubmit = () => {
        // const productsIds = selectedProducts.map(({ id }) => ({ id }));
        const payload = {
          ...orderLocation!,
          products: selectedProducts
        }
      
        saveOrder(payload).then((res) => {
          toast.error(`Pedido enviado com sucesso! Nº ${res.data.id}`);
          setSelectedProducts([]);
        })
          .catch((error: Error) => {
            toast.warning(error.message);
          })
      }
    return (
        <>
            <div className="orders-container">
                <StepsHeader />
                <ProductList products={products} onSelectProduct={handleSelectProduct} selectedProducts={selectedProducts}/>
                <OrderLocation onChangeLocation={location => setOrderLocation(location)} />
                <OrderSummary  
                    amount={selectedProducts.length} 
                    totalPrice={totalPrice}
                    onSubmit={handleSubmit}/>
            </div>
            <Footer />
        </> 
    )
}

export default Order;