const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
const regexNumber = /\d/

export default function validate({ username, password }) {
    let e = { username: [], password: []}

    if (!username) e.username.push('Debe completar este campo')
    if (username.length > 35) e.username.push('Debe ser de 35 caracteres o menos')
    if (!regexEmail.test(username)) e.username.push('Debe ser un email válido')

    if (password.length < 6) e.password.push('Debe ser de 6 caracteres o más')
    if (password.length > 10) e.password.push('Debe ser de 10 caracteres o menos')
    if (!regexNumber.test(password)) e.password.push('Debe contener al menos un número')

    return e
}