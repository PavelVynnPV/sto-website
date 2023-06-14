import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LinksBar, Navbar } from "./components/Navbar";
import { Main } from "./components/Main";
import { Contacts, EngineFix, HodovayaFix, ToAutoFix, ElectricFix, ConditionerFix, ConditionerUsaFix, RozvalFix } from "./components/SimpleLinks";
import {Footer} from "./components/Footer";
import { CommentForm } from "./components/Comments";

const AppRoutes = ({href}) => {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <LinksBar href={href}/>
      <Routes>
        <Route exact path="/" element={<Main/>}/>
        <Route exact path="/contacts" element={<Contacts/>}/>
        <Route exact path="/enginefix" element={<EngineFix/>}/>
        <Route exact path="/hodovaya" element={<HodovayaFix/>}/>
        <Route exact path="/toautofix" element={<ToAutoFix/>}/>
        <Route exact path="/electricfix" element={<ElectricFix/>}/>
        <Route exact path="/conditionerfix" element={<ConditionerFix/>}/>
        <Route exact path="/conditionerusafix" element={<ConditionerUsaFix/>}/>
        <Route exact path="/rozvalfix" element={<RozvalFix/>}/>
        <Route exact path="/comments" element={<CommentForm/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  );
};

export default AppRoutes;
