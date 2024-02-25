document.addEventListener("DOMContentLoaded", function() {
  // Sample chat list data
  const chatListData = [
    { name: "John Doe" },
    { name: "Jane Smith" },
    { name: "Alice Johnson" }
  ];

  const chatList = document.getElementById("chat-list");

  // Populate the chat list
  chatListData.forEach((item, index) => {
    const listItem = document.createElement("li");
    listItem.classList.add("chat-list-item");
    listItem.textContent = item.name;
    chatList.appendChild(listItem);

    // Event listener for clicking on a chat list item
    listItem.addEventListener("click", function() {
      // Simulate opening chat with the selected person
      console.log("Opening chat with: " + item.name);
    });
  });
});
function navigateToChat(person) {
  // Redirect to the chat page with the selected person's name in the URL
  window.location.href = "chat.html?person=";
}

