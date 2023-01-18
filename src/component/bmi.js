export default function BMI() {
  var h = document.getElementById("h").value;
  var w = document.getElementById("w").value;

  var bmi = w / (((h / 100) * h) / 100);
  var bmio = bmi.toFixed(1);
  console.log(bmio);
  if (h.length === 0 || w.length === 0) {
    document.getElementById("result").style.color = "red";
    document.getElementById("result").innerHTML =
      "! กรุณาใส่ส่วนสูงและนำ้หนักให้ครบถ้วน";
  } else {
    document.getElementById("result").style.color = "blue";
    document.getElementById("result").innerHTML =
      "ดัชนีมวลกายของคุณ คือ " + bmio;
      document.getElementById("level").style.color = "blue";
      if (bmio >= 16.0 && bmio <= 16.9) {
        document.getElementById("level").innerHTML =
          "อยู่ในเกณฑ์ ผอมมาก ระดับสีเขียวแก่";
      } else if (bmio >= 17.0 && bmio <= 18.4) {
        document.getElementById("level").innerHTML =
          "อยู่ในเกณฑ์ ผอม ระดับสีเขียวอ่อน";
      } else if (bmio >= 18.5 && bmio <= 22.9) {
        document.getElementById("level").innerHTML =
          "อยู่ในเกณฑ์ นำ้หนักปกติ ระดับสีขาว";
      } else if (bmio >= 23.0 && bmio <= 24.9) {
        document.getElementById("level").innerHTML =
          "อยู่ในเกณฑ์ นำ้หนักเกิน ระดับสีเหลือง";
      } else if (bmio >= 25.0 && bmio <= 29.9) {
        document.getElementById("level").innerHTML = "อยู่ในเกณฑ์ อ้วน ระดับสีส้ม";
      } else if (bmio >= 30.0 && bmio <= 34.9) {
        document.getElementById("level").innerHTML =
          "อยู่ในเกณฑ์ อ้วนมาก ระดับสีแดง";
      } else if (bmio >= 35.0 && bmio <= 35.9) {
        document.getElementById("level").innerHTML =
          "อยู่ในเกณฑ์ อ้วนรุนแรง ระดับสีแดง";
      } else {
        document.getElementById("level").innerHTML = "ไม่สามารถแปรผลได้";
      }
  }

  
}
