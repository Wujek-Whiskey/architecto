import styles from './AgencySection.module.scss'

export default function AgencySection() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper__content}>
        <h1 className={styles.content__header}>architecto</h1>
        <p className={styles.content__text}>
          Cześć, Jesteśmy architecto. Kreatywny sposób podejścia do pracy to
          nasza specjalność. Z wielkim entuzjazmem podchodzimy do każdego
          projektu.
        </p>
        <p className={styles.content__text}>
          Ciężko pracujemy, aby zrozumieć Twoje wymagania i podzielać Twoje
          aspiracje. Demonstrując gotowość do słuchania i współpracy, będąc
          odpowiedzialnym i skupiając się na rozwiązaniach, dążymy do zbudowania
          silnej, opartej na zaufaniu relacji, gdy przeprowadzimy Cię przez
          proces projektowania i budowy.
        </p>
        <p className={styles.content__text}>
          Chociaż nasza praca nad projektami jest różnorodna, każdy projekt
          spełnia marzenia naszych klientów i stanowi wzorowy wkład w
          społeczność.
        </p>
      </div>
      <div className={styles.wrapper__images}>
        <div className={styles.content__image}></div>
        <div className={styles.content__image}></div>
        <div className={styles.content__image}></div>
        <div className={styles.content__image}></div>
        <div className={styles.content__image}></div>
      </div>
    </div>
  )
}
