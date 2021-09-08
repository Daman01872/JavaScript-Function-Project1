//Write a program that prints even numbers from 1 to 100 in descending order.//

function  evenDescendingNumber(number) {
    for(i=100; i>=2; i--) {
        if(i%2 == 0) {
            console.log(i)
        }
    }
    return number;
}
console.log( evenDescendingNumber(" All above are the Even number's"))


//Write a function which accepts list of country names as parameter and returns the longest country name as output.//

function Longest_Country_Name(country_name)  
  {  
  return country_name.reduce(function(lname, country)   
  {  
    return lname.length > country.length ? lname : country;  
  },   
"");  
}  
console.log(Longest_Country_Name(["Australia", "Afghanistan", "United States of America"]));


//Write a function which accept a number and reverse a number as output.//

function reverse_a_number(n)
{
	n = n + "";
	return n.split("").reverse().join("");
}
console.log(reverse_a_number(9826741));

//Write a function to accept a number as parameter and return false or true based on weather the number is prime or not.//

function test_prime(n)
{

  if (n==1)
  {
    return false;
  }
  else if(n == 2)
  {
    return true;
  }else
  {
    for(var i = 2; i < n; i++)
    {
      if(n % i == 0)
      {
        return false;
      }
    }
    return true;  
  }
}

console.log(test_prime(59));


