const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
const regexNumber = /\d/

export default function validate({ username, password }) {
    let e = { username: [], password: []}

    if (!username) e.username.push('An email is required')
    if (username.length > 35) e.username.push('Must be 35 characters or shorter')
    if (!regexEmail.test(username)) e.username.push('Must be a valid email')

    if (password.length < 6) e.password.push('Must be 6 characters or longer')
    if (password.length > 10) e.password.push('Must be 10 characters or shorter')
    if (!regexNumber.test(password)) e.password.push('Must contain a number')

    return e
}