import styled from "styled-components";
import { mobile } from "../../responsive";

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  justify-content: space-around;
   ${mobile({ padding: '20px' })}
`;