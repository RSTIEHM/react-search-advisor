import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { signup as signupApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useSignup() {
  const naviagate = useNavigate();
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: signupApi,
    onSuccess: (user) => {
      console.log(user);
      toast.success(
        "Account has been created! Close this window and check your email for verification link"
      );
      naviagate("/login", { replace: true });
    },
  });

  return { signup, isLoading };
}
