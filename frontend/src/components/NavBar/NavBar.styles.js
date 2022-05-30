import styled from "styled-components";
import { mobile } from "../../responsive";

export const Wrapper = styled.div`
  
  height: 60px;
   ${mobile({ height: '50px'})}
  /* overflow: hidden; */
`;
export const Content = styled.div`
  padding: 0 50px;
   height: 100%;
  width: 100% ;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: '10px 0'})}
`;
export const Left = styled.div`
 flex: 1;
 /* width: 100%; */
 display: flex;
 align-items: center;
 h4{
   font-size: 1rem;
   font-weight: 500;
   ${mobile({ display: "none" })}
 }
`;
export const LogoText = styled.h3`
  flex: 1;
  /* width: 100%;
  display: flex;
  align-items: center;
  justify-content: center; */
  text-align: center;
  font-size: 1.8rem;
  font-weight: 800;
  ${mobile({ fontsize: '1.5rem' })}
`;
export const Right = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: "2" })}
`;
export const InputField = styled.div`
  display: flex;
  align-items: center;
  height: 30px;
  border: 1px solid gray;
  margin-left: 20px;
  padding: 5px;
  color: gray;
  input{
    border: none;
    outline: none;
    width: 100%;
  }
`;
export const Menu = styled.div`
   display: flex;
  align-items: center;
 
`;
export const MenuItem = styled.h4`
  font-weight: 500;
  font-size: .9rem;
  margin-left: 20px;
  ${mobile({ marginLeft: '10px', fontSize: '.8rem' })} 
`;

