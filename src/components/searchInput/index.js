export const SearchInput = ({ text, onChange, handleSearch, content }) => {
  return (
    <div>
      <input
        onChange={onChange}
        className="w-full h-12 rounded-full px-6 focus:outline-0 text-gray-500"
        type="text"
        name="search"
        value={text}
        placeholder={content.inputPlaceholder}
      />
      <button
        onClick={handleSearch}
        className="bg-gradient-to-r from-green-400 to-sky-400 px-6 rounded-full h-12 text-white font-bold absolute right-5 hover:text-black text-sm"
      >
        {content.buttonText}
      </button>
    </div>
  );
};
