import { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.scss'

function DropdownList() {
  const [menuVisibility, setMenuVisibility] = useState<boolean>(false)
  return (
    <div>
      <div
        onMouseEnter={() => setMenuVisibility(true)}
        onMouseLeave={() => setMenuVisibility(false)}
        className={styles.nav__inner}
      >
        <div className={styles.inner}>
          <span
            style={
              menuVisibility ? { transform: 'translateY(-100%)' } : undefined
            }
            className={styles.inner__link}
          >
            <span className={styles.nav__link}>produkty</span>
          </span>
          <span
            style={
              menuVisibility ? { transform: 'translateY(-100%)' } : undefined
            }
            className={styles.inner__link}
            aria-hidden="true"
          >
            <span className={styles.nav__link}>produkty</span>
          </span>
        </div>
        <svg
          style={menuVisibility ? { transform: 'rotate(180deg)' } : undefined}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
      <div
        className={styles.nav__dropdown}
        onMouseEnter={() => setMenuVisibility(true)}
        onMouseLeave={() => setMenuVisibility(false)}
        style={
          menuVisibility
            ? { display: 'flex', transform: 'translateY(0%)' }
            : undefined
        }
      >
        <ul className={styles.nav__list}>
          <li className={styles.list__item}>
            <Link to={'/'} className={styles.list__link}>
              <div className={styles.nav__inner}>
                <div className={styles.inner}>
                  <span className={styles.inner__link}>
                    <span className={styles.nav__link}>domy</span>
                  </span>
                  <span className={styles.inner__link} aria-hidden="true">
                    <span className={styles.nav__link}>domy</span>
                  </span>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </div>
            </Link>
          </li>
          <li className={styles.list__item}>
            <Link to={'/'} className={styles.list__link}>
              <div className={styles.nav__inner}>
                <div className={styles.inner}>
                  <span className={styles.inner__link}>
                    <span className={styles.nav__link}>domy wielorodzine</span>
                  </span>
                  <span className={styles.inner__link} aria-hidden="true">
                    <span className={styles.nav__link}>domy wielorodzine</span>
                  </span>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </div>
            </Link>
          </li>
          <li className={styles.list__item}>
            <Link to={'/'} className={styles.list__link}>
              <div className={styles.nav__inner}>
                <div className={styles.inner}>
                  <span className={styles.inner__link}>
                    <span className={styles.nav__link}>edukacja</span>
                  </span>
                  <span className={styles.inner__link} aria-hidden="true">
                    <span className={styles.nav__link}>edukacja</span>
                  </span>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </div>
            </Link>
          </li>
          <li className={styles.list__item}>
            <Link to={'/'} className={styles.list__link}>
              <div className={styles.nav__inner}>
                <div className={styles.inner}>
                  <span className={styles.inner__link}>
                    <span className={styles.nav__link}>reklama</span>
                  </span>
                  <span className={styles.inner__link} aria-hidden="true">
                    <span className={styles.nav__link}>reklama</span>
                  </span>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

function Menu() {
  return (
    <ul className={styles.nav__menu}>
      <li className={styles.menu__item}>
        <Link className={styles.menu__link} to={'/'}>
          <div className={styles.nav__inner}>
            <div className={styles.inner}>
              <span className={styles.inner__link}>
                <span className={styles.nav__link}>agencja</span>
              </span>
              <span className={styles.inner__link} aria-hidden="true">
                <span className={styles.nav__link}>agencja</span>
              </span>
            </div>
          </div>
        </Link>
      </li>
      <li className={styles.menu__item}>
        <Link className={styles.menu__link} to={'/'}>
          <div className={styles.nav__inner}>
            <div className={styles.inner}>
              <span className={styles.inner__link}>
                <span className={styles.nav__link}>magazyn</span>
              </span>
              <span className={styles.inner__link} aria-hidden="true">
                <span className={styles.nav__link}>magazyn</span>
              </span>
            </div>
          </div>
        </Link>
      </li>
      <li className={styles.menu__item}>
        <Link className={styles.menu__link} to={'/'}>
          <div className={styles.nav__inner}>
            <div className={styles.inner}>
              <span className={styles.inner__link}>
                <span className={styles.nav__link}>kontakt</span>
              </span>
              <span className={styles.inner__link} aria-hidden="true">
                <span className={styles.nav__link}>kontakt</span>
              </span>
            </div>
          </div>
        </Link>
      </li>
    </ul>
  )
}

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.nav__container}>
        <Link className={styles.nav__brand} to={'/'}>
          <img src={''} alt={'architecto'} />
        </Link>
        <DropdownList />
        <Menu />
      </div>
    </nav>
  )
}
