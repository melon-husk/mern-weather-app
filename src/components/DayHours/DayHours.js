import React from "react";
import DayHourBar from "../DayHourBar/DayHourBar";
const hourArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
export default function WeekDays(props) {
  const components = hourArray.map((time, index) => (
    <div style={{ margin: "10px 10px 0px 10px" }}>
      <DayHourBar
        index={time}
        key={index}
        showTempInC={props.showTempInC}
        data={props.data}
      />
    </div>
  ));
  return <div>{components}</div>;
}
