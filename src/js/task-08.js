// const form = document.querySelector(".login-form");

// form.addEventListener("submit",(event) => {
//     event.preventDefault()


// const {email,password} = event.currentTarget.elements;
// if(email.value === "" || password.value === "") {
//     alert("Заповніть,будь ласка,всі поля");
// }

// const objectByForm  = {
//     email:email.value,
//     password:password.value,
// };
// console.log("Обєкт із введенними данними:",objectByForm);
// form.reset();
// });

const form = document.querySelector(".login-form");

function onSubmit(evt) {
    evt.preventDefault();

    if(!form.password.value || !form.email.value) {
        alert("Заповніть,будь ласка,всі поля")
    } else {
        const elms = evt.currentTarget.elements;
        const email = elms.email.value;
        const password = elms.password.value;

        const regDataObject = { email, password}
        console.log(regDataObject)
        form.reset()
    }
}

form.addEventListener("submit", onSubmit)