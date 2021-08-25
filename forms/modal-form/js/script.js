const email = document.getElementById('email1');
const password = document.getElementById('password1');

const errormsg = document.getElementById('error-msg');

var error = "Error Occurred!";

function getErrorMessage(input){
  return input.type.charAt(0).toUpperCase() + input.type.slice(1) + " cannot be Empty!";
}

function checkEmail(mail) 
{
 if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail.value))
  {
    return false;
  }
    return true;
}
function checkPassword(password){
  if(password.value.toLowerCase() !== "rbm"){
    error = "Wrong Password!";
    return true;
  }
  return false;
}
document.getElementById("submit-form").onclick = function () {
    document.getElementById("submit-form").disabled = true;
    if(checkEmail(email) || checkPassword(password)){
      document.getElementById("submit-form").disabled = false;
      errormsg.style.display ="block";
      errormsg.innerText = error;
    }else{
      errormsg.style.display ="none";
      setTimeout(function(){ location.href = "../../../websites/loruki/index.html"; }, 5000);
    }
};
