const lodash=require("lodash")
let object ={
    name:'john',
}
let obj2={
    city:'Karachi'
}
console.log(lodash.merge(object,obj2));

let array= [1,2,3,4,5,6,7,8,9,10]
console.log(lodash.chunk(array,2));


let factorial=1
function task(n) {
    
    for (let index = 1; index<=n ; index++) {
        factorial*=index
    //    console.log(`*${index}=${factorial}`);  
    }
    return factorial
}
console.log(task(5));

let sum=0
function average(num) {
    for (let i = 0; i < num.length; i++) {
        const element = array[i];
        sum+=num[i]
        let avg =sum/num.length
    }
    console.log(avg);
     
    return average
}





