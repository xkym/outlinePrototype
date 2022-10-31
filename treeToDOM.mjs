export function treeToDOM(tree){
    function rec(node,parentChildren){
        let ol=document.createElement('div')
        let data=document.createElement('span')
        // data.className='data'
        let children=document.createElement('ol')
        // children.className='children'
        ol.appendChild(data)
        ol.appendChild(children)
        parentChildren.appendChild(ol)

        data.textContent=node.data.textContent
        for (let i = 0; i < node.children.length; i++) {
            const child = node.children[i];
            rec(child,children)
        }
    }
    let container=document.createElement('div')
    rec(tree,container)
    return container.firstChild
}