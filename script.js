document.addEventListener("DOMContentLoaded", function() {
    const contactDetails = document.getElementById('contactDetails');
    const contactsHeader = document.getElementById('contactsHeader');
    const newContactNameInput = document.getElementById('newContactName');
    const addContactButton = document.getElementById('addContactButton');
    const addContactContainer = document.getElementById('addContactContainer');
    const revealAddContactButton = document.getElementById('revealAddContact');
   const chatBox = document.getElementById('chatBox'); // Select the chat box element

    // Initialize message count
    let messageCount = 0;

    function createMessage(isSelf, text) {
        // Define constants for message structure elements
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message');

        const messageContentDiv = document.createElement('div');
        messageContentDiv.classList.add('message-content');

        const lineNumberDiv = document.createElement('div');
        lineNumberDiv.classList.add('line-number');

        const textDiv = document.createElement('div');
        textDiv.classList.add('text');
        textDiv.textContent = text;

        const placeholderDiv = document.createElement('div');
        placeholderDiv.classList.add('placeholder');
        placeholderDiv.textContent = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});

        // Increment message count and set it as the line number
        messageCount++;
        lineNumberDiv.textContent = messageCount;

        // Customize elements according to parameters
        messageDiv.classList.add(isSelf ? 'self' : 'other');
        lineNumberDiv.classList.add(isSelf ? 'self' : 'other');

        // Append the elements to each other to form the structure
        messageContentDiv.appendChild(lineNumberDiv);
        messageContentDiv.appendChild(textDiv);
        messageContentDiv.appendChild(placeholderDiv); // Append placeholder div
        messageDiv.appendChild(messageContentDiv);

        // Append the new message to the chat box before the input-container div
        chatBox.appendChild(messageDiv);    
    }

    // Example usage:
    createMessage(true, "Hello, how are you?"); // Self message
    createMessage(false, "I'm good, thank you!"); // Other person's message
    createMessage(true, "What's up?"); // Self message

    revealAddContactButton.addEventListener('click', toggleAddContactContainer);
    contactsHeader.addEventListener('click', toggleContactDetails);
    addContactButton.addEventListener('click', addNewContact);

    // Example contacts
    addContactName('Jane Doe');
    addContactName('Alice Smith');

    function setTheme(background, text, buttonBackground, buttonText) {
        document.documentElement.style.setProperty('--background-color', background);
        document.documentElement.style.setProperty('--text-color', text);
        document.documentElement.style.setProperty('--button-background', buttonBackground);
        document.documentElement.style.setProperty('--button-text', buttonText);
    }

    function setMonokaiTheme() {
        setTheme('#272822', '#F8F8F2', '#66D9EF', '#272822');
    }

    function setSolarizedTheme() {
        setTheme('#fdf6e3', '#002b36', '#268bd2', '#fdf6e3');
    }

    function setGruvboxTheme() {
        setTheme('#282828', '#ebdbb2', '#83a598', '#282828');
    }

    document.getElementById('monokai').addEventListener('click', setMonokaiTheme);
    document.getElementById('solarized').addEventListener('click', setSolarizedTheme);
    document.getElementById('gruvbox').addEventListener('click', setGruvboxTheme);

    function toggleAddContactContainer() {
        addContactContainer.classList.toggle('hidden');
    }

    function toggleContactDetails() {
        contactDetails.classList.toggle('expanded');
    }

    function addContactName(name) {
        const contactNameDiv = document.createElement('div');
        contactNameDiv.classList.add('contact-name');
        contactNameDiv.textContent = name;
        contactDetails.appendChild(contactNameDiv);
    }

    function addNewContact() {
        const newContactName = newContactNameInput.value.trim();
        if (newContactName !== '') {
            addContactName(newContactName);
            newContactNameInput.value = '';
        }
    }

    // Function to handle adding a new message
    function addNewMessage() {
        const messageText = document.querySelector('.message-input').value.trim();
        if (messageText !== '') {
            createMessage(true, messageText); // Assuming it's a self message, change as needed
            document.querySelector('.message-input').value = ''; // Clear the message input after adding the message
        }
    }

    // Attach event listener to the send button to add a new message
    document.querySelector('.send-button').addEventListener('click', addNewMessage);
});

