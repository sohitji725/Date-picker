// This file creates the app component.
// The app component is the main component that renders the date picker component.

import React from 'react';
import { DatePickerProvider } from './components/date-picker-context';
import DatePicker from './components/date-picker';
import "./app.css";

// Create the app component.
function App() {
  // Return the app component with the date picker component.
  return (
    <DatePickerProvider>
      <div className="app">
        <h1>Date Picker</h1>
        <DatePicker />
      </div>
    </DatePickerProvider>
  );
}

// Export the app component.
export default App;