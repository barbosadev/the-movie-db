import { shortDateMask } from "../../utils/dateMask";
import { roundVote } from "../../utils/roundVote";
import { RatingSm } from "../rating";

export const ProgramCard = ({ program, handleProgram }) => {
  return (
    <div className="min-h-72 bg-opacity-50 min-w-36">
      <div className="relative">
        <img
          onClick={() => handleProgram(program.media_type, program.id)}
          loading="lazy"
          className="rounded-xl cursor-pointer"
          alt={program.title}
          src={`https://image.tmdb.org/t/p/w220_and_h330_face${program.poster_path}`}
        />
        <RatingSm vote_average={roundVote(program.vote_average)} />
      </div>
      <h2
        onClick={() => handleProgram(program.media_type, program.id)}
        className="font-bold mt-6 text-sm cursor-pointer hover:text-blue-400"
      >
        {program.title || program.name}
      </h2>
      <h3 className="text-sm text-gray-600">
        {shortDateMask(program.release_date || program.first_air_date)}
      </h3>
    </div>
  );
};
