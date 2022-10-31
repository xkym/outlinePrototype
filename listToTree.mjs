class TreeNode {
    constructor(data) {
        this.data = data
        this.children = []
    }
}
export function toTree(list) {
    let root = new TreeNode(list[0])
    let getNodeByName = {
        'H1': root
    }
    let parentName = {
        'H2': 'H1',
        'H3': 'H2',
        'H4': 'H3',
        'H5': 'H4',
        'H6': 'H5'
    }
    for (let i = 1; i < list.length; i++) {
        const element = list[i];
        let node = new TreeNode(element)
        getNodeByName[parentName[element.tagName]].children.push(node)
        getNodeByName[element.tagName] = node

    }
    return root
}

export function printTree(tree) {
    function rec(tree) {
        console.log(`${tree.data.tagName} ${tree.data.textContent}`)
        for (let t of tree.children) {
            rec(t)
        }
    }
    rec(tree)
}