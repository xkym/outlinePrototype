export function treeToDOM(tree){
    function rec(node,parentChildren){
        let div=document.createElement('div')
        let data=document.createElement('span')
        let children=document.createElement('div')

        div.classList.add('node')
        data.classList.add('data')
        children.classList.add('children')
        
        div.appendChild(data)
        div.appendChild(children)
        parentChildren.appendChild(div)

        data.textContent=node.data.textContent
        for (let i = 0; i < node.children.length; i++) {
            rec(node.children[i],children)
        }
    }
    let container=document.createElement('div')
    rec(tree,container)
    return container.firstChild
}