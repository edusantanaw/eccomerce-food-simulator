import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../slice/userSlice";

export const useAuth = () => {
  const user = useSelector(selectUser);
  const [auth, setAuth] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    user ? 
    setAuth(true) : setAuth(false);

    setLoading(false);
  }, [user]);

  return { auth, loading };
};
