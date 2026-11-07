import { applyLinkProps } from '@/libs/config';

/*
 * Botão "aplicar": toda chamada para a aplicação individual usa este componente.
 * O destino (formulário, WhatsApp ou a âncora #aplicacao) vem de libs/config.js.
 *
 * O estilo fica em styles/globals.css (.pj-btn), não em CSS Module: libs/animations.js procura
 * as classes js-apply (evento do Pixel) e magnetic (botão que segue o mouse), e as seções
 * estilizam o botão a partir de .pj-ring/.pj-cta-row. Renomear essas classes quebra os efeitos.
 */

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function LockIcon() {
  return (
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
  );
}

/**
 * @param {object} props
 * @param {React.ReactNode} props.children Texto do botão.
 * @param {boolean} [props.withLock] Mostra o cadeado que "abre" no hover (usado nas chamadas dos protocolos).
 */
export default function ApplyButton({ children, withLock = false }) {
  return (
    <a className="pj-btn js-apply magnetic" {...applyLinkProps}>
      {withLock && <LockIcon />}
      {children}{' '}
      {/* Duas setas: a primeira sai pela direita e a segunda entra no hover. */}
      <span className="ar" aria-hidden="true">
        <ArrowIcon />
        <ArrowIcon />
      </span>
    </a>
  );
}
