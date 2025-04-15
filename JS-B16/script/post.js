
import { postLogin, getPosts } from "./ultis.js"

const authPost = async () => {
    const accessToken = localStorage.getItem('accessToken')
    console.log('Access token đang dùng:', accessToken)

    if (!accessToken) {
        alert('đăng nhập đê')
        location.href = 'index.html'
        return
    }

    let response = await getPosts('post', accessToken)
    console.log('Kết quả gọi post:', response)

    if (response?.detail === 'token expired') {
        const refreshToken = localStorage.getItem('refreshToken')
        const newTokens = await postLogin({ refresh: refreshToken }, 'login/get_new_token')
        console.log('Access token mới:', newTokens.access)

        if (newTokens?.access) {
            localStorage.setItem('accessToken', newTokens.access)
            return authPost()
        } else {
            alert('phiên đăng nhập hết hạn')
            location.href = 'index.html'
        }
    }
    document.body.innerHTML += `<p style="color: green">Truy cập thành công!</p>`
}

authPost()