import { Search, ShoppingCartOutlined } from '@mui/icons-material';
import { Badge } from '@mui/material';
import React from 'react';
import { Content, InputField, Left, LogoText, Menu, MenuItem, Right, Wrapper } from './NavBar.styles';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { logout } from '../../redux/features/auth/authSlice';

const NavBar = () => {
   const quantity = useSelector(state => state.cart.quantity)
   const dispatch = useDispatch()


   const handleLogOut = () => {
    dispatch(logout())
     sessionStorage.removeItem('user')
   }
  return <>
    <Wrapper>
      <Content>
        <Left>
          <h4>
            EN
          </h4>
          <InputField>
            <input 
            type="text" 
            placeholder='Search'/>
            <Search style={{fontSize: ".9rem"}}/>
          </InputField>
          
        </Left>
        <LogoText>
          <Link to={'/'}>
            ZOLE.
          </Link>
        </LogoText>
        <Right>
          <Menu>
            <MenuItem 
            onClick={handleLogOut}>
              LOG OUT
            </MenuItem>
            <MenuItem style={{marginRight: '20px'}}>
              <Link to= '/cart'>
                <Badge badgeContent={quantity} color="primary">
                  <ShoppingCartOutlined/>
                </Badge>
              </Link>
            </MenuItem>
            
          </Menu>

        </Right>
      </Content>
      
    </Wrapper>
  </>
    
 
};

export default NavBar;
