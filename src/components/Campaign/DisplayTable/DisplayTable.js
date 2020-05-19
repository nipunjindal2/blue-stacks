import React from "react";
import Moment from "react-moment";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Modal from "../../UI/Modal/Modal";
import {
  calendar,
  csv,
  price,
  stats,
} from "../../../assets/images/UtilityIcons/index";
import "./DisplayTable.css";


const displayTable = (props) => {
  const { showCalendar, eventDate } = props;
  const length = props.data.length;
  return (
    <React.Fragment>
      {length != 0 ? (
        <div className="tablediv">
          <table className="mainTable">
            
            <thead className="heading">
              <tr>
                <th>DATE</th>
                <th>CAMPAIGN</th>
                <th>VIEW</th>
                <th>ACTIONS</th>
              </tr>
            </thead>

            <tbody className = "body">
              {props.data.map((data, i) => {
                return (
                 
                  <tr key={i} style={{borderBottom: "2px"}}>
                    <td>
                      <Moment format="MMMM Do YYYY">{data.createdOn}</Moment>
                      <br />
                      <Moment fromNow style={{ opacity: "0.5" }}>
                        {data.createdOn}
                      </Moment>
                    </td>
                    <td className = "data err">
                      <span >
                        <img style={{width: "60px"}} src={data.image_url}></img>
                      </span>
                      <span className = "data-text">
                        {data.name} <br /><span style={{ opacity: "0.5" }}><em>{data.region}</em></span>
                      </span>
                    </td>
                    <td>
                      <span onClick={(id) => props.pricing(data.id)}>
                        <img className="utility" src={price} alt="Price_PNG" />
                      </span>
                      <span>
                        <button onClick={(id) => props.pricing(data.id)} className="btn-util">View Pricing</button>
                      </span>
                    </td>
                    <td className = "actions">
                      <span>
                        <img className="utility png" src={csv} alt="CSV_PNG" />
                      </span>{" "}
                      <span>
                        <button className="btn-util icon">CSV</button>
                      </span>
                      <span>
                        <img className="utility png" src={stats} alt="Stats_PNG" />
                      </span>{" "}
                      <span>
                        <button className="btn-util icon">Report</button>
                      </span>
                      <span onClick={(id) => props.reSchedule(data.id)}>
                        <img
                          className="utility png"
                          src={calendar}
                          alt="Calendar_PNG"
                        />
                        <span>
                          <button className="btn-util icon">Schedule Again</button>
                        </span>
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="no-data">
          Nothing here to show for now....
          <br /> Check after sometime champ!
        </p>
      )}

      {showCalendar ? (
        <Modal show={showCalendar} modalClosed={props.calendarBackdropHandler}>
          <Calendar onChange={(date) => props.onScheduleChange(date)} />
        </Modal>
      ) : null}
    </React.Fragment>
  );
};

export default displayTable;
