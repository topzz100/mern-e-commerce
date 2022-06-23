import styled from 'styled-components'
import { mobile } from '../../responsive';

export const Wrpaper = styled.div`
  padding: 20px;
  display: flex;
  ${mobile({ flexDirection: 'column', padding: '5px' })}
`;
export const ImageContainer = styled.div`
  flex: 1;
  width: 100%;
  height: 90vh;
  padding: 20px;
  ${mobile({ height : '40vh'})}
`;
export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export const InfoContainer = styled.div`
  flex: 1;
  width: 100%;
  /* font-weight: 300; */
  padding: 20px;
`;
export const Title = styled.h2`
  font-size: 1.7rem;
  margin-bottom: 20px;
  font-weight: 400;
  
`;
export const Text = styled.p`
  margin-bottom: 25px;
`;
export const PriceTag = styled.p`
  font-size: 1.8rem;
  margin-bottom: 20px;
  font-weight: 300;
  ${mobile({ marginBottom: '25px'})}
`;
export const Filter = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 25px;
  
`;
export const ColorContainer = styled.div`
  margin-right: 30px;
  display: flex;
  align-items: center;
`;
export const ColorTitle = styled.p`
  font-size: 1.2rem;
  margin-right: 5px;
`;
export const ColorOption = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 10px;
  background-color: ${props => props.color};
`;
export const SelectCon = styled.div`
  display: flex;
  align-items: center;
`;
export const SelectTitle = styled.p`
  font-size: 1.1rem;
  margin-right: 5px;
`;
export const Select = styled.select`
  padding: 8px 10px;
`;
export const Option = styled.option`
  padding: 10px;
`;
export const AddContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const PlusMinus = styled.div`
  display: flex;
  align-items: center;
  margin-right: 30px;
`;
export const Amount = styled.span`
  height: 30px;
  width: 30px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin: 0 5px;
  font-weight: 500;
`;
export const Button = styled.button`
  padding: 12px;
  background-color: white;
  border: 1px solid black;
  transition: 0.3s ease-in-out;
  :hover{ 
    font-weight: 600;
  }
`;

