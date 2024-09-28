// This file creates the mini calendar component.
// The mini calendar component is responsible for rendering the recurring dates.

import React, { useContext } from 'react';
import { DatePickerContext } from './date-picker-context';
import moment from 'moment'; 
import './mini-calendar.css';

// Create the mini calendar component.
const MiniCalendar = () => {
  // Get the state and functions from the date picker context.
  const { startDate, endDate, recurrencePattern, recurrenceCustomization } = useContext(DatePickerContext);

  // Create a function to get the recurring dates.
  const getRecurringDates = () => {
    // Initialize an empty array to store the recurring dates.
    const recurringDates = [];

    // Create a moment object for the start date.
    const start = moment(startDate);

    // Create a moment object for the end date.
    const end = moment(endDate);

    // Check if the recurrence customization is set.
    if (recurrenceCustomization) {
      // Switch on the recurrence pattern.
      switch (recurrencePattern) {
        case 'daily':
          // Loop through the dates and add each date to the recurring dates array.
          while (start.isSameOrBefore(end)) {
            recurringDates.push(start.format('YYYY-MM-DD'));
            start.add(recurrenceCustomization.every, 'day');
          }
          break;
        case 'weekly':
          // Loop through the dates and add each date to the recurring dates array.
          while (start.isSameOrBefore(end)) {
            recurringDates.push(start.format('YYYY-MM-DD'));
            start.add(recurrenceCustomization.every, 'week');
          }
          break;
        case 'monthly':
          // Loop through the dates and add each date to the recurring dates array.
          while (start.isSameOrBefore(end)) {
            recurringDates.push(start.format('YYYY-MM-DD'));
            start.add(recurrenceCustomization.every, 'month');
          }
          break;
        case 'yearly':
          // Loop through the dates and add each date to the recurring dates array.
          while (start.isSameOrBefore(end)) {
            recurringDates.push(start.format('YYYY-MM-DD'));
            start.add(recurrenceCustomization.every, 'year');
          }
          break;
        default:
          break;
      }
    }

    // Return the recurring dates array.
    return recurringDates;
  };

  // Get the recurring dates.
  const recurringDates = getRecurringDates();

  // Return the mini calendar component with the recurring dates.
  return (
    <div className="mini-calendar">
      <h2>Recurring Dates:</h2>
      <ul>
        {recurringDates.map((date) => (
          <li key={date}>{date}</li>
        ))}
      </ul>
    </div>
  );
};

// Export the mini calendar component.
export default MiniCalendar;