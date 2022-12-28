import React from 'react'
import styles from './Error.module.css'

export default function Error() {
  return (
    <div className={styles.divContainer}>
      <h1 className={styles.four}>4</h1>
      <div className={styles.border}>
        <img src='./img/404_Error.png' alt='404' />
      </div>
      <h1 className={styles.four}>4</h1>
    </div>
  )
}