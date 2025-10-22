
import codeConteneurStyle from "./codeConteneur.module.scss";
import toast,{Toaster} from 'react-hot-toast';

type codeConteneurType={
  langage:string,
  
  code:string
}

function CodeConteneur({langage,code}:codeConteneurType) {

  
  const notify = () => toast("is copier",{
  duration: 1000,
  position: "bottom-left",
  });


// Fonction pour gérer la copie
  const handleCopy = () => {
    // Utilise l'API moderne du navigateur pour copier le texte
    navigator.clipboard.writeText(code)
      .then(() => {
        notify()
        
      })
      .catch(err => {
        // Gère les erreurs (par ex. si l'utilisateur refuse la permission)
        console.error('Erreur lors de la copie :', err);
});
  };


  return (
   <> 
   <div className={codeConteneurStyle.codeConteneur} >


    <div className={codeConteneurStyle.headercode}><span>{langage}</span>  <img onClick={handleCopy} title="copie code" src="img/copy.svg" alt="copiIcon" /></div>

   <div className={codeConteneurStyle.codeDiv}>
   <span>{code}</span>
   </div>

      </div>

      <Toaster/>
      </>
  )
}

export default CodeConteneur