import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import useAllCases from "../services/useAllCases";

import Header from "../components/Header";
import CaseList from "./case/CaseList";
import RegCase from "./case/create/RegCase";
import ViewCase from "./case/open/ViewCase";
import ProcessImage from "./processfile/ProcessImage"


const AppLayout = (props) => {

  const assignWhenBackEndIsGien = useAllCases();

  // const cases = JSON.parse(localStorage.getItem("cases"));
  
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/" element={<CaseList allCases={assignWhenBackEndIsGien} />} />
        <Route exact path="/regcase" element={<RegCase/>} />
        <Route exact path="/case" element={<ViewCase />} />
        <Route exact path="/processing" element={<ProcessImage/>} />
      </Routes>

      {/* <Route path="/process" element={} /> */}
    </div>
  );
};
export default AppLayout;
