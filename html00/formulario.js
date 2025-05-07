console.log("inicio")

function muestra(){
    let user = document.getElementById("user")
    let password = document.getElementById("password")
    
    console.log(user.value)
    console.log(password.value)
}

//callback
const boton = document.getElementById("boton")
//boton.addEventListener("click", muestra)

//funcion anonima tipo arrow
boton.addEventListener("click",
    () => {
        let user = document.getElementById("user")
        let password = document.getElementById("password")
    
        console.log(user.value)
        console.log(password.value)
    }
)