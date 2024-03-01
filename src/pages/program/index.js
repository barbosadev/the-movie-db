import { content } from "./content";
import { Context } from "../../context";
import { Header } from "../../components/header";
import { getProgram } from "../../services/program";
import { useContext, useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { ProgramCredits } from "../../components/programCredits";
import { ProgramDetails } from "../../components/programDetails";
import { getProgramCredits } from "../../services/programCredits";

export const Program = () => {
  const { programId } = useParams();
  const { pathname } = useLocation();
  const [programData, setProgramData] = useState({});
  const [programCreditsData, setProgramCreditsData] = useState([]);
  const typeProgram = pathname.split("/")[1];
  const [error, setError] = useContext(Context);

  useEffect(() => {
    Promise.all([
      getProgram(typeProgram, programId),
      getProgramCredits(typeProgram, programId),
    ])
      .then((values) => {
        setProgramData(values[0]);
        setProgramCreditsData(values[1].cast);
      })
      .catch((error) => {
        setError(error);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header />
      <ProgramDetails programData={programData} />
      <ProgramCredits
        content={content}
        programCreditsData={programCreditsData}
      />
    </>
  );
};
