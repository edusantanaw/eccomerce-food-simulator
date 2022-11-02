import { Api } from "../utils/api";
import { useState, useEffect } from "react";

export const useApi =  (
  url: string,
  options?: object,
) => {
  const [data, setData] = useState<Object>({});
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<Boolean>(true);

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
