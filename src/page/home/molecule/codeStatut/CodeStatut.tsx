import CodeStatutStyle from "./codeStatut.module.scss";

function CodeStatut() {
  return (
    <table className={CodeStatutStyle.CodeStatut}>

<caption><span>📋</span> <span>Codes de Statut HTTP</span></caption>
        
  

 <thead >
  <tr>
   <th scope="col">Code</th>
   <th scope="col">Signification</th>
   <th scope="col">Description</th>
   </tr>
 </thead>



 <tbody>

 <tr className={CodeStatutStyle.line}>
   <td>200</td>
   <td>ok</td>
   <td>Requête réussie</td>
 </tr>

 <tr className={CodeStatutStyle.line}>
   <td>400</td>
   <td>Bad Request</td>
   <td>Paramètres invalides</td>
 </tr>


 <tr className={CodeStatutStyle.line}>
   <td>401</td>
   <td>Unauthorized</td>
   <td>Clé API manquante ou invalide</td>
 </tr>

 <tr className={CodeStatutStyle.line}>
   <td>403</td>
   <td>Forbidden</td>
   <td>Accès refusé</td>
 </tr>


 <tr className={CodeStatutStyle.line}>
   <td>404</td>
   <td>Not Found</td>
   <td>Ressource non trouvée</td>
 </tr>

 <tr className={CodeStatutStyle.line}>
   <td>429</td>
   <td>Too Many Requests</td>
   <td>Quota dépassé</td>
 </tr>

 <tr className={CodeStatutStyle.line}>
   <td>500</td>
   <td>Internal Server Error</td>
   <td>Erreur serveur</td>
 </tr>

 </tbody>


  
        
        </table>
  )
}

export default CodeStatut