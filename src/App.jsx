import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import ProtectedRoutes from "./ui/ProtectedRoutes";
import AppLayoutUse from "./ui/AppLayoutUse";
import AppLayoutUse2 from "./ui/AppLayoutUse_2";
import AppLayoutUse3 from "./ui/AppLayoutUse_3";

import Home from "./pages/Home";
import Advisors from "./pages/Advisors";
import SingleAdvisor from "./pages/SingleAdvisor";
import EditAdvisor from "./pages/EditAdvisor";
import CreateAdvisor from "./pages/CreateAdvisor";
import Register from "./pages/Register";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound"
import "./styles/global.css";
import { Toaster } from "react-hot-toast";



// TODOS 

  // 1: Fix Buttons in Single Advisor
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // ADDING A COMMENT
      // staleTime: 60 * 1000
      staleTime: 0,
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route element={<AppLayoutUse2 />}>
            <Route path="/advisors" element={<Advisors />} />
          </Route>

          <Route element={<AppLayoutUse3 />}>
            <Route path="/advisors/:id" element={<SingleAdvisor />} />
          </Route>


          <Route element={<ProtectedRoutes><AppLayoutUse /></ProtectedRoutes>}>
              <Route path="/advisors/create" element={<CreateAdvisor />} />
              <Route path="/advisors/edit/:id" element={<EditAdvisor />} />
          </Route>


          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="*"  element={<PageNotFound />} />
        </Routes>
        
      </BrowserRouter>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "var(--color-grey-0)",
            color: "var(--color-grey-700)",
          },
        }}
      />
    </QueryClientProvider>
  );
};

export default App;


