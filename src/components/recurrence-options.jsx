// This file creates the recurrence options component.
// The recurrence options component is responsible for rendering the recurrence pattern options.

import React, { useContext } from 'react';
import { DatePickerContext } from './date-picker-context';
import './recurrence-options.css';

// Create the recurrence options component.
const RecurrenceOptions = () => {
  // Get the state and functions from the date picker context.
  const { recurrencePattern, setRecurrencePattern } = useContext(DatePickerContext);

  // Create a function to handle the recurrence change.
  const handleRecurrenceChange = (pattern) => {
    setRecurrencePattern(pattern);
  };

  // Return the recurrence options component with the recurrence pattern options.
  return (
    <div className="recurrence-options">
      <label>
        <input type="radio" name="recurrence" value="daily" checked={recurrencePattern === 'daily'} onChange={() => handleRecurrenceChange('daily')} />
        Daily
      </label>
      <label>
        <input type="radio" name="recurrence" value="weekly" checked={recurrencePattern === 'weekly'} onChange={() => handleRecurrenceChange('weekly')} />
        Weekly
      </label>
      <label>
        <input type="radio" name="recurrence" value="monthly" checked={recurrencePattern === 'monthly'} onChange={() => handleRecurrenceChange('monthly')} />
        Monthly
      </label>
      <label>
        <input type="radio" name="recurrence" value="yearly" checked={recurrencePattern === 'yearly'} onChange={() => handleRecurrenceChange('yearly')} />
        Yearly
      </label>
    </div>
  );
};

// Export the recurrence options component.
export default RecurrenceOptions;