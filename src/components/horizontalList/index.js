import { ProgramCard } from "../programCard/index";

export const HorizontalList = ({ dataList, handleProgram, media }) => {
  return (
    <div className="px-8 flex flex-nowrap overflow-x-scroll gap-6 h-min-96">
      {dataList.map((item, i) => (
        <ProgramCard
          key={i}
          program={item}
          handleProgram={handleProgram}
          media={media}
        />
      ))}
    </div>
  );
};
