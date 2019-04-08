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

  firstDayOfMonth = () => {
    let dateObject = this.state.dateObject;
    let firstDay = moment(dateObject)
      .startOf("month")
      .format("d");
    return firstDay;
  };

  render() {
    blankArea = [];
    for (let i = 0; i < this.firstDayOfMonth(); i++) {
      blankArea.push(<td className="calendar-day empty">{""}</td>);
    }
    return <div />;
  }
}

export default Calendar;
