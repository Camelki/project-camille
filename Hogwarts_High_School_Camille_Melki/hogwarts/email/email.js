let form = document.getElementById("formContact");
let email = document.getElementsByClassName("email");

function ValidateEmail() 
{
  if (email)
  {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.email.value))
    {
      return (true)
    }
  }
  alert("You forgot to put your email!")
  return (false)
}


form.addEventListener("submit", function(e) {
    e.preventDefault();
    if (ValidateEmail())
      alert("Thank you !");
});
