import { useQuery } from "@tanstack/react-query";
import { getAdvisors } from "../../services/apiAdvisors";

export function useAdvisors() {
  const {
    isLoading,
    data: advisors,
    error,
  } = useQuery({
    queryKey: ["advisors"],
    queryFn: getAdvisors,
  });
  return { isLoading, error, advisors };
}
