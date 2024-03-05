type NextButtonProps = {
  event: () => void;
};

const NextButton = ({ event }: NextButtonProps) => {
  return (
    <div className="m-4 flex justify-center h-8">
      <div className="bg-white w-[48px] flex justify-center items-center rounded-[4px]">
        <button className="text-black font-bold w-full" onClick={event}>
          {">"}
        </button>
      </div>
    </div>
  );
};

export default NextButton;
