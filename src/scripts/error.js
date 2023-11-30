const exitError = () => {
    const buttonVoltar = document.querySelector('.nova_busca')
    buttonVoltar.addEventListener('click', () => {
        window.location.replace('/index.html')
    })
}
exitError()