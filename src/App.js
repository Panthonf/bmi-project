import "./App.css";
import BMI from "./component/bmi";
import React from "react";
import logo1 from "./img/logo1.png";
import logo2 from "./img/logo2.png";
import bmi1 from "./img/bmi1.jpg";


function App() {
  

  return (
    <div className="mb-4">
      <div className="flex justify-center mt-2 ml-8">
        <img src={logo1} alt="logo1" className="mx-2 h-20 my-auto"></img>
        <img src={logo2} alt="logo2" className="h-20 mt-8 my-auto"></img>
      </div>
      <div className="font-prompt mt-2 text-blue-900">
        <h1 className="flex justify-center text-sm mx-2 sm:text-base">
          วิทยาลัยพยาบาลบรมราชชนนีสวรรค์ประชารักษ์ นครสวรรค์
        </h1>
        <h1 className="flex justify-center text-xs sm:text-sm">
          สถาบันพระบรมราชชนก
        </h1>
      </div>
      <div className="flex justify-center font-prompt">
        <div className="mt-4 max-w-min py-2 px-16 rounded-lg shadow">
          <div className="font text-blue-700 mt-4 font-sans">
            <h2 className="font-bold flex justify-center text-lg text-center">
              คำนวณค่าดัชนีมวลกาย
            </h2>
            <h2 className="font-bold flex justify-center text-base text-center">
              (Body Mass Index)
            </h2>
            <p class="text" className="mt-4">
              นำ้หนัก (กิโลกรัม)
            </p>
            <input
              type="text"
              id="w"
              className="my-2 rounded-md border-2 border-blue-300 p-2"
            />
            <p class="text" className="mt-4">
              ส่วนสูง (เซนติเมตร)
            </p>
            <input
              type="text"
              id="h"
              className="my-2 rounded-md border-2 border-blue-300 p-2"
            />

            <div className="flex justify-center my-2">
              <button
                id="btn"
                onClick={BMI}
                className="font-extrabold rounded-md bg-blue-600 p-2 mt-2 text-blue-50 hover:bg-green-500"
              >
                คำนวณ
              </button>
            </div>
          </div>
          <p id="result" className="flex justify-center"></p>
          <p id="level" className="flex justify-center mt-2 font-semibold "></p>
          <p
            id="level2"
            className="flex justify-center mt-2 font-semibold "
          ></p>
        </div>
      </div>
      
      <div className="flex justify-center mt-4">
        <img src={bmi1} alt="bmi-level" className="w-96 rounded-md"></img>
      </div>
    </div>
  );
}

export default App;
