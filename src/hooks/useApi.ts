import { Api } from "../utils/api";
import { useState, useEffect } from "react";


const token = localStorage.getItem('@App:token')
export const useApi =  (
  url: string
) => {
  const [data, setData] = useState<[]>();
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<Boolean>(true);

  const options = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }

  useEffect(() => {
        Api.get(url, options)
          .then((response) => {
            setData(response.data);
          })
          .catch((err) => {
            setError(err.response.data);
          })
          .finally(() => {
            setLoading(false);
          });
    
  }, []);

  return { data, loading, error };
};
