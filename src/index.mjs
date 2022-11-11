import {printTree,toTree} from './listToTree.mjs'
import {treeToDOM} from './treeToDOM.mjs'
import {injectContainer} from './mainView.mjs'
import css from './css/container.css'
import css2 from './css/outline.css'

let heads=document.querySelectorAll('h1,h2,h3,h4,h5,h6')
console.log(heads);
let tree=toTree(heads)
let container=treeToDOM(tree)
injectContainer(container)