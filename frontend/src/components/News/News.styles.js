import styled from 'styled-components';
import { mobile } from '../../responsive';

export const Wrapper = styled.div`
  width: 100%;
  padding: 100px 50px;
  display:flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  ${mobile({ padding: '100px 10px' })} 
`;
export const Title = styled.h2`
  font-size: 3.5rem;
  margin-bottom: 15px;
`;
export const Text = styled.p`
  margin-bottom: 25px;
  font-size: 1.6rem;
  font-size: 300;
  ${mobile({ textAlign: 'center' })} 
`;
export const InputContainer = styled.div`
  width: 60%;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${mobile({ width: '95%' })} 
  /* border: 1px solid black; */
 
`;
export const Input = styled.input`
   flex: 8;
  height:100%;
  width: 100%;
  padding: 10px;
  border: 1px solid black;
  outline: none;
`;
export const Button = styled.button`
  flex: 2;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: green;

`;