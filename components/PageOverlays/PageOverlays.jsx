import styles from './PageOverlays.module.css';

export default function PageOverlays() {
  return (
    <>
      <div className={styles.grain} aria-hidden="true" />
      <div className={styles.progress} id="pjProgress" aria-hidden="true" />
      <div className={styles.chapter} id="pjChapter" aria-hidden="true">
        <b id="pjChN">I</b>
        <i id="pjChBar" />
      </div>
    </>
  );
}
