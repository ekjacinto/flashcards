type PrevButtonProps = {
  event: () => void;
};

const PrevButton = ({ event }: PrevButtonProps) => {
  return (
    <div className="flex justify-center h-8">
      <div className="bg-white w-[64px] h-8 flex justify-center items-center rounded-full">
        <button className="text-black text-lg font-bold w-full" onClick={event}>
          {"<"}
        </button>
      </div>
    </div>
  );
};

export default PrevButton;
