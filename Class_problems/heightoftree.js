class node{
    constructor(data){
        this.data=data
        this.left=null
        this.right=null
    
    }
}

let root =new node(5)
root.left=new node(4)
root.right=new node(6)


//height of tree is longeest path of node to its descendenrt leaf node
function height(node){

    if(node===null)
    {
        return 0
    }
    let leftside=height(node.left)
    let rightside=height(node.right)
    let result=Math.max(leftside,rightside)+1
    return result

}

let heightans=height(root)
console.log(heightans)