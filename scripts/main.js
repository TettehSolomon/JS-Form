//create a function
function userInput() {
    
   if (document.getElementById('radioOne').checked == true) {
    console.log('Personal');
   } else {
    console.log('Company');
   }

    let name = document.getElementById('name').value;
    console.log(name);

    let email = document.getElementById('email').value;
    console.log(email);

    let password = document.getElementById('password').value;
    console.log(password);

    // let male = document.getElementById('male').value;
    // console.log(male);

    // let female = document.getElementById('female').value;
    // console.log(female);

}

userInput();
