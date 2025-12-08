import CodeConteneur from "../../atom/codeConteneur/CodeConteneur";
import gestionErrorStyle from "./gestionError.module.scss";
import Highlight from "../../../../util/Highlight"

function GestionError() {

const codeJsonEroor=`

 {  "success": false,
    "error": {    
    "code": "VALIDATION_ERROR",    
    "message": "Paramètres de requête invalides",    
    "details": {      "limit": "Doit être un nombre entre 1 et 250"    }, 
    "timestamp":"2023-12-07T10:30:00Z",    
    "requestId": "req_123456789"  }
    }

`

  return (
    <section className={gestionErrorStyle.gestionError}>
       
        <h2> <span>❌</span>  <span> GestionError</span></h2>

        <h3>Format des Réponses d'Erreur</h3>
        

     <CodeConteneur langage="json" code={codeJsonEroor}>
    <Highlight codeString={codeJsonEroor.trim()}  language="json" /> 
        </CodeConteneur>   


   <div className={gestionErrorStyle.listeCodeError}>
  <h3>Codes d'Erreur Courants</h3>


  <ul>
    <li><span className={gestionErrorStyle.path}>AUTH_REQUIRED</span>:Authentification nécessaire </li>
    <li><span className={gestionErrorStyle.path}>INVALID_API_KEY</span>:Clé API invalide</li>
    <li><span className={gestionErrorStyle.path}>QUOTA_EXCEEDED</span>:Limite de requêtes dépassée </li>
    <li><span className={gestionErrorStyle.path}>COUNTRY_NOT_FOUND</span>:Pays non trouvé </li>
    <li><span className={gestionErrorStyle.path}>VALIDATION_ERROR</span>:Paramètres invalides</li>
  </ul>


   </div>
 
    </section>
  )
}

export default GestionError