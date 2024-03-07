type PrevButtonProps = {
  event: () => void;
};

const PrevButton = ({ event }: PrevButtonProps) => {
  return (
    <div className="flex justify-center h-8">
      <div className="bg-white w-[48px] flex justify-center items-center rounded-[4px]">
        <button className="text-black font-bold w-full" onClick={event}>
          {"<"}
        </button>
      </div>
    </div>
  );
};

export default PrevButton;
