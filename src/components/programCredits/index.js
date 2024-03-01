export const ProgramCredits = ({ content, programCreditsData }) => {
  return (
    <div className="px-8 py-6 flex flex-col gap-2">
      <h2 className="px-2 font-bold text-xl">{content.creditsTitle}</h2>
      <div className="px-2 pt-2 flex gap-4 flex-nowrap overflow-x-scroll pb-8">
        {programCreditsData.map((programCredits, i) => {
          if (i < 9) {
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
                  <div className="font-bold text-sm">{programCredits.name}</div>
                  <div className="text-xs">{programCredits.character}</div>
                </div>
              </div>
            );
          }
          return <></>;
        })}
      </div>
    </div>
  );
};
