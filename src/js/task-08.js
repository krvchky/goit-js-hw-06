const form = document.querySelector(".login-form");

form.addEventListener("submit",(event) => {
    event.preventDefault()


const {email,password} = event.currentTarget.elements;
if(email.value === "" || password.value === "") {
    alert("Заповніть,будь ласка,всі поля");
}

const objectByForm  = {
    email:email.value,
    password:password.value,
};
console.log("Обєкт із введенними данними:",objectByForm);
form.reset();
});