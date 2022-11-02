import { FormProps } from "react-router-dom";
import { Api } from "../utils/api";

const createUser = async (data: any) => {
  const response = await Api.post("/newUser", data)
    .then((reponse) => reponse.data)
    .catch((err) => err.response.data);
  if (response.user)
    localStorage.setItem("@App:user", JSON.stringify(response.user));
  if (response.token) localStorage.setItem("@App:token", response.token);

  return response;
};
const signin = async (data: any) => {
  const response = await Api.post("/signin", data)
    .then((response) => response.data)
    .catch((err) => err.response.data);
  if (response.user)
    localStorage.setItem("@App:user", JSON.stringify(response.user));
  if (response.token) localStorage.setItem("@App:token", response.token);
  return response;
};

const logout = () => {
  localStorage.removeItem("@App:user");
  localStorage.removeItem("@App:token");
  return;
};

interface update {
  id: string;
  options: Object;
  data: HTMLFormElement;
}

const update = async (data: update) => {
  const response = await Api.patch(
    `/user/update/${data.id}`,
    data.data,
    data.options
  )
    .then((response) => response.data)
    .catch((err) => err.response.data);
  if (response.user)
    localStorage.setItem("@App:user", JSON.stringify(response.user));
  return response;
};

const auth = {
  createUser,
  signin,
  logout,
  update,
};

export default auth;
