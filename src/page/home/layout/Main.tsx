import BaseUrl from "../molecule/baseUrl/BaseUrl";
import Introduction from "../atom/Introduction/Introduction";
import mainstyle from "./main.module.scss";
import Authentification from "../molecule/authentification/ Authentification";
import Endpoints from "../molecule/endpoints/ Endpoints";
import FormatData from "../molecule/formatData/FormatData";
import ParamReq from "../molecule/paramReq/ParamReq";
import CodeStatut from "../molecule/codeStatut/CodeStatut";
import GestionError from "../molecule/gestionError/GestionError";
import LimiteQuota from "../molecule/limiteQuota/LimiteQuota";
import ExempleCode from "../molecule/exempleCode/ExempleCode";
import Footer from "../../../components/layout/Footer/Footer";
import { useScrollContext } from "../../../hooks/useScrollContext";



function Main() {
const sectionRefs = useScrollContext();

return (
    <main className={mainstyle.main} >
    <Introduction ref={sectionRefs.introduction} />
    <BaseUrl ref={sectionRefs.baseUrl}/>
    <Authentification ref={sectionRefs.authentification}/>
    <Endpoints ref={sectionRefs.endpoints}/>
    <FormatData ref={sectionRefs.formatData}/>
    <ParamReq ref={sectionRefs.paramReq }/>
    <CodeStatut ref={sectionRefs.codeStatut as React.Ref<HTMLTableElement>}/>
    <GestionError ref={sectionRefs.gestionError}/>
    <LimiteQuota ref={sectionRefs.limiteQuota}/>
    <ExempleCode ref={sectionRefs.exempleCode}/>
  

   {/* exception */}
    <Footer/>
    


    </main>
  )
}

export default Main