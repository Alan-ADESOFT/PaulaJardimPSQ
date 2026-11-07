import styles from './Intro.module.css';

export default function Intro() {
  return (
    <section className={`${styles.intro} pj-dark wv-both`} id="introducao" data-spot="" data-ch="">
      <div className="pj-breath" aria-hidden="true" />
      <div className="pj-wrap">
        <p
          className={styles.statement}
          id="pjStatement"
          data-strike="cursos gravados|teorias genéricas de administração."
        >
          Isto não é uma escola de cursos gravados ou teorias genéricas de administração.
        </p>
        <div className={styles.introBody}>
          <p className="pj-p" data-rv="">
            Estes não são programas de prateleira. O acesso aos Protocolos PSP e PSQ é individual,
            confidencial e passa por seleção prévia. Cada processo é construído a partir do momento atual da
            sua vida e do seu negócio,{' '}
            <span className="pj-mark" data-mark="">
              conduzido diretamente pela Paula Jardim.
            </span>{' '}
            Não é equipe nem IA respondendo.
          </p>
          <p className="pj-p" data-rv="" style={{ '--d': '.12s' }}>
            O problema raramente é falta de informação. É o piloto automático de um corpo e uma mente
            exaustos, operando de forma reativa pela química do{' '}
            <span className={styles.steal} id="pjSteal" data-rv-plain="">
              medo
            </span>
            , que paralisa quem ainda não chegou lá, e sabota quem já construiu.
          </p>
        </div>
        <div className={styles.for}>
          <h3 className="pj-t pj-h2" data-mask="">
            Para quem são estas rotas
          </h3>
        </div>
      </div>
      <div className="pj-wrap">
        <div className={styles.who}>
          <article className={`${styles.whoCard} pj-acard`} data-rv="">
            <span className={styles.whoIcon}>
              <svg
                data-draw=""
                viewBox="0 0 32 32"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="4" y="10" width="24" height="17" rx="3" />
                <path d="M12 10V7.5A1.5 1.5 0 0 1 13.5 6h5A1.5 1.5 0 0 1 20 7.5V10" />
                <path d="M4 17h24" />
                <path d="M16 15.5v3" />
              </svg>
            </span>
            <h4>Você fatura, mas o dinheiro não fica, e sente que está preso no mesmo patamar.</h4>
            <p>
              Trabalha muito, o resultado aparece, e some.
              <br />
              Você sente o teto, sabe que existe mais, mas algo sempre te puxa de volta ao mesmo lugar.
            </p>
          </article>
          <article className={`${styles.whoCard} pj-acard`} data-rv="" style={{ '--d': '.12s' }}>
            <span className={styles.whoIcon}>
              <svg
                data-draw=""
                viewBox="0 0 32 32"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 27V15M12 27V9M19 27V18M26 27V5" />
                <path d="M3 27h26" />
              </svg>
            </span>
            <h4>Você sabe o que precisa fazer, mas não faz.</h4>
            <p>
              Ou você trava ou não sustenta o movimento.
              <br />
              Nem sempre é falta de clareza. Muitas vezes é a insegurança que chega antes, e você fica
              esperando uma certeza que não vem para dar o próximo passo.
            </p>
          </article>
          <article className={`${styles.whoCard} pj-acard`} data-rv="" style={{ '--d': '.24s' }}>
            <span className={styles.whoIcon}>
              <svg
                data-draw=""
                viewBox="0 0 32 32"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 27l9-14 6 8 4-5 7 11z" />
                <path d="M22 10V4l6 2.5-6 2.5" />
              </svg>
            </span>
            <h4>Você se sente esgotado de ter tentado de tudo.</h4>
            <p>
              Novas estratégias, novos modelos de negócio, e o ponteiro não se move na proporção do seu
              esforço. Isso não está te custando só dinheiro.
              <br />
              Está custando a confiança em si mesmo.
            </p>
          </article>
        </div>
        <p className={`${styles.whoClose} pj-lead`} data-rv="">
          Se você se reconheceu em qualquer um desses cenários, você está no lugar certo. Aqui o trabalho
          começa de dentro, e{' '}
          <span className="pj-mark" data-mark="">
            o resultado aparece por fora e permanece.
          </span>
        </p>
      </div>
    </section>
  );
}
