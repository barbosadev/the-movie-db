export const DataSwitch = ({ options, selectedOption, handleSwitch }) => {
  return (
    <div
      className="flex items-center h-8 font-bold rounded-full border-black text-sm"
      style={{ borderWidth: "1px" }}
    >
      {options.map((el, i) => (
        <div
          key={i}
          className={`${
            selectedOption === el.option && "bg-slate-800"
          } px-6 rounded-full h-full flex items-center`}
        >
          <button
            onClick={() => handleSwitch(el.option)}
            className={`${
              selectedOption === el.option &&
              "bg-gradient-to-r from-green-200 to-green-400 bg-clip-text text-transparent"
            }`}
          >
            {el.text}
          </button>
        </div>
      ))}
    </div>
  );
};
