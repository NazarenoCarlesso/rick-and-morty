import { useState } from 'react'
import validate from '../utils/validation'

const initialUser = { username: 'user@user.com', password: 'password0' }

export default function SignIn({ onLogin }) {
    const [user, setUser] = useState(initialUser)
    const errors = validate(user)

    const handleChange = (event) => {
        const { name, value } = event.target
        setUser((currentUser) => ({ ...currentUser, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        onLogin()
    }

    return (
        <main className="r signin-page">
            <span className="portal signin-portal signin-portal-left" aria-hidden="true" />
            <span className="portal signin-portal signin-portal-right" aria-hidden="true" />
            <section className="glass signin-card in" aria-labelledby="signin-title">
                <header className="signin-header">
                    <h1 id="signin-title" className="wm signin-title">Rick and Morty</h1>
                    <p className="signin-subtitle">Sign in to your deck</p>
                </header>

                <form className="signin-form" onSubmit={handleSubmit}>
                    <div className="signin-field">
                        <label htmlFor="username">Email</label>
                        <input
                            id="username"
                            name="username"
                            type="email"
                            autoComplete="username"
                            value={user.username}
                            onChange={handleChange}
                            aria-invalid={errors.username.length > 0}
                            aria-describedby={errors.username.length ? 'username-errors' : undefined}
                            required
                        />
                        {errors.username.length > 0 && (
                            <div id="username-errors" className="signin-errors">
                                {errors.username.map((error) => <span key={error}>{error}</span>)}
                            </div>
                        )}
                    </div>

                    <div className="signin-field">
                        <label htmlFor="password">Password</label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            autoComplete="current-password"
                            value={user.password}
                            onChange={handleChange}
                            aria-invalid={errors.password.length > 0}
                            aria-describedby={errors.password.length ? 'password-errors' : undefined}
                            required
                        />
                        {errors.password.length > 0 && (
                            <div id="password-errors" className="signin-errors">
                                {errors.password.map((error) => <span key={error}>{error}</span>)}
                            </div>
                        )}
                    </div>

                    <label className="signin-remember">
                        <input type="checkbox" name="remember" />
                        <span>Remember me</span>
                    </label>

                    <button
                        className="btn signin-submit"
                        type="submit"
                        disabled={errors.username.length > 0 || errors.password.length > 0}
                    >
                        Sign in
                    </button>
                </form>
            </section>
        </main>
    )
}
