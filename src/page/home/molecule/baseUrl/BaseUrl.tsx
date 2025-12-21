
import {forwardRef} from "react";
import CodeConteneur from "../../atom/codeConteneur/CodeConteneur";
import BaseUrlStyle from "./baseUrl.module.scss"


 const BaseUrl=forwardRef<HTMLElement>((_,ref)=> {
  
  return (
    <section className={BaseUrlStyle.BaseUrl} id="0" ref={ref}>

      <h2><span>🔗</span> <span>Base URL</span></h2>


      <CodeConteneur langage="Text" code="https://api.datacountrie.com/v1"/>

      <p>Tous les endpoints sont relatifs à cette URL de base.</p>

    </section>
  )
})

 BaseUrl.displayName="BaseUrl"

export default BaseUrl