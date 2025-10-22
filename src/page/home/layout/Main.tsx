// import React from 'react';
import BaseUrl from "../molecule/baseUrl/BaseUrl";
import Introduction from "../atom/Introduction/Introduction";
import mainstyle from "./main.module.scss";
import Authentification from "../molecule/ Authentification/ Authentification";

function Main() {
  return (
    <main className={mainstyle.main}>
    <Introduction />
    <BaseUrl />
    <Authentification/>
    


    </main>
  )
}

export default Main