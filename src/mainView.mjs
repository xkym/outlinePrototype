export function injectContainer(container) {
    let outline=document.createElement('div')
    let button = document.createElement('button')
    container.classList.add('container')

    button.textContent = '点击'
    button.addEventListener('click', () => {
        console.log(container.style.display);
        if (container.style.display === 'block') {
            container.style.display = 'none'
        } else {
            container.style.display = 'block'
        }
    })

    outline.appendChild(button)
    outline.appendChild(container)
    
    document.body.appendChild(outline)

    outline.classList.add('outline')
    button.classList.add('top-button')
}
