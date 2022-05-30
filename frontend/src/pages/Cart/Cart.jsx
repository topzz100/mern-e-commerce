import { Add, Remove } from '@mui/icons-material'
import React from 'react'
import Announcement from '../../components/Announcement/Announcement'
import Footer from '../../components/Footer/Footer'
import NavBar from '../../components/NavBar/NavBar'
import { Button, Content, Image, ImageContainer, InfoContainer, InfoContent, InfoPrice, Left, Right, SingleProduct, Info, InfoTitle, InfoText, Title, Top, TopLink, Wrapper, Color, PriceTag, PlusMinus, Amount, SumTitle, SumHeader, TotalBox, SumInfo, SumTotal, SumButton } from './Cart.styles'

const Cart = () => {
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
            <SingleProduct>
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
            </SingleProduct>

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
                  $ 80.00
                </SumTitle>
              </SumInfo>
              <SumInfo>
                <SumTitle>
                  Estimated Shipping
                </SumTitle>
                <SumTitle>
                  $ 5.90
                </SumTitle>
              </SumInfo>
              <SumInfo>
                <SumTitle>
                  Shipping Discount
                </SumTitle>
                <SumTitle>
                  - $ 8.00
                </SumTitle>
              </SumInfo>
              <SumInfo>
                <SumTotal>
                  Total
                </SumTotal>
                <SumTotal>
                  $ 90.00
                </SumTotal>
              </SumInfo>
            </TotalBox>
            <SumButton>
              CHECKOUT NOW
            </SumButton>
          </Right>
        </Content>
        
      </Wrapper>
      <Footer/>

    </>
  )
}

export default Cart