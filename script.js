// Wait for the page to fully load
window.addEventListener('load', function () {
    // Hide the preloader after 3 seconds
    setTimeout(function () {
        document.querySelector('.loader1').style.display = 'none';
        // Display the popup buttons and adjust the elements
        displayPopupButtons();
    }, 5000); // Reduced the delay to 3 seconds

    // Function to display the popup buttons and adjust the elements
    function displayPopupButtons() {
        // Create a popup container
        const popupContainer = document.createElement('div');
        popupContainer.classList.add('popup-container');

        // Create three vertical buttons with different links
        const button1 = createButton('BODO', 'https://example.com/link1');
        const button2 = createButton('ENGLISH', 'https://40creep.github.io/orbi.github.io/');
        const button3 = createButton('HINDI', 'https://example.com/link3');

        // Append the buttons to the popup container
        popupContainer.appendChild(button1);
        popupContainer.appendChild(button2);
        popupContainer.appendChild(button3);

        // Append the popup container to the document body
        document.body.appendChild(popupContainer);

        // Adjust the margin and opacity of the text element (e.g., #row)
        const textElement = document.querySelector('#row');
        textElement.style.marginBottom = '100px'; // Adjust the margin as needed
       

        // Target another element and change its text content (e.g., #anotherElement)
        const anotherElement = document.querySelector('p');
        anotherElement.textContent = 'Choose your preferred language'; // Change text content
        anotherElement.style.fontSize = '21px'; // Change font size
        // You can adjust other properties as needed
    }

    // Function to create a button with a link
    function createButton(text, link) {
        const button = document.createElement('a');
        button.textContent = text;
        button.href = link;
        button.classList.add('animated-button');
        return button;
    }
});
