import { useEffect } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const useNavigateWithMessage = (msg, path, delay) => {
  const navigate = useNavigate();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      toast.success(msg);
      navigate(path);
    }, delay);

    return () => clearTimeout(timeoutId); // Cleanup the timeout on component unmount
  }, [msg, path, delay, navigate]);

  // Optionally, you can return the navigate function if needed
  return navigate;
};

export default useNavigateWithMessage;
