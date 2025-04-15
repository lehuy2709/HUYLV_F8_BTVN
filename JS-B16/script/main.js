import { postLogin } from "./ultis.js"

const form = document.querySelector('form')
const email = document.querySelector('#InputEmail')
const password = document.querySelector('#InputPassword')


form.onsubmit = async (e) => {
    e.preventDefault()
    const response = await postLogin({ email: email.value, password: password.value }, 'login')
    if(response){
        localStorage.setItem('accessToken', response.access)
        localStorage.setItem('refreshToken', response.refresh)
        location.href = 'posts.html'
    }
}
