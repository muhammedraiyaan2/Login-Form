let btn=document.getElementById('btn')
btn.addEventListener("click",function(){
    let user=document.getElementById('userId')
    let password=document.getElementById('password')
    localStorage.setItem("userId",user)
    localStorage.setItem("password",password)
    document.write(`<h1 style="color:green; text-align:center;">
Successfully saved your user id and password</h1>`)
    document.write(`<h1>your user name is</h1>`,user.value+"<br>");
    document.write(`<h1>your password is</h1>`,password.value)
})
