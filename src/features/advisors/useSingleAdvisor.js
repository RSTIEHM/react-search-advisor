import supabase from "../../services/supaBase";
import { useQuery } from "@tanstack/react-query";

async function fetchAdvisor({ queryKey }) {
  const id = queryKey[1];
  const { data, error } = await supabase.from("advisors").select().eq("id", id);
  if (error) {
    console.log(error);
    throw new Error("Could not load Data");
  }
  return data;
}

export const useSingleAdvisorData = (id) => {
  return useQuery(["advisor", id], fetchAdvisor);
};

// export function useAdvisor() {
//     const {
//       isLoading,
//       data: advisor,
//       error,
//     } = useQuery({
//       queryKey: ["advisors"],
//       queryFn: getAdvisor,
//     });
//     return { isLoading, error, advisor };
//   }
