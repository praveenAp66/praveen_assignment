8) Given two tree structure check whether they are identical or not.
ans:
class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function areIdenticalTrees(root1, root2) {
    // Base cases: if both trees are empty, they are identical
    if (!root1 && !root2) {
        return true;
    }
    // If one tree is empty and the other is not, they are not identical
    if (!root1 || !root2) {
        return false;
    }
    // Check if the values of the current nodes are equal
    if (root1.value !== root2.value) {
        return false;
    }
    // Recursively check the left and right subtrees
    return areIdenticalTrees(root1.left, root2.left) && areIdenticalTrees(root1.right, root2.right);
}

// Example trees
let tree1 = new TreeNode(1);
tree1.left = new TreeNode(2);
tree1.right = new TreeNode(3);

let tree2 = new TreeNode(1);
tree2.left = new TreeNode(2);
tree2.right = new TreeNode(3);

// Check if the trees are identical
console.log(areIdenticalTrees(tree1, tree2)); // Output: true
