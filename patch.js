//创建node
function createElement(vnode){
   let tag=vnode.tag//标签
   let attr=vnode.attrs||{}//属性
   let children=vnode.children||[]//子节点
   if(!tag)return
   //创建dom
   let ele=document.createElement(tag)
   //添加属性
   let attrName
   for (attrName in attr) {
    if (attr.hasOwnProperty(attrName)) {
      ele.setAttribute(attrName,attr[attrName])
    }
   }
   //子节点
   children.forEach(ele => {
    ele.appendChild(createElement(ele))
   });
   return ele
}
//更新node
function updateChildren(vnode,newVnode){
  let children=vnode.children||[]
  let newChildren=newVnode.children||[]
  children.forEach((childrenVnode,index)=>{
     if(childrenVnode.tag===newChildren[index].tag){
      updateChildren(childrenVnode,newChildren[index])
     }else{
      replacenode(childrenVnode,newChildren[index])
     }
  })
}