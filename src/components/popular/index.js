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
      <div className="py-8 px-8 flex items-center gap-4 flex-wrap">
        <h1 className="text-2xl font-bold">{content.title}</h1>
        <DataSwitch
          options={content.switch_options}
          selectedOption={media}
          handleSwitch={handleSwitch}
        />
      </div>
      <div>
        <HorizontalList
          dataList={
            popularList[
              content.switch_options.findIndex(
                (option) => option.option === media
              )
            ]
          }
          media={media}
          handleProgram={handleProgram}
        />
      </div>
    </div>
  );
};
