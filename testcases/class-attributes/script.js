function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
}

window.onload = function(){
    let id = uuidv4();
    document.getElementById("id1").id=id;
    id = uuidv4();
    document.getElementById("id2").id=id;
    id = uuidv4();
    document.getElementById("id3").id=id;
    id = uuidv4();
    document.getElementById("id4").id=id;
}