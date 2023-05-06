import React from "react";
import { useNavigate } from "react-router-dom";
import "./Quiz.css";

const ResultPage = () => {
  const currectAns = localStorage.getItem("currectAns");
 const totalQuestion = localStorage.getItem("totalQuestion");
 const navigate = useNavigate();


  return (
    <div>
      <h1 className="text-center font-bold text-2xl mt-20 my-5">
        Your Final Result
      </h1>
      <div className="px-20 ">
        <table>
          <tr>
            <th>Correct answers count</th>
            <th>Incorrect answers count</th>
            <th>Total score</th>
            <th>Percentage</th>
          </tr>
          <tr>
            <td>{currectAns}</td>
            <td>{totalQuestion - currectAns}</td>
            <td>{currectAns}</td>
            <td>{(currectAns * 100) / totalQuestion}%</td>
          </tr>
        </table>
    </div>
    
    <div className="flex flex-col items-center mt-10">
     <button
      onClick={()=>navigate("/")}
      className="border-none bg-blue-500 cursor-pointer hover:bg-blue-700 text-white py-3 px-5 rounded-md">Start Again</button>
    </div>
    </div>
  );
};

export default ResultPage;
