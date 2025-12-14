// import React from 'react';
import BaseUrl from "../molecule/baseUrl/BaseUrl";
import Introduction from "../atom/Introduction/Introduction";
import mainstyle from "./main.module.scss";
import Authentification from "../molecule/authentification/ Authentification";
import Endpoints from "../molecule/endpoints/ Endpoints";
import FormatData from "../molecule/formatData/FormatData";
import ParamReq from "../molecule/paramReq/ParamReq";
import CodeStatut from "../molecule/codeStatut/CodeStatut";
import GestionError from "../molecule/gestionError/GestionError";
import LimiteQuota from "../molecule/limiteQuota/LimiteQuota";
import ExempleCode from "../molecule/exempleCode/ExempleCode";
import Footer from "../../../components/layout/Footer/Footer";
function Main() {
  return (
    <main className={mainstyle.main}>
    <Introduction />
    <BaseUrl />
    <Authentification/>
    <Endpoints/>
    <FormatData/>
    <ParamReq/>
    <CodeStatut/>
    <GestionError/>
    <LimiteQuota/>
    <ExempleCode/>
  

   {/* exception */}
    <Footer/>
    


    </main>
  )
}

export default Main