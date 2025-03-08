document.getElementById('send-btn').addEventListener('click', function() {
    let inputField = document.getElementById('user-input');
    let message = inputField.value.trim();

    if (message !== '') {
        addMessage('You', message);
        inputField.value = '';  // Clear the input field
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
