import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.foot}>
      <div className="pj-wrap">
        <span className={styles.footName}>Paula Jardim</span>{' '}
        <i className={styles.footLine} aria-hidden="true" />
        <div className={styles.footRow}>
          <span>© 2026 Paula Jardim</span>
        </div>
        <a className={styles.backToTop} href="#topo">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
            <path d="M12 19V5M6 11l6-6 6 6" />
          </svg>
          <span>voltar ao início</span>
        </a>
      </div>
    </footer>
  );
}
