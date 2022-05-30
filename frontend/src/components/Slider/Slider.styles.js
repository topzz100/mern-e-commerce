import styled from "styled-components";
import { mobile } from "../../responsive";

export const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  position: relative;
  display: flex;
  overflow: hidden; 
  ${mobile({ display: "none" })}
  
`;

export const Arrow= styled.div`
 height:50px;
 width: 50px;
 border-radius: 50%;
 background-color: white;
 display: flex;
 justify-content: center;
 align-items: center;
 top: 0;
 bottom: 0;
 margin: auto ;
 position: absolute; 
 left : ${props => props.position === 'left' && '0'};
 right : ${props => props.position === 'right' && '0'};
 opacity: 0.7;
 z-index: 2;
 cursor: pointer;
`;
export const Slide = styled.div`
  /* width: 100%;   */
  height: 100%;
  display: flex;
   /* display: flex;  */
    transform: translateX(${(props) => props.indexVal * -100}vw);
`;
export const Content= styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${props => props.bg}; 
`;

export const ImageContainer = styled.div`
  height: 100%;
  width: 100%;
  padding: 10px;
  flex: 1;
`;
export const Image= styled.img`
  /* object-fit: cover; */
  height: 80%;
  /* width: 100%; */

  /* width: 100%; */
  
  
  
`;
export const Right= styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 50px;
`;
export const Heading= styled.h1`
  margin-bottom: 30px;
   text-transform: uppercase;
   font-size: 3.7rem;
`;
export const Text= styled.p`
  text-transform: uppercase;
  margin-bottom: 30px;
  font-size: 1.4rem;
  font-weight: 500;
`;
export const Button= styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 120px;
  border: 1px solid black;
  background: transparent;
  font-size: 1.1rem;
  font-weight: 600;
`;