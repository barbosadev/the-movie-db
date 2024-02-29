import { shortDateMask } from "../../utils/dateMask.js";
import { roundVote } from "../../utils/roundVote";
import { useNavigate } from "react-router-dom";
import { RatingSm } from "../rating";
import { ProgramCard } from "../programCard/index.js";

export const HorizontalList = ({ dataList, handleProgram }) => {
  return (
    <div className="flex flex-nowrap overflow-x-scroll gap-6">
      {dataList.map((item, i) => (
        <ProgramCard key={i} program={item} handleProgram={handleProgram} />
      ))}
    </div>
  );
};
