import { DataSwitch } from "../dataSwitch";
import { HorizontalList } from "../horizontalList";

export const Trending = ({
  trendingList,
  handleProgram,
  content,
  period,
  handleSwitch,
}) => {
  return (
    <div className="mb-10">
      <div className="py-8 px-8 flex items-center gap-4 flex-wrap">
        <h1 className="text-2xl font-bold">{content.title}</h1>
        <DataSwitch
          options={content.switch_options}
          selectedOption={period}
          handleSwitch={handleSwitch}
        />
      </div>
      <div
        style={{
          backgroundImage: `url('https://www.themoviedb.org/assets/2/v4/misc/trending-bg-39afc2a5f77e31d469b25c187814c0a2efef225494c038098d62317d923f8415.svg')`,
          backgroundPosition: "50% 80px",
        }}
        className="bg-no-repeat bg-cover"
      >
        <HorizontalList
          dataList={
            trendingList[
              content.switch_options.findIndex(
                (option) => option.option === period
              )
            ]
          }
          handleProgram={handleProgram}
        />
      </div>
    </div>
  );
};
