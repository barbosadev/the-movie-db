import { ProgramWithoutPhoto } from "../../components/programWithoutPhoto";
import { ProgramPhoto } from "../../components/programPhoto";
import { CardDetails } from "../../components/cardDetails";

export const SearchPageCard = ({ program, handleProgram }) => {
  return (
    <div
      className="rounded-lg border-gray-200 bg-white box-border flex gap-4"
      style={{
        borderWidth: "1px",
        boxShadow: "0 2px 8px rgba(0,0,0,.1)",
      }}
    >
      {program.poster_path !== null ? (
        <ProgramPhoto handleProgram={handleProgram} program={program} />
      ) : (
        <ProgramWithoutPhoto handleProgram={handleProgram} program={program} />
      )}

      <CardDetails program={program} handleProgram={handleProgram} />
    </div>
  );
};
