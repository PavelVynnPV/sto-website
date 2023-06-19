import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LinksBar, Navbar } from "./components/Navbar";
import { Main } from "./components/Main";
import { Contacts, HodovayaFix, AutoDiagnostic, TehService, OtherServices, AutoConditioner, TireFitting, Rozval } from "./components/SimpleLinks";
import {Footer} from "./components/Footer";
import { CommentForm } from "./components/Comments";

const AppRoutes = ({href}) => {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <LinksBar href={href}/>
      <Routes>
        <Route exact path="/sto-website" element={<Main/>}/>
        <Route exact path="/contacts" element={<Contacts/>}/>
        <Route exact path="/hodovaya" element={<HodovayaFix/>}/>
        <Route exact path="/autodiagnostic" element={<AutoDiagnostic/>}/>
        <Route exact path="/tehservice" element={<TehService/>}/>
        <Route exact path="/otherservices" element={<OtherServices/>}/>
        <Route exact path="/comments" element={<CommentForm/>}/>
        <Route exact path="/autoconditioner" element={<AutoConditioner/>}/>
        <Route exact path="/tirefitting" element={<TireFitting/>}/>
        <Route exact path="/rozval" element={<Rozval/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  );
};

export default AppRoutes;
