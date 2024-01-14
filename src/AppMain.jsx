import { useState, useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AppLayoutUse from "./ui/AppLayoutUse";
import AppLayoutUse2 from "./ui/AppLayoutUse_2";

import Home from "./pages/Home";
import Advisors from "./pages/Advisors";
import SingleAdvisor from "./pages/SingleAdvisor";
import EditAdvisor from "./pages/EditAdvisor";
import CreateAdvisor from "./pages/CreateAdvisor";
import AdvisorCategory from "./pages/AdvisorCategory";
import Register from "./pages/Register";
import Login from "./pages/Login";
import "./styles/Global.css";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // ADDING A COMMENT
      // staleTime: 60 * 1000
      staleTime: 0,
    },
  },
});

const AppMain = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Home />} />
          <Route element={<AppLayoutUse2 />}>
            <Route path="/advisors" element={<Advisors />} />
          </Route>
          <Route element={<AppLayoutUse />}>
            <Route path="/advisors/:id" element={<SingleAdvisor />} />
            <Route path="/advisors/create" element={<CreateAdvisor />} />
            <Route path="/advisors/edit/:id" element={<EditAdvisor />} />
          </Route>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
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

export default AppMain;

{
  /* <GlobalStyles />
<BrowserRouter>
  <Routes>
    <Route element={<AppLayout />}>
      <Route index  element={<Navigate replace to='dashboard' />} />
      <Route path="dashboard"  element={<Dashboard />} />
      <Route path="bookings"  element={<Bookings />} />
      <Route path="cabins"  element={<Cabins />} />
      <Route path="users"  element={<Users />} />
      <Route path="settings"  element={<Settings />} />
      <Route path="account"  element={<Account />} />
    </Route>
    <Route path="login"  element={<Login />} />
    <Route path="*"  element={<PageNotFound />} />
  </Routes>
</BrowserRouter> */
}
