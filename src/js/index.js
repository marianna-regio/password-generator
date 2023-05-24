const sliderElement = document.querySelector('#slider')

const button = document.getElementById('button')

const sizePassword = document.querySelector('#value')
const password = document.querySelector("#password")
const containerPassword = document.querySelector("#container-password")

const charset = "abcdefghijklmnopqrstuvxwyzABCDEFGHIJKLMNOPQRSTUVXWYZ0123456789!@#$&_-"
let newPassword = ""

sizePassword.innerHTML = sliderElement.value

sliderElement.addEventListener('input', function () {
    sizePassword.innerHTML = this.value
})

function generatorPassword() {
    let pass = ''

    for (let i = 0, n = charset.length; i < sliderElement.value; i++) {
        pass += charset.charAt(Math.floor(Math.random() * n))
    }
    document.querySelector(".tooltipe").innerText = "Clique na senha para copiar. 👆"
    containerPassword.classList.remove('hide')
    password.innerHTML = pass
    newPassword = pass
}

function copyToClipboard() {
    navigator.clipboard.writeText(newPassword)
    document.querySelector(".tooltipe").innerText = "Senha Copiada!"
}

button.addEventListener('click', () => {
    generatorPassword()
}
)

containerPassword.addEventListener('click', () => {
    copyToClipboard()
})