1. find the count of pair(i,j) such that i<j and s[i]='a' and s[j]='g' where 's' is a character array 
 s=['b','a','a','g','x','d','c','a','g']
let N=s.length;
let cnt=0;

 for(let i=0;i<N;i++)
 {
for(j=i+1;j<N;j++)
{
    if(s[i]=='a' && s[j]=='g')
    {
        cnt++
    }
}
 }
 console.log(cnt)

