import React, { useState } from "react";
import moment from "moment";
import "../assets/Calendar.css"; // Import file CSS để style lịch

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(moment());

  const daysInMonth = currentMonth.daysInMonth();
  const startOfMonth = moment(currentMonth).startOf("month").startOf("week");

  return (
    <div className="calendar-container container">
      <h3 className="month-header">{currentMonth.format("MMMM YYYY")}</h3>
      <table className="table table-bordered calendar-table">
        <thead>
          <tr>
            <th scope="col">Sun</th>
            <th scope="col">Mon</th>
            <th scope="col">Tue</th>
            <th scope="col">Wed</th>
            <th scope="col">Thu</th>
            <th scope="col">Fri</th>
            <th scope="col">Sat</th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 6 }).map((week, weekIndex) => (
            <tr key={weekIndex}>
              {Array.from({ length: 7 }).map((day, dayIndex) => {
                const currentDay = moment(startOfMonth)
                  .add(weekIndex, "weeks")
                  .add(dayIndex, "days");

                const isCurrentMonth = currentDay.isSame(currentMonth, "month");
                const isToday = currentDay.isSame(moment(), "day");

                return (
                  <td
                    key={dayIndex}
                    className={`calendar-day ${isToday ? "today" : ""} ${
                      isCurrentMonth ? "" : "inactive"
                    }`}
                  >
                    {currentDay.format("D")}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Calendar;
