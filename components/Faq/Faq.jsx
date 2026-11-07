import styles from './Faq.module.css';

export default function Faq() {
  return (
    <section className={styles.faq} id="perguntas" aria-labelledby="pjFaqTitle">
      <div className="pj-wrap">
        <header className={styles.faqHead} data-rv="">
          <h2 className="pj-t pj-h2" id="pjFaqTitle" data-mask="">
            Perguntas e <em>Respostas</em>
          </h2>
        </header>
        <div className={styles.faqList}>
          <details className="pj-faq-item" data-rv="" style={{ '--d': '0.00s' }}>
            <summary>
              O que acontece quando o processo termina? Perco acesso a tudo?
              <span className={styles.faqToggle} aria-hidden="true" />
            </summary>
            <div className={styles.faqAnswer}>
              <p>
                O que termina é o acompanhamento direto com a Paula, as sessões ao vivo e as conversas pelo
                WhatsApp fazem parte do processo e se encerram com ele. O que fica com você para sempre: a
                gravação integral de cada sessão, um resumo de cada encontro e o histórico completo das
                conversas. Todo o conteúdo do seu processo é seu, o acesso ao material não expira.
              </p>
            </div>
          </details>
          <details className="pj-faq-item" data-rv="" style={{ '--d': '0.08s' }}>
            <summary>
              Posso fazer os dois protocolos ao mesmo tempo?
              <span className={styles.faqToggle} aria-hidden="true" />
            </summary>
            <div className={styles.faqAnswer}>
              <p>
                Os protocolos não são paralelos, são uma sequência. O PSP é o alicerce; o PSQ começa
                exatamente onde ele termina. Fazer os dois simultaneamente comprometeria o resultado de ambos.
              </p>
              <p>
                Quem deseja percorrer a rota completa pode adquirir os dois juntos e tem acesso a condições
                diferenciadas para isso. Em casos específicos, quando a Paula já conhece o histórico da pessoa
                por participações anteriores em outros programas, pode haver a admissão direta no PSQ. Isso é
                avaliado individualmente na aplicação.
              </p>
            </div>
          </details>
          <details className="pj-faq-item" data-rv="" style={{ '--d': '0.16s' }}>
            <summary>
              O que acontece depois que eu aplico?
              <span className={styles.faqToggle} aria-hidden="true" />
            </summary>
            <div className={styles.faqAnswer}>
              <p>
                Após a aplicação, a equipe da Paula entrará em contato para os próximos passos, que podem
                incluir uma call individual ou um diagnóstico de identidade conduzido diretamente pela Paula.
                Todo o processo de seleção é personalizado e avaliado caso a caso.
              </p>
            </div>
          </details>
          <details className="pj-faq-item" data-rv="" style={{ '--d': '0.24s' }}>
            <summary>
              45 ou 90 dias é tempo suficiente?
              <span className={styles.faqToggle} aria-hidden="true" />
            </summary>
            <div className={styles.faqAnswer}>
              <p>
                Os protocolos foram desenhados com base em anos de experiência e otimizados para entregar
                profundidade no menor tempo possível. O que garante isso não é só o método, é o acompanhamento
                diário da Paula, que encurta o caminho porque atua em tempo real no que está acontecendo com
                você.
              </p>
              <p>
                O tempo é suficiente para quem vem para colocar em prática, não para quem quer estudar e
                acumular conhecimento. Se você está pronto para agir, o processo foi feito para o seu ritmo.
              </p>
            </div>
          </details>
          <details className="pj-faq-item" data-rv="" style={{ '--d': '0.32s' }}>
            <summary>
              E se eu decidir não continuar o processo?
              <span className={styles.faqToggle} aria-hidden="true" />
            </summary>
            <div className={styles.faqAnswer}>
              <p>
                Os protocolos exigem comprometimento total para funcionar. Você não está comprando uma sessão,
                está comprando um processo completo, e o resultado só aparece para quem percorre o caminho
                inteiro.
              </p>
              <p>
                Por isso o acesso é seletivo: a decisão de entrar é tomada antes de começar. Uma vez dentro, o
                processo segue até o fim.
              </p>
              <p>
                Caso por algum motivo você não consiga continuar, todo o material didático do protocolo será
                disponibilizado para que você possa seguir de forma autônoma. Mas o acompanhamento com a Paula
                não é reembolsável nem transferível, é um compromisso bilateral.
              </p>
            </div>
          </details>
        </div>
      </div>
    </section>
  );
}
