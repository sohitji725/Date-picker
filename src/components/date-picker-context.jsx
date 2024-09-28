// This file creates a context for the date picker component.
// The context is used to share state between the different components.

import { createContext, useState } from 'react';

// Create a context for the date picker component.
const DatePickerContext = createContext();

// Create a provider component that wraps the date picker component.
// The provider component is responsible for managing the state of the date picker.
const DatePickerProvider = ({ children }) => {
  // Initialize the state of the date picker.
  const [selectedDate, setSelectedDate] = useState(null);
  const [recurrencePattern, setRecurrencePattern] = useState(null);
  const [recurrenceCustomization, setRecurrenceCustomization] = useState({
    every: 1,
    on: '',
    onThe: 1,
  });
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  // Return the provider component with the date picker context.
  return (
    <DatePickerContext.Provider
      value={{
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
      }}
    >
      {children}
    </DatePickerContext.Provider>
  );
};

// Export the provider component and the date picker context.
export { DatePickerProvider, DatePickerContext };