//1. generate pattern for upside pyramid and down side pyramid

 let n=9;
 for(let i=1;i<=n;i+=2)
 {
     let star='';
     for(let j=1;j<=i;j++)
     {
       star=star+"*"; 
     }
     console.log(star);
 }
