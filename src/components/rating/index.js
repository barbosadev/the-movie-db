import Chart from "react-apexcharts";

const chart = (vote_average, size) => {
  return {
    series: [vote_average],
    options: {
      fill: {
        colors: [
          `${
            vote_average > 70
              ? "#21d07a"
              : vote_average > 50
              ? "#d2d531"
              : "#f00"
          }`,
        ],
      },
      plotOptions: {
        radialBar: {
          hollow: {
            size,
          },
        },
      },
      stroke: {
        lineCap: "round",
      },
    },
  };
};

export const Rating = ({ vote_average }) => {
  return (
    <>
      <div className="bg-slate-900 p-2 rounded-full min-h-16 h-16 min-w-16 w-16 flex items-center justify-center relative">
        <Chart
          style={{
            position: "absolute",
            width: "110px",
            top: -11,
            left: -24,
          }}
          options={chart(vote_average, "56%").options}
          series={chart(vote_average).series}
          type="radialBar"
          width={"110px"}
          height={"110px"}
        />
        <div className="flex items-start">
          <div className="text-xl font-bold">{vote_average}</div>
          <div style={{ fontSize: "8px" }}>%</div>
        </div>
      </div>
    </>
  );
};

export const RatingSm = ({ vote_average }) => {
  return (
    <>
      <div className="absolute -bottom-4 left-2 text-white bg-slate-900 p-2 rounded-full h-11 w-11 flex items-center justify-center">
        <Chart
          style={{
            position: "absolute",
            width: "110px",
            top: -11,
            left: -24,
          }}
          options={chart(vote_average, "46%").options}
          series={chart(vote_average).series}
          type="radialBar"
          width={"90px"}
          height={"90px"}
        />
        <div className="flex items-start">
          <div className="text-xs font-bold">{vote_average}</div>
          <div style={{ fontSize: "6px" }}>%</div>
        </div>
      </div>
    </>
  );
};
