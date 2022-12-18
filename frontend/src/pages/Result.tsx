import { Link } from "react-router-dom";
import Chart from "../components/molecules";
import ResultComment from "../components/organisms/ResultComment";
import SubmitButton from "../components/atoms/RoundedButton";

type ResultType = {
  result: {
    strongest: string;
    scores: {
      subject: string;
      score: number;
    }[];
  };
  text: string;
};

const Result = ({ result, text }: ResultType) => {
  const { strongest, scores } = result;

  const copyText = async () => {
    try {
      await navigator.clipboard.writeText(text);
    } catch (e) {
      alert("テキストのコピーに失敗しました。");
    }
  };

  return (
    <div className="container mx-auto">
      <main className="container flex mx-auto py-10 px-3 flex-col xl:w-3/4 md:flex-row gap-5">
        <div className="md:w-1/2 p-3 border-2 border-gray-200 rounded-lg">
          <Chart scores={scores} className="max-w-full" />
        </div>
        <div className="md:w-1/2">
          <ResultComment scores={scores} strongest={strongest} />
        </div>
      </main>
      <div className="xl:w-3/4 mx-auto px-3">
        <button onClick={() => copyText()}>文章をコピーする</button>
        <div className="p-3 border-2 border-gray-200 rounded-lg">{text}</div>
        <div className="mt-3 w-fit mx-auto">
          <Link to="/">
            <SubmitButton text={"もう一度分析する"} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Result;
