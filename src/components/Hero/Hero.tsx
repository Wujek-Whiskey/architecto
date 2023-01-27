import { useState } from 'react'
import styles from './Hero.module.scss'

function getYear(): number {
  const date = new Date().getFullYear()
  return date
}

export default function Hero() {
  const [value, setValue] = useState<string>('i')

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.container__content}>
          <h1 className={styles.container__header}>architecto</h1>
          <div className={styles.container__horizontalLine} />
          <span className={styles.container__text}>
            Specjalizujemy się w projektowaniu i budowaniu solidnych budynków
            mieszkalnych, wychodząc na przeciw z masą pomysłów i rozwiązań.
          </span>
          <div
            className={`${styles.container__content} ${styles.container__footer}`}
          >
            <span className={styles.container__description}>
              &copy; {getYear()}
            </span>
            <div className={styles.container__hideText}>
              <span
                className={`${styles.container__description} ${styles.container__hide}`}
              >
                polityka cookies
              </span>
              <span
                className={`${styles.container__description} ${styles.container__btn}`}
                onMouseEnter={() => setValue('X')}
                onMouseLeave={() => setValue('i')}
              >
                {value}
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
