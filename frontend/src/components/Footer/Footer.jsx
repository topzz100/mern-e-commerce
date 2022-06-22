import { Facebook, Instagram, Pinterest, Twitter, LocationOn, Phone, MailOutline } from '@mui/icons-material'
import React from 'react'
import { Center, Left, Right, Wrapper } from './Footer.styles'

const Footer = () => {
  return (
    <>
      <Wrapper>
        <Left>
          <h2>ZOLE.</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt porro placeat vitae numquam libero quia, veritatis sapiente at quis nulla maxime iusto consequuntur omnis itaque quasi amet aliquid nihil? Saepe!
          </p>
          <ul>
            <li style={{backgroundColor: 'blue'}}>
              <Facebook style={{color: 'white' }} />
            </li>
            <li style={{backgroundColor: 'red'}}>
              <Instagram style={{color: 'white'}}/>
            </li>
            <li style={{backgroundColor: 'orange'}}>
              <Twitter style={{color: 'white'}}/>
            </li>
            <li style={{backgroundColor: 'green'}}>
              <Pinterest style={{color: 'white'}}/>
            </li>
          </ul>
        </Left>
        <Center>
          <h3>Useful Links</h3>
          <div className="links">
            <ul>
              <li>Home</li>
              <li>Man Fashion</li>
              <li>Accessories</li>
              <li>Order Tracking</li>
              <li>Wishlist</li>
            </ul>
            <ul>
              <li>Cart</li>
              <li>Woman Fashion</li>
              <li>My Account</li>
              <li>Wishlist</li>
              <li>Terms</li>
            </ul>
          </div>
         
        </Center>
        <Right>
          <h3>Contact</h3>

          <ul>
            <li>
              <LocationOn style={{fontSize: '1rem', marginRight: '15px'}}/>
               662, Dixie Stret, Lorem, ipsum dolor.
            </li>
            <li>
              <Phone style={{fontSize: '1rem', marginRight: '15px'}}/> 
              +222 565748356
            </li>
            <li> 
              <MailOutline style={{fontSize: '1rem', marginRight: '15px'}}/> 
              contactu@zola.com
            </li>
            
          </ul>
          <img src="https://i.ibb.co/Qfvn4z6/payment.png" alt="" />

        </Right>
      </Wrapper>
    </>
  )
}

export default Footer