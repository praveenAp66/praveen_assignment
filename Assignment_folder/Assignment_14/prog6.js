6) write a program for tree traversal like inorder, postorder, preorde

ans:
class Node{
    constructor(data,size){
        this.data=data;
        this.left=null;
        this.right=null
        this.size=size
    }

}
let root =new Node(6,5)
root.left=new Node(4)
root.right=new Node(2)
 //inorder method LEFT(4),PARENT(ROOT  OR NODE)(6),RIGHT  (2)
 function inorder(node){
if(node==null)
{
    return[]
}
else{
    let result=[]
    result=result.concat(inorder(node.left))
    result.push(node.data)
    result=result.concat(inorder(node.right))
    return result
}
 }
 let inorderresult=inorder(root)
 console.log("inorder result "+inorderresult)


 //preorder method ,PARENT(ROOT  OR NODE),LEFT,RIGHT
 function preorder(node){
    if(node==null)
    {
        return[]
    }
    else{
        let result=[]
        result.push(node.data)
        result=result.concat(preorder(node.left))
        result=result.concat(preorder(node.right))
        return result
    }
     }
     let preorderresult=preorder(root)
     console.log("preorder result is "+preorderresult)
    
//postorder method LEFT,RIGHT,PARENT(ROOT  OR NODE)
function postorder(node){
    if(node==null)
    {
        return[]
    }
    else{
        let result=[]
       
        result=result.concat(postorder(node.left))
        result=result.concat(postorder(node.right))
        result.push(node.data)
        return result
    }
     }
     let postorderresult=postorder(root)
     console.log("post order result is "+JSON.stringify(postorderresult))
    








