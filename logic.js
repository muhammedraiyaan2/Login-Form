let btn=document.getElementById('btn')
btn.addEventListener("click",function(){
    let user=document.getElementById('userId')
    let password=document.getElementById('password')
    localStorage.setItem("userIds",user.value)
    localStorage.setItem("passwords",password.value)
    document.write(`<h1 style="color:green; text-align:center;">
Successfully saved your user id and password</h1>`)
    document.write(`<h1>your user name is</h1>`,localStorage.getItem("userIds")+"<br>");
    document.write(`<h1>your password is</h1>`,localStorage.getItem("passwords"))
})
