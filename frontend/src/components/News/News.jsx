import React from 'react'
import { SendOutlined } from '@mui/icons-material'
import { Button, Input, InputContainer, Text,Title, Wrapper } from './News.styles'

const News = () => {
  return (
    <>
      <Wrapper>
        <Title>
          NewsLetter
        </Title>
        <Text>
          Get timely updates from your favorite products.
        </Text>
        <InputContainer>
          <Input type= 'email' placeholder='Your email'/>
          <Button>
            <SendOutlined style={{color: 'white'}}/>
          </Button>
        </InputContainer>
      </Wrapper>
    </>
  )
}

export default News