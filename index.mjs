import {printTree,toTree} from './listToTree.mjs'
import {treeToDOM} from './treeToDOM.mjs'
let heads=document.querySelectorAll('h1,h2,h3,h4,h5,h6')
console.log(heads);
let tree=toTree(heads)
let result=treeToDOM(tree)
document.body.appendChild(result)
// printTree(tree)