import React, { useEffect } from "react";
import HeadTitle from "./HeadTitle";
import { useDispatch, useSelector } from "react-redux";
import { fetchVolumeServices } from "../../redux/slices/apiSlice";
import { BarChart, Bar, Legend, ResponsiveContainer } from "recharts";

const VolumeServices = () => {
  const state = useSelector((state) => state.apis.volumeServicesData); // 인터페이스로 레비뉴 데이터 보여줌
  const dispatch = useDispatch(); // dispatch 함수를 사용함 오늘한거복습

  useEffect(() => {
    dispatch(fetchVolumeServices()); // revenue 가저옴
  }, [dispatch]); // dispatch가 변경될 때 한번 실행

  const formatLegendValue = (name, legendObj) => {
    const initialValue = 0;
    const totalValue = state?.reduce((acc, cur) => {
      if (Object.keys(cur).includes(legendObj.dataKey)) {
        return acc + cur[legendObj.dataKey]; //있으면 acc (accumulator 누산기 최종값) 데이터 더함 여기코드 복습
      } else {
        return acc;
      }
    }, initialValue); //초기값 지정

    return (
      <span className="custom-legend-item-text-group flex items-center gap-[5px]">
        <span className="custom-legend-item-text">{name}</span>
        <span
          className="custom-legend-item-text text-xs text-[#151d48]
        dark:text-gray-300 font-medium">
          {totalValue}
        </span>
      </span>
    );
  };
  return (
    <div className="block-wrap ml-[14px] my-[14px]">
      <HeadTitle title="Volume vs Services Level" />
      <div className="stacked-bar-chart w-full h-[250px] mb-5">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={state}
            margin={{
              top: 5,
              left: -20,
              bottom: 5,
            }}>
            <Legend
              iconType="circle"
              iconSize={10}
              formatter={formatLegendValue}
            />
            <Bar
              dataKey="volume"
              fill="#0095ff"
              radius={[0, 0, 4, 4]}
              barSize={16}
              stackId="a"
            />
            <Bar
              dataKey="services"
              fill="#00e096"
              radius={[4, 4, 0, 0]}
              barSize={16}
              stackId="a"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default VolumeServices;
