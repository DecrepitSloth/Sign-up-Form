let pass = document.getElementById("password")
let conPass = document.getElementById("confirm-password")

function match() {
    if (pass.value === conPass.value) {
        document.getElementById("password-error").textContent = "";
        conPass.setCustomValidity("");
    } else {
        document.getElementById("password-error").textContent = "* Passwords do not match";
        conPass.setCustomValidity("Passwords must match!");
    };
}