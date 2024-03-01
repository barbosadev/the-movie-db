import { Header } from "../../components/header";
import { SearchPageCard } from "../../components/searchPageCard";
import { useSearch } from "./useSearch";

export const SearchPage = () => {
  const { resultList, handleProgram } = useSearch();

  return (
    <>
      <Header />
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
