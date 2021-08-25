function setDisabled() {
    document.getElementById("btn-counter").disabled = false;
}

window.onload = function() {
    window.setTimeout(setDisabled, 10000);
}