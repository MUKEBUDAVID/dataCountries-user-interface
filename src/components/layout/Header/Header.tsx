// import React from 'react'
import headerStyle from "./header.module.scss";

function Header() {
 
  return (
    <header className={headerStyle.header}>
    <aside> dc api </aside>

    <section className={headerStyle.right}>

<div className={headerStyle.version}>
 <div>
  <span>DataCountrie v1</span>


<ul className={headerStyle.listeVersion}>
  <li>DataCountrie v1</li>
</ul>

  </div>  


<img src="/img/chevron.svg" alt="chevron"   />
  
</div>


<div className={headerStyle.langue} >
  <img src="/img/globe.svg" alt="globe_img"  />
  <img src="/img/chevron.svg" alt="chevron"  className={headerStyle.chevron} />

</div>
    </section>

    </header>
  )
}

export default Header