export const ProgramPhoto = ({ program, handleProgram }) => {
  return (
    <img
      onClick={() => handleProgram(program.media_type, program.id)}
      alt={program.title || program.name}
      className="rounded-l-lg cursor-pointer"
      loading="lazy"
      src={`https://media.themoviedb.org/t/p/w94_and_h141_bestv2${program?.poster_path}`}
    />
  );
};
