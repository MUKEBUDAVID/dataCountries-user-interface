// import React from "react";
import { useState } from "react";
import asideStyle from "./aside.module.scss";
import {type TypeUseRefSection } from "../../../types/scroll.types";
import { useScrollContext } from "../../../hooks/useScrollContext";


function Aside() {

  const [activeSection, setActiveSection] = useState("Introduction");

const listLien:TypeUseRefSection[]=["introduction","baseUrl","authentification","endpoints","formatData","paramReq","codeStatut","gestionError","limiteQuota","exempleCode"];

const sectionRefs= useScrollContext() ;

 // Fonction pour convertir l'affichage (optionnel)
 const formatDisplayName = (id:TypeUseRefSection): string => {
  const displayMap = {
    introduction: "Introduction",
    baseUrl: "Base URL",
    authentification: "Authentification",
    endpoints: "Endpoints",
    formatData: "Format des Données",
    paramReq: "Paramètres de Requête",
    codeStatut: "Codes de Statut HTTP",
    gestionError: "Gestion des Erreurs",
    limiteQuota: "Limites et Quotas",
    exempleCode: "Exemples d'Utilisation"
  };
  return displayMap[id];
};

const scrollToSection = (sectionId: TypeUseRefSection) => {
  const element = sectionRefs[sectionId].current;
  
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
    setActiveSection(sectionId);
  } else {
    console.error(`Élément ${sectionId} non trouvé`);
  }
};



  return (
    <aside className={asideStyle.aside} >
  <h2 className={asideStyle.h2}>DC API</h2> 

  
    <ul className={asideStyle.nav}>
     {listLien.map((lien,index)=>(
        <li key={index} onClick={()=>scrollToSection(lien as TypeUseRefSection)} className={`${asideStyle.navLink} ${activeSection===lien? asideStyle.active:""}`}  >
          
        {formatDisplayName(lien as TypeUseRefSection)}
          
        </li>
      ))}

    </ul>
    
 
   
    </aside>
  )
}

export default Aside