const username = document.getElementById('username');
const password = document.getElementById('password');

const errormsg = document.getElementById('error-msg');

function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

window.onload = function(){
  let id = uuidv4();
  // document.getElementById("id1").innerHTML = "ID is " + id;
  document.getElementById("username").id=id;
  id = uuidv4();
  // document.getElementById("id2").innerHTML = "ID is " + id;
  document.getElementById("password").id=id;
}

var error = "Error Occurred!";

function getErrorMessage(input){
  return input.name.charAt(0).toUpperCase() + input.name.slice(1) + " cannot be Empty!";
}

function checkRequired(inputArr) {
    var isReq = false;
    inputArr.forEach(function(input) {
      if (input.value.trim() === '') {
        error = getErrorMessage(input);
        isReq =  true;
      }
    });
    return isReq;
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
    if(checkRequired([username]) || checkPassword(password)){
      document.getElementById("submit-form").disabled = false;
      errormsg.style.display ="block";
      errormsg.innerText = error;
    }else{
      errormsg.style.display ="none";
      setTimeout(function(){ window.location.href = "../../../websites/acme/index.html"; }, 15000);
    }
};