import React from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const DateSelect = ({ datePickerStart, datePickerEnd, handleRetrieveImages, handleSelectDate }) => {
  return (
    <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
      <DatePicker selected = {datePickerStart} onChange = {(event)=>handleSelectDate('start', event)} />
      <DatePicker selected = {datePickerEnd} onChange = {(event)=>handleSelectDate('end', event)} />
      <button onClick = {handleRetrieveImages}> Retrieve Images </button>
    </div>
  );
}

export default DateSelect;