import { DataSwitch } from "../dataSwitch";
import { HorizontalList } from "../horizontalList";

export const MostPopular = ({
  popularList,
  handleProgram,
  content,
  media,
  handleSwitch,
}) => {
  return (
    <div className="mb-10">
      <div className="py-8 px-8 flex items-center gap-4">
        <h1 className="text-2xl font-bold">{content.title}</h1>
        <DataSwitch
          options={content.switch_options}
          selectedOption={media}
          handleSwitch={handleSwitch}
        />
      </div>
      <div className="pl-10">
        <HorizontalList dataList={popularList} handleProgram={handleProgram} />
      </div>
    </div>
  );
};
