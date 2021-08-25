const new_window_button = document.getElementById("new-window");
var myWindow = null;
const first_window = window;
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

new_window_button.addEventListener('click',function (e) {

    if(myWindow == null || myWindow.closed) {
        myWindow = window.open("login.html","MsgWindow", "top=100,left=250,width=800,height=500");
        setTimeout( myWindow.onload=function(){
        const username = myWindow.document.getElementById('username');
        const password = myWindow.document.getElementById('password');
        const errormsg = myWindow.document.getElementById('error-msg');
        const submit = myWindow.document.getElementById('submit-form');

          submit.addEventListener('click',function(e){
            submit.disabled = true;
          if(checkRequired([username,password]) || checkPassword(password)){
            submit.disabled = false;
            errormsg.style.display ="block";
            errormsg.innerText = error;
          }else{
            errormsg.style.display ="none";
            setTimeout(function(){ 
              myWindow.close(); 
              window.location.href = "../../websites/creative/home.html";
            }, 2000);
          }
        });
        }, 2000 );
         
    } else {
        myWindow.focus();
    }
});



