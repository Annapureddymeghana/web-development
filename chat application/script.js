const messagesContainer = document.querySelector('.chat-messages');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');

sendButton.addEventListener('click', () => {
    const message = messageInput.value;
    if (message) {
        // Display user's message
        const userMessage = document.createElement('div');
        userMessage.classList.add('message', 'user-message');
        userMessage.textContent = message;
        messagesContainer.appendChild(userMessage);

        // Simulate bot's response (replace with actual bot logic)
        setTimeout(() => {
            const botMessage = document.createElement('div');
            botMessage.classList.add('message', 'bot-message');
            botMessage.textContent = "Bot's response: " + message; // Replace with actual bot response
            messagesContainer.appendChild(botMessage);
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
        }, 1000);

        messageInput.value = '';
    }
});

