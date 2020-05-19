import React from "react";
import "./Campaign.css";
import DisplayTable from "./DisplayTable/DisplayTable";

const campaign = (props) => {
  const active = props.screen;
  return (
    <React.Fragment>
      <nav className="Navigation">
        <ul className="TabList">
          <li>
            <button id="Upcoming" className={active ==="Upcoming" ? 'active' : null} onClick={(e) => props.tabSwitcher(e)}>
              Upcoming Campaigns
            </button>
          </li>
          <li>
            <button id="Live" className={active ==="Live" ? 'active' : null} onClick={(e) => props.tabSwitcher(e)}>
              Live Campaigns
            </button>
          </li>
          <li>
            <button id="Past" className={active ==="Past" ? 'active' : null} onClick={(e) => props.tabSwitcher(e)}>
              Past Campaigns
            </button>
          </li>
        </ul>
      </nav>
      <br />
      <DisplayTable
        data={props.renderData}
        reSchedule={props.reSchedule}
        showCalendar={props.showCalendar}
        eventDate = {props.eventDate}
        onScheduleChange = {props.onScheduleChange}
        calendarBackdropHandler = {props.calendarBackdropHandler}
        pricing = {props.pricing}
      />
    </React.Fragment>
  );
};

export default campaign;
