import { Api } from "../utils/api";

const createUser = async (data: string) => {
  try {
    const response = await Api.post(data)
      .then((response) => response.data)
      .catch((err) => err.response.data);
    console.log(response)
    //   if(response) localStorage.setItem('@App:user', JSON.stringify)

  } catch (err) {
    console.log(err);
  }
};

const auth = {
    createUser
}

export default auth
