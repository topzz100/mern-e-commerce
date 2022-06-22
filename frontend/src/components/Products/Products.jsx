import React, { useEffect, useState } from 'react'
import { popularProducts } from '../../data'
import { useDispatch, useSelector } from 'react-redux'
import Product from '../Product/Product'
import { toast } from 'react-toastify'
import { getProducts, reset } from '../../redux/features/product/productSlice'
import { Wrapper } from './Products.styles'


const Products = ({category, filters, sort}) => {
  const dispatch = useDispatch()
  const {products : allProducts, isSuccess, isError, message} = useSelector(state => state.products)
   const[products, setProducts] = useState([])
   const[filteredProducts, setFilteredProducts] = useState([])

  useEffect(()=>{
    dispatch(getProducts(category))
  }, [category, dispatch])

  useEffect(() => {
     if (isError) {
       toast.error(message)
     }
    if(isSuccess){
      setProducts(allProducts)
       console.log(products)
    }
     return () => {
        dispatch(reset())
     }
  }, [isSuccess, isError, message, dispatch, allProducts])
  console.log(products)
 
    useEffect(() => {
     category &&
       setFilteredProducts(
         products.filter((item) =>
           Object.entries(filters).every(([key, value]) =>
             item[key].includes(value)
           )
         )
       );
   }, [products, category, filters, isSuccess]);

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
        }): products.map((product) => (
         <Product key={product._id} product = {product}/>
        ))
      }
    </Wrapper>

    </>
  )
}

export default Products