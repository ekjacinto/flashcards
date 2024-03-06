type FlashcardProps = {
  text: string;
  event: () => void;
};

const Flashcard = ({ text, event }: FlashcardProps) => {
  return (
    <div
      className="h-[280px] w-[560px] flex justify-center items-center cursor-pointer"
      onClick={event}
    >
      <h1 className="text-5xl font-bold">{text}</h1>
    </div>
  );
};

export default Flashcard;
