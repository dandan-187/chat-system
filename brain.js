document.getElementById('send-btn').addEventListener('click', function() {
    let inputField = document.getElementById('user-input');
    let message = inputField.value.trim();

    if (message !== '') {
        addMessage('You', message);
        inputField.value = '';  // Clear the input field
        saveMessage('You', message); // Save message to local storage
    }
});

document.getElementById('user-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        document.getElementById('send-btn').click();
    }
});

function addMessage(sender, message) {
    let chatBox = document.getElementById('chat-box');
    let messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.innerHTML = `<span>${sender}:</span> ${message}`;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;  // Auto scroll to the bottom
}

function saveMessage(sender, message) {
    let chatHistory = JSON.parse(localStorage.getItem('chatHistory')) || [];
    chatHistory.push({ sender: sender, message: message });
    localStorage.setItem('chatHistory', JSON.stringify(chatHistory));
}

function loadMessages() {
    let chatHistory = JSON.parse(localStorage.getItem('chatHistory')) || [];
    chatHistory.forEach(chat => {
        addMessage(chat.sender, chat.message);
    });
}

// Load previous messages when the page is loaded
window.onload = loadMessages;
