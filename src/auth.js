function isLoginedIn()
{
    
    if(!localStorage.getItem("token").length)
    {
        location.href = '../index.html'
    }
}
isLoginedIn()

 function logout()
{
  localStorage.setItem('token', "");
  window.location.reload()
  
}
// console.log(document.getElementById("logoutBtn"))
document.getElementById("logoutBtn").addEventListener("click",ev=> {

  ev.preventDefault();
  console.log('hello')
  logout()

})
