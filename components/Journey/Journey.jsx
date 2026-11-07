import styles from './Journey.module.css';

export default function Journey() {
  return (
    <section className={styles.stepsSection} id="jornada" data-ch="">
      <div className="pj-wrap">
        <h2 className="pj-t pj-h2" data-mask="">
          Primeiro PSP, depois <em>PSQ</em>
        </h2>
        <p className={`${styles.routeSupport} pj-p`} data-rv="">
          Não dá para expandir em cima de uma base instável. Por isso existe uma ordem: primeiro você se
          sustenta, depois você salta.
        </p>
        <div className={styles.stairs} id="pjStairs">
          <svg className={styles.stairsLink} id="pjStLink" aria-hidden="true">
            <path id="pjStPath" pathLength="1" />
            <path id="pjStPulse" className={styles.pulse} pathLength="1" />
            <g id="pjStDots" />
          </svg>{' '}
          <a className="pj-stair s1" href="#psp">
            <em>Rota 1</em>
            <b>PSP</b>
            <strong>
              <span data-up="45">45</span> Dias
            </strong>
            <span className="d">O Alicerce Interno</span>
          </a>{' '}
          <a className="pj-stair s2" href="#psq">
            <em>Rota 2</em>
            <b>PSQ</b>
            <strong>
              <span data-up="90">90</span> Dias
            </strong>
            <span className="d">A Expansão de Identidade</span>
            <span className="n">Torne-se a pessoa para quem o salto é inevitável.</span>
          </a>{' '}
          <i className={styles.floor} aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
