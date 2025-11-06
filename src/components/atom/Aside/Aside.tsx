// import React from "react";
import { useState, type CSSProperties, type MouseEvent } from "react";
import asideStyle from "./aside.module.scss";

type activeType=Array<CSSProperties|undefined>;


function Aside() {

const [activeStyle ,setActiveStyle]=useState<activeType>([{backgroundColor:"rgb(28,29,52)"},{},{},{},{},{},{},{},{},{}]);

const changeStyle = (e: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>) => {
  e.stopPropagation();
  e.preventDefault();
  
  const temp = e.currentTarget.href.split("#");
  const lienNumber = Number(temp[1]);

  

  // Utilisez la fonction de mise à jour pour garantir l'état le plus récent
  setActiveStyle(prevStyles => {
      // Le .map() va maintenant parcourir tous les styles existants (prevStyles)
      return prevStyles.map((data, index) => {
          if (index === lienNumber) {
              // Si c'est l'élément cliqué : on retourne le style ACTIF
              return { backgroundColor: "rgb(28,29,52)" };
          } else {
              // Si ce n'est PAS l'élément cliqué : on retourne le style INACTIF
              // Pour votre cas, c'est l'objet vide {}
              return {}; 
          }
      });
  });
};

  return (
    <aside className={asideStyle.aside} >
  <h2 className={asideStyle.h2}>DC API</h2> 

  <nav className={asideStyle.nav}>
    <a href="#0" onClick={changeStyle} style={activeStyle[0]} >Introduction</a>
    <a href="#1" onClick={changeStyle} style={activeStyle[1]}>Base URL</a>
    <a href="#2" onClick={changeStyle} style={activeStyle[2]}>Authentification</a>
    <a href="#3" onClick={changeStyle} style={activeStyle[3]}>Endpoints</a>
    <a href="#4" onClick={changeStyle} style={activeStyle[4]}>Format des Données</a>
    <a href="#5" onClick={changeStyle} style={activeStyle[5]}>Paramètres de Requête</a>
    <a href="#6" onClick={changeStyle} style={activeStyle[6]}>Codes de Statut HTTP</a>
    <a href="#7" onClick={changeStyle} style={activeStyle[7]}>Gestion des Erreurs</a>
    <a href="#8" onClick={changeStyle} style={activeStyle[8]}>Limites et Quotas</a>
    <a href="#9"onClick={changeStyle} style={activeStyle[9]}>Exemples d'Utilisation</a>
   </nav>
   
    </aside>
  )
}

export default Aside