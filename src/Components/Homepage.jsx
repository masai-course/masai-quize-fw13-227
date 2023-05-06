import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getQuiz } from "../Redux/ShortUrl/Action";

const Homepage = () => {
  const [category, setCategory] = useState(null);
 const [difficulty, setDifficulty] = useState(null);
 const dispatch = useDispatch();
 const { quize } = useSelector((store) => store);
 const navigate = useNavigate();
 
 const handleChange = (e) => {
   setDifficulty(null)
    setDifficulty(e.target.value);
 };
 
 const handleSubmit = () => {
  localStorage.setItem("difficulty",difficulty)
  localStorage.setItem("category",category)
  setTimeout(() => {
   navigate("/quiz")
  },0)
 }
  return (
    <div className="max-h-screen flex flex-col items-center justify-center">
      <div className="p-5 w-[60vh] rounded-md space-y-5 bg-teal-500 mt-[20vh]">
        <p className="mb-5 text-center text-xl font-bold">Masai Quiz!</p>
        <div className="flex space-x-5">
          <p>Category</p>
          <select
            onChange={(e) => setCategory(e.target.value)}
            className="outline-none py-1 rounded-sm px-2"
            name="quiz"
            id="quiz"
          >
            <option value="-----">select category</option>
            <option value="21">Sports</option>
            <option value="22">Geography</option>
            <option value="23">History</option>
            <option value="24">Politics</option>
          </select>
        </div>
        <div className="flex space-x-10">
          <p>Difficulty</p>
          <div>
            <input
              onChange={(e) => handleChange(e)}
              type="checkbox"
              id="vehicle1"
              name="easy"
              value="easy"
            />
            <label htmlFor="vehicle1"> Easy</label>
          </div>
          <div>
            <input
              onChange={(e) => handleChange(e)}
              type="checkbox"
              id="vehicle2"
              name="medium"
              value="medium"
            />
            <label htmlFor="vehicle2"> Medium</label>
          </div>
          <div>
            <input
              onChange={(e) => handleChange(e)}
              type="checkbox"
              id="vehicle3"
              name="hard"
              value="hard"
            />
            <label htmlFor="vehicle3"> Hard</label>
          </div>
        </div>
        <div className="flex space-x-4 items-center">
          <p>Number Of Questions</p>
          <p className="px-7 py-1 bg-slate-600 text-white rounded-md">10</p>
     </div>
     <div>
      <button
       onClick={handleSubmit}
       className="w-full py-2 rounded-md text-white bg-slate-600">Start</button>
     </div>
      </div>
    </div>
  );
};

export default Homepage;
