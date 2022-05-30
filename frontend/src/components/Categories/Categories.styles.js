import styled from 'styled-components'
import { mobile } from '../../responsive';

export const Wrapper = styled.div`
  padding: 20px;
  display: flex;
  ${mobile({ flexDirection: 'column', padding: '10px', margin: '20px 10px 50px'})}
`;