import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LinksBar, Navbar } from "./components/Navbar";
import { Main } from "./components/Main";
import { Contacts, Electric, HodovayaFix, AutoDiagnostic, TehService, OtherServices } from "./components/SimpleLinks";
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
        <Route exact path="/electric" element={<Electric/>}/>
        <Route exact path="/hodovaya" element={<HodovayaFix/>}/>
        <Route exact path="/autodiagnostic" element={<AutoDiagnostic/>}/>
        <Route exact path="/tehservice" element={<TehService/>}/>
        <Route exact path="/otherservices" element={<OtherServices/>}/>
        <Route exact path="/comments" element={<CommentForm/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  );
};

export default AppRoutes;
