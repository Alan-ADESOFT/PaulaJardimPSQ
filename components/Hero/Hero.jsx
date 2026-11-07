import { applyLinkProps } from '@/libs/config';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className="pj-hero" id="topo" data-ch="">
      <div className="pj-wrap">
        <h1 className="pj-t">
          <span className="ln">
            <span>Você cresce.</span>
          </span>{' '}
          <span className="ln">
            <span>
              O resultado <em>fica.</em>
            </span>
          </span>
        </h1>
        <p className={styles.heroSub}>
          Uma rota com dois protocolos individualizados para empresários, líderes e profissionais que cansaram
          de recomeçar e querem aumentar o faturamento, sustentá-lo e crescer sem abrir mão da paz mental.
        </p>
        <div className={styles.heroCta}>
          <a className="pj-btn js-apply magnetic" {...applyLinkProps}>
            Faça sua aplicação individual{' '}
            <span className="ar">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </span>
          </a>
        </div>
      </div>
      <div className={styles.stage} id="pjStageHero">
        <div className={styles.layer} aria-hidden="true" style={{ '--dp': '-22' }}>
          <svg className={styles.ghosts} viewBox="0 0 1120 400" preserveAspectRatio="xMidYMid meet">
            <defs>
              <linearGradient id="pjLightG" gradientUnits="userSpaceOnUse" x1="-700" y1="0" x2="-100" y2="0">
                <stop offset="0" stopOpacity=".16" style={{ stopColor: 'var(--color-gold)' }} />
                <stop offset=".42" stopOpacity=".8" style={{ stopColor: 'var(--color-gold-light)' }} />
                <stop offset=".5" stopOpacity="1" style={{ stopColor: 'var(--color-offwhite-fff4da)' }} />
                <stop offset=".58" stopOpacity=".8" style={{ stopColor: 'var(--color-gold-light)' }} />
                <stop offset="1" stopOpacity=".16" style={{ stopColor: 'var(--color-gold)' }} />
                <animate attributeName="x1" values="-700;1120" dur="5.5s" repeatCount="indefinite" />
                <animate attributeName="x2" values="-100;1720" dur="5.5s" repeatCount="indefinite" />
              </linearGradient>
            </defs>
            <text className={styles.ghostPsp} x="0" y="280">
              PSP
            </text>
            <text className={styles.ghostPsq} x="1120" y="280" textAnchor="end">
              PSQ
            </text>
          </svg>
        </div>
        <div className={styles.layer} aria-hidden="true" style={{ '--dp': '-10' }}>
          <div className={styles.glow} />
          <svg className={styles.arc} viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="49.5" />
            <circle className={styles.dash} cx="50" cy="50" r="44" />
          </svg>
        </div>
        <div className={styles.spot} id="pjSpot" aria-hidden="true" />
        <div className={styles.flash} aria-hidden="true" />
        <figure className={styles.portrait}>
          <div className={styles.depth}>
            <img
              src="/images/hero.webp"
              alt="Paula Jardim"
              width="800"
              height="1075"
              fetchPriority="high"
              decoding="async"
            />
          </div>
        </figure>
        <div className={styles.chips}>
          <a className={`${styles.chip} ${styles.chipPsp}`} href="#psp">
            <b>PSP</b>
            <span>
              <strong>45 Dias</strong>Protocolo de Sustentação de Prosperidade
            </span>
          </a>{' '}
          <a className={`${styles.chip} c2`} href="#psq">
            <b>PSQ</b>
            <span>
              <strong>90 Dias</strong>Protocolo Salto Quântico
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
