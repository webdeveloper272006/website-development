// Effecient way to work on users


// operation = prompt("Calculate sum, difference, product, & division")
// a = parseFloat(prompt('Input First Number'))
// b  = parseFloat(prompt('Input Second Number'))

// if (operation == "sum"){
//     result = a+b
// } 
// else if (operation == "difference"){
//     result = a-b
// }
// else if (operation == "Product"){
//     result = a*b
// }
// else{
//     result =  a/b    
// }
// alert (`your result is,${result}`)

// Question 2

// let celcius = prompt("Enter any temperature in celcius")
// let fahrenheit = celcius*(9/5) +32
// alert(`the converted value of celcius in fahrenhiet is ${fahrenheit}`)

// Second Method
function convert_fahrenheit(celcius){
    return celcius*(9/5) +32
}
alert(convert_fahrenheit(prompt("Enter any temperature")))