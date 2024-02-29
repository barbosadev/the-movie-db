import { useParams, useLocation } from "react-router-dom";
import { Header } from "../../components/header";
import { useEffect, useState } from "react";
import { getProgram } from "../../services/program";
import { getProgramCredits } from "../../services/programCredits";
import { roundVote } from "../../utils/roundVote";
import { minutesToHours } from "../../utils/time";
import { numericDateMask } from "../../utils/dateMask";
import { Rating } from "../../components/rating";

export const Program = () => {
  const { programId } = useParams();
  const { pathname } = useLocation();
  const [programData, setProgramData] = useState({});
  const [programCreditsData, setProgramCreditsData] = useState([]);
  const typeProgram = pathname.split("/")[1];

  useEffect(() => {
    Promise.all([
      getProgram(typeProgram, programId),
      getProgramCredits(typeProgram, programId),
    ]).then((values) => {
      setProgramData(values[0]);
      setProgramCreditsData(values[1].cast);
    });
  }, []);

  return (
    <>
      <Header />
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
          <div className="px-10 py-8 flex text-white gap-8 items-center">
            <img
              loading="lazy"
              className="rounded-xl"
              alt={programData.title || programData.name}
              src={`https://media.themoviedb.org/t/p/w300_and_h450_bestv2${programData?.poster_path}`}
            />
            <div className="flex flex-col gap-4">
              <div>
                <h1 className="text-4xl font-bold flex gap-2">
                  {programData.title || programData.name}
                  <div className="font-light">
                    (
                    {new Date(
                      programData.release_date || programData.first_air_date
                    ).getFullYear()}
                    )
                  </div>
                </h1>
                <div>
                  18{" "}
                  {numericDateMask(
                    programData.release_date || programData.first_air_date
                  )}{" "}
                  (BR){" "}
                  {programData?.genres?.map((genre) => genre.name).join(", ")}
                  {programData.runtime && minutesToHours(programData.runtime)}
                </div>
              </div>
              <div className="flex w-36 gap-2 items-center">
                <Rating vote_average={roundVote(programData.vote_average)} />
                <div className="font-bold text-sm">Avaliação dos usuários</div>
              </div>

              <div className="italic font-light">{programData.tagline}</div>
              <div className="text-xl font-bold">Sinopse</div>
              <div className="text-base">{programData.overview}</div>
              <div className="flex gap-24 text-base">
                <div>
                  <div className="font-bold">Yorgos Lanthimos</div>
                  <div>Director</div>
                </div>
                <div>
                  <div className="font-bold">Alasdair Gray</div>
                  <div>Novel</div>
                </div>
                <div>
                  <div className="font-bold">Tony McNamara</div>
                  <div>Screenplay</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-8 py-6 flex flex-col gap-2">
        <h2 className="px-2 font-bold text-xl">Elenco principal</h2>
        <div className="px-2 pt-2 flex gap-4 flex-nowrap overflow-x-scroll pb-8">
          {programCreditsData.map((programCredits, i) => {
            if (i < 9)
              return (
                <div
                  key={i}
                  className="rounded-lg border-gray-200 bg-white box-border min-w-36 w-36"
                  style={{
                    borderWidth: "1px",
                    boxShadow: "0 2px 8px rgba(0,0,0,.1)",
                  }}
                >
                  <img
                    alt={programCredits.name}
                    className="rounded-t-lg w-full"
                    loading="lazy"
                    src={`https://media.themoviedb.org/t/p/w138_and_h175_face${programCredits?.profile_path}`}
                  />
                  <div className="px-2 py-2">
                    <div className="font-bold text-sm">
                      {programCredits.name}
                    </div>
                    <div className="text-xs">{programCredits.character}</div>
                  </div>
                </div>
              );
          })}
        </div>
      </div>
    </>
  );
};
