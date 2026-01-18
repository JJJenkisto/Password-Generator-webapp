const passwordBox = document.getElementById("password");
const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@#$%^&*()_+{}[]<>/-=";

const allChar = upperCase + lowerCase + number + symbol;

//create the password
function createPassword() {
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while (length > password.length) {
        password += allChar[Math.floor(Math.random() *  allChar.length)]
    }
    passwordBox.value = password;
}
//copy the generated password
function copyPassword() {
    passwordBox.select();
    document.execCommand("copy"); 

}

//save the password
function savePassword() {
    const password = passwordBox.value;
    if (!password) {
        alert("Generate your password first.")
        return;
    }
    const blob = new Blob([password], { type: "text/plain" });
    const element = document.createElement("a");
    element.href = URL.createObjectURL(blob);
    element.download = "pass.txt";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);

    alert("Password Saved!")
    console.log("Password Saved.")
}
