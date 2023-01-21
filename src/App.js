import "./App.css";
import BMI from "./component/bmi";
import React, { useState } from "react";
import logo1 from "./img/logo1.png";
import logo2 from "./img/logo2.png";
import bmi1 from "./img/bmi1.jpg";
// import SubForm from "./component/subForm";
import axios from "axios";
function App() {

  //form states
  const [name,setName] = useState('');
  const [walkCount,setWalkCount] = useState('');
  const [walkPic,setWalkPic] = useState([]);
  const [riceCount,setRiceCount] = useState('');

  //submit event
  const handleSubmit=(e)=>{
    e.preventDefault();
    const data={
      Name:name,
      WalkCount:walkCount,
      WalkPic:walkPic,
      RiceCount:riceCount
    }
    axios.post('https://sheet.best/api/sheets/764593b1-1d27-45d1-a937-dc456abd7216',data).then((response)=>{
      console.log(response);
      // clearing form fields
      setName('');
      setWalkCount('');
      setWalkPic([]);
      setRiceCount('');
    })
    console.log(name,walkCount,walkPic,riceCount);
  }
 

  return (
    <div className="mb-4">
      <div className="flex justify-center mt-4 ml-8">
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
        <div className="mt-4 max-w-min py-4 px-16 rounded-lg shadow">
          <div className="font text-blue-700 font-sans">
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
                className="font-extrabold rounded-md bg-blue-600 p-2 m-2 text-blue-50 hover:bg-green-500"
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

      {/* Input Walk_count and rice_count */}
      <div className="flex justify-center">
        <div className="mt-4 max-w-min py-4 px-16 rounded-lg shadow">
          <diV className="my-2 text-xl font-semibold font-prompt text-blue-700 text-center">
            <p>รายงานข้อมูล</p>
          </diV>
          <form id="myForm" className="text-bold font-prompt text-blue-700">
            <div className="text-left">
              <label>ชื่อ นามสกุล</label>
            </div>
            <div className="mt-2">
              <input
                name="full_name"
                className="border-2 rounded-md border-blue-400"
                onChange={(e)=>setName(e.target.value)} value={name}
              />
            </div>
            <div className="mt-4">
              <label>จำนวนก้าวเดิน</label>
            </div>
            <div className="mt-2">
              <input
                name="walk_count"
                type="number"
                className="border-2 rounded-md border-blue-400"
                onChange={(e)=>setWalkCount(e.target.value)} value={walkCount}
              />
            </div>

            {/* <div className="mt-4">
              <label>รูปภาพจำนวนก้าวเดินจากแอพพลิเคชั่น</label>
            </div>
            <div className="mt-2">
              <input
                name="walk_count_pic"
                type="file"
                className="border-2 rounded-md border-blue-400 w-52"
                onChange={(e)=>setWalkPic(e.target.value)} value={walkPic}
                // onChange={(e)=>setWalkPic(e.target.value)} value={walkPic} 
              />
            </div> */}

            <div className="mt-4">
              <label>จำนวนการกินข้าว (ทัพพี)</label>
            </div>
            <div className="mt-2">
              <input
                name="rice_count"
                type="number"
                className="border-2 rounded-md border-blue-400"
                onChange={(e)=>setRiceCount(e.target.value)} value={riceCount}
              />
            </div>
          </form>
          <div className="flex justify-center mt-4">
            <button
              onClick={handleSubmit}
              className="p-2 bg-blue-500 font-prompt text-lg text-white rounded-md"
            >
              ส่งข้อมูล
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-4">
        <img src={bmi1} alt="bmi-level" className="w-96 rounded-md"></img>
      </div>
    </div>
  );
}

export default App;
