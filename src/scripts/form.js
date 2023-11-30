
export const usuarioGithub = () => {
    const input = document.querySelector('#usuario')
    const button = document.querySelector('.buttonSearch')

    button.addEventListener('click',async (e) => {
        e.preventDefault()
        let userName = input.value
        
        const nameUser = JSON.stringify(localStorage.setItem('nameSearch', userName))
        window.location.replace('../src/pages/profile.html')
    })
}