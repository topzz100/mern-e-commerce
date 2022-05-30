import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material'
import React from 'react'
import { Link } from 'react-router-dom'
import { Icon, Image, Info, Wrapper } from './Product.styles'

const Product = ({product}) => {

  return (
    <>
    <Link to={`/product/${product._id}`}>
      <Wrapper>
        <Image src={product?.img}/>
        <Info>
          <Icon>
            <ShoppingCartOutlined/>
          </Icon>
          <Icon>
            <SearchOutlined/>
          </Icon>
          <Icon>
            <FavoriteBorderOutlined/>
          </Icon>
        </Info>
      </Wrapper>
    </Link>
    </>
  )
}

export default Product