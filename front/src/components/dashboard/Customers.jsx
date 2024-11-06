import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCustomer } from "../../redux/slices/apiSlice";
import HeadTitle from "./HeadTitle";

import {
  AreaChart,
  Area,
  Legend,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { PropTypes } from "prop-types";

const CustomToolTip = ({ payload }) => {
  if (!payload || !payload.length) return null;

  return (
    <div className="custom-recharts-tooltip">
      <p className="recharts-tooltip-label text-gray-500 text-sm">
        {payload[0].payload?.month}
      </p>

      <ul className="recharts-tooltip-item-list">
        {payload?.map((item, index) => {
          return (
            <li key={index}>
              {item.name}/{item.value}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

CustomToolTip.propTypes = {
  payload: PropTypes.any,
};

const Customers = () => {
  const state = useSelector((state) => state.apis.customersData); // 인터페이스로 레비뉴 데이터 보여줌
  const dispatch = useDispatch(); // dispatch 함수를 사용함 오늘한거복습

  useEffect(() => {
    dispatch(fetchCustomer()); // revenue 가저옴
  }, [dispatch]); // dispatch가 변경될 때 한번 실행

  console.log(state);

  const formatLegendValue = (value, name) => {
    const initialValue = 0;
    const totalValue = state?.reduce((acc, cur) => {
      if (Object.keys(cur).includes(name.dataKey)) {
        return acc + cur[name.dataKey]; //있으면 acc (accumulator 누산기 최종값) 데이터 더함 여기코드 복습
      } else {
        return acc;
      }
    }, initialValue); //초기값 지정
    return (
      <span className="custom-legend-item-text-group">
        <span className="custom-legend-item-text">
          {value.replace("_", " ")}
        </span>
        <span className="custom-legend-item-text">{" " + totalValue}</span>
      </span>
    );
  };

  return (
    <div className="customers-chart block-wrap mt-[14px] ml-[14px]">
      <HeadTitle title="Customer Satisfaction" />
      <div className="area-chart w-full h-[250px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            width={730}
            height={250}
            data={state}
            margin={{
              top: 10,
              right: 0,
              left: 0,
              bottom: 0,
            }}>
            <Legend formatter={formatLegendValue} />
            <Tooltip content={<CustomToolTip />} />
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#0095ff" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#0095ff" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#07e098" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#07e098" stopOpacity={0} />
              </linearGradient>
            </defs>

            <Area
              type="monotone"
              dataKey="last_month"
              stroke="#0095ff"
              fill="url(#colorUv)"
              fillOpacity={0.3}
              strokeWidth={2}
              dot={{
                stroke: "#0095ff",
                fill: "#0095ff",
              }}
            />

            <Area
              type="monotone"
              dataKey="this_month"
              stroke="#07e098"
              fill="url(#colorPv)"
              fillOpacity={1}
              strokeWidth={2}
              dot={{
                stroke: "#07e098",
                fill: "#07e098",
              }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Customers;
