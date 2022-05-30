import React from 'react'
import { Link } from 'react-router-dom'
import { Wrapper, Button, Image, Info, Title } from './Category.styles'


const Category = ({category }) => {
  return (
    <>
      <Wrapper>
        <Link to ={`/products/${category.cat}`}>
          <Image src= {category?.img}/>
          <Info>
            <Title>
              {category?.title}
            </Title>
            <Button>
              SHOP MORE
            </Button>
          </Info>
        </Link>
      </Wrapper>
    </>
    
  )
}

export default Category