// import React from 'react';
import Introduction from "../atom/Introduction/Introduction";
import mainstyle from "./main.module.scss";

function Main() {
  return (
    <main className={mainstyle.main}>
    <Introduction className={mainstyle.introduction}/>



    </main>
  )
}

export default Main