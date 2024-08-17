import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import TextField from '@mui/material/TextField'; // Import TextField from @mui/material

export default function DatePick({ date, onClick }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        value={date}
        onChange={(newDate) => onClick(newDate ? newDate : null)}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
}
