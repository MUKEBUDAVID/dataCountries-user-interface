// import React from 'react'
import CodeConteneur from "../../atom/codeConteneur/CodeConteneur"
import BaseUrlStyle from "./baseUrl.module.scss"

function BaseUrl() {
  return (
    <section className={BaseUrlStyle.BaseUrl}>

      <h2><span>🔗</span> <span>Base URL</span></h2>


      <CodeConteneur langage="Text" code="https://api.datacountrie.com/v1"/>

      <p>Tous les endpoints sont relatifs à cette URL de base.</p>

    </section>
  )
}

export default BaseUrl