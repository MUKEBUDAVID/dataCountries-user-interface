import { forwardRef } from "react";
import CodeConteneur from "../../atom/codeConteneur/CodeConteneur";
import  EndpointStyle from "./ Endpoint.module.scss";

const Endpoints=forwardRef<HTMLElement>((_,ref)=> {
  return (
    <section className={EndpointStyle. Endpoints} id="3" ref={ref}> 

    <h2> <span>📡</span>  <span>Endpoints</span></h2>

<div>
<h3>1. Obtenir Tous les Pays</h3>

    <CodeConteneur langage="Text" code="GET /countries"/>

    <p className={EndpointStyle.fonctionalite}>Retourne la liste complète de tous les pays avec leurs informations de base.</p>

</div>
    

<div>
<h3>2. Obtenir un Pays Spécifique</h3>

    <CodeConteneur langage="Text" code="GET /countries/{code}
"/>

    <p className={EndpointStyle.fonctionalite}>Retourne les informations détaillées d'un pays spécifique.</p>


    <h5>Paramètres de chemin :</h5>
   <ul>
    <li>code(requis) : Code ISO 3166-1 alpha-2 ou alpha-3 du pays (ex: "FR", "DEU")</li>
   </ul>
</div>


<div>
<h3>3. Recherche de Pays</h3>

    <CodeConteneur langage="Text" code="GET /countries/search"/>

    <p className={EndpointStyle.fonctionalite}>Recherche des pays selon différents critères.</p>

</div>




    

    </section>
  )
})

Endpoints.displayName = "Endpoints";


export default  Endpoints