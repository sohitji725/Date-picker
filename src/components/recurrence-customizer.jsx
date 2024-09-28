// This file creates the recurrence customizer component.
// The recurrence customizer component is responsible for rendering the recurrence customization options.

import React, { useContext } from 'react';
import { DatePickerContext } from './date-picker-context';
import './recurrence-customizer.css';

// Create the recurrence customizer component.
const RecurrenceCustomizer = () => {
  // Get the state and functions from the date picker context.
  const { recurrencePattern, setRecurrenceCustomization } = useContext(DatePickerContext);

  // Create a function to handle the customization change.
  const handleCustomizationChange = (customization) => {
    setRecurrenceCustomization(customization);
  };

  // Switch on the recurrence pattern.
  switch (recurrencePattern) {
    case 'daily':
      // Return the daily recurrence customization options.
      return (
        <div className="recurrence-customizer">
          <label>
            Every <input type="number" value="1" onChange={(e) => handleCustomizationChange({ every: e.target.value })} /> days
          </label>
        </div>
      );
    case 'weekly':
      // Return the weekly recurrence customization options.
      return (
        <div className="recurrence-customizer">
          <label>
            Every <input type="number" value="1" onChange={(e) => handleCustomizationChange({ every: e.target.value })} /> weeks
          </label>
          <label>
            On <select onChange={(e) => handleCustomizationChange({ on: e.target.value })}>
              <option value="monday">Monday</option>
              <option value="tuesday">Tuesday</option>
              <option value="wednesday">Wednesday</option>
              <option value="thursday">Thursday</option>
              <option value="friday">Friday</option>
              <option value="saturday">Saturday</option>
              <option value="sunday">Sunday</option>
            </select>
          </label>
        </div>
      );
    case 'monthly':
      // Return the monthly recurrence customization options.
      return (
        <div className="recurrence-customizer">
          <label>
            Every <input type="number" value="1" onChange={(e) => handleCustomizationChange({ every: e.target.value })} /> months
          </label>
          <label>
            On the <input type="number" value="1" onChange={(e) => handleCustomizationChange({ onThe: e.target.value })} /> day
          </label>
        </div>
      );
    case 'yearly':
      // Return the yearly recurrence customization options.
      return (
        <div className="recurrence-customizer">
          <label>
            Every <input type="number" value="1" onChange={(e) => handleCustomizationChange({ every: e.target.value })} /> years
          </label>
          <label>
            On <select onChange={(e) => handleCustomizationChange({ on: e.target.value })}>
              <option value="january">January</option>
              <option value="february">February</option>
              <option value="march">March</option>
              <option value="april">April</option>
              <option value="may">May</option>
              <option value="june">June</option>
              <option value="july">July</option>
              <option value="august">August</option>
              <option value="september">September</option>
              <option value="october">October</option>
              <option value="november">November</option>
              <option value="december">December</option>
            </select>
          </label>
        </div>
      );
    default:
      // Return null if the recurrence pattern is not set.
      return null;
  }
};

// Export the recurrence customizer component.
export default RecurrenceCustomizer;