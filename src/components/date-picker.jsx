// This file creates the date picker component.
// The date picker component is the main component that renders the different parts of the date picker.

import React, { useContext } from 'react';
import { DatePickerContext } from './date-picker-context';
import RecurrenceOptions from './recurrence-options';
import RecurrenceCustomizer from './recurrence-customizer';
import DateRangePicker from './date-range-picker';
import MiniCalendar from './mini-calendar';
import './date-picker.css';

// Create the date picker component.
const DatePicker = () => {
  // Get the state and functions from the date picker context.
  const {
    selectedDate,
    setSelectedDate,
    recurrencePattern,
    setRecurrencePattern,
    recurrenceCustomization,
    setRecurrenceCustomization,
    startDate,
    setStartDate,
    endDate,
    setEndDate,
  } = useContext(DatePickerContext);

  // Return the date picker component with the different parts.
  return (
    <div className="date-picker">
      <RecurrenceOptions />
      <RecurrenceCustomizer />
      <DateRangePicker />
      <MiniCalendar />
    </div>
  );
};

// Export the date picker component.
export default DatePicker;