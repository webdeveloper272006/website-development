// Effecient way to work on users


operation = prompt("Calculate sum, difference, product, & division")
a = parseFloat(prompt('Input First Number'))
b  = parseFloat(prompt('Input Second Number'))

if (operation == "sum"){
    result = a+b
} 
else if (operation == "difference"){
    result = a-b
}
else if (operation == "Product"){
    result = a*b
}
else{
    result =  a/b    
}
alert (`your result is,${result}`)

// Question 2

let celcius = prompt("Enter any temperature in celcius")
let fahrenheit = celcius*(9/5) +32
alert(`the converted value of celcius in fahrenhiet is ${fahrenheit}`)

Second Method
function convert_fahrenheit(celcius){
    return celcius*(9/5) +32
}
alert(convert_fahrenheit(prompt("Enter any temperature")))


// // Question 3

age = prompt("enter your age to judge")
function check_age(age){
    if(age<18){
    return "Minor"}
    else if(age>=18 && age<60){
        return "adult"
    }
    else{
        return "Senior citizens"
    }
}
alert(check_age(age))

// Question 4

function is_even_odd(num){
    if(num%2== 0){
        return "Number is even"
    }
    else{
        return "Number is odd"
    }
}
Numbers = prompt("Enter your Number to see if it is even or odd")
alert(`the number is` (num))