export const ProgramWithoutPhoto = ({ program, handleProgram }) => {
  return (
    <div
      style={{
        backgroundColor: "#dbdbdb",
      }}
      className="min-h-36 h-36 min-w-24 w-24 flex items-center justify-center rounded-l-lg"
    >
      <img
        onClick={() => handleProgram(program.media_type, program.id)}
        alt={program.title || program.name}
        className="h-20 cursor-pointer"
        loading="lazy"
        src={
          "https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg"
        }
      />
    </div>
  );
};
