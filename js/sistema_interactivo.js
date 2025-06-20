// program initialization

console.log("¡Welcome to the Interactive messaging System!");

// Functions to capture user input

function validateName() {
    let name = prompt("Please enter your name:");
    if (name && isNaN(name)) {
        return name;
    } else {
        alert("Invalid input. Please enter a valid name.");
        return validateName();
    }
}

function validateAge() {
    let age = prompt("Please enter your age:");
    if (age && !isNaN(age) && age > 0) {
        return age;
    } else {
        alert("Invalid age. Please enter a valid number.");
        return validateAge();
    }
}

// We called the functions that asks to the user his info which is returned and captured there 
// it will be stored in the repectively asigned variables

let userName = validateName();
let userAge = validateAge();

// Using this conditional statement we will check the user age and give him a personalized message
if (userAge < 18) {
    alert(`Hi ${userName} You are a minor, ¡Keep learning and enjoying programming!`)
} else {
    alert(`Hi ${userName} You are an adult, ¡Get ready for great opportunities in the programming world!`);
}

