import axios from 'axios'

const API_URL = '/api/products/'

// Register user
// const getProducts = async (cat) => {
//   const response =  cat? await axios.get(API_URL + `category=${cat}`):
//                           await axios.get(API_URL)

//   // if (response.data) {
//   //   sessionStorage.setItem('user', JSON.stringify(response.data))
//   // }

//   return response.data 
// }
const getProducts = async (cat) => {
  const response = await axios.get(
          cat
            ? API_URL + `?category=${cat}`
            : API_URL
        );

  // if (response.data) {
  //   sessionStorage.setItem('user', JSON.stringify(response.data))
  // }

  return response.data 
}
 


const productService = {
  getProducts,
  
}

export default productService
