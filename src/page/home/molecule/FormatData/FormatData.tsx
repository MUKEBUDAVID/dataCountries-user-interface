import CodeConteneur from "../../atom/codeConteneur/CodeConteneur"
import formatDataStyle from "./formatData.module.scss";
import Highlight from "../../../../util/Highlight";

function FormatData() {
const codeJsonPays=`{
  "success": true,
  "data": {
    "name": {
      "common": "France",
      "official": "French Republic",
      "native": {
        "fra": {
          "official": "République française",
          "common": "France"
        }
      }
    },
    "tld": [".fr"],
    "cca2": "FR",
    "ccn3": "250",
    "cca3": "FRA",
    "cioc": "FRA",
    "independent": true,
    "status": "officially-assigned",
    "unMember": true,
    "currencies": {
      "EUR": {
        "name": "Euro",
        "symbol": "€"
      }
    },
    "idd": {
      "root": "+3",
      "suffixes": ["3"]
    },
    "capital": ["Paris"],
    "altSpellings": [
      "FR",
      "French Republic",
      "République française"
    ],
    "region": "Europe",
    "subregion": "Western Europe",
    "languages": {
      "fra": "French"
    },
    "translations": {
      "ara": {
        "official": "الجمهورية الفرنسية",
        "common": "فرنسا"
      },
      // ... autres langues
    },
    "latlng": [46, 2],
    "landlocked": false,
    "borders": ["AND", "BEL", "DEU", "ITA", "LUX", "MCO", "ESP", "CHE"],
    "area": 551695,
    "flag": "🇫🇷",
    "demonyms": {
      "eng": {
        "f": "French",
        "m": "French"
      },
      "fra": {
        "f": "Française",
        "m": "Français"
      }
    },
    "callingCodes": ["+33"]
  },
  "metadata": {
    "total": 1,
    "page": 1,
    "limit": 1,
    "pages": 1
  }
}`


const codeJsonVille=`{
  "success": true,
  "data": [
    {
      "name": "Paris",
      "countryCode": "FR",
      "population": 2140526,
      "latitude": 48.8566,
      "longitude": 2.3522,
      "isCapital": true,
      "region": "Île-de-France",
      "elevation": 35
    }
  ],
  "metadata": {
    "total": 50,
    "page": 1,
    "limit": 20,
    "pages": 3
  }
}`

  return (
    <section className={formatDataStyle.formatData}>

        <h2><span>📊</span> <span>Format des Données</span></h2>

<div>
<h3>Structure de Base d'un Pays</h3>
<CodeConteneur langage="json" code={codeJsonPays} >
    <Highlight codeString={codeJsonPays.trim()} language="json"/> 
</CodeConteneur>
</div>



<div>
<h3>Structure de la Liste des Villes</h3>
<CodeConteneur langage="json" code={codeJsonVille} >
    <Highlight codeString={codeJsonVille.trim()} language="json"/> 
</CodeConteneur>
</div>


    </section>
  )
}

export default FormatData