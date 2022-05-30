import styled from 'styled-components'
import { mobile } from '../../responsive';

export const Wrapper = styled.div`
  margin-bottom: 30px;
`;
export const Heading = styled.h3`
  margin: 30px 20px;
  font-size: 2rem;
`;
export const Filter = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  ${mobile({flexDirection: 'column'})}
`;
export const Left = styled.div`
  display: flex;
  align-items: center;
  ${mobile({ marginBottom: '15px'})}
`;
export const Right = styled.div`
display: flex;
align-items: center;
`;
export const Title = styled.h4`
  font-size: 1.1rem;
`;
export const Select = styled.select`
  padding: 10px;
  margin-left: 15px;
  ${mobile({ marginLeft: '18px'})}
`;
export const Option = styled.option`
  padding: 10px;
  ${mobile({ padding: '0'})}
`;