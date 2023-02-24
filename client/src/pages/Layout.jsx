import React,{useContext}from "react";
import Navbar from "../components/navbar/Navbar";
import { DarkModeContext } from "../context/darkModeContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const { darkMode } = useContext(DarkModeContext);
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div className={`theme-${darkMode ? "dark" : "light"}`}>
        <Navbar />
        <div style={{ flex: 6 }}>
          <Outlet />
        </div>
      </div>
    </QueryClientProvider>
  );
};
export default Layout;
