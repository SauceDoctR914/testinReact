import React, { Component } from "react";
import Calendar from "react-calendar/dist/entry.nostyle";
class Calendar extends Component {
  weekdayshortname = this.weekdayshort.map(day => {
    return (
      <th key={day} className="week-day">
        {day}
      </th>
    );
  });
  render() {
    return <div />;
  }
}

export default Calendar;
