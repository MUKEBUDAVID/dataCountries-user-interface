import {forwardRef} from "react";
import introdctionStyle from "./introduction.module.scss";


const Introduction=forwardRef<HTMLElement>((_,ref)=> {

  return (
    <section className={introdctionStyle.introduction} id="0" ref={ref} >
      <h2> <span >&#127757;</span> <span>Introduction</span></h2>


      <p>L'API DataCountrie fournit un accès complet aux données géographiques, démographiques et politiques de tous les pays du monde. Les données sont retournées au format JSON standardisé et sont mises à jour régulièrement.</p>

 <h3>Fonctionnalités Principales</h3>

 <ul>
 <li>Informations détaillées sur tous les pays reconnus</li> 
<li>Données en temps réel sur les devises, langues et capitales</li>
<li>Support multilingue via les traductions intégrées</li>
<li>Recherche et filtrage avancés</li>
<li>Format de réponse cohérent et bien documenté</li>
</ul>


    </section>
  )
})

Introduction.displayName = "Introduction";

export default Introduction