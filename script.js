const h1Box = document.getElementById("nameStorage")
const usernameBox = document.getElementById("username")
const clearBtn = document.getElementById("clear")
const displayBox = document.getElementById("displayName")
const saveBtn = document.getElementById("saveBtn")
const errorBox = document.getElementById("errorBox")

let username = "User"
let greeting

let now = new Date()
let hour = now.getHours()

if (hour < 12) {
    greeting = "Good Morning,"
} else if (hour < 18) {
    greeting = "Good Afternoon,"
} else {
    greeting = "Good Evening,"
}

if (window.localStorage.getItem("name")) { // checks if localStorage has a name key
    username = window.localStorage.getItem("name")
    h1Box.innerText =  `${greeting} ${username}!`
} else { // if no name key then we resort to the original string "User"
    h1Box.innerText =  `${greeting} ${username}!`
}

saveBtn.addEventListener("click", () => { // sets the display and sets localStorage key with value
    const inputValue = usernameBox.value.trim();

    if (inputValue === "") {
        errorBox.innerText = "Error: name cannot be empty.";
    } else {
        username = inputValue;
        window.localStorage.setItem("name", username);
        h1Box.innerText = `${greeting} ${username}!`;
        errorBox.innerText = ""
    }
});

clearBtn.addEventListener("click", () => { // reverts display name back to "User" , and removes the item from localStorage
    username = "User"
    window.localStorage.removeItem("name")
    h1Box.innerText =  `${greeting} ${username}!`
})