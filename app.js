//52 weeks in a year
//90 years minus 28 years old = 62 years to live
//62 years to live multiplied by 52 weeks in a year = 3224weeks left to live
//(90 - input age) * 52 = weeks left to live untill 90 


let displayResult = document.querySelector('#displayResult');
let inputNumber = document.querySelector('#inputNumber');
let Calculate = document.querySelector('#Calculate');
let Reset = document.querySelector('#Reset');
let resetPage= document.querySelector('#resetPage');

let string1 = "You have "
let string2 = " Weeks left to live"
let string3 = "You are a Dead Man Walking!"

function equationNumbers(a, b, c){
    let difference = (a - b)*c;
    return difference;
}

Calculate.addEventListener('click', function(){
    
    let num_1 = parseInt(inputNumber.value);
    let differenceAge = 90 - num_1;
    let weeksLeft = differenceAge * 52;
    
    if (num_1 >= 1){
        displayResult.innerHTML = string1.concat (equationNumbers ( 90, num_1, 52), string2);
    }else if(num_1 > 90){
        displayResult.innerHTML = "You're a Dead Man Walking!";
    }else{
        displayResult.innerHTML = "Enter your age!";
}})


Reset.addEventListener('click', function(){
    document.location.reload(true);
})
