document.addEventListener("DOMContentLoaded", function() {
    const contactDetails = document.getElementById('contactDetails');
    const contactsHeader = document.getElementById('contactsHeader');
    const newContactNameInput = document.getElementById('newContactName');
    const addContactButton = document.getElementById('addContactButton');
    const addContactContainer = document.getElementById('addContactContainer');
    const revealAddContactButton = document.getElementById('revealAddContact');

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
});

