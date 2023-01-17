import "./App.css";
import BMI from "./component/bmi";

function App() {
  return (
    <div className="flex justify-center font-prompt">
      <div className="mt-8 max-w-min p-8 rounded-lg shadow-lg">
        <div className="font text-blue-700 font-sans">
          <h2 className="font-bold flex justify-center text-xl">คำนวณค่าดัชนีมวลกาย (BMI)</h2>
          <p class="text" className="mt-4">
            ส่วนสูง (เมตร)
          </p>
          <input
            type="text"
            id="h"
            className="my-2 rounded-md border-2 border-blue-300 p-2"
          />
          <p class="text" className="mt-2">
            นำ้หนัก (กิโลกรัม)
          </p>
          <input
            type="text"
            id="w"
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

          <p id="result" className="flex justify-center"></p>
        </div>
      </div>
    </div>
  );
}

export default App;
