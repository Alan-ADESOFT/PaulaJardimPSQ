import { applyLinkProps } from '@/libs/config';
import styles from './Psq.module.css';

export default function Psq() {
  return (
    <section className={`${styles.psq} ${styles.wvTop}`} id="psq" data-ch="">
      <div className={styles.sky} id="pjSkyBox" aria-hidden="true">
        <canvas id="pjSky" />
      </div>
      <div className="pj-wrap">
        <header className={styles.psqHead} id="pjPsqHead">
          <span className="pj-eyebrow" data-rv="">
            Rota 2
          </span>
          <h2>
            <span className={styles.psqLettersWrap}>
              <span className={styles.psqLetters} id="pjQ">
                PSQ
              </span>
              <canvas className={styles.psqLettersCanvas} id="pjQC" aria-hidden="true" />
            </span>
            <span className="pj-name" data-rv="">
              Protocolo Salto Quântico
            </span>
          </h2>
          <span className="pj-dur" data-rv="">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
              <rect x="3" y="5" width="18" height="16" rx="3" />
              <path d="M3 10h18M8 3v4M16 3v4" />
            </svg>
            90 Dias
          </span>
        </header>
        <div className={styles.psqLede} id="pjPsqLede">
          <h3 className={`${styles.onNight} pj-chap-t`} data-mask="">
            A <span className={styles.gExpansion}>Expansão</span> de Identidade
          </h3>
          <p className={styles.psqPromise} data-rv="">
            Torne-se a pessoa para quem o salto quântico é inevitável.
          </p>
          <i className="pj-chap-line" data-rv="" aria-hidden="true" />
          <p className="pj-p" data-rv="">
            O PSQ é o seu próximo movimento de escala.{' '}
            <span className="pj-mark" data-mark="">
              Ele começa exatamente onde o PSP termina, e leva você além do que você já conhece.
            </span>
          </p>
        </div>
        <div className={styles.sar} id="pjSar">
          <div>
            <p className="pj-lead" data-rv="">
              Existe um sistema no seu cérebro chamado <strong>Sistema de Ativação Reticular (SAR)</strong>:
              ele filtra a realidade e determina o que você consegue perceber, buscar e materializar.
            </p>
            <p className="pj-p" data-rv="">
              Quando calibrado para sobrevivência, ele bloqueia literalmente as oportunidades à sua frente,
              não porque não existem, mas porque o seu cérebro foi treinado a não enxergar além do que já
              conhece.
            </p>
            <div className={styles.recal} id="pjRecal" data-rv="">
              <strong>O PSQ recalibra esse sistema.</strong>
              <p>
                Você passa a enxergar o próximo nível com clareza, e a agir em direção a ele com convicção,
                sem a sabotagem que derrubou as tentativas anteriores.
              </p>
            </div>
          </div>
          <figure className={styles.lens} id="pjLens" data-rv="">
            <canvas aria-hidden="true" />{' '}
            <span className="meter" aria-hidden="true">
              <i id="pjMeter" />
            </span>
            <figcaption>
              <b>SAR</b>
              <span>Sistema de Ativação Reticular</span>
            </figcaption>
          </figure>
        </div>
        <div className={styles.psqBody}>
          <div className={styles.inCard} data-rv="">
            <canvas data-chaos="" aria-hidden="true" /> <span className="pj-tagline">Como você entra</span>
            <p>
              Com o alicerce construído, mas preso nos limites de faturamento que já conhece. Cansado do ciclo
              de <em>“começar e parar”</em> e pronto para assumir um nível maior de responsabilidade pelo
              próprio crescimento.
            </p>
          </div>
          <span className={`${styles.outcomesTitle} pj-eyebrow`} data-rv="">
            Como você sai
          </span>
          <div className={styles.outcomes}>
            <div className={`${styles.flip} pj-o pj-acard`} data-rv="">
              <span className={`${styles.icRadar} ic`} aria-hidden="true">
                <svg
                  viewBox="0 0 32 32"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                >
                  <circle cx="16" cy="16" r="13" />
                  <circle cx="16" cy="16" r="7.5" opacity=".5" />
                  <g className={styles.sweep}>
                    <path d="M16 16L16 3" />
                  </g>
                  <circle
                    className={styles.blip}
                    cx="22.5"
                    cy="10"
                    r="1.8"
                    fill="currentColor"
                    stroke="none"
                  />
                </svg>
              </span>
              <div>
                <h4>SAR Recalibrado</h4>
                <p>
                  Você passa a enxergar oportunidades e caminhos que antes eram invisíveis, e age em direção a
                  eles com convicção.
                </p>
              </div>
            </div>
            <div className={`${styles.flip} pj-o pj-acard`} data-rv="" style={{ '--d': '.15s' }}>
              <span className={`${styles.icHex} ic`} aria-hidden="true">
                <svg
                  viewBox="0 0 32 32"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinejoin="round"
                >
                  <path className="hx" pathLength="1" d="M16 2.5l11.7 6.75v13.5L16 29.5 4.3 22.75V9.25z" />
                  <circle cx="16" cy="16" r="3.2" />
                </svg>
              </span>
              <div>
                <h4>Ativação das 6 Faculdades Mentais Superiores</h4>
                <p>
                  O treinamento ensina a governar e utilizar de forma prática a Percepção, Razão, Intuição,
                  Imaginação, Memória e Vontade para materializar o que você quer na vida e nos negócios.
                </p>
              </div>
            </div>
            <div className={`${styles.flip} pj-o pj-acard`} data-rv="">
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
                <h4>Expansão de Identidade</h4>
                <p>
                  Você deixa de apenas treinar o comportamento e passa a expandir a identidade que sustenta
                  esse comportamento.
                </p>
              </div>
            </div>
            <div className={`${styles.flip} pj-o pj-acard`} data-rv="" style={{ '--d': '.15s' }}>
              <span className={`${styles.icChart} ic`} aria-hidden="true">
                <svg
                  viewBox="0 0 32 32"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 28.5h26" opacity=".5" />
                  <path className="ln" pathLength="1" d="M4 23l7-7 5 4.5L27 8" />
                  <path className={styles.arrowHead} d="M20.5 8H27v6.5" />
                </svg>
              </span>
              <div>
                <h4>Normalização da Riqueza</h4>
                <p>
                  Reprogramação profunda do seu “piloto automático” subconsciente (Psicocibernética) para
                  viver e reter novos patamares financeiros e de vida, sem se autossabotar ou retroceder ao
                  padrão anterior. Você passa a decidir e executar no macro, não só no urgente.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.dialCard} data-rv="" aria-hidden="true">
            <div
              className={styles.dial}
              id="pjDial"
              data-labels="Percepção|Razão|Intuição|Imaginação|Memória|Vontade"
            >
              <svg viewBox="0 0 100 100">
                <circle className={styles.ring} cx="50" cy="50" r="30" />
                <circle className={styles.ring2} cx="50" cy="50" r="24" />
                <g id="pjChords" />
              </svg>
              <div className={styles.handWrap} id="pjHand">
                <svg viewBox="0 0 100 100">
                  <g className="hand">
                    <line x1="50" y1="32" x2="50" y2="23.5" />
                    <path d="M50 20.2l1.3 1.9-1.3 1.9-1.3-1.9z" />
                    <circle cx="50" cy="32" r=".6" />
                  </g>
                </svg>
              </div>
              <div className={styles.core}>
                <b>6</b>
                <span>Faculdades Mentais Superiores</span>
              </div>
            </div>
          </div>
        </div>
        <h3 className="pj-fmt-t" data-rv="">
          Formato de entrega
        </h3>
        <div className={`${styles.plan} pj-acard`} data-rv="">
          <div className={styles.planTop}>
            <div className={styles.planNumber}>
              <b className="roll" data-roll="90" aria-label="90">
                90
              </b>
              <p>dias de imersão</p>
            </div>
            <div className={styles.planNumber}>
              <b className="roll" data-roll="4" aria-label="4">
                4
              </b>
              <p>encontros individuais ao vivo</p>
              <span className={styles.meet} aria-hidden="true">
                <i />
                <i />
                <i />
                <i />
              </span>
            </div>
            <div className={styles.planNumber}>
              <b className="roll" data-roll="6" aria-label="6">
                6
              </b>
              <p>ativações quinzenais personalizadas com base no seu momento e no seu próximo nível.</p>
            </div>
          </div>
          <div className={styles.timeline} aria-hidden="true">
            <i className="bar">
              <i />
            </i>{' '}
            <span className={`${styles.milestone} start`} style={{ left: '0%' }}>
              <em>1</em>
            </span>{' '}
            <span className={`${styles.milestone} ${styles.active}`} style={{ left: '16.6667%' }}>
              <em>15</em>
            </span>{' '}
            <span className={`${styles.milestone} ${styles.active}`} style={{ left: '33.3333%' }}>
              <em>30</em>
            </span>{' '}
            <span className={`${styles.milestone} ${styles.active}`} style={{ left: '50%' }}>
              <em>45</em>
            </span>{' '}
            <span className={`${styles.milestone} ${styles.active}`} style={{ left: '66.6667%' }}>
              <em>60</em>
            </span>{' '}
            <span className={`${styles.milestone} ${styles.active}`} style={{ left: '83.3333%' }}>
              <em>75</em>
            </span>{' '}
            <span className={`${styles.milestone} ${styles.active} ${styles.end}`} style={{ left: '100%' }}>
              <em>90</em>
            </span>
          </div>
        </div>
        <div className={styles.whatsappNote} data-rv="">
          <svg
            viewBox="0 0 26 26"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M13 2.5A10.5 10.5 0 0 0 4 18.3L2.5 23.5l5.3-1.4A10.5 10.5 0 1 0 13 2.5z" />
            <path d="M9.3 9.2c0 4.4 3 7.5 7.5 7.5l1.5-1.5-2.2-1.5-1.1 1.1c-1.5-.7-2.6-1.9-3.4-3.4l1.1-1.1-1.5-2.2z" />
          </svg>
          <p>
            Inclui <strong>acompanhamento diário exclusivo com a Paula Jardim</strong> no WhatsApp.
          </p>
        </div>
        <div className="pj-cta-row">
          <div className="pj-ring-wrap" data-rv="">
            <div className="pj-ring">
              <a className="pj-btn js-apply magnetic" {...applyLinkProps}>
                <svg
                  className="lock"
                  viewBox="-3 -7 26 30"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  aria-hidden="true"
                >
                  <path className="sh" d="M5 10V7a5 5 0 0 1 10 0v3" />
                  <rect x="2" y="10" width="16" height="11" rx="3" />
                  <path d="M10 14v3" />
                </svg>
                Aplicar para o Protocolo PSQ{' '}
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
        </div>
      </div>
    </section>
  );
}
