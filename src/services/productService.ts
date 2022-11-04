import { Api } from "../utils/api";

const token = localStorage.getItem('@App:token')

const newProduct = async (data: any) => {
    console.log(data)
  const response = await Api.post("/product/register",data, {
        headers: {
            Authorization: `Bearer ${token}`
        }
  })
    .then((response) => response.data)
    .catch((err) => err.response.data);

  return response;
};


const product = {
  newProduct
};


export default product;
