import { DataSwitch } from "../dataSwitch";
import { content } from "./content";
import { HorizontalList } from "../horizontalList";

export const MostPopular = ({ popularList }) => {
  return (
    <div className="mb-10">
      <div className="py-8 px-8 flex items-center gap-4">
        <h1 className="text-2xl font-bold">{content.title}</h1>
        <DataSwitch texts={content.switch_texts} activeText="Na TV" />
      </div>
      <div className="pl-10">
        <HorizontalList dataList={popularList} />
      </div>
    </div>
  );
};
