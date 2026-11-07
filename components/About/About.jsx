import styles from './About.module.css';

export default function About() {
  return (
    <section className={styles.bio} id="paula" data-ch="">
      <div className={styles.bioGrid}>
        <div className={styles.bioPhoto} id="pjBioPhoto">
          <div className={styles.stick} id="pjBioStick" data-depth="">
            <img
              src="/images/about.webp"
              alt="Paula Jardim"
              width="1152"
              height="1728"
              loading="lazy"
              decoding="async"
            />
            <div className={styles.medals}>
              <div className={styles.medal}>
                <div className={styles.coin}>
                  <div>
                    <em>formação pelo</em>
                    <b>Proctor Gallagher Institute</b>
                  </div>
                </div>
              </div>
              <div className={styles.medal}>
                <div className={styles.coin}>
                  <div>
                    <em>especializações pela</em>
                    <b>Napoleon Hill Foundation</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.bioText}>
          <h2 className="pj-t pj-h2" data-mask="">
            Quem vai conduzir <em>o seu processo</em>
          </h2>
          <p className="pj-lead" data-rv="">
            Paula Jardim é empresária, palestrante e especialista em mentalidade e sustentação de riqueza. Com
            chancela internacional, possui formação pelo renomado Proctor Gallagher Institute (Bob Proctor) e
            especializações pela Napoleon Hill Foundation.
          </p>
          <div className={styles.trail} id="pjTrail">
            <span className="fill" aria-hidden="true" />
            <div className="pj-step">
              <div className={`${styles.stepCard} pj-acard`}>
                <h4>Por quase uma década</h4>
                <p>
                  Por quase uma década, jogou o jogo dos negócios sob a regra do esforço desproporcional,
                  trabalhando até a exaustão sem ver os resultados acompanharem a sua energia. Ao buscar a
                  verdade por trás dos números, compreendeu que o extrato bancário nada mais é do que o
                  reflexo da autoimagem e das crenças guardadas no inconsciente. Aplicando as leis da
                  Psicocibernética, alcançou em poucos meses os resultados que havia perseguido por dez anos.
                </p>
              </div>
            </div>
            <div className="pj-step">
              <div className={`${styles.stepCard} pj-acard`}>
                <h4>A nova realidade</h4>
                <p>
                  Diante do sucesso, viveu o gargalo silencioso de muitos líderes: a dificuldade de normalizar
                  a nova realidade. Compreendeu que conquistar o dinheiro é apenas metade do caminho, o
                  verdadeiro diferencial está em aprender a sustentá-lo com equilíbrio e bem-estar prolongado.
                </p>
              </div>
            </div>
            <div className="pj-step">
              <div className={`${styles.stepCard} pj-acard`}>
                <h4>Inconsciente Milionário (2023)</h4>
                <p>
                  Autora da obra <cite>Inconsciente Milionário</cite> (2023), Paula transformou sua trajetória
                  em um guia prático de reprogramação mental por decisão e repetição. É a mente por trás do
                  consagrado treinamento <cite>Quem Ouve Enriquece</cite>, cuja versão original impactou
                  dezenas de milhares de pessoas ao redor do mundo, e que agora ganha sua evolução máxima com
                  o lançamento do <cite>Quem Ouve Enriquece 2.0</cite>.
                </p>
              </div>
            </div>
            <div className="pj-step">
              <div className={`${styles.stepCard} pj-acard`}>
                <h4>Mais de 200 empresários</h4>
                <canvas className={styles.dotsCanvas} id="pjDots" aria-hidden="true" data-text="+200" />
                <p>
                  Como mentora individual, Paula já guiou mais de 200 empresários e profissionais de alta
                  performance a romperem seus tetos invisíveis de faturamento. Hoje, dedica-se a treinar
                  líderes a expandirem suas operações e seus resultados com total estrutura interna e paz de
                  espírito.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
