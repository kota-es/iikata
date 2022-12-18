import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-center items-center flex-col border-b-4 h-24">
      <Link to="/">
        <span className="text-3xl font-bold">IIKATA</span>
      </Link>
      <div>あなたの言葉に乗った感情は？</div>
    </div>
  );
};

export default Header;
