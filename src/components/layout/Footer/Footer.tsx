import footerStyle from "./footer.module.scss"

function Footer() {
  return (
    <footer className={footerStyle.footer}>




<section className={footerStyle.version}>
<h2><span>🔄 </span><span> Versions de l'API</span></h2>

<ul>
<li><span>Version actuelle:&ensp; </span> <span> v1 (stable)</span></li>
<li><span>Version précédente:&ensp; </span> <span> Aucune (première version)</span></li>
<li><span>Dépréciations:&ensp; </span><span> Aucune pour le moment</span></li>

</ul>

<p>Les versions sont maintenues pendant 12 mois après la publication d'une nouvelle version.</p>

</section>

<section className={footerStyle.support}>
<h2><span>📞 </span><span> Support</span></h2>


<ul>
  <li><span>Documentation:&ensp;</span><a href="mailto:docs.datacountrie.com">docs.datacountrie.com</a></li>
  <li><span>Email:&ensp;</span><a href="mailto:support@datacountrie.com">support@datacountrie.com</a></li>
  <li><span>Statut de service:&ensp;</span> <a href="mailto:status.datacountrie.com">status.datacountrie.com</a></li>
</ul>



  
  </section>

<section className={footerStyle.licence}>
<h2><span>📄</span><span> Licence</span></h2>
  <p>L'utilisation de l'API DataCountrie est soumise aux conditions de notre <a href="#">Contrat de Service.</a> Les données sont fournies sous licence Creative Commons Attribution 4.0, sauf indication contraire.</p>
  <br />
  <br />
  <br />
  <br />
  <p>Dernière mise à jour : 7 décembre 2023</p>
</section>
   
    
    
    </footer>
  )
}

export default Footer