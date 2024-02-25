document.addEventListener("DOMContentLoaded", function() {
    var messageInput = document.getElementById("message-input");
    var sendButton = document.getElementById("send-button");

    // Function to send message
    function sendMessage() {
        var message = messageInput.value.trim();
        if (message !== "") {
            var messageDiv = document.createElement("div");
            messageDiv.className = "message user";
            messageDiv.textContent = message;
            document.getElementById("chat-window").appendChild(messageDiv);
            messageInput.value = "";
            messageInput.focus();
            // Scroll to bottom of chat window
            document.getElementById("chat-window").scrollTop = document.getElementById("chat-window").scrollHeight;
        }
    }

    // Event listener for send button click
    sendButton.addEventListener("click", function() {
        sendMessage();
    });

    // Event listener for Enter key press
    messageInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            sendMessage();
        }
    });
});
