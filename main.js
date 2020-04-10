// Nature
// Function without parameters but no return value
function funcFirst ()
{
    console.log ("Function without parameters but no return value");
}
// calling function
funcFirst();
funcFirst();
funcFirst();

// function without parameters but return value

function funcSecond()
{
    return "function without parameters but return value"; // return any type of data ... number ,string, boolean, class object, array
} 
// calling function

let secondFunc = funcSecond();
console.log(secondFunc);


// function with parameters but no return value
function funcThirdvalidate (firstName, lastName){
    if (typeof(firstName) === "string" && typeof(lastName) === "string")
    {
        return true;
    }
    else {
        return false;
    }
}
 function funcThirdprocess(firstName, lastName)
 {
     console.log (`${firstName} ${lastName}`);
 }
function funcThird (firstName, lastName){
    let isValid = funcThirdvalidate (firstName, lastName);
    if (isValid === true){
        funcThirdprocess(firstName, lastName);
    }
    else {
        console.log ("type mismatch");
    }
}

funcThird ("priya", "sawant"); // priya sawant
 // funcThird(11, 11); //type mismatch