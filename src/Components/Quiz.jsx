import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getQuiz } from "../Redux/ShortUrl/Action";
import "./Quiz.css";
import SimpleBackdrop from "./SimpleBackDrop";

const Quiz = () => {
  const dispatch = useDispatch();
  const { quiz } = useSelector((store) => store);
  const difficulty = localStorage.getItem("difficulty");
  const category = localStorage.getItem("category");
  const [start, setStart] = useState(0);
  const navigate = useNavigate();
  const [buttonName, setButtonName] = useState("Next Que");
  const [flag, setFlag] = useState(null);
  const [flag1, setFlag1] = useState(null);
  const [flag2, setFlag2] = useState(null);
  const [flag3, setFlag3] = useState(null);
  const [open, setOpen] = useState(true);
  const [currectAns, setCorrectAns] = useState(0);
  const [isSelect, setIsSelect] = useState(false);

  useEffect(() => {
    dispatch(getQuiz({ category, difficulty }));
  }, []);

  useEffect(() => {
    if (quiz.quiz) setOpen(false);
  }, [quiz.quiz]);

  console.log("quize page", difficulty, category, "---", quiz);

  const handleStart = () => {
    setStart(start + 1);
    setFlag(null);
    setFlag1(null);
    setFlag2(null);
    setFlag3(null);
    setIsSelect(false);
    if (start === quiz.quiz?.length - 2) {
      setButtonName("submit");
    } else {
      setButtonName("Next Que");
    }

    if (buttonName === "submit") {
      localStorage.setItem("currectAns", currectAns);
      localStorage.setItem("totalQuestion", quiz.quiz.length);
      setTimeout(() => {
        navigate("/result");
      }, 0);
    }
  };

  const handleClose = () => {};
  const handleToggle = () => {};
  const handleSelect = () => {
    setIsSelect(true);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center ">
      <div>
        {quiz.quiz &&
          quiz.quiz?.slice(start, start + 1).map((item) => (
            <div
              key={item._id}
              className="shadow-lg shadow-blue-700 p-10 rounded-md w-[60vh]"
            >
              <h1 className="font-bold text-lg">
                {start + 1}. {item.question}
              </h1>
              <div className="mt-5 space-y-2">
                <div>
                  <button
                    disabled={isSelect}
                    onClick={() => {
                      if (item.incorrect_answers[1] === item.currect_answer)
                        setFlag1(true);
                      else setFlag1(false);
                      handleSelect();
                    }}
                    className={`${
                      flag1 ? "select" : flag1 === false ? "wrong" : ""
                    } p-2 cursor-pointer w-full text-left bg-[#caede9] rounded-md`}
                  >
                    {item.incorrect_answers[1]}
                  </button>
                </div>
                <div>
                  <button
                    disabled={isSelect}
                    onClick={() => {
                      if (item.incorrect_answers[2] === item.currect_answer)
                        setFlag2(true);
                      else setFlag2(false);
                      handleSelect();
                    }}
                    className={`${
                      flag2 ? "select" : flag2 === false ? "wrong" : ""
                    } p-2  cursor-pointer w-full text-left bg-[#caede9] rounded-md`}
                  >
                    {item.incorrect_answers[2]}
                  </button>
                </div>

                <div>
                  <button
                    disabled={isSelect}
                    onClick={() => {
                      setFlag(true);
                      setCorrectAns(currectAns + 1);
                      handleSelect();
                    }}
                    className={`${
                      flag ? "select" : flag === false ? "wrong" : ""
                    } p-2 cursor-pointer w-full text-left bg-[#caede9] rounded-md`}
                  >
                    {item.correct_answer}
                  </button>
                </div>

                <div>
                  <button
                    disabled={isSelect}
                    onClick={() => {
                      if (item.incorrect_answers[0] === item.currect_answer)
                        setFlag3(true);
                      else setFlag3(false);
                      handleSelect();
                    }}
                    className={`${
                      flag3 ? "select" : flag3 === false ? "wrong" : ""
                    } p-2  cursor-pointer w-full text-left bg-[#caede9] rounded-md`}
                  >
                    {item.incorrect_answers[0]}
                  </button>
                </div>
              </div>

              {quiz.quiz && (
                <div className="mt-10 flex justify-between px-2">
                  <p onClick={handleStart} className=" py-2 px-4">
                    {start + 1} of {quiz.quiz?.length} Question
                  </p>
                  <button
                    onClick={handleStart}
                    className="bg-blue-500 rounded-md py-2 px-4 text-white"
                  >
                    {buttonName}
                  </button>
                </div>
              )}
            </div>
          ))}
      </div>
      <SimpleBackdrop
        open={open}
        handleClose={handleClose}
        handleToggle={handleToggle}
      />
    </div>
  );
};

export default Quiz;
