type FlashcardProps = {
  prompt?: string;
  text: string;
  event: () => void;
};

const Flashcard = ({ prompt, text, event }: FlashcardProps) => {
  return (
    <div
      className="h-[280px] w-[510px] flex justify-center items-center cursor-pointer"
      onClick={event}
    >
      {prompt !== undefined ? (
        <h1 className="text-3xl text-left">
          <b>{prompt}</b>
          <br />
          {text}
        </h1>
      ) : (
        <h1 className="text-3xl text-left">{text}</h1>
      )}
    </div>
  );
};

export default Flashcard;
