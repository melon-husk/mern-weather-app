import React from "react";
import WeekDayBar from "../WeekDayBar/WeekDayBar";
const componentArray = [1, 2, 3, 4, 5, 6];
export default function WeekDays(props) {
  const components = componentArray.map((day, index) => (
    <div style={{ margin: "10px 10px 0px 10px" }}>
      <WeekDayBar
        index={day}
        key={day}
        data={props.data}
        showTempInC={props.showTempInC}
      />
    </div>
  ));
  return <div>{components}</div>;
}
