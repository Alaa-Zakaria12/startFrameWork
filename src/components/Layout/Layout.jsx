import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

export default function Layout() {
  const location = useLocation();

  useEffect(() => {
    let page = location.pathname.replace("/", "") || "home";
    page = page.charAt(0).toUpperCase() + page.slice(1);
    document.title = `Start Framework | ${page}`;
  }, [location]);

  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}
