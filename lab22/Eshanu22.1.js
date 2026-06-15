function seconds(total) {
    return total % 60;
}

console.log(seconds(123));  
console.log(seconds(60));   
console.log(seconds(59));  
console.log(seconds(0));    
console.log(seconds(150));  