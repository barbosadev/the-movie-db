import { shortDateMask } from "../../utils/dateMask.js";
import { roundVote } from "../../utils/roundVote";
import { useNavigate } from "react-router-dom";
import { RatingSm } from "../rating";

export const HorizontalList = ({ dataList }) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-nowrap overflow-x-scroll gap-6">
      {dataList.map((item, i) => (
        <div key={i} className="min-h-72 bg-opacity-50 min-w-36">
          <div className="relative">
            <img
              onClick={() => {
                navigate(`/${item.media_type}/${item.id}`);
              }}
              loading="lazy"
              className="rounded-xl cursor-pointer"
              alt={item.title}
              src={`https://image.tmdb.org/t/p/w220_and_h330_face${item.poster_path}`}
            />
            <RatingSm vote_average={roundVote(item.vote_average)} />
          </div>
          <h2
            onClick={() => {
              navigate(`/${item.media_type}/${item.id}`);
            }}
            className="font-bold mt-6 text-sm cursor-pointer hover:text-blue-400"
          >
            {item.title || item.name}
          </h2>
          <h3 className="text-sm text-gray-600">
            {shortDateMask(item.release_date || item.first_air_date)}
          </h3>
        </div>
      ))}
    </div>
  );
};
