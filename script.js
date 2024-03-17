document.getElementById('monokai').addEventListener('click', function() {
    document.documentElement.style.setProperty('--background-color', '#272822');
    document.documentElement.style.setProperty('--text-color', '#F8F8F2');
    document.documentElement.style.setProperty('--button-background', '#66D9EF');
    document.documentElement.style.setProperty('--button-text', '#272822');
});

document.getElementById('solarized').addEventListener('click', function() {
    document.documentElement.style.setProperty('--background-color', '#fdf6e3');
    document.documentElement.style.setProperty('--text-color', '#002b36');
    document.documentElement.style.setProperty('--button-background', '#268bd2');
    document.documentElement.style.setProperty('--button-text', '#fdf6e3');
});

document.getElementById('gruvbox').addEventListener('click', function() {
    document.documentElement.style.setProperty('--background-color', '#282828');
    document.documentElement.style.setProperty('--text-color', '#ebdbb2');
    document.documentElement.style.setProperty('--button-background', '#83a598');
    document.documentElement.style.setProperty('--button-text', '#282828');
});

document.addEventListener("DOMContentLoaded", function() {
    const contactDetails = document.getElementById('contactDetails');
    const contactsHeader = document.getElementById('contactsHeader');
    const newContactNameInput = document.getElementById('newContactName');
    const addContactButton = document.getElementById('addContactButton');
     const addContactContainer = document.getElementById('addContactContainer');
    const revealAddContactButton = document.getElementById('revealAddContact');


         // Event listener for revealing the add contact input field and button
    revealAddContactButton.addEventListener('click', function() {
        addContactContainer.classList.toggle('hidden');
    });

    // Function to add a new contact name
    function addContactName(name) {
        // Create a new div for the contact name
        const contactNameDiv = document.createElement('div');
        contactNameDiv.classList.add('contact-name');
        contactNameDiv.textContent = name;

        // Append the new contact name to the contact details div
        contactDetails.appendChild(contactNameDiv);
    }

    // Example usage of addContactName function
    addContactName('Jane Doe');
    addContactName('Alice Smith');

    // Toggle visibility of contact details when clicking on "Contacts" header
    contactsHeader.addEventListener('click', function() {
        contactDetails.classList.toggle('expanded');
    });

    // Event listener to add a new contact when the button is clicked
    addContactButton.addEventListener('click', function() {
        const newContactName = newContactNameInput.value.trim(); // Get input value and remove leading/trailing spaces
        if (newContactName !== '') {
            addContactName(newContactName);
            newContactNameInput.value = ''; // Clear input field after adding the contact
        }
    });
});

