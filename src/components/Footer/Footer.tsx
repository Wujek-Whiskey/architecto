import styles from './Footer.module.scss'

function getYear(): number {
  const date = new Date().getFullYear()
  return date
}

export default function Footer() {
  return (
    <div className={styles.footer__wrapper}>
      <div className={styles.footer__content}>
        <span>s.</span>
        <a href={''}>facebook</a>
        <a href={''}>instagram</a>
        <a href={''}>twitter</a>
      </div>
      <div className={styles.footer__content}>
        <span>p.</span>
        <a href={''}>behance</a>
        <a href={''}>pexels</a>
        <a href={''}>unsplash</a>
      </div>
      <div className={styles.footer__content}>
        <span>&copy; {getYear()} architecto</span>
      </div>
      <div className={styles.footer__content}>
        <span>e.</span>
        <span>architecto@studio.com.pl</span>
      </div>
      <div className={styles.footer__content}>
        <span>l.</span>
        <span>poland, gdanśk</span>
      </div>
    </div>
  )
}
