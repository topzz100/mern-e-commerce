import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Content, Text, Wrapper } from './Success.styles'

const Success = () => {
  return (
    <>
      <Wrapper>
        <Content>
          <Text>
            Payment Successful. Your Order is ready
          </Text>
          <Link to={'/'}>
            <Button>
              Go to Homepage
            </Button>
          </Link>
         
        </Content>
      </Wrapper>
    </>
  )
}

export default Success