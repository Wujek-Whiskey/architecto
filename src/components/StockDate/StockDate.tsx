import { Fragment } from 'react'
import { data } from '@utils'
import styles from './StockDate.module.scss'

export default function StockDate() {
  return (
    <div className={styles.container}>
      <div className={styles.container__horizontalLine} />
      <h1 className={styles.container__header}>Nasze realizacje</h1>
      <h1 className={styles.container__subheader}>Parkdale House</h1>
      <div className={styles.wrapper}>
        {data.map((item, index) => (
          <Fragment key={index}>
            <div className={styles.card}>
              <div className={styles.card__image}></div>
              <div className={styles.card__details}>
                <h1 className={styles.card__header}>{item.header}</h1>
                <p className={styles.card__description}>{item.year}</p>
              </div>
            </div>
          </Fragment>
        ))}
      </div>
    </div>
  )
}
