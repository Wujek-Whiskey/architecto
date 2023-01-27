import { Fragment } from 'react'
import styles from './NewsList.module.scss'
import { news } from '@utils'

export default function NewsList() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper__content}>
        <h1 className={styles.wrapper__header}>Magazyn internetowy</h1>
        <div className={styles.wrapper__horizontalLine} />
      </div>
      <div className={styles.wrapper__list}>
        {news.map((item, index) => (
          <Fragment key={index}>
            <div className={styles.card}>
              <div className={styles.card__image}></div>
              <div className={styles.card__details}>
                <h1 className={styles.card__header}>{item.header}</h1>
                <p className={styles.card__description}>{item.time}</p>
              </div>
            </div>
          </Fragment>
        ))}
      </div>
    </div>
  )
}
