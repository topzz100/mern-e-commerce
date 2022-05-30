import React, { useEffect, useState } from 'react'
import { popularProducts } from '../../data'
import Product from '../Product/Product'
import { Wrapper } from './Products.styles'
import axios from 'axios'

const Products = ({category, filters, sort}) => {
  const[products, setProducts] = useState([])
   const[filteredProducts, setFilteredProducts] = useState([])
  
   console.log(sort)
  useEffect(()=>{
    const getProducts = async() => {

      try{
        const res = await axios.get(category? `http://localhost:7700/api/products?category=${category}` : `http://localhost:7700/api/products` )
        setProducts(res.data)
      }catch(err){
        console.log(err);
      }
    }
    getProducts()
  }, [category])

  // useEffect(()=>{
  //   category &&
  //   setFilteredProducts(
  //     products.filter((item)=>
  //       Object.entries(filters).every(([key, value])=>
  //         item[key].includes(value)
  //       )
  //     )
  //   )
  // },[category, products, filters])
    useEffect(() => {
     category &&
       setFilteredProducts(
         products.filter((item) =>
           Object.entries(filters).every(([key, value]) =>
             item[key].includes(value)
           )
         )
       );
   }, [products, category, filters]);

   useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);


  return (
    <>
    <Wrapper>
       {
        category?
        filteredProducts.map(product => {
          return <Product key = {product._id} product = {product}/>
        }): products.map(product => {
          return <Product key = {product._id} product = {product}/>
        })
      } 
       {/* {
        products.map((item) => <Product product={item} key={item._id} />)}  */}
    </Wrapper>
      
    </>
  )
}

export default Products