const username = document.getElementById('username');
const email = document.getElementById('email');
const company = document.getElementById('company');

function checkRequired(inputArr) {
    let isRequired = false;
    inputArr.forEach(function(input) {
      if (input.value.trim() === '') {
        isRequired = true;
      }
    });
  
    return isRequired;
}

function checkLength(input, min, max) {
  if (input.value.length >= min && input.value.length <= max) {
    return true;
  }else {
    return false;
  }
}

function checkEmail(input) {
  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (emailRegex.test(input.value.trim())) {
    return true;
  } else {
    return false;
  }
}
document.getElementById("submit-form").onclick = function () {
    document.getElementById("submit-form").disabled = true;
    if(checkRequired([username,company,email]) || !checkLength(username, 1, 50) || !checkLength(company, 1, 50) || !checkEmail(email)){
      setTimeout(function(){ location.href = "failed.html"; }, 5000);    
    }else{
      setTimeout(function(){ location.href = "success.html"; }, 5000);
    }
};