import { DataSwitch } from "../dataSwitch";
import { dateMask } from "../../utils/dateMask.js";
import { roundVote } from "../../utils/roundVote";
import { content } from "./content";
import { HorizontalList } from "../horizontalList";

export const Trending = ({ trendingList }) => {
  return (
    <div className="mb-10">
      <div className="py-8 px-8 flex items-center gap-4">
        <h1 className="text-2xl font-bold">{content.title}</h1>
        <DataSwitch texts={content.switch_texts} activeText="Hoje" />
      </div>
      <div
        style={{
          backgroundImage: `url('https://www.themoviedb.org/assets/2/v4/misc/trending-bg-39afc2a5f77e31d469b25c187814c0a2efef225494c038098d62317d923f8415.svg')`,
          backgroundPosition: "50% 80px",
        }}
        className="pl-10 bg-no-repeat bg-cover"
      >
        <HorizontalList dataList={trendingList} />
      </div>
    </div>
  );
};
