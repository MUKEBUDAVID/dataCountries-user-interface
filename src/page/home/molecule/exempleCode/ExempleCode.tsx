import CodeConteneur from "../../atom/codeConteneur/CodeConteneur";
import Highlight from "../../../../util/Highlight"
import exempleCodeStyle from "./exempleCode.module.scss";

function ExempleCode() {

  const exemple1=`curl -X GET "https://api.datacountrie.com/v1/countries/FR" \\  -H "Authorization: Bearer VOTRE_CLE_API"`;

  const exemple2=`curl -X GET "https://api.datacountrie.com/v1/countries/search?
                  region=Europe&fields=name,capital,population" \\ 
                  -H "Authorization: Bearer VOTRE_CLE_API"`;

  const exemple3=`curl -X GET "https://api.datacountrie.com/v1/countries/DE/cities?limit=10&minPopulation=100000" \\ 
       -H "Authorization: Bearer VOTRE_CLE_API"`  
       
  const exemple4=`const fetchCountryData = async (countryCode) => {
  const response = await fetch(\`https://api.datacountrie.com/v1/countries/\${countryCode}\`, {
    headers: {
      'Authorization': 'Bearer VOTRE_CLE_API'
    }
  });
  
  if (!response.ok) {
    throw new Error('Erreur lors de la récupération des données');
  }
  
  return await response.json();
};

// Utilisation
fetchCountryData('FR')
  .then(data => console.log(data))
  .catch(error => console.error(error));`;  
  
  const exemple5 =`import requests

def get_country_info(country_code):
    headers = {'Authorization': 'Bearer VOTRE_CLE_API'}
    url = f'https://api.datacountrie.com/v1/countries/{country_code}'
    
    response = requests.get(url, headers=headers)
    response.raise_for_status()
    
    return response.json()

# Utilisation
try:
    data = get_country_info('FR')
    print(data)
except requests.exceptions.RequestException as e:
    print(f"Erreur: {e}") 
    `
  

  return (
    <section className={exempleCodeStyle.exempleCode} >
     <h2><span>💡</span><span>Exemples d'utilisation</span></h2>


     <div>
      <h3>Exemple 1 : Obtenir la France</h3>


<CodeConteneur langage="bash" code={exemple1}>
  <Highlight codeString={exemple1.trim()}  language="bash" />
  </CodeConteneur>

      </div> 


      <div>
      <h3>Exemple 2 :Rechercher les pays d'Europe</h3>


<CodeConteneur langage="bash" code={exemple2}>
  <Highlight codeString={exemple2.trim()}  language="bash" />
  </CodeConteneur>

      </div> 



      <div>
      <h3>Exemple 3 : Obtenir les villes d'Allemagne</h3>


<CodeConteneur langage="bash" code={exemple3}>
  <Highlight codeString={exemple3.trim()}  language="bash" />
  </CodeConteneur>

      </div> 



      <div>
      <h3>Exemple 4 : Utilisation en JavaScript</h3>


<CodeConteneur langage="javascript" code={exemple4}>
  <Highlight codeString={exemple4.trim()}  language="js" />
  </CodeConteneur>

      </div>


      <div>
      <h3>Exemple 5 : Utilisation en Python</h3>


<CodeConteneur langage="python" code={exemple5}>
  <Highlight codeString={exemple5.trim()}  language="py" />
  </CodeConteneur>

      </div>
    </section>
  )
}

export default ExempleCode