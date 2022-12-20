import React, { useState } from 'react'
import validate from './validation'
import styles from './Form.module.css'

export default function Form({ onLogin }) {
  const [user, setUser] = useState({ username: '', password: '' })
  const [errors, setErrors] = useState(validate(user))

  const handleChange = (event) => {
    const { name, value } = event.target
    setUser({ ...user, [name]: value })
    setErrors(validate({ ...user, [name]: value }))
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    if (!onLogin(user)) window.alert('El usuario y la contraseña no coinciden')
  }

  return (
    <div className='styles.divContainer'>
      <div className={styles.logo}>
        <img src='./img/Logo.jpg' alt='logo' />
      </div>
      <div className={styles.header}>
        <h1>Sign in to Rick and Morty</h1>
      </div>
      <div className={styles.hint}>
        <h4>Hint: user@user.com password0</h4>
      </div>
      <div className={styles.divForm}>
        <form onSubmit={handleSubmit}>
          <label>Email address</label>
          <input type='text' name='username' value={user.username} onChange={handleChange} />
          <ul>
            {errors.username.map((e, i) => <li key={i} className={styles.error}>{e}</li>)}
          </ul>
          <label>Password</label>
          <input type='password' name='password' value={user.password} onChange={handleChange} />
          <ul>
            {errors.password.map((e, i) => <li key={i} className={styles.error}>{e}</li>)}
          </ul>
          <button type='submit' >Sign in</button>
        </form>
      </div>
    </div>
  )
}