import React, { Component } from "react";
import Campaign from "../../components/Campaign/Campaign";
import Modal from '../../components/UI/Modal/Modal';
import Pricing from '../../components/Pricing/Pricing';
import moment from "moment";
import {AutoChess, FlowFree, GarenaFreeFire, MortalKombat, PUBG} from '../../assets/images/GameThumbnails/index'
import './CampaignTable.css';

class CampaignTable extends Component {

  constructor(props) {
      super(props);
      this.state = {
        data: [
          {
            id: "0001",
            name: "AutoChess",
            region: "US",
            createdOn: "2020,6,16",
            price: [{ "1 Week-1 Month": "100"}, {"6 Months": "500"}, {"1 Year": "900" }],
            csv: "Some CSV link for Whatsapp",
            report: "Some report link for Whatsapp",
            image_url: AutoChess
          },
          {
            id: "0002",
            name: "FlowFree",
            region: "CA, FR",
            createdOn: "2020,5,16",
            price: [{ "1 Week-1 Month": "50"}, {"6 Months": "200"}, {"1 Year": "350" }],
            csv: "Some CSV link for Super Jewels Quest",
            report: "Some report link for Super Jewels Ques",
            image_url: FlowFree,
          },
          {
            id: "0003",
            name: "GarenaFreeFire",
            region: "FR",
            createdOn: "2020,5,16",
            price: [{ "1 Week-1 Month": "80"}, {"6 Months": "420"}, {"1 Year": "700" }],
            csv: "Some CSV link for Mole Slayer",
            report: "Some report link for Mole Slayer",
            image_url: GarenaFreeFire,
          },
          {
            id: "0004",
            name: "MortalKombat",
            region: "JP",
            createdOn: "2020,5,17",
            price: [{ "1 Week-1 Month": "90"}, {"6 Months": "450"}, {"1 Year": "800" }],
            csv: "Some CSV link for Mancala Mix",
            report: "Some report link for Mancala Mix",
            image_url: MortalKombat,
          },
          {
            id: "0004",
            name: "PUBG",
            region: "JP",
            createdOn: "2020,7,17",
            price: [{ "1 Week-1 Month": "90"}, {"6 Months": "450"}, {"1 Year": "800" }],
            csv: "Some CSV link for Mancala Mix",
            report: "Some report link for Mancala Mix",
            image_url: PUBG,
          },
        ],
        screen: "Upcoming",
        data_to_render: [],
        showCalendar: false,
        eventDate: "",
        eventID: null,
        showPricing: false,
        priceEventID: null
      };
  }
  

  componentDidMount() {
    this.showTab("Upcoming");
  }

  showTab(id) {
    let today = new Date();
    var startdate = moment().subtract(1, "days");
    let filtered_data = this.state.data.filter((item) => {
      let eventDate = new Date(item.createdOn);
      if (id === "Upcoming") {
        return eventDate > today;
      } else if (id === "Live") {
        return (
          today.getDate() === eventDate.getDate() &&
          today.getMonth() === eventDate.getMonth() &&
          today.getFullYear() === eventDate.getFullYear()
        );
      } else if (id === "Past") {
        return eventDate < startdate;
      }
    });

    this.setState({
      ...this.state,
      data_to_render: filtered_data,
      screen: id,
    });
  }

  tabSwitchHandler = (e) => {
    let id = e.target.id;
    this.showTab(id);
  };

  reScheduleEventHandler = (id) => {
    const showCalendar = this.state.showCalendar;
    const data = this.state.data_to_render.filter((item) => {
      return item.id === id;
    });

    this.setState({
      ...this.state,
      showCalendar: !showCalendar,
      eventID: data[0].id,
    });
  };

  onScheduleChangeHandler = (date) => {
    const { showCalendar, eventID, data } = this.state;
    const newDate =
      date.getFullYear() + "," + (date.getMonth() + 1) + "," + date.getDate();
    let newData = data;
    //debugger;
    for (let item of newData) {
      if (item.id === eventID) {
        item.createdOn = newDate;
      }
    }
    this.setState({
      ...this.state,
      data: newData,
      showCalendar: !showCalendar,
    });
        this.showTab(this.state.screen);

  };

  calendarBackdropHandler = () => {
    this.setState({
      showCalendar: false,
    });
  };

  displayPricing = (id) => {
    const showPricing = this.state.showPricing;
    const data = this.state.data_to_render.filter((item) => {
      return item.id === id;
    });
    this.setState({
      ...this.state,
      showPricing: !showPricing,
      priceEventID: data[0].id,
    });
  };

  priceBackdropHandler = () => {
    this.setState({
      ...this.state,
      showPricing: false,
      priceEventID: ""
    });
  };

  render() {
    return (
      <React.Fragment>
        <Campaign
          data={this.state.data}
          screen={this.state.screen}
          tabSwitcher={this.tabSwitchHandler}
          renderData={this.state.data_to_render}
          showCalendar={this.state.showCalendar}
          eventDate={this.state.eventDate}
          reSchedule={this.reScheduleEventHandler}
          onScheduleChange={this.onScheduleChangeHandler}
          calendarBackdropHandler={this.calendarBackdropHandler}
          pricing = {this.displayPricing}
        />
        <Modal show={this.state.showPricing} modalClosed={this.priceBackdropHandler}>
          <Pricing data={this.state.data_to_render} id={this.state.priceEventID} closeHandler = {this.priceBackdropHandler}></Pricing>
        </Modal>
      </React.Fragment>
    );
  }
}

export default CampaignTable;
