import React, { Fragment, useEffect, useState } from 'react'
import { Product } from '../../app/models/product';
import ProductList from './ProductList';
import agent from '../../app/api/agent';
import LoadingComponent from '../../app/layout/LoadingComponent';
interface Props{
    products:Product[];
     addProduct:()=>void;

}

export const Catalog = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading,setLoading] = useState(true);

  useEffect(() => {
  agent.Catalog.list().then(products=>setProducts(products))
  .catch(error=>console.log(error))
  .finally(()=>setLoading(false))
  }, [])

  if(loading) return <LoadingComponent message="Loading" />
  return (
 <>
    <ProductList products={products} /> 
 </>
  )
}

export default Catalog