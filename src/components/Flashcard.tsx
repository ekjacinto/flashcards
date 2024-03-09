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
        <div className="text-left">
          <h1 className="text-3xl">
            <b>
              <u>{prompt}</u>
            </b>
          </h1>
          <br />
          <h1 className="text-2xl">{text}</h1>
        </div>
      ) : (
        <h1 className="text-3xl">{text}</h1>
      )}
    </div>
  );
};

export default Flashcard;
