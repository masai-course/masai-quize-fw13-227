import { Route, Router, Routes } from "react-router-dom";
import Homepage from "./Components/Homepage";
import Quiz from "./Components/Quiz";
import ResultPage from "./Components/ResultPage";


function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/quiz" element={<Quiz />}></Route>
        <Route path="/result" element={<ResultPage/>}></Route>
     </Routes>
    </div>
  );
}

export default App;
