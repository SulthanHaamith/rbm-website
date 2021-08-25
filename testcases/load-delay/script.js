const theButton = document.getElementById("delayButton")

// theButton.addEventListener("click", () => {
//     document.getElementById("Spinner").style.display = "flex";
//     setTimeout(function(){ location.href = "../loruki-website/index.html"; }, 50000);
// });

theButton.onclick = function () {
  document.getElementById("Spinner").style.display = "block";
  setTimeout(function(){ location.href = "../../websites/loruki/index.html"; }, 8000);
};