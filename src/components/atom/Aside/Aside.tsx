// import React from "react";
import asideStyle from "./aside.module.scss";

function Aside() {
  return (
    <aside className={asideStyle.aside} >
  <h2 className={asideStyle.h2}>DC API</h2> 

  <nav>
    <a href="#">Introduction</a>
    <a href="#">Base URL</a>
    <a href="#">Authentification</a>
    <a href="#">Endpoints</a>
    <a href="#">Format des Données</a>
    <a href="#">Paramètres de Requête</a>
    <a href="#">Codes de Statut HTTP</a>
    <a href="#">Gestion des Erreurs</a>
    <a href="#">Limites et Quotas</a>
    <a href="#">Exemples d'Utilisation</a>
   </nav>
    </aside>
  )
}

export default Aside