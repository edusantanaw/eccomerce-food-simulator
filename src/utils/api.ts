import axios from 'axios'

export const Api = axios.create({
    baseURL: 'http://localhost:5000'
})

interface req {
    method?: string;
    data?: object;
    token?: string | null;
}

interface config {
    method?:string;
    data?: any,
    headers?: any;
    body?: Object;
    
}

export const requestConfig = ({method, data, token}: req) => {
    let config: config 
    
    if (method === "DELETE" || data === null) {
      config = {
        method: method,
        headers: {},
      };
    } else {
      config = {
        method: method,
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      };
    }
  
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  
    return config;
  };
  