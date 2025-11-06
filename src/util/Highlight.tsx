// Importez la version de Prism (ou 'hljs' pour Highlight.js)
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// Importez un style (un thème)
// Ici, 'dracula' est un thème populaire. Vous pouvez choisir parmi une liste.
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

interface HighlightType {
  codeString:string,
  language:string

} 
 
// pour modifier le bg de react-syntax-highlighter
const transparentTheme = {
  ...dracula, // Spread the existing theme to keep other styles
  hljs: {
    ...dracula.hljs, // Spread the existing hljs styles
    background: 'transparent', // Set background to transparent
  },
};

function Highlight({ codeString, language }:HighlightType) {
  return (
   <SyntaxHighlighter 
      language={language} // Le langage du code (ex: 'javascript', 'json', 'jsx')
      style={transparentTheme} // Le thème de couleur
      
      showLineNumbers={false} // Optionnel : afficher les numéros de ligne
      wrapLines={true}
      wrapLongLines={true}
    >
      {codeString}
    </SyntaxHighlighter>
  )
}

export default Highlight