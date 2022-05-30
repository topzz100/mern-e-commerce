
import styled from "styled-components";
import { mobile } from "../../responsive";

export const Wrapper = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  background-color: aliceblue;
  ${mobile({ flexDirection: 'column', padding: '10px'})}
`;
export const Left = styled.div`
  padding: 20px;
  flex: 1;
  width: 100%;
  h2{
    font-size: 2.5rem;
    margin-bottom: 12px;
  }
  p{
    margin-bottom: 15px;
    font-size: .9rem;
  }
  ul{
    display: flex;
    list-style: none;
    li{
      width: 40px;
      height: 40px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: ${props => props.color};
      margin-right: 7px;
    }
  }
`;
export const Center = styled.div`
   padding: 20px;
   flex: 1;
   width:100%;
   display: flex;
   flex-direction: column;
   ${mobile({ display: 'none' })}
   h3{
     margin-bottom: 30px;
   }
   .links{
     
     display: flex;
     justify-content: space-between;
     ul{
       list-style: none;
       /* margin-right: 35px; */
       li{
         font-size: 0.9rem;
         margin-bottom: 10px;
         font-weight: 400;
         cursor: pointer;
       }
     }
   }
`;
export const Right = styled.div`
  padding: 20px;
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  h3{
    margin-bottom: 30px;
  }
  ul{
    list-style: none;
    li{
      font-size: 0.9rem;
      margin-bottom: 20px;
      display: flex;
      align-items: center;
      
    }
  }
  img{
    width: 200px;
  }
`;
