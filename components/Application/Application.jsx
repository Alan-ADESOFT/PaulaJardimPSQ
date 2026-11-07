import ApplyButton from '@/components/ui/ApplyButton/ApplyButton';
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
              <ApplyButton withLock>Faça sua aplicação agora</ApplyButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
