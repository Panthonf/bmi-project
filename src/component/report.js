import "../App.css";
import React, { useState } from "react";
import logo1 from "../img/logo1.png";
import logo2 from "../img/logo2.png";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Report() {
  //form states
  const [name, setName] = useState("");
  const [walkCount, setWalkCount] = useState("");
  const [walkPic, setWalkPic] = useState([]);
  const [riceCount, setRiceCount] = useState("");
  const [date, setDate] = useState([]);

  //submit event
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      ชื่อ_นามสกุล: name,
      จำนวนก้าว: walkCount,
      จำนวนทัพพีต่อวัน: riceCount,
      วันที่: date,
    };
    axios
      .post(
        "https://sheet.best/api/sheets/764593b1-1d27-45d1-a937-dc456abd7216",
        data
      )
      .then((response) => {
        console.log(response);
        // clearing form fields
        setName("");
        setWalkCount("");
        setWalkPic([]);
        setRiceCount("");
        setDate("");
      });
    console.log(name, walkCount, walkPic, riceCount);
    window.alert("บันทึกข้อมูลแล้ว !!!");
  };

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

      <div className="flex justify-center">
        {/* Input Walk_count and rice_count */}
        <div className="flex justify-center">
          <div className="mt-4 max-w-min py-4 px-16 rounded-lg shadow">
            <diV className="text-xl font-semibold font-prompt text-blue-700 text-center">
              <p>รายงานข้อมูล</p>
            </diV>
            <form
              id="myForm"
              className="font-prompt text-blue-600 font-normal"
              onSubmit={handleSubmit}
            >
              <div className="text-left mt-2">
                <label>ชื่อ - นามสกุล</label>
              </div>
              <div className="mt-1">
                <input
                  name="full_name"
                  className="border-2 rounded-md border-blue-400"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  required
                />
              </div>
              <div className="mt-4">
                <label>วันที่</label>
              </div>
              <div className="mt-1">
                <input
                  type="date"
                  name="date"
                  className="border-2 rounded-md border-blue-400"
                  onChange={(e) => setDate(e.target.value)}
                  value={date}
                  required
                />
              </div>
              <div className="mt-4">
                <label>การออกกำลังกาย (จำนวนก้าว)</label>
              </div>
              <div className="mt-1">
                <input
                  name="walk_count"
                  type="number"
                  className="border-2 rounded-md border-blue-400"
                  onChange={(e) => setWalkCount(e.target.value)}
                  value={walkCount}
                  required
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
                <label>
                  การรับประทานอาหาร <br></br>
                  <p className="">(จำนวนทัพพีต่อวัน)</p>
                </label>
              </div>
              <div className="mt-1">
                <input
                  required
                  name="rice_count"
                  type="number"
                  className="border-2 rounded-md border-blue-400"
                  onChange={(e) => setRiceCount(e.target.value)}
                  value={riceCount}
                />
              </div>
              <div className="flex justify-center mt-4">
                <button
                  type="submit"
                  className="p-2 bg-blue-500 font-prompt text-sm hover:bg-green-500 text-white rounded-md"
                >
                  ส่งข้อมูล
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-2 font-prompt text-gray-500 italic underline">
        <Link to="/">BMI</Link>
      </div>
    </div>
  );
}
