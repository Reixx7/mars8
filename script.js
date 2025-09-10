let input1 = document.querySelector('.form-input');
let input2 = document.querySelector('.form-input1');
let btn = document.querySelector('.pomidor');


btn.addEventListener('click', (event)=>{
    event.preventDefault()
    if (input1.value == localStorage.getItem("login") && input2.value == localStorage.getItem("password")) {
        window.location.href = "about.html";
    }else {
        alert("Такого аккаунта не существует!")
        console.log(input1.value)
       
}
 localStorage.setItem( "login","23072307");
 localStorage.setItem("password","12345" );
   

 
}
    
);
