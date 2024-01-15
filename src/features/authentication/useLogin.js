import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logIn as logInApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useLogin() {
  const queryClient = useQueryClient();
  const naviagate = useNavigate();
  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => logInApi({ email, password }),
    onSuccess: (user) => {
      queryClient.setQueriesData(["user"], user);
      naviagate("/advisors", { replace: true });
    },
    onError: (err) => {
      console.log("ERROR", err);
      toast.error("Provided email and/or password are incorrect, try again");
    },
  });
  return { login, isLoading };
}
