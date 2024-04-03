let arr=[2,3,9]
let n=arr.length

function findpos(i)
{
    let temparry=[]
    let p=0;
    while(i>0)
    {
        if(i&1==1){
        temparry.push(p)
        }
    
    i=i>>1
    p=p+1
    }
    return temparry
}
for(let i=1;i<Math.pow(2,n);i++)
{
    let subseqpos=findpos(i)
    let subsequence=[]
    for(let j=0;j<subseqpos.length;j++)
    {
        subsequence.push(arr[subseqpos[j]])
    }
    console.log(subsequence)
}



