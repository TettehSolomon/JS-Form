//create a function that displays all outputs on submit
function userInput() {

    //create a variable that receives the radioOne input
    let radioOne = document.getElementById('radioOne').checked;

    //create a variable that receives the radioTwo input
    let radioTwo = document.getElementById('radioTwo').checked;

    //Use the if & else if condition to display my output in the console
    if (radioOne == true){
        console.log('Personal')
    } else if (radioTwo == true){
        console.log('Company');
    }

    //get name input and store it in a variable
    let name = document.getElementById('name').value;

    //display the output via console
    console.log(name);

    //get email input and store it in a variable
    let email = document.getElementById('email').value;

    //display the output via console
    console.log(email);

    //get password input and store it in a variable
    let password = document.getElementById('password').value;

    //display the out via console
    console.log(password);

     //create a variable that receives the male input
    let male = document.getElementById('male').checked;

     //create a variable that receives the female input
    let female = document.getElementById('female').checked;

    
    //Use the if & else if condition to display my output in the console
    if(male == true) {
        console.log('male');
    } else if (female == true) {
        console.log('female');
    }
}

userInput();
