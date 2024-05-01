5) Construct a  binary tree structure of your own choice
ans:
                   Adam
                  /    \
               Eve     Noah
              /  \    /    \
           Cain  Abel  Shem  Ham


class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// Construct the binary tree
let adam = new TreeNode("Adam");
let eve = new TreeNode("Eve");
let noah = new TreeNode("Noah");
let cain = new TreeNode("Cain");
let abel = new TreeNode("Abel");
let shem = new TreeNode("Shem");
let ham = new TreeNode("Ham");

adam.left = eve;
adam.right = noah;
eve.left = cain;
eve.right = abel;
noah.left = shem;
noah.right = ham;
