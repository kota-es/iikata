import {useNavigate} from 'react-router-dom'
import SubmitButton from "../components/atoms/RoundedButton";
import TextArea from "../components/atoms/TextArea";

type HomeType = {
  analyze: () => Promise<void>,
  setText: React.Dispatch<React.SetStateAction<string>>,
}

const Home = ({analyze, setText}: HomeType) => {
  const navigate = useNavigate()

  const executeAnalyze = async () => {
    await analyze()
    navigate('/result')

  }

  return (
    <main className="container mx-auto px-5">
      <div className="w-full mx-auto xl:w-3/4 pt-10">
        <TextArea setText={setText} />
        <div className="mt-5 w-fit mx-auto">
          <SubmitButton text={"分析する"} func={executeAnalyze} />
        </div>
      </div>
    </main>
  );
};

export default Home;
