
import React from 'react';
import Helmet from 'react-helmet';
import moment from 'moment';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import Button from 'react-bootstrap/Button';
import weekcontract from '../utils/weekcontract.js';
import bundlebondcontract from '../utils/bundlebondcontract.js';
import teamcontract from '../utils/teamcontract.js';

function getWeekDays(weekStart) {
  const days = [weekStart];
  for (let i = 1; i < 7; i += 1) {
    days.push(
      moment(weekStart)
        .add(i, 'days')
        .toDate()
    );
  }
  return days;
}

function getWeekRange(date) {
  return {
    from: moment(date)
      .startOf('week')
      .toDate(),
    to: moment(date)
      .endOf('week')
      .toDate(),
  };
}

export default class WeekPicker extends React.Component {
  state = {
    hoverRange: undefined,
    selectedDays: [],
    weekNumber: undefined
  };

  handleDayChange = date => {
    this.setState({
      selectedDays: getWeekDays(getWeekRange(date).from),
    });
  };

  handleDayEnter = date => {
    this.setState({
      hoverRange: getWeekRange(date),
    });
  };

  handleDayLeave = () => {
    this.setState({
      hoverRange: undefined,
    });
  };

  handleWeekClick = (weekNumber, days, e) => {

    this.setState({
      selectedDays: days,
      weekNumber: weekNumber
    });
  };
  CreateWeekNFT = async (t) => {
    //t.preventDefault();
    this.setState({ buttonDisabled: true });
    const accounts = await window.ethereum.enable();
    const account = accounts[0];
    console.log("account");
    console.log(account);
    this.setState({ selectedAccoutnt: account });
    //const account = await web3.givenProvider.selectedAddress;//accounts[0];
    console.log('selectedAddress');
    console.log(account);
    const gasAmount = await weekcontract.methods.mint721(
      '0x357741ef5135481f948b3DA5Da3F57Deb3656536',
      1,
      account,
      "metadata",
      this.state.selectedDays[0],
      2021).estimateGas({ from: account });
    const result = await weekcontract.methods.mint721(
      '0x357741ef5135481f948b3DA5Da3F57Deb3656536',
      1,
      account,
      "metadata",
      this.state.selectedDays[0],
      2021).send({
        from: account,
        gasAmount,
      });

    // this.setState({ buttonDisabled: false });
    // console.log('result');
    // console.log(result);
    // this.setState({ buttonDisabled: false });
  }
  render() {
    const { hoverRange, selectedDays, weekNumber } = this.state;

    const daysAreSelected = selectedDays.length > 0;

    const modifiers = {
      hoverRange,
      selectedRange: daysAreSelected && {
        from: selectedDays[0],
        to: selectedDays[6],
      },
      hoverRangeStart: hoverRange && hoverRange.from,
      hoverRangeEnd: hoverRange && hoverRange.to,
      selectedRangeStart: daysAreSelected && selectedDays[0],
      selectedRangeEnd: daysAreSelected && selectedDays[6],
    };

    return (
      <div className="SelectedWeekExample">
        <DayPicker
          selectedDays={selectedDays}
          weekNumber={weekNumber}
          showWeekNumbers
          showOutsideDays
          modifiers={modifiers}
          onDayClick={this.handleDayChange}
          onDayMouseEnter={this.handleDayEnter}
          onDayMouseLeave={this.handleDayLeave}
          onWeekClick={this.handleWeekClick}
        />
        {selectedDays.length === 7 && (
          <div>
            {moment(selectedDays[0]).format('LL')} –{' '}
            {moment(selectedDays[6]).format('LL')}
          </div>
        )}

<Button variant="secondary" size="sm" onClick={() => this.CreateWeekNFT}>Mint</Button>



        <Helmet>
          <style>{`
            .SelectedWeekExample .DayPicker-Month {
              border-collapse: separate;
            }
            .SelectedWeekExample .DayPicker-WeekNumber {
              outline: none;
            }
            .SelectedWeekExample .DayPicker-Day {
              outline: none;
              border: 1px solid transparent;
            }
            .SelectedWeekExample .DayPicker-Day--hoverRange {
              background-color: #EFEFEF !important;
            }

            .SelectedWeekExample .DayPicker-Day--selectedRange {
              background-color: #fff7ba !important;
              border-top-color: #FFEB3B;
              border-bottom-color: #FFEB3B;
              border-left-color: #fff7ba;
              border-right-color: #fff7ba;
            }

            .SelectedWeekExample .DayPicker-Day--selectedRangeStart {
              background-color: #FFEB3B !important;
              border-left: 1px solid #FFEB3B;
            }

            .SelectedWeekExample .DayPicker-Day--selectedRangeEnd {
              background-color: #FFEB3B !important;
              border-right: 1px solid #FFEB3B;
            }

            .SelectedWeekExample .DayPicker-Day--selectedRange:not(.DayPicker-Day--outside).DayPicker-Day--selected,
            .SelectedWeekExample .DayPicker-Day--hoverRange:not(.DayPicker-Day--outside).DayPicker-Day--selected {
              border-radius: 0 !important;
              color: black !important;
            }
            .SelectedWeekExample .DayPicker-Day--hoverRange:hover {
              border-radius: 0 !important;
            }
          `}</style>
        </Helmet>
      </div>
    );
  }
}

