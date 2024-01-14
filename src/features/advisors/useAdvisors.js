import { useQuery } from "@tanstack/react-query";
import { getAdvisors, getAdvisor } from "../../services/apiAdvisors";

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

// export function useAdvisor() {
//   const {
//     isLoading,
//     data: advisor,
//     error,
//   } = useQuery({
//     queryKey: ["advisors"],
//     queryFn: getAdvisor,
//   });
//   return { isLoading, error, advisor };
// }
