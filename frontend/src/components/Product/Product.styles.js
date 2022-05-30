import styled from "styled-components";
import { mobile } from "../../responsive";

export const Wrapper = styled.div`
  width: 280px;
  height: 350px;
  margin: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(250, 245, 238);
  position: relative;
  ${mobile({ width: '100%'})}
  /* flex: 1; */
`;
export const Image = styled.img`
  /* width: 100%; */
  height: 70%;
  /* object-fit: cover; */
`;
export const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.5s linear;
  :hover{
    opacity: 1;
  }
`;
export const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  justify-content: center;
  align-items: center;
  display: flex;
  margin: 5px;
  transition: all .5s; 
  :hover{
    transform: scale(1.1);
  }
`;
export const Circle = styled.div`
  
`;