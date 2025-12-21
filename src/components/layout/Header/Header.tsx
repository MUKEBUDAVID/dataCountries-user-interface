// import React from 'react'
import { useState, type CSSProperties, type MouseEvent } from "react";
import Aside from "../../atom/Aside/Aside";
import headerStyle from "./header.module.scss";

function  Header() {
 const [visible,setVisible] =useState(false);
 const [chevronToggleRatation,setchevronToggleRatation] =useState(false);
 const [listeVersionStyleToggle,setListeVersionStyleToggle]=useState< CSSProperties>({display: "none",
                visibility: "hidden"});

const [ChevronStyle1,setChevronStyle1]=useState< CSSProperties>({transform:"rotateX(0deg)"});                
const [ChevronStyle2,setChevronStyle2]=useState< CSSProperties>({transform:"rotateX(0deg)"});                

const toggleVisibity1=(e:MouseEvent<HTMLDivElement, globalThis.MouseEvent>)=>{
  e.preventDefault();
  e.stopPropagation();
if(visible){
setVisible((visible)=>!visible);
setChevronStyle1({transform:"rotateX(180deg)"})  
setListeVersionStyleToggle({display: "flex",
                visibility: "visible"})

}else{
  setVisible((visible)=>!visible);

  setChevronStyle1({transform:"rotateX(0deg)"})   
  setListeVersionStyleToggle({display: "none",
                visibility: "hidden"});

}
  
} 





const toggleVisibity2=(e:MouseEvent<HTMLDivElement, globalThis.MouseEvent>)=>{
  e.preventDefault();
  e.stopPropagation();
if(chevronToggleRatation){
setchevronToggleRatation((chevronToggleRatation)=>!chevronToggleRatation);
setChevronStyle2({transform:"rotateX(180deg)"})  


}else{
  setchevronToggleRatation((chevronToggleRatation)=>!chevronToggleRatation);

  setChevronStyle2({transform:"rotateX(0deg)"})   
 
}
  
} 


  return (
    <header className={headerStyle.header}>
    <Aside/>

    <section className={headerStyle.right}>

<div className={headerStyle.version} onClick={toggleVisibity1}>
 
  <span>DataCountrie v1</span>


<ul className={headerStyle.listeVersion} style={listeVersionStyleToggle}>
  <li>DataCountrie v1</li>
</ul>

 <img src="/img/chevron.svg" alt="chevron"  style={ChevronStyle1}  />
  
</div>


<div className={headerStyle.langue}  onClick={toggleVisibity2}>
  <img src="/img/globe.svg" alt="globe_img"  />
  <img src="/img/chevron.svg" alt="chevron"  className={headerStyle.chevron}  style={ChevronStyle2} />

</div>
    </section>

    </header>
  )
}

export default Header