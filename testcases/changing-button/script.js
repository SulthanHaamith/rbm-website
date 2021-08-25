const formValue = document.getElementById("newButtonName");
const changeButton = document.getElementById("updatingButton");

function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
}

window.onload = function(){
    formValue.id = uuidv4(); 
}

changeButton.onclick = function(){
  if(formValue.value.length > 0){
    changeButton.innerHTML = formValue.value;
  }else{
    changeButton.innerHTML = "Changing Button";  
  }
}
