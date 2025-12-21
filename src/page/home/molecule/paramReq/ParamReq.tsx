import { forwardRef } from "react";
import paramReqStyle from "./paramReq.module.scss"


const ParamReq=forwardRef<HTMLElement>((_,ref)=> {
  return (
    <section className={paramReqStyle.paramReq} id="5" ref={ref}>
        <h2><span>🔍</span> <span>Paramètres de Requête</span></h2>


<div>
<h3>Paramètres pour <span className={paramReqStyle.path}>/Countries</span></h3>


<ul className={paramReqStyle.liste}>
  <li><span className={paramReqStyle.path}>fields</span> (string) : Champs spécifiques à inclure (ex: "name,capital,population")

</li>
  <li><span className={paramReqStyle.path}>limite</span> (number) : Nombre de résultats (1-250, défaut: 50)</li>
  <li><span className={paramReqStyle.path}>page</span> (number) : Numéro de page (défaut:1)</li>
  <li><span className={paramReqStyle.path}>sortBy</span> (string) : Champ de tri (ex: "name.common", "population")</li>
  <li><span className={paramReqStyle.path}>sortOrder</span> (string) : Ordre de tri ("asc" ou "desc", défaut: "asc")</li>
</ul>
</div>


<div>
<h3>Paramètres pour <span className={paramReqStyle.path}>/countries/search</span></h3>


<ul className={paramReqStyle.liste}>
  <li><span className={paramReqStyle.path}>q</span> (string) : Terme de recherche dans les noms de pays</li>
  <li><span className={paramReqStyle.path}>region</span> (string) : Filtre par région (ex: "Europe", "Asia")</li>
  <li><span className={paramReqStyle.path}>subregion</span>(string) : Filtre par sous-région</li>
  <li><span className={paramReqStyle.path}>currency</span> (string) : Filtre par devise (ex: "EUR")</li>
  <li><span className={paramReqStyle.path}>language</span> (string) : Filtre par langue (ex: "fr")</li>
  <li><span className={paramReqStyle.path}>independen</span> (boolean) : Pays indépendants seulement</li>
  <li><span className={paramReqStyle.path}>unMember</span>(boolean) : Membres de l'ONU seulement</li>
</ul>
</div>


<div>
<h3>Paramètres pour <span className={paramReqStyle.path}>{"/countries/{code}/citie"}</span></h3>


<ul className={paramReqStyle.liste}>
  <li><span className={paramReqStyle.path}>limit</span>(number) : Nombre de villes (1-100, défaut: 20)</li>
  <li><span className={paramReqStyle.path}>page</span> (number) : Numéro de page</li>
  <li><span className={paramReqStyle.path}>minPopulation</span> (number) : Population minimale</li>
  <li><span className={paramReqStyle.path}>isCapital</span>(boolean) : Capitales seulement</li>
</ul>
</div>
      
        
        
    </section>
  )
})

ParamReq.displayName="ParamReq"
export default ParamReq