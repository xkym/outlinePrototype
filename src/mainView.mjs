export function injectContainer(show) {
    let outline=document.createElement('div')
    let button = document.createElement('button')

    button.textContent = '点击'
    button.addEventListener('click', () => {
        if (show.style.display === 'none') {
            show.style.display = 'block'
        } else {
            show.style.display = 'none'
        }
    })

    outline.appendChild(button)
    outline.appendChild(show)
    
    document.body.appendChild(outline)

    outline.classList.add('outline')
    button.classList.add('top-button')
}
