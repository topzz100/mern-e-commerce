import styled from 'styled-components'
import { mobile } from '../../responsive';

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    ${mobile({padding: '10px'})}
`;

export const Content = styled.div`
  padding: 20px;
  background-color: white;
  width: 25%;
  ${mobile({width: '100%'})}
`;
export const Title = styled.h2`
  font-size: 1.8rem;
  font-weight:  300;
  margin-bottom: 10px;
`;
export const Form = styled.form`
  width: 100%;
`;
export const InputWrapper = styled.div `
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-bottom: 10px;
`;
export const Input = styled.input`
  width: 100%;
  padding: 10px;
  /* margin: 5px; */
  margin: 10px 0;
  font-size: 0.9rem;
  

`;
export const Links = styled.div`  
  p{
    margin-bottom: 10px;
    color: inherit;
    display: block;
    text-decoration: underline;
  }
  `;

export const Button = styled.button`
  font-size: .9rem;
  font-weight: 500;
  padding: 10px 50px;
  background-color: teal;
  color: white;
  border: none;
  margin-bottom: 20px;
`;