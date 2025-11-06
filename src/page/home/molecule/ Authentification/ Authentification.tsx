import CodeConteneur from "../../atom/codeConteneur/CodeConteneur";
import AuthentificationStyle from "./ authentification.module.scss"


function  Authentification() {
  return (
    <section className={AuthentificationStyle.authentification}>
        <h2>
           <span>🔐 </span> <span> Authentification</span>
        </h2>
        
    <span className={AuthentificationStyle.disclamere}>L'API DataCountrie utilise une clé API pour l'authentification.</span>

    <h3>En-tête Requise</h3>

    <CodeConteneur langage="Text" code="Authorization: Bearer VOTRE_CLE_API"/>

    <h4>Obtention d'une Clé API</h4>

    <ol>
        <li>Créez un compte sur <a href="#">datacountrie.com/register</a></li>
        <li>Accédez à votre tableau de bord</li>
        <li>Générez une nouvelle clé API dans la section "Développeurs"</li>
    </ol>
    </section>
  )
}

export default  Authentification