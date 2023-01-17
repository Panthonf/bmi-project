export default function BMI() {
  var h = document.getElementById("h").value;
  var w = document.getElementById("w").value;

  var bmi = w / (h * h);
  var bmio = bmi.toFixed(2);

  if (h.length === 0 || w.length === 0) {
    document.getElementById("result").style.color = "red";
    document.getElementById("result").innerHTML =
      "! กรุณาใส่ส่วนสูงและนำ้หนักให้ครบถ้วน";
  }else {
    document.getElementById("result").style.color = "blue";
    document.getElementById("result").innerHTML =
      "ดัชนีมวลกายของคุณ คือ " + bmio;
  }
}
