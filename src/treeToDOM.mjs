export function treeToDOM(tree) {
    let getNodeByTextContent = {}
    function rec(treeNode, parentChildren) {
        let node = document.createElement('div')
        let data = document.createElement('span')
        let children = document.createElement('div')

        node.classList.add('node')
        data.classList.add('data')
        children.classList.add('children')

        node.appendChild(data)
        node.appendChild(children)
        parentChildren.appendChild(node)

        data.textContent = treeNode.data.textContent
        getNodeByTextContent[data.textContent] = treeNode.data
        for (let i = 0; i < treeNode.children.length; i++) {
            rec(treeNode.children[i], children)
        }
    }
    let container = document.createElement('div')

    container.addEventListener('click', (e) => {
        if (e.target.classList.contains('data')) {
            getNodeByTextContent[e.target.textContent].scrollIntoView()
        }
    })

    rec(tree, container)
    return container
}