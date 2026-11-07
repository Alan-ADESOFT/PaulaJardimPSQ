import styles from './Vault.module.css';

export default function Vault() {
  return (
    <section className={`${styles.vault} pj-dark wv-both`} id="blindagem" data-spot="" data-ch="">
      <div className="pj-breath" aria-hidden="true" />
      <div className={`${styles.vaultGrid} pj-wrap`}>
        <div className={styles.door} id="pjDoor" aria-hidden="true">
          <svg viewBox="0 0 400 400" fill="none">
            <defs>
              <radialGradient id="pjDoorG" cx="40%" cy="35%" r="75%">
                <stop offset="0" style={{ stopColor: 'var(--color-text-3b3630)' }} />
                <stop offset=".7" style={{ stopColor: 'var(--color-ink-1f1d19)' }} />
                <stop offset="1" style={{ stopColor: 'var(--color-ink-121110)' }} />
              </radialGradient>
              <radialGradient id="pjHaloG">
                <stop offset=".55" stopOpacity="0" style={{ stopColor: 'var(--color-gold-light)' }} />
                <stop offset=".72" stopOpacity=".32" style={{ stopColor: 'var(--color-gold-light)' }} />
                <stop offset="1" stopOpacity="0" style={{ stopColor: 'var(--color-gold-light)' }} />
              </radialGradient>
            </defs>
            <circle className={styles.halo} cx="200" cy="200" r="198" fill="url(#pjHaloG)" />
            <circle className={styles.crack} cx="200" cy="200" r="151" pathLength="1" />
            <circle className={`${styles.crack} c2`} cx="200" cy="200" r="151" pathLength="1" />
            <circle cx="200" cy="200" r="186" strokeWidth="2" style={{ stroke: 'var(--color-gold)' }} />
            <circle
              cx="200"
              cy="200"
              r="176"
              strokeWidth="1"
              strokeDasharray="2 10"
              style={{ stroke: 'var(--color-gold-light-a25)' }}
            />
            <g id="pjBolts" />
            <circle
              cx="200"
              cy="200"
              r="150"
              fill="url(#pjDoorG)"
              strokeWidth="1.5"
              style={{ stroke: 'var(--color-gold-light)' }}
            />
            <circle
              cx="200"
              cy="200"
              r="134"
              strokeWidth="1"
              style={{ stroke: 'var(--color-gold-light-a30)' }}
            />
            <g className="wheel">
              <circle
                cx="200"
                cy="200"
                r="78"
                strokeWidth="2"
                style={{ stroke: 'var(--color-gold-light)' }}
              />
              <circle
                cx="200"
                cy="200"
                r="66"
                strokeWidth="1"
                strokeDasharray="4 6"
                style={{ stroke: 'var(--color-gold-light-a35)' }}
              />
              <g strokeWidth="5" strokeLinecap="round" style={{ stroke: 'var(--color-gold-light)' }}>
                <path d="M200 122 V92" />
                <path d="M200 278 V308" />
                <path d="M122 200 H92" />
                <path d="M278 200 H308" />
                <path d="M145 145 L124 124" />
                <path d="M255 255 L276 276" />
                <path d="M255 145 L276 124" />
                <path d="M145 255 L124 276" />
              </g>
              <g style={{ fill: 'var(--color-gold-light)' }}>
                <circle cx="200" cy="88" r="7" />
                <circle cx="200" cy="312" r="7" />
                <circle cx="88" cy="200" r="7" />
                <circle cx="312" cy="200" r="7" />
              </g>
              <circle
                cx="200"
                cy="200"
                r="22"
                strokeWidth="2"
                style={{ fill: 'var(--color-ink)', stroke: 'var(--color-gold-light)' }}
              />
              <circle cx="200" cy="200" r="7" style={{ fill: 'var(--color-gold-light)' }} />
            </g>
          </svg>{' '}
          <i className={styles.shock} aria-hidden="true" />
          <i className={`${styles.shock} s2`} aria-hidden="true" />{' '}
          <span className={styles.state}>totalmente blindado</span>
        </div>
        <div>
          <h2 className="pj-t pj-h2" data-mask="">
            A Blindagem <em>Neurobiológica</em>
          </h2>
          <div className={styles.redact} id="pjRedact">
            <p>
              Nos meus protocolos, o sutil e o prático trabalham em perfeito alinhamento. Unimos a engenharia
              mental interna com a ação real da vida e dos negócios.
            </p>
            <p>
              Você passará por protocolos exclusivos de reprogramação neurobiológica desenhados para treinar o
              seu sistema nervoso a agir apesar das circunstâncias, parando de ser feito refém pelo caos
              externo ou pelas flutuações da vida e dos negócios.
            </p>
            <p>O que acontece dentro do PSP e do PSQ é individual, estratégico e totalmente blindado.</p>
            <p className="last">É o treinamento silencioso que gera a riqueza visível.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
