import { Add, Remove } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import Announcement from '../../components/Announcement/Announcement'
import Footer from '../../components/Footer/Footer'
import NavBar from '../../components/NavBar/NavBar'
import { ColorContainer, ColorTitle, ColorOption, Filter, Image, ImageContainer, InfoContainer, PriceTag, Text, Title, Wrpaper, SelectCon, SelectTitle, Select, Option, AddContainer, PlusMinus, Amount, Button } from './Product.styles'
import axios from 'axios'
import { useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/features/cart/cartSlice'


const Product = () => {
  const location = useLocation().pathname.split('/')[2]
  const[product, setProduct] =useState(null)
  const[quantity, setQuantity] = useState(1)
  const [size, setSize] = useState(product?.size[0])
  const [color, setColor] = useState(product?.color[0])
  const dispatch = useDispatch()


  const handleQuantity = (dir) => {
    if(dir==='left'){
      quantity > 0 && setQuantity(quantity-1)
    }
    if(dir==='right'){
      setQuantity(quantity+1)
    }
  }

  useEffect(()=>{
    const getProduct = async() => {
      try{
       const res = await axios.get(`/api/products/find/${location}`)
        setProduct(res.data)
      }catch(err){
        console.log(err)
      }
    }
    getProduct()
  }, [location])
   console.log(product)
  // console.log(quantity);
  // console.log(color, size)

  const handleAddToCart = () => {
    const cartProduct = { ...product, quantity, color: color || product?.color[0], size: size || product?.size[0] }
    dispatch(addToCart({cartProduct}))
    // dispatch(addTotal(product.price*quantity))
   
  }
  return (
    <>
    <NavBar/>
    <Announcement/>
    <Wrpaper>
      <ImageContainer>
        <Image src={product?.img}/>
      </ImageContainer>
      <InfoContainer>
        <Title>
          {product?.title}
        </Title>
        <Text>
          {product?.desc}
        </Text>
        <PriceTag>
          ${product?.price}
        </PriceTag>
        <Filter>
          <ColorContainer>
            <ColorTitle>
              Color
            </ColorTitle>
            {
            product?.color.map((c, i) => 
              <ColorOption 
                color={c} 
                key={i} 
                onClick={()=>setColor(c)} 
                style={{ transform: c===color && 'scale(1.5)'}}
                />
              )
            }
          </ColorContainer>
          <SelectCon>
            <SelectTitle>
              Size
            </SelectTitle>
           
            <Select onClick= {(e)=> {setSize(e.target.value)}}>
            {
              product?.size.map((s, i) => 
                <Option key= {i} >{s}</Option>
              )
            }
            </Select>
          </SelectCon>
        </Filter>
        <AddContainer>
          <PlusMinus>
            <Remove onClick ={()=>handleQuantity('left')}/>
            <Amount>{quantity}</Amount>
            <Add onClick ={()=>handleQuantity('right')}/>
          </ PlusMinus>
          <Button onClick={handleAddToCart}>
            ADD TO CART
          </Button>

        </AddContainer>

      </InfoContainer>
    </Wrpaper>

    <Footer/>
    
    </>
  )
}

export default Product