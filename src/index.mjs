import {printTree,toTree} from './listToTree.mjs'
import {treeToDOM} from './treeToDOM.mjs'
import {injectContainer} from './mainView.mjs'

let heads=document.querySelectorAll('h1,h2,h3,h4,h5,h6')
console.log(heads);
let tree=toTree(heads)
let result=treeToDOM(tree)
injectContainer(result)