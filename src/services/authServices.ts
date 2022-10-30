import { Api } from "../utils/api";

const createUser = async (data: any) => {
  const response = await Api.post("/newUser", data)
    .then((reponse) => reponse.data)
    .catch((err) => err.response.data);
  if(response.user) localStorage.setItem('@App:user', JSON.stringify(response.user))
  if(response.token) localStorage.setItem('@App:token', JSON.stringify(response.token))

  return response;
};
const signin = async (data: any) => {
  const response = await Api.post("/signin", data)
    .then((response) => response.data)
    .catch((err) => err.response.data);
    if(response.user) localStorage.setItem('@App:user', JSON.stringify(response.user))
    if(response.token) localStorage.setItem('@App:token', JSON.stringify(response.token))
    return response
};


const auth = {
  createUser,
  signin
};

export default auth;
