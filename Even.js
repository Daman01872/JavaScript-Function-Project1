//Write a program that prints even numbers from 1 to 100 in descending order.//

function  evenDescendingNumber() {
let number =input_number.value;
let count = 0;
let arr =[];
for (let i =0 ; i<= number; i++){
    if(i%2===0){
        arr[count] = i;
        count++;
    }
}
output.innerHTML = arr.reverse();
}

//Write a function which accepts list of country names as parameter and returns the longest country name as output.//

function longname() {
let names = input_text.value;
names = names.split(/\s+/);
let islong = 0;
let longest;
let array_size = names.length;
console.log(names);
for (let i = 0; i < array_size; i++) 
{
    if(names[i].length > islong){
        islong = names[i].length;
        longest = names[i];
    }
}
output.innerHTML = longest;
cpnsole.log("The Longest Name is ==>", longest)
}

//Write a function which accept a number and reverse a number as output.//

function reverseNumber() {
    let number = input_number.value;
    let splitted = number.split("");
    let reversedArray = splitted.reverse();
    let reversedString = reversedArray.join("");
    output.innerHTML = reversedString;
    console.log("The number After Reverse is ==> ");
}

//Write a function to accept a number as parameter and return false or true based on weather the number is prime or not.//

function isPrime() {
    let number = input_number.value;
    if (number == 2) {
        output.innerHTML = true;
        console.log('is number', number, 'prime==>');
        { {
                for (let i = 2; i < number; i++) {
                    if (number % i === 0) {
                        output.innerHTML = false;
                        console.log('is number', number, 'prime==>');
                        break;
            
                    }
                    else 
                    {
                        output.innerHTML = true;
                        console.log('is number', number, 'prime==>');
                        break;
                    }
                }
            }
        }}}

