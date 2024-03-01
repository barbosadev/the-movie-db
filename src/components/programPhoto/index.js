import "react-lazy-load-image-component/src/effects/blur.css";
import { LazyLoadImage } from "react-lazy-load-image-component";

export const ProgramPhoto = ({ program, handleProgram }) => {
  return (
    <LazyLoadImage
      effect="blur"
      onClick={() => handleProgram(program.media_type, program.id)}
      alt={program.title || program.name}
      className="rounded-l-lg cursor-pointer"
      src={`https://media.themoviedb.org/t/p/w94_and_h141_bestv2${program?.poster_path}`}
    />
  );
};
