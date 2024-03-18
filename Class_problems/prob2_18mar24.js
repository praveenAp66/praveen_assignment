// given a sentence find the duplicate words 

let string =" hi im praveen im learning fullstack mern praveen "
let ans1=string.trim()
//    let ans= string.trimStart();
//    console.log("trim start ans"+ans)
    // let ans1= ans.trimEnd()
    // console.log("trim end ans"+ans1)
let a=ans1.split(" ");
console.log(a)
 let n=a.length
console.log(n)
let result=[]
let duplicate = new Set();      
for(i=0;i<n;i++){
    for(j=i+1;j<n;j++){
        if(a[i]==a[j])
        {
            duplicate.add(a[i])  
        }
    }
  
}
result.push(...duplicate)


console.log(result)
console.log(result.join(" "))