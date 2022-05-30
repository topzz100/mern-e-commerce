import styled from 'styled-components'
import { mobile } from '../../responsive';

export const Wrapper = styled.div`
  padding: 20px;
`;
export const Title = styled.h2`
  width: 100%;
  text-align: center;
  margin: 20px 0;
  font-size: 2.2rem;
  font-weight: 400;
`;
export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;
export const Button = styled.button`
  padding: 8px;
  background-color: ${props => props.bgcolor};
  color: ${props => props.color};
  font-weight: 500;

`;
export const TopLink = styled.div`
  a{
    color: inherit;
    margin-right: 10px;
    ${mobile({ display: 'none'})}
  }
`;
export const Content = styled.div`
  display: flex;
  width: 100%;
  ${mobile({ flexDirection: 'column'})}
`;
export const Left = styled.div`
  flex: 9;
`;

export const SingleProduct = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 0;
  ${mobile({ flexDirection: 'column', alignItems: 'flexStart'})}

`;
export const ImageContainer = styled.div`
  width: 180px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${mobile({ width: '100%', height: '250px'})}
`;
export const Image= styled.img`
  width: 95%;
  height: 95%;
  object-fit: cover;
`;
export const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 15px;
  align-items: center;
  width: 100%;
  ${mobile({ flexDirection: 'column', alignItems: 'flex-start' })}
`;
export const InfoContent = styled.div`
  
`;
export const Info = styled.div`
  display: flex;
  margin-bottom: 20px;
`;
export const InfoTitle = styled.h4`
  /* margin-bottom: 15px; */
`;
export const InfoText = styled.span`
  margin-left: 10px; 
`;
export const Color = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => props.color};
  margin-bottom: 20px;
`;
export const InfoPrice = styled.div`

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
export const PriceTag = styled.p`
  font-size: 1.8rem;
  margin-top: 20px;
  font-weight: 300;
`;
export const Right = styled.div`
  flex: 3;
  border: 1px solid black;
  padding: 20px;
  border-radius: 10px;
`;
export const SumHeader = styled.h2`
  text-align: center;
  font-weight: 400;
  font-size: 2.1rem;
  margin-bottom: 25px;
`;
export const TotalBox = styled.div`
  width: 100%;
`;
export const SumInfo = styled.div`
  width: 100%;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;

`;
export const SumTitle = styled.span`
  
`;
export const SumTotal = styled.span`
  font-size: 1.5rem;
  font-weight: 500;
`;
export const SumButton = styled.button`
  width: 100%;
  background-color: black;
  color: white;
  padding: 8px;
   /* display: flex;
  justify-content: center;
  align-items: center; */
`;