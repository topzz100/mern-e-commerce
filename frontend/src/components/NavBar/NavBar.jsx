import { Search, ShoppingCartOutlined } from '@mui/icons-material';
import { Badge } from '@mui/material';
import React from 'react';
// import { selectCart } from '../../redux/cartSlice';
import { Content, InputField, Left, LogoText, Menu, MenuItem, Right, Wrapper } from './NavBar.styles';
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const NavBar = () => {
  // const cart = useSelector(selectCart)
  return <>
    <Wrapper>
      <Content>
        <Left>
          <h4>
            EN
          </h4>
          <InputField>
            <input type="text" placeholder='Search'/>
            <Search style={{fontSize: ".9rem"}}/>
          </InputField>
          
        </Left>
        <LogoText>
          ZOLE.
        </LogoText>
        <Right>
          <Menu>
            <MenuItem>
              REGISTER
            </MenuItem>
            <MenuItem>
              SIGN IN
            </MenuItem>
            <MenuItem style={{marginRight: '20px'}}>
              <Link to= '/cart'>
                <Badge badgeContent='2' color="primary">
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
