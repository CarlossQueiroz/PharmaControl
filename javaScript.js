const form = document.getElementById("form");
const email = document.getElementById("email");
const senha = document.getElementById("senha");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    checkForm();
})

email.addEventListener("blur",()=>{
    checkEmail();
})

senha.addEventListener("blur",()=>{
    checkSenha();
})

function checkEmail() {
    const emailValue = email.value;

    if (emailValue === "") {
        errorInput(email, "Email obrigatório!");
    } else {
        const formItem = email.parentElement;
        formItem.className = "textfield";
    }
}

function checkSenha() {
    const senhaValue = senha.value;

    if (senhaValue === "") {
        errorInput(senha, "Senha obrigatória!");
    } else if (senhaValue.length < 8) {
        errorInput(senha, "Senha precisa ter no mínimo 8 caracteres");
    } else {
        const formItem = senha.parentElement;
        formItem.className = "textfield";
    }
}

function errorInput(input, message) {
    const formItem = input.parentElement;
    const textMessage = formItem.querySelector("a");

    textMessage.innerText = message;
    formItem.className = "textfield error";
}

function checkForm() {
    checkEmail();
    checkSenha();

    const formItens = form.querySelectorAll(".textfield");
    const isValid = [...formItens].every((item) => {
            return item.className === "textfield";
        });

    if(isValid){
        alert("Login realizado com sucesso!");
    }
}