import React, { useEffect, useState } from 'react'
import { popularProducts } from '../../data'
import { useDispatch, useSelector } from 'react-redux'
import Product from '../Product/Product'
import { toast } from 'react-toastify'
import { getProducts, reset } from '../../redux/features/product/productSlice'
import { Wrapper } from './Products.styles'
import productService from '../../redux/features/product/productService'
import axios from 'axios'
//import axios from 'axios'

const Products = ({category, filters, sort}) => {
  const dispatch = useDispatch()
  // const {products: allProducts, isError, isSuccess, message} = useSelector((state) => state.product)
  const {products : allProducts, isSuccess, isError, message} = useSelector(state => state.products)
   const[products, setProducts] = useState([])
   const[filteredProducts, setFilteredProducts] = useState([])
  //  const { } = use

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
 


  // const data = async() => {
  //   try{
  //       const res = await productService.getProducts()
  //       console.log(res.data)
  //   }catch(err){
  //     console.log()
  //   }
  // }
  // data()
  // const data = async(cat)=>{
  //   try{
  //     const res = await axios.get(
  //         cat
  //           ? `/api/products?category=${cat}`
  //           : "/api/products"
  //       );
  //      console.log(res.data)
  //   }catch(err){
  //     console.log(err)
  //   }
  // }
  // data(category)

   
  // useEffect(() => {
  //   if (isError) {
  //     toast.error(message)
  //   }

  //   if (isSuccess) {
  //    setProducts(allProducts)
  //    console.log(allProducts)
  //   }

  //     return () => {
  //     dispatch(reset())
  //   }
  //   // dispatch(reset())
  // }, [allProducts, isError, isSuccess, message, dispatch])


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
        }): allProducts.map((product) => (
         <Product key={product._id} product = {product}/>
        ))
      }
       {/* {
        products.map((item) => <Product product={item} key={item._id} />)}  */}
    </Wrapper>

    </>
  )
}

export default Products