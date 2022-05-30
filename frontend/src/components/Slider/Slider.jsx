import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material';
import React, { useState } from 'react';
import { Arrow, Button, Content, Heading, Image, ImageContainer, Right, Slide, Text, Wrapper } from './Slider.styles';
import {sliderItems} from '../../data.js'

const Slider = () => {
  const [indexVal, setIndexVal] = useState(0)

  const handleClick = (direction) => {
    if(direction === 'left'){
      setIndexVal(indexVal > 0 ? indexVal-1 : 2)
    }else{
       setIndexVal(indexVal < 2 ? indexVal+1 : 0)
    }
  }
  return <>
  <Wrapper>
    <Arrow position = 'left' onClick = {() => handleClick('left')}>
      <ArrowLeftOutlined/>
    </Arrow>
      <Slide indexVal = {indexVal}>
         {sliderItems.map(item => {
        return(
          
          <Content bg = {item.bg} key= {item.id}>
            <ImageContainer>
              <Image src= {item.img}/>
            </ImageContainer>
            
            <Right>
              <Heading>
                {item.title}
              </Heading>
              <Text>
                {item.desc}
              </Text>
              <Button>
                Shop Now
                <ArrowRightOutlined style={{fontSize: '.9rem'}}/>
              </Button>
            </Right>
          </Content>
   
        )
      })}
      </Slide>
     
     
    

    <Arrow position = 'right' onClick = {() => handleClick('right')}>
      <ArrowRightOutlined/>
    </Arrow>
  </Wrapper>
    
  </>
};

export default Slider;
