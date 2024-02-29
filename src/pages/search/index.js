import { useParams } from "react-router-dom";
import { Header } from "../../components/header";
import { useEffect, useState } from "react";
import { getSearchResult } from "../../services/search";
import { longDateMask } from "../../utils/dateMask";

export const SearchPage = () => {
  const { query } = useParams();
  const [resultList, setResultList] = useState([]);

  useEffect(() => {
    getSearchResult(query).then((result) => {
      setResultList(result.results);
    });
  }, []);

  return (
    <>
      <Header />
      <div className="flex flex-col gap-4 px-10 py-8">
        {resultList.map((program, i) => (
          <div
            key={i}
            className="rounded-lg border-gray-200 bg-white box-border flex gap-4"
            style={{
              borderWidth: "1px",
              boxShadow: "0 2px 8px rgba(0,0,0,.1)",
            }}
          >
            {program.poster_path !== null ? (
              <img
                className="rounded-l-lg"
                loading="lazy"
                src={`https://media.themoviedb.org/t/p/w94_and_h141_bestv2${program?.poster_path}`}
              />
            ) : (
              <div
                style={{
                  backgroundColor: "#dbdbdb",
                }}
                className="px-6 py-7 flex items-center rounded-l-lg"
              >
                <img
                  className="h-20"
                  loading="lazy"
                  src={
                    "https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg"
                  }
                />
              </div>
            )}

            <div className="flex flex-col justify-center gap-4 pr-4">
              <div>
                <div className="font-bold text-lg">
                  {program.title || program.name}
                </div>
                <div className="text-gray-500 text-sm">
                  {longDateMask(program.release_date || program.first_air_date)}
                </div>
              </div>

              <div className="text-sm line-clamp-2">{program.overview}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
