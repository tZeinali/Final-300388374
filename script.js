// get the date from the input field
function getDate() {
  return document.getElementById("birthday").value;
}

function start() {
  var countDownDate = new Date(getDate()).getTime();
  var x = setInterval(function () {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    var deciseconds = Math.floor((distance % 1000) / 100);
    document.getElementById("demo").innerHTML =
      days +
      " <sub>days</sub> " +
      hours +
      " <sub>hrs</sub> " +
      minutes +
      " <sub>mins</sub> " +
      seconds +
      " <sub>secs</sub> " +
      deciseconds +
      " <sub>dicsecs</sub>";
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("demo").innerHTML = "Date is EXPIRED";
    }
  }, 100);
}
