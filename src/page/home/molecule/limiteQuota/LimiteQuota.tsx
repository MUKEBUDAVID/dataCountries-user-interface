import limiteQuotaStyles from "./limiteQuota.module.scss";

function LimiteQuota() {
  return (
    <section className={limiteQuotaStyles.limiteQuota}>
    <h2><span>⚡ </span> <span>Limites et Quotas</span></h2>

  <div className={limiteQuotaStyles.liste}>
    <h5>Plans Gratuits</h5>

    <ul>
        <li>1,000 requêtes/mois</li>
        <li>10 requêtes/minute</li>
        <li>Données de base uniquement</li>
    </ul>
  </div>





  <div className={limiteQuotaStyles.liste}>
    <h5>Plans Payants</h5>

    <ul>
        <li>Jusqu'à 100,000 requêtes/mois</li>
        <li>Accès aux données avancées</li>
        <li>Support prioritaire</li>
    </ul>
  </div>

        </section>
  )
}

export default LimiteQuota