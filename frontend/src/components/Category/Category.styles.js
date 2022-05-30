
import styled from 'styled-components'
import { mobile } from '../../responsive';

export const Wrapper = styled.div`
  flex: 1;
  width: 100%;
  height: 500px;
  margin: 10px;
  position: relative;
  
  ${mobile({ margin: '0' })}
`;
export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({ height: '30vh' })}
`;
export const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Title = styled.h2`
  color: white;
  font-size: 1.8rem;
  margin-bottom: 20px;
`;
export const Button = styled.button`
border: none;
padding: 10px;
font-weight: 600;

`;