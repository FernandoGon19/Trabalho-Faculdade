//Javascript para fazer o rolamento suave da pagina

function scroll(element) {
    document.querySelector(element).scrollIntoView({behavior: "smooth"})
}

document.querySelector('#curso').addEventListener('click', function(event) {
    event.preventDefault();

    scroll('#cursos')
})

document.querySelector('#sobreM').addEventListener('click', function(event) {
    event.preventDefault();

    scroll('#SobreS')
})