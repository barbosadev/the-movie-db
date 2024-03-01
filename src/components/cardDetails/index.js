import { longDateMask } from "../../utils/dateMask";

export const CardDetails = ({
  program: {
    title,
    name,
    release_date,
    first_air_date,
    overview,
    media_type,
    id,
  },
  handleProgram,
}) => {
  return (
    <div className="flex flex-col justify-center gap-4 pr-4">
      <div>
        <div
          onClick={() => handleProgram(media_type, id)}
          className="font-bold text-lg cursor-pointer hover:text-gray-500"
        >
          {title || name}
        </div>
        <div className="text-gray-500 text-sm">
          {longDateMask(release_date || first_air_date)}
        </div>
      </div>

      <div className="text-sm line-clamp-2">{overview}</div>
    </div>
  );
};
