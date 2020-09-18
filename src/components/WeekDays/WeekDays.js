import React from "react";
import WeekDayBar from "../WeekDayBar/WeekDayBar";
const dayArray = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
export default function WeekDays() {
  const components = dayArray.map((day, index) => (
    <WeekDayBar day={day} key={index} />
  ));
  return <div>{components}</div>;
}
