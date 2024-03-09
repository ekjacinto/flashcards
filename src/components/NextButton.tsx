type NextButtonProps = {
  event: () => void;
};

const NextButton = ({ event }: NextButtonProps) => {
  return (
    <div className="flex justify-center h-8">
      <div className="bg-white w-[64px] h-8 flex justify-center items-center rounded-full">
        <button className="text-black text-lg font-bold w-full" onClick={event}>
          {">"}
        </button>
      </div>
    </div>
  );
};

export default NextButton;
