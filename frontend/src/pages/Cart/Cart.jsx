import { Add, Remove } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Announcement from '../../components/Announcement/Announcement'
import Footer from '../../components/Footer/Footer'
import NavBar from '../../components/NavBar/NavBar'
import { Button, Content, Image, ImageContainer, InfoContainer, InfoContent, InfoPrice, Left, Right, SingleProduct, Info, InfoTitle, InfoText, Title, Top, TopLink, Wrapper, Color, PriceTag, PlusMinus, Amount, SumTitle, SumHeader, TotalBox, SumInfo, SumTotal, SumButton } from './Cart.styles'
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const KEY ='pk_test_51LBMbSAdnWCw92xfUvTfmvzGq7clwgqmgng0kNFszxBZ5Inr76HMr6XWv6cW2cvQpakAVaUzEvcPCRLTSbnUKNlc007S3Vteq9'
const Cart = () => {
  const {products, total} = useSelector(state => state.cart)
  const [stripeToken, setStripeToken] = useState(null);
  const navigate = useNavigate()

  const onToken = (token) => {
    setStripeToken(token);
  };  

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await axios.post("/api/checkout/payment", {
          tokenId: stripeToken.id,
          amount: total,
        });
        navigate('/success')
        console.log(res.data)
      } catch {}
    };
    stripeToken && makeRequest();
  }, [stripeToken, total, navigate]);


  return (
    <>
      <NavBar/>
      <Announcement/>
      <Wrapper>
        <Title>
          YOUR BAG
        </Title>
        <Top>
          <Button bgcolor= 'transparent' color = 'inherit'>
            CONTINUE SHOPPING
          </Button>
          <TopLink>
            <a href= '#'>Shopping bag (2)</a>
            <a href = '#'>Wishlist (0)</a>
          </TopLink>
          <Button bgcolor= 'black' color ='white'>
            CHECKOUT NOW
          </Button>
        </Top>
        <Content>
          <Left>
            {
              products.map((product => (
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
                        <Add/>
                        <Amount>{product.quantity}</Amount>
                        <Remove/>
                      </PlusMinus>
                      <PriceTag>
                        ${product.price}
                      </PriceTag>
                    </InfoPrice>
                  </InfoContainer>
                </SingleProduct>
              )))
            }
            <hr />
            {/* <SingleProduct>
              <ImageContainer>
                <Image src='https://d3o2e4jr3mxnm3.cloudfront.net/Rocket-Vintage-Chill-Cap_66374_1_lg.png'/>
              </ImageContainer>
              <InfoContainer>
                <InfoContent>
                  <Info>
                    <InfoTitle>
                      Product:
                    </InfoTitle>
                    <InfoText>
                      VINTAGE CAP
                    </InfoText>
                  </Info>
                  <Info>
                    <InfoTitle>
                      ID:
                    </InfoTitle>
                    <InfoText>
                      54629736792
                    </InfoText>
                  </Info>
                   
                  
                  <Color color = 'gray'/>
                    <Info>
                      <InfoTitle>
                        Size:
                      </InfoTitle>
                      <InfoText>
                        41
                      </InfoText>
                    </Info>
                </InfoContent>
                <InfoPrice>
                  <PlusMinus>
                    <Add/>
                    <Amount>1</Amount>
                    <Remove/>
                  </PlusMinus>
                  <PriceTag>
                    $50.00
                  </PriceTag>
                </InfoPrice>
              </InfoContainer>
            </SingleProduct>
            <hr />
            <SingleProduct>
              <ImageContainer>
                <Image src='https://www.pngarts.com/files/3/Women-Jacket-PNG-High-Quality-Image.png'/>
              </ImageContainer>
              <InfoContainer>
                <InfoContent>
                  <Info>
                    <InfoTitle>
                      Product:
                    </InfoTitle>
                    <InfoText>
                      VINTAGE CAP
                    </InfoText>
                  </Info>
                  <Info>
                    <InfoTitle>
                      ID:
                    </InfoTitle>
                    <InfoText>
                      54629736792
                    </InfoText>
                  </Info>
                   
                  
                  <Color color = 'gray'/>
                    <Info>
                      <InfoTitle>
                        Size:
                      </InfoTitle>
                      <InfoText>
                        41
                      </InfoText>
                    </Info>
                </InfoContent>
                <InfoPrice>
                  <PlusMinus>
                    <Add/>
                    <Amount>1</Amount>
                    <Remove/>
                  </PlusMinus>
                  <PriceTag>
                    $50.00
                  </PriceTag>
                </InfoPrice>
              </InfoContainer>
            </SingleProduct> */}

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