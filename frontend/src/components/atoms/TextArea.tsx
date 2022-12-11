type Props = {
  setText: (text: string) => void;
};

const TextArea: React.FC<Props> = (props) => {
  const { setText } = props;
  return (
    <textarea
      id="message"
      className="block p-2.5 w-full h-40 text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder="分析したい文章をここに入力"
      onChange={(e) => setText(e.target.value)}
    ></textarea>
  );
};

export default TextArea;
