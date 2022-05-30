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
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    ${mobile({padding: '10px' })}
`;
export const Content = styled.div`
  padding: 20px;
  background-color: white;
  width: 50%;
  ${mobile({ width: '100%' })}
`;
export const Title = styled.h2`
  font-size: 2rem;
  font-weight:  300;
  margin-bottom: 20px;
  ${mobile({ fontSize: '1.5rem', marginBottom: '15px' })}
`;
export const Form = styled.form`
  width: 100%;
`;
export const InputWrapper = styled.div `
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 10px;
  ${mobile({ flexDirection: 'column' })}
`;
export const Input = styled.input`
  flex: 1;
  min-width: 40%;
  padding: 10px;
  margin: 5px;
  font-size: 0.9rem;
  ${mobile({width: '100%', margin: '10px 0' })}

`;
export const Text = styled.p`
  margin-bottom: 15px;
`;
export const Button = styled.button`
  font-size: .9rem;
  font-weight: 500;
  padding: 10px 100px;
  background-color: teal;
  color: white;
  border: none;
  margin-bottom: 20px;
`;
export const Links = styled.div`  
  p{
    margin-bottom: 10px;
    color: inherit;
    display: block;
    text-decoration: underline;
  }
  `;