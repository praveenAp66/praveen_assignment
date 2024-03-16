1.given an array find the count of leaders.
an element is called a leader as leader if that element is greater than all the element on the right  of instanceof

 let a =[5,4,6,1,-1,0,5,2];
 let n=a.length;
 let cnt=0;
 let flag=true;
 for(let i=0;i<n;i++)
 {
    flag =true
    for(let j=i+1;j<n;j++)
    {
       if(a[i]<=a[j])
          {
              flag=false
              break
          }         
    }
      if(flag==true)
      {
        cnt++
      }
 }
 console.log(cnt)
