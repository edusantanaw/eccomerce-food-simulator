import { Api } from "../utils/api";

const token = localStorage.getItem("@App:token");

const newProduct = async (data: any) => {
  const response = await Api.post("/product/register", data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => response.data)
    .catch((err) => err.response.data);

  return response;
};

const updateProduct = async (data: any) => {
  const id = data.get("id");
  const response = await Api.patch(`/product/edit/${id}`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => response.data)
    .catch((err) => err.response.data);
  console.log(response);
  return response;
};

const order = async (data: any) => {
  const response = await Api.post("/order/new", data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => response.data)
    .catch((error) => error.response.data);

  console.log(response);
  return response;
};

const product = {
  newProduct,
  updateProduct,
  order,
};

export default product;
