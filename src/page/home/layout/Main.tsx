// import React from 'react';
import BaseUrl from "../molecule/baseUrl/BaseUrl";
import Introduction from "../atom/Introduction/Introduction";
import mainstyle from "./main.module.scss";

function Main() {
  return (
    <main className={mainstyle.main}>
    <Introduction />
    <BaseUrl />


    </main>
  )
}

export default Main