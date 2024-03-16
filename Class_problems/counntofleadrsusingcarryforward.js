1.given an array find the count of leaders.
an element is called a leader as leader if that element is greater than all the element on the right  of instanceof

let a =[5,4,6,1,-1,0,5,2];
let n=a.length;
let cnt=1;
let max=a[n-1];
for(let i=n-2;i>=0;i--)
{
    if(a[i]>max)
    {
        max=a[i]
        cnt++
    }
}
console.log(cnt)
