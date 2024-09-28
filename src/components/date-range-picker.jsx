// This file creates the date range picker component.
// The date range picker component is responsible for rendering the start and end date inputs.

import React, { useContext } from 'react';
import { DatePickerContext } from './date-picker-context';
import './date-range-picker.css';

// Create the date range picker component.
const DateRangePicker = () => {
  // Get the state and functions from the date picker context.
  const { startDate, setStartDate, endDate, setEndDate } = useContext(DatePickerContext);

  // Create a function to handle the start date change.
  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  // Create a function to handle the end date change.
  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  // Return the date range picker component with the start and end date inputs.
  return (
    <div className="date-range-picker">
      <label>
        Start Date:
        <input type="date" value={startDate} onChange={(e) => handleStartDateChange(e.target.value)} />
      </label>
      <label>
        End Date:
        <input type="date" value={endDate} onChange={(e) => handleEndDateChange(e.target.value)} />
      </label>
    </div>
  );
};

// Export the date range picker component.
export default DateRangePicker;