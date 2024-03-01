import { content } from "./content";
import { useSearch } from "./useSearch";
import { Header } from "../../components/header";
import { SearchInput } from "../../components/searchInput";
import { SearchPageCard } from "../../components/searchPageCard";

export const SearchPage = () => {
  const { resultList, handleProgram, searchText, setSearchText, handleSearch } =
    useSearch();

  return (
    <>
      <Header />
      <div className="py-2 px-6 shadow-lg">
        <SearchInput
          text={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          handleSearch={() => handleSearch(searchText)}
          content={content.searchContent}
        />
      </div>
      <div className="flex flex-col gap-4 px-10 py-8">
        {resultList.map((program, i) => (
          <SearchPageCard
            key={i}
            program={program}
            handleProgram={handleProgram}
          />
        ))}
      </div>
    </>
  );
};
