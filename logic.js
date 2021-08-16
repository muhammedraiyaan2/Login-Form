let btn=document.getElementById('btn')
btn.addEventListener("click",function(){
    let user=document.getElementById('userId')
    let password=document.getElementById('password')
    localStorage.setItem("userId",user)
    localStorage.setItem("password",password)
    document.write(`<h1 style="color:green; text-align:center;">
    Check
    the 
    console
    or 
    press ctrl + shift + i</h1>`)
    console.log(`your user name is`,user.value);
    console.log(`your password is`,password.value)
})