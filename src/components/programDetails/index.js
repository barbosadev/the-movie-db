import { Rating } from "../rating";
import { minutesToHours } from "../../utils/time";
import { roundVote } from "../../utils/roundVote";
import "react-lazy-load-image-component/src/effects/blur.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { fullYearDateMask, numericDateMask } from "../../utils/dateMask";

export const ProgramDetails = ({ programData }) => {
  return (
    <div
      className="bg-no-repeat bg-cover"
      style={{
        backgroundImage: `url('https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${programData?.backdrop_path}')`,
        backgroundPosition: "left calc((50vw - 170px) - 340px) top",
      }}
    >
      <div
        className="top-16 h-100 w-full"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(157.5, 178.5, 199.5, 1) calc((50vw - 170px) - 340px), rgba(157.5, 178.5, 199.5, 0.84) 50%, rgba(157.5, 178.5, 199.5, 0.84) 100%)",
        }}
      >
        <div className="px-10 py-8 flex text-white gap-8 items-center flex-wrap md:flex-nowrap">
          {programData.poster_path !== null ? (
            <LazyLoadImage
              className="rounded-xl"
              effect="blur"
              alt={programData.title || programData.name}
              src={`https://media.themoviedb.org/t/p/w300_and_h450_bestv2${programData?.poster_path}`}
            />
          ) : (
            <div
              style={{
                backgroundColor: "#dbdbdb",
              }}
              className="h-96 w-64 flex items-center justify-center rounded-lg"
            >
              <LazyLoadImage
                alt={programData.title || programData.name}
                className="h-40 cursor-pointer"
                effect="blur"
                src={
                  "https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg"
                }
              />
            </div>
          )}

          <div className="flex flex-col gap-4">
            <div>
              <h1 className="text-4xl font-bold flex gap-2 flex-wrap">
                {programData.title || programData.name}
                <div className="font-light">
                  {`(${fullYearDateMask(
                    programData.release_date || programData.first_air_date
                  )})`}
                </div>
              </h1>
              <div>
                {numericDateMask(
                  programData.release_date || programData.first_air_date
                )}{" "}
                {programData?.genres?.map((genre) => genre.name).join(", ")}
                {programData.runtime && minutesToHours(programData.runtime)}
              </div>
            </div>
            <div className="flex w-36 gap-2 items-center">
              <Rating vote_average={roundVote(programData.vote_average)} />
              <div className="font-bold text-sm">Avaliação dos usuários</div>
            </div>
            <div className="italic font-light">{programData.tagline}</div>
            {programData.overview !== "" && (
              <>
                <div className="text-xl font-bold">Sinopse</div>
                <div className="text-base">{programData.overview}</div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
