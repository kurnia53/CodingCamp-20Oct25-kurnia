welcomeSpeech();

function welcomeSpeech() {
    /// Show prompt to ask name
    let name = prompt ("Please enter your name:");

    // Greet the user with their name
    document.getElementById("greet-name").innerHTML = 'Hi' + ', ' + name + '! ';
}

function validateForm() {

    /// Get form values
    const name = document.getElementById('name-input').value;
    const email = document.getElementById('email-input').value;
    const message = document.getElementById('message-input').value;

   ///Check if any field is empty
    if (name === '' || email === '' || message === '') {
        alert('All fields are required!');
    } else {
        alert('Thank you for your message, ' + name + 'your message has been submitted successfully!');
    }
    
}