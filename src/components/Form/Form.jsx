import React, { useState } from 'react'
import validate from './validation'
import styles from './Form.module.css'

export default function Form({ onLogin }) {
  const [user, setUser] = useState({ username: '', password: ''})
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
    <div>
      <form onSubmit={handleSubmit}>
        <h5>user@user.com password0</h5>
        <label>Username: </label>
        <input type='text' name='username' value={user.username} onChange={handleChange}/>
        <ul>
          {errors.username.map((e, i) => <li key={i} className={styles.Error}>{e}</li>)}
        </ul>
        <br/>
        <label>Password: </label>
        <input type='text' name='password' value={user.password} onChange={handleChange}/>
        <ul>
          {errors.password.map((e, i) => <li key={i} className={styles.Error}>{e}</li>)}
        </ul>
        <br/>
        <button type='submit' >LOGIN</button>
      </form>
    </div>
  )
}