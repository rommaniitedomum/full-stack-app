import React, { useEffect } from "react";
import HeadTitle from "./HeadTitle";
import geoJson from "../../constants/world-50m.v1.json";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { useDispatch, useSelector } from "react-redux";
import { fetchSalesMap } from "../../redux/slices/apiSlice";

const SalesMap = () => {
  const state = useSelector((state) => state.apis.salesMapData); // 인터페이스로 레비뉴 데이터 보여줌
  const dispatch = useDispatch(); // dispatch 함수를 사용함 오늘한거복습

  useEffect(() => {
    dispatch(fetchSalesMap()); // revenue 가저옴
  }, [dispatch]); // dispatch가 변경될 때 한번 실행

  const findByCountryId = (countryId) => {
    const matchedCountry = state?.find(
      (country) => country.country_id === countryId
    );
    return matchedCountry ? matchedCountry.fill_color : "#ecececec";
  };

  return (
    <div className="block-wrap my-[14px] ml-[14px]">
      <HeadTitle title="Sales Mapping by Country" />
      <div className="map-chart">
        <ComposableMap
          projection="geoNaturalEarth1"
          projectionConfig={{
            rotate: [0, 0, 0],
            scale: 200,
          }}>
          <Geographies geography={geoJson}>
            {({ geographies }) =>
              geographies.map((geo) => {
                if (geo.id !== "010") {
                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill={findByCountryId(geo.id)}
                    />
                  );
                } else {
                  return null; // Antarctica 제외
                }
              })
            }
          </Geographies>
        </ComposableMap>
      </div>
    </div>
  );
};

export default SalesMap;
