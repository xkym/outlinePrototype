export function injectContainer(show) {
    let container = document.createElement('div')
    let button = document.createElement('button')
    button.textContent = '点击'
    // let show = document.createElement('div')
    // show.textContent = 'hello world'
    button.addEventListener('click', () => {
        if (show.style.display === 'none') {
            show.style.display = 'block'
        } else {
            show.style.display = 'none'
        }
    })
    container.appendChild(button)
    container.appendChild(show)

    document.body.appendChild(container)
}
