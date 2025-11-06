
import { useEffect, useState,type ReactNode, type PropsWithChildren } from "react";
import codeConteneurStyle from "./codeConteneur.module.scss";
import toast,{Toaster} from 'react-hot-toast';

type codeConteneurType=PropsWithChildren<{
  langage:string,
  code:string,
 
}>

function CodeConteneur({langage,code,children}:codeConteneurType) {

const [codeProvider,setCodeProvider]=useState<ReactNode|string|undefined>(" ");

  
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


 useEffect(()=>{
  
if(langage==="Text" ){
    setCodeProvider(code)
}else{
  setCodeProvider(children)
}
})

  return (
   <> 
   <div className={codeConteneurStyle.codeConteneur} >


    <div className={codeConteneurStyle.headercode}><span>{langage}</span>  <img onClick={handleCopy} title="copie code" src="img/copy.svg" alt="copiIcon" /></div>

   <div className={codeConteneurStyle.codeDiv}>

    {codeProvider}
   
   </div>

      </div>

      <Toaster/>
      </>
  )
}

export default CodeConteneur