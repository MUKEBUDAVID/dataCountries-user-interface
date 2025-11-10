// import React from 'react';
import BaseUrl from "../molecule/baseUrl/BaseUrl";
import Introduction from "../atom/Introduction/Introduction";
import mainstyle from "./main.module.scss";
import Authentification from "../molecule/ Authentification/ Authentification";
import Endpoints from "../molecule/ Endpoints/ Endpoints";
import FormatData from "../molecule/FormatData/FormatData";
import ParamReq from "../molecule/ParamReq/ParamReq";

function Main() {
  return (
    <main className={mainstyle.main}>
    <Introduction />
    <BaseUrl />
    <Authentification/>
    <Endpoints/>
    <FormatData/>
    <ParamReq/>
    


    </main>
  )
}

export default Main