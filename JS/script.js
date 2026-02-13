welcomeMessage()

// Welcome Message Function
function welcomeMessage() {
    // Show pop up message
    let name = prompt("Welcome to Roni's Portfolio! What is your name?");

    // validate name input
    console.log("User's name is: " + name);

    if (name == null || name.trim() === "") {
        // if user cancels or inputs empty string, set default name "Guest"
        name = "Guest";
    }
    // diplay welcome message
    document.getElementById('welcome-speech').innerHTML = `Hello, <ins><span style="color: blue;">${name}</span></ins><br>Welcome To My Website!`;
}

function validateForm() {
    
}

function handleFormSubmit(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Buat elemen untuk menampilkan data
    const resultDiv = document.createElement('div');
    resultDiv.className = 'mt-4 p-4 bg-green-100 border border-green-400 rounded';
    resultDiv.innerHTML = `
        <h3 class="font-bold mb-2">Data Terkirim!</h3>
        <p><strong>Nama:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Pesan:</strong> ${message}</p>
    `;
    
    // Tampilkan di bawah form
    const form = document.querySelector('form');
    form.appendChild(resultDiv);
}

document.addEventListener('DOMContentLoaded', function() {
    const submitButton = document.querySelector('button[type="button"]');
    submitButton.addEventListener('click', handleFormSubmit);
});