
let signup =()=>{
    let nam=document.querySelector("#firstname").value
    let last=document.querySelector("#lastname").value
    let email=document.querySelector("#email-inp").value
    let pass=document.querySelector("#pass-inp").value
    let er=document.querySelector("#er")
    if(nam==""){
         er.innerHTML.color="red"
        er.innerHTML="fill the input field"
        return false
    }
else if( last=="" ){
     er.innerHTML.color="red"
    er.innerHTML="fill the input field"
    return false
}

else if( email=="" ){
     er.innerHTML.color="red"
    er.innerHTML="fill the input field"
    return false
}
if( pass=="" ){
    er.innerHTML="fill the input field"
     er.innerHTML.color="red"
    return false
}

else if(!(pass.match(/[1234567890]/)&&pass.match(/[!@#$%^&*()]/)&&pass.match(/[a-z]/)&&pass.match(/[A-Z]/)) ){
    er.innerHTML="Please create strong password"
    er.innerHTML.color="red"
    return false
}


localStorage.setItem("name",nam)
localStorage.setItem("lastname",last)
localStorage.setItem("email",email)
localStorage.setItem("password",pass)

location.href="login.html"

return false

}

let login =()=>{
    // let n =document.querySelector("#name").value
    // let l=document.querySelector("#lname").value
    let e=document.querySelector("#semail").value
    let p=document.querySelector("#spass").value
    let er=document.querySelector("#err")

 // let lfname=localStorage.getItem("name")
// let lsname=localStorage.getItem("lastname")
let lsemail=localStorage.getItem("email")
let lspass=localStorage.getItem("password")

if( e==lsemail && p==lspass)
    location.href="homepagge.html"

return false

}


