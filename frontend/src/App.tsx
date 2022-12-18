import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import Home from "./pages/Home";
import Result from "./pages/Result";
import { useState } from "react";
import axios from "axios";

type ResultType = {
  strongest: string;
  scores: {
    subject: string;
    score: number;
  }[];
};

const App = () => {
  const [text, setText] = useState<string>("");
  const [result, setResult] = useState<ResultType>({
    strongest: "",
    scores: [],
  });

  const analyze = async () => {
    const res = await axios.post("http://localhost:3000/analysis", {
      text: text,
    });

    const result = makeResult(res.data);
    setResult(result);
  };

  const makeResult = (res: any) => {
    console.log(res);
    const result = res.ResultList[0];
    const strongest = result.Sentiment;
    const data = result.SentimentScore;
    const scores = Object.keys(data).map((key: string) => {
      return {
        subject: key,
        score: Math.round(data[key] * 100),
      };
    });
    return {
      strongest,
      scores,
    };
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home analyze={analyze} setText={setText} />} />
          <Route
            path="result"
            element={<Result result={result} text={text} />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
