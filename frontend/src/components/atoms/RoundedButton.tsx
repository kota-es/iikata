type Props = {
  text: string;
  func?: () => unknown;
};

const RoundedButton: React.FC<Props> = (props) => {
  const { text, func } = props;
  return (
    <button
      className="bg-green-600 hover:bg-green-500 text-white rounded px-4 py-2"
      onClick={func}
    >
      {text}
    </button>
  );
};

export default RoundedButton;
