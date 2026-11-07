import ApplyButton from '@/components/ui/ApplyButton/ApplyButton';
import styles from './Psp.module.css';

export default function Psp() {
  return (
    <section className={styles.psp} id="psp" data-ch="">
      <div className="pj-wrap">
        <div className="pj-frame" data-rv="">
          <div className={styles.chapterHead}>
            <div className={styles.chapterTag} data-rv="">
              <span className="pj-eyebrow">Rota 1</span>
              <h2>
                <span className={styles.acronym}>PSP</span>
                <span className="pj-name">Protocolo de Sustentação de Prosperidade</span>
              </h2>
              <span className="pj-dur">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
                  <rect x="3" y="5" width="18" height="16" rx="3" />
                  <path d="M3 10h18M8 3v4M16 3v4" />
                </svg>
                45 Dias
              </span>
            </div>
            <h3 className="pj-chap-t" data-mask="">
              O <span className={styles.gFoundation}>Alicerce</span> Interno
            </h3>
            <i className="pj-chap-line" data-rv="" aria-hidden="true" />
            <p className={`${styles.chapterText} pj-p`} data-rv="">
              O PSP é uma intervenção individual de 45 dias para quem está no modo operacional permanente,
              apagando incêndio, reagindo ao caos e sem conseguir agir com foco no que realmente importa. O
              trabalho aqui é construir as condições internas que nenhuma estratégia consegue criar por você:
              clareza mental, presença e a capacidade de agir mesmo quando o cansaço e o medo chegam primeiro.
            </p>
            <p className={`${styles.chapterText} pj-p`} data-rv="">
              É um processo focado em regulação comportamental e destrave de execução para quem sente que o
              cansaço mental e os padrões internos estão sabotando o foco estratégico.
            </p>
          </div>
          <div className={styles.split} id="pjSplit" data-rv="">
            <div className={`${styles.side} in`}>
              <canvas id="pjChaos" aria-hidden="true" /> <span className="pj-tagline">Como você entra</span>
              <p>
                No piloto automático, reagindo ao dia em vez de conduzir o dia. Com a cabeça cheia e o corpo
                em estado de alerta crônico. Sabendo o que precisa fazer, mas sem conseguir sustentar a
                execução. Com a sensação de que o esforço não corresponde ao resultado.
              </p>
              <p>
                Você entra sentindo: ansiedade, medo, exaustão física e mental, falta de foco e a sensação de
                que por mais que você se esforce, o resultado não acompanha.
              </p>
            </div>
            <div className={`${styles.side} out`}>
              <canvas id="pjCalm" aria-hidden="true" /> <span className="pj-tagline">Como você sai</span>
              <ul className={styles.gains}>
                <li className="pj-gain pj-acard">
                  <span className={`${styles.icFocus} ic`} aria-hidden="true">
                    <svg
                      viewBox="0 0 32 32"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                    >
                      <circle className={styles.r3} cx="16" cy="16" r="12" />
                      <circle className={styles.r2} cx="16" cy="16" r="7.5" />
                      <circle className={styles.r1} cx="16" cy="16" r="2.6" fill="currentColor" />
                      <path d="M16 1.5v4M16 26.5v4M1.5 16h4M26.5 16h4" />
                    </svg>
                  </span>
                  <div>
                    <h4>Clareza de execução</h4>
                    <p>
                      Você descobre que poucos movimentos alinhados valem mais do que muita ação dispersa, e
                      começa a ver resultado a partir disso.
                    </p>
                  </div>
                </li>
                <li className="pj-gain pj-acard">
                  <span className={`${styles.icShield} ic`} aria-hidden="true">
                    <svg
                      viewBox="0 0 32 32"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 3l11 4.5v7.5c0 7.2-4.7 11.6-11 14-6.3-2.4-11-6.8-11-14V7.5z" />
                      <path className={styles.checkmark} pathLength="1" d="M11 16.2l3.6 3.6 6.6-7.4" />
                    </svg>
                  </span>
                  <div>
                    <h4>Estado interno que sustenta</h4>
                    <p>
                      Você age com consistência independente das circunstâncias externas, sem precisar de
                      motivação para começar ou de condições perfeitas para continuar.
                    </p>
                  </div>
                </li>
                <li className="pj-gain pj-acard">
                  <span className="ic ic-person" aria-hidden="true">
                    <svg
                      viewBox="0 0 32 32"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                    >
                      <circle cx="16" cy="11" r="4.6" />
                      <path d="M8 27c.9-5.6 4.1-8.5 8-8.5s7.1 2.9 8 8.5" />
                      <path className="w1" d="M6 7.5a13 13 0 0 0 0 9" />
                      <path className="w1" d="M26 7.5a13 13 0 0 1 0 9" />
                      <path className="w2" d="M2.5 5a18 18 0 0 0 0 14" />
                      <path className="w2" d="M29.5 5a18 18 0 0 1 0 14" />
                    </svg>
                  </span>
                  <div>
                    <h4>Resiliência treinada</h4>
                    <p>
                      Você passa a agir apesar do medo, da pressão e da incerteza. O chão pode balançar, e
                      você continua.
                    </p>
                  </div>
                </li>
                <li className="pj-gain pj-acard">
                  <span className={`${styles.icEye} ic`} aria-hidden="true">
                    <svg
                      viewBox="0 0 32 32"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                    >
                      <g className={styles.lid}>
                        <path d="M2 16s5.5-9 14-9 14 9 14 9-5.5 9-14 9S2 16 2 16z" />
                        <circle cx="16" cy="16" r="4.4" />
                        <circle cx="16" cy="16" r="1.4" fill="currentColor" />
                      </g>
                    </svg>
                  </span>
                  <div>
                    <h4>Bem-estar como base</h4>
                    <p>
                      Você sai do modo de alerta crônico e começa a sentir o que é tomar decisões a partir de
                      um estado de equilíbrio, não de exaustão.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className={styles.divider} aria-hidden="true">
              <b>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </b>
            </div>
          </div>
          <h3 className="pj-fmt-t" data-rv="">
            Formato de entrega
          </h3>
          <div className={`${styles.spec} ${styles.scenes} pj-acard`} data-rv="">
            <div className={styles.cell}>
              <div className={`${styles.scene} sc-cal`} aria-hidden="true">
                <svg viewBox="0 0 160 110" fill="none">
                  <rect
                    x="8"
                    y="10"
                    width="112"
                    height="92"
                    rx="10"
                    strokeWidth="1.2"
                    style={{ stroke: 'var(--accent)' }}
                  />
                  <path d="M8 30h112" strokeWidth="1.2" style={{ stroke: 'var(--accent)' }} />
                  <path
                    d="M34 4v12M94 4v12"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    style={{ stroke: 'var(--accent)' }}
                  />
                  <g className="days" />
                  <g className={styles.clock}>
                    <circle
                      cx="130"
                      cy="82"
                      r="20"
                      strokeWidth="1.4"
                      style={{ fill: 'var(--color-ivory-light-fbf8f1)', stroke: 'var(--accent-strong)' }}
                    />
                    <path
                      className="hh"
                      d="M130 82v-10"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      style={{ stroke: 'var(--text-strong)' }}
                    />
                    <path
                      className={styles.clockHand}
                      d="M130 82h8"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      style={{ stroke: 'var(--text-strong)' }}
                    />
                    <circle cx="130" cy="82" r="1.8" style={{ fill: 'var(--accent-strong)' }} />
                  </g>
                </svg>
              </div>
              <p className={styles.cellText}>2 sessões individuais ao vivo com hora marcada</p>
            </div>
            <div className={styles.cell}>
              <div className={`${styles.scene} ${styles.sceneChat}`} aria-hidden="true">
                <span className={`${styles.bubble} l`}>
                  <i style={{ width: '78%' }} />
                  <i style={{ width: '52%' }} />
                </span>{' '}
                <span className={`${styles.bubble} r`}>
                  <i style={{ width: '70%' }} />
                  <i style={{ width: '40%' }} />
                </span>{' '}
                <span className={`${styles.bubble} l t`}>
                  <b />
                  <b />
                  <b />
                </span>
              </div>
              <p className={styles.cellText}>+ Acompanhamento diário e estratégico direto no WhatsApp.</p>
            </div>
            <div className={`${styles.cell} dark`}>
              <div className={`${styles.scene} ${styles.sceneMe}`} aria-hidden="true">
                <span className={styles.avatar}>
                  <img
                    src="/images/avatar.webp"
                    alt=""
                    width="220"
                    height="220"
                    loading="lazy"
                    decoding="async"
                  />
                  <i className="on" />
                </span>
              </div>
              <p className={styles.cellText}>
                <strong>Sou eu mesma, a Paula Jardim, analisando as suas ações em tempo real.</strong> Sem
                intermediários e sem robôs.
              </p>
              <span className={styles.signature}>Paula Jardim</span>
            </div>
          </div>
          <div className="pj-cta-row">
            <div className="pj-ring-wrap" data-rv="">
              <div className="pj-ring">
                <ApplyButton withLock>Aplicar para o Protocolo PSP</ApplyButton>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bridge} id="pjBridge" aria-hidden="true">
        <i />
      </div>
    </section>
  );
}
