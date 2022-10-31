import {printTree,toTree} from './listToTree.mjs'
import {treeToDOM} from './treeToDOM.mjs'
let heads=document.querySelectorAll('h1,h2,h3,h4,h5,h6')
console.log(heads);
let tree=toTree(heads)
let result=treeToDOM(tree)
let div=document.createElement('div')
document.body.appendChild(div)
div.appendChild(result)
div.id='mydiv'
// printTree(tree)
div.addEventListener('click',(e)=>{
    if(e.target.className==='data'){
        let children=e.target.parentElement.children[1]
        if(children.style.display==='none'){
            children.style.display='block'
            e.target.style.backgroundColor=''
        }else{
            children.style.display='none'
            e.target.style.backgroundColor='red'
        }
    }

})