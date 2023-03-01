import { useEffect, useState } from "react";
import { VictoryPie } from "victory-native";
import { AppColors } from "../../helpers/colors";

const dataSets = [
  { x: "Total", y: 30 },
  { x: "Paid", y: 20 },
  { x: "Unpaid", y: 38 },
];

const pieColorsNoData = [
  AppColors.borderColor,
  AppColors.borderColor,
  AppColors.borderColor,
];

const pieColorsData = [
  AppColors.pieColorTotal,
  AppColors.pieColorPaid,
  AppColors.pieColorUnPaid,
];

export const PieComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(dataSets);
  }, [data]);

  return (
    <>
      {data.length > 0 ? (
        <VictoryPie
          scale={{ x: 4, y: 1 }}
          data={data}
          height={260}
          innerRadius={63}
          colorScale={pieColorsData}
          style={{
            labels: {
              fill: "white",
            },
          }}
        />
      ) : (
        <VictoryPie
          scale={{ x: 4, y: 1 }}
          data={data}
          height={260}
          innerRadius={63}
          colorScale={pieColorsNoData}
          style={{
            labels: {
              fill: "white",
            },
          }}
        />
      )}
    </>
  );
};
