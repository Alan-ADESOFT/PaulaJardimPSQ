import { applyLinkProps } from '@/libs/config';
import styles from './Application.module.css';

export default function Application() {
  return (
    <section className={styles.final} id="aplicacao">
      <div className="pj-wrap">
        <div className="pj-invite" data-rv="">
          <span className={styles.flap} aria-hidden="true" />{' '}
          <span className={styles.wax} aria-hidden="true">
            <b>PJ</b>
          </span>
          <p className="pj-t" data-mask="">
            Investir em si mesmo tem muito mais a ver com <em>mentalidade</em> do que com o fato de
            simplesmente ter o dinheiro.
          </p>
          <p className="pj-p" data-rv="">
            Como o meu tempo e o acompanhamento diário no WhatsApp são escassos, o acesso aos protocolos exige
            um processo seletivo prévio.
          </p>
          <p className="pj-p" data-rv="">
            Se você está pronto para assumir a responsabilidade pelo seu próximo nível, a sua aplicação começa
            agora.
          </p>
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
                Faça sua aplicação agora{' '}
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
