import React, { Fragment, useEffect, useState } from 'react'
import { Product } from '../../app/models/product';
import ProductList from './ProductList';
interface Props{
    products:Product[];
     addProduct:()=>void;

}

export const Catalog = () => {
  const [products, setProducts] = useState<Product[]>([]);


  useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then(response => response.json())
      .then(data => setProducts(data))
  }, [])
  return (
 <>
    <ProductList products={products} /> 
 </>
  )
}

export default Catalog