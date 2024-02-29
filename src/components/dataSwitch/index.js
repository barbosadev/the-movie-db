export const DataSwitch = ({ texts, activeText }) => {
  return (
    <div
      className="flex items-center h-8 font-bold rounded-full border-black text-sm"
      style={{ borderWidth: "1px" }}
    >
      {texts.map((el, i) => (
        <div
          key={i}
          className={`${
            activeText === el && "bg-slate-800"
          } px-6 rounded-full h-full flex items-center`}
        >
          <button
            className={`${
              activeText === el &&
              "bg-gradient-to-r from-green-200 to-green-400 bg-clip-text text-transparent"
            }`}
          >
            {el}
          </button>
        </div>
      ))}
    </div>
  );
};
