import { Add, Delete, Remove } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Announcement from '../../components/Announcement/Announcement'
import Footer from '../../components/Footer/Footer'
import NavBar from '../../components/NavBar/NavBar'
import { Button, Content, Image, ImageContainer, InfoContainer, InfoContent, InfoPrice, Left, Right, SingleProduct, Info, InfoTitle, InfoText, Title, Top, TopLink, Wrapper, Color, PriceTag, PlusMinus, Amount, SumTitle, SumHeader, TotalBox, SumInfo, SumTotal, SumButton, DeleteProduct } from './Cart.styles'
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { reset, updateCart } from '../../redux/features/cart/cartSlice'

const KEY =process.env.REACT_APP_STRIPE
const Cart = () => {
  const {products, total} = useSelector(state => state.cart)
  // const[quantity, setQuantity] = useState(null)
  const [cartProducts, setCartProducts] = useState(products)
  const [stripeToken, setStripeToken] = useState(0);
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const onToken = (token) => {
    setStripeToken(token);
  };  

  const handleRemove = (c) => {
    setCartProducts((prev)=>{
      return prev.filter(p => p !== c)
    })
  }
  
  //   const handleQuantity = (dir) => {
  //   if(dir==='left'){
  //     quantity > 0 && setQuantity(quantity-1)
  //   }
  //   if(dir==='right'){
  //     setQuantity(quantity+1)
  //   }
  // }
  useEffect(()=>{
    dispatch(updateCart({cartProducts}))
  },[cartProducts, updateCart])

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await axios.post("/api/checkout/payment", {
          tokenId: stripeToken.id,
          amount: total,
        });
        res.data && dispatch(reset)
        res.data && navigate('/success')
        console.log(res.data)
      } catch {}
    };
    stripeToken && makeRequest();
  }, [stripeToken, total, navigate, reset]);


  return (
    <>
      <NavBar/>
      <Announcement/>
      <Wrapper>
        <Title>
          YOUR BAG
        </Title>
        <Top>
          <Link to={'/'}>
            <Button bgcolor= 'transparent' color = 'inherit'>
              CONTINUE SHOPPING
            </Button>
          </Link>
          
          <TopLink>
            <a href= '#'>Shopping bag (2)</a>
            <a href = '#'>Wishlist (0)</a>
          </TopLink>
          <StripeCheckout
            name="Zole"
            image="https://avatars.githubusercontent.com/u/1486366?v=4"
            billingAddress
            shippingAddress
            description={`Your total is $${total}`}
            amount={total * 100}
            token={onToken}
            stripeKey={KEY}
          >
            <Button bgcolor= 'black' color ='white'>
              CHECKOUT NOW
            </Button>
          </StripeCheckout>
          
        </Top>
        <Content>
          <Left>
            {
              cartProducts.map((product => (
                <>
                  <SingleProduct key={product._id}>
                    <ImageContainer>
                      <Image src={product.img}/>
                    </ImageContainer>
                    <InfoContainer>
                      <InfoContent>
                        <Info>
                          <InfoTitle>
                            Product:
                          </InfoTitle>
                          <InfoText>
                            {product.title}
                          </InfoText>
                        </Info>
                        <Info>
                          <InfoTitle>
                            ID:
                          </InfoTitle>
                          <InfoText>
                            {product._id}
                          </InfoText>
                        </Info>
                        
                        
                        <Color color = {product?.color}/>
                        <Info>
                          <InfoTitle>
                            Size:
                          </InfoTitle>
                          <InfoText>
                            {product?.size}
                          </InfoText>
                        </Info>
                      </InfoContent>
                      <InfoPrice>
                        <PlusMinus>
                          {/* <Remove onClick ={()=>handleQuantity('left')}/> */}
                          <Amount>{ product.quantity}</Amount>
                          {/* <Add onClick ={()=>handleQuantity('left')}/> */}
                        </PlusMinus>
                        <PriceTag>
                          ${product.price}
                        </PriceTag>
                      </InfoPrice>
                    </InfoContainer>
                    <DeleteProduct onClick={() => handleRemove(product)}>
                      <Delete/>
                    </DeleteProduct>
                  </SingleProduct>
                  <hr />
                </>
              )))
            }
          </Left>
          
          <Right>
            <SumHeader>
              ORDER SUMMARY
            </SumHeader>
            <TotalBox>
              <SumInfo>
                <SumTitle>
                  SubTotal
                </SumTitle>
                <SumTitle>
                  {total}
                </SumTitle>
              </SumInfo>
              <SumInfo>
                <SumTitle>
                  Estimated Shipping
                </SumTitle>
                <SumTitle>
                  $0.00
                </SumTitle>
              </SumInfo>
              <SumInfo>
                <SumTitle>
                  Shipping Discount
                </SumTitle>
                <SumTitle>
                  $0.00
                </SumTitle>
              </SumInfo>
              <SumInfo>
                <SumTotal>
                  Total
                </SumTotal>
                <SumTotal>
                  ${total}
                </SumTotal>
              </SumInfo>
            </TotalBox>

            <StripeCheckout
              name="Zole"
              image="https://avatars.githubusercontent.com/u/1486366?v=4"
              billingAddress
              shippingAddress
              description={`Your total is $${total}`}
              amount={total * 100}
              token={onToken}
              stripeKey={KEY}
            >
              <SumButton>
              CHECKOUT NOW
            </SumButton>
            </StripeCheckout>
            
          </Right>
        </Content>
        
      </Wrapper>
      <Footer/>

    </>
  )
}

export default Cart