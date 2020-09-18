import React from "react";
import DayHourBar from "../DayHourBar/DayHourBar";
const hourArray = [
  "12:40 AM",
  "01:40 AM",
  "02:40 AM",
  "03:40 AM",
  "04:40 AM",
  "05:40 AM",
  "07:40 AM",
  "08:40 AM",
  "09:40 AM",
  "10:40 AM",
  "11:40 AM",
];
export default function WeekDays() {
  const components = hourArray.map((time, index) => (
    <DayHourBar time={time} key={index} />
  ));
  return <div>{components}</div>;
}
