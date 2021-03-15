var num = Math.floor(Math.random() * 1000000).toString();
if (num.length == 5) {
  num = "0" + num;
}
function f1(strt, stre) {
  var strn = "";
  for (let i = 0; i < stre.length; i++) {
    if (strt.includes(stre[i])) {
      strn += stre[i];
    }
    strt =
      strt.substring(0, strt.indexOf(stre[i])) +
      strt.substring(strt.indexOf(stre[i]) + 1, strt.length);
  }

  return strn;
}

var myInput = "";
var j = 0;
var allButtons = document.getElementsByClassName("ligneOne");
var numbers = document.getElementsByClassName("numbers");
for (let c = 0; c < numbers.length; c++) {
  numbers[c].addEventListener("click", function () {
    if (this.id == "100") {
      for (let i = 0; i < allButtons.length; i++) {
        allButtons[i].innerHTML = "";
        allButtons[i].style.backgroundColor = "rgba(255, 255, 255, .2)";
        j = 0;
      }
      num = Math.floor(Math.random() * 1000000).toString();
      if (num.length == 5) {
        num = "0" + num;
      }
    } else if (this.id == "99") {
      if (j % 6 == "0") {
      } else {
        allButtons[j - 1].innerHTML = "";
        j--;
      }
    } else {
      allButtons[j].innerHTML = this.id;
      myInput += this.id;
      j++;
      if (j % 6 == 0) {
        var L = f1(num, myInput);
        for (let i = j - 6; i < j; i++) {
          var t = i % 6;
          if (allButtons[i].innerHTML == num[t]) {
            allButtons[i].style.backgroundColor = "rgb(41, 94, 129)";
            L =
              L.substring(0, L.indexOf(num[t])) +
              L.substring(L.indexOf(num[t]) + 1, L.length);
          }
        }
        for (let i = j - 6; i < j; i++) {
          if (allButtons[i].style.backgroundColor == "rgb(41, 94, 129)") {
            continue;
          }

          var t = i % 6;
          if (allButtons[i].innerHTML != num[t]) {
            allButtons[i].style.backgroundColor = "grey";
          }

          if (L.includes(allButtons[i].innerHTML)) {
            allButtons[i].style.backgroundColor = "rgb(182, 157, 77)";
            L =
              L.substring(0, L.indexOf(allButtons[i].innerHTML)) +
              L.substring(L.indexOf(allButtons[i].innerHTML) + 1, L.length);
          }
        }
      }
    }
  });
}
