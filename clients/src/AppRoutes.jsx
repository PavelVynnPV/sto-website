import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LinksBar, Navbar } from "./components/Navbar";
import { Main } from "./components/Main";
import {
  Contacts,
  TehService,
  OtherServices,
  AutoConditioner,
  TireFitting,
  Rozval,
} from "./components/SimpleLinks";
import { Footer } from "./components/Footer";
import { CommentForm } from "./components/Comments";
import React, { useState } from "react";
import Services from "./components/SimpleLinks/Services";

const AppRoutes = ({ href }) => {
  const [windowLocHref, setWindowLocHref] = useState("");
  const [loc, setLoc] = useState("http://localhost:3000/");
  let paths = loc.pathname?.split("/").filter((path) => path !== "");

  return (
    <>
      <BrowserRouter>
      {/* <ScrollToTop/> */}
        
        <Navbar />
        <LinksBar
          href={href}
          setWindowLocHref={setWindowLocHref}
          windowLocHref={windowLocHref}
          setLoc={setLoc}
        />
        <Routes>
          <Route exact path="/sto-website" element={<Main />} />
          <Route exact path="/contacts" element={<Contacts />} />
          <Route exact path="/tehservice" element={<TehService />} />
          <Route exact path="/otherservices" element={<OtherServices />} />
          <Route exact path="/comments" element={<CommentForm />} />
          <Route exact path="/autoconditioner" element={<AutoConditioner />} />
          <Route exact path="/tirefitting" element={<TireFitting />} />
          <Route exact path="/rozval" element={<Rozval />} />
          <Route
            exact
            path={`/${paths}`}
            element={
              paths !== "/allservices" ? (
                <Services />
              ) : paths !== "/allservices" ? (
                <Services />
              ) : null
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default AppRoutes;
