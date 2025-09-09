let input1 = document.querySelector('.form-input');
let input2 = document.querySelector('.form-input1');
let btn = document.querySelector('.pomidor');


btn.addEventListener('click', (event)=>{
    event.preventDefault()
    if (input1.value == "23072307" && input2.value == "12345") {
        window.location.href = "about.html";
    }else(input1.value == "" && input2.value == ""); {
        alert("Такого аккаунта не существует!")
        console.log(input1.value)
       
}
 localStorage.setItem("login", input1.value);
 localStorage.setItem("password", input2.value);
    }

    
);
