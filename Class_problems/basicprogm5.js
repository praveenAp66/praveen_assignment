let name1="OpqTech"
console.log(name1.charAt(7))
function mycharAt(input,index){
    return input[index]
}


console.log(mycharAt(name1,7))
console.log(name1.charCodeAt(79))
console.log(String.fromCharCode(79))

function uppercase(input)
{
    let output=""
    for(let i=0;i<name1.length;i++)
    {
        let charascii_code=input.charCodeAt(i)
        let mychar=input.charAt(i)
        if(charascii_code>=97 && charascii_code<=122)
        {
            mychar=String.fromCharCode(charascii_code-32)
        }
        output=output+mychar
    }
    return output
}
console.log(uppercase(name1))
console.log(2+3)
console.log(name1.toLowerCase())
console.log(name1.indexOf("Techk"))
console.log(name1.includes("opk"))
console.log(name1.substring(3,0))



let sentence= " i love;bengaluru"
console.log(sentence)
console.log(sentence.trim(''))
console.log(sentence.split(';'))



let num=10.567565
console.log(num.toFixed(2))
let str="123"
let newnum=parseInt(str)
console.log(typeof(newnum))



let arr=[1,23,4,6,7,8]
console.log(arr)
arr.push(7)
console.log(arr)
let lastele=arr.pop()
console.log(lastele)
console.log(arr)
let first=arr.shift()
console.log(arr.unshift(1))
console.log(arr.slice(0,4))


console.log(arr.splice(2,1))
let arr2=[3,4]
console.log(arr.concat(arr2))