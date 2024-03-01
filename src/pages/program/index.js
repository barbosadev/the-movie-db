import { useParams, useLocation } from "react-router-dom";
import { Header } from "../../components/header";
import { useEffect, useState } from "react";
import { getProgram } from "../../services/program";
import { getProgramCredits } from "../../services/programCredits";
import { content } from "./content";
import { ProgramCredits } from "../../components/programCredits";
import { ProgramDetails } from "../../components/programDetails";

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
