import React, { Component } from "react";
import Calendar from "react-calendar/dist/entry.nostyle";
import Moment from "moment";
class Calendar extends Component {
  weekdayshort = moment.weekdaysShort();
  state = {
    dateObject: moment()
  };

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
