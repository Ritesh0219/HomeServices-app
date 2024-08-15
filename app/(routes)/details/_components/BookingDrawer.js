import React, { useEffect, useState } from 'react';
import { Drawer, Typography, Snackbar, Alert } from '@mui/joy'; // Import Snackbar and Alert
import { NotebookPen, X } from 'lucide-react';
import DatePick from '../_components/DatePicker';
import GlobalApi from '../../../_services/GlobalApi';
import { useUser } from '@clerk/nextjs';
import dayjs from 'dayjs';

function BookingDrawer({ business }) {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(null);
  const [timeSlot, setTimeSlot] = useState([]);
  const [selectedTime, setSelectedTime] = useState();
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success'); // can be 'success', 'info', 'warning', 'error'
  const { user } = useUser();

  const handleOpen = () => setOpen(true);
  const handleClose = () => {setOpen(false),setDate(),setSelectedTime()};

  useEffect(() => {
    getTime();
   
  }, []);

  const getTime = () => {
    const timeList = [];
    for (let i = 10; i <= 12; i++) {
      timeList.push({ time: `${i}:00 AM` });
      timeList.push({ time: `${i}:30 AM` });
    }
    for (let i = 1; i <= 6; i++) {
      timeList.push({ time: `${i}:00 PM` });
      timeList.push({ time: `${i}:30 PM` });
    }
    setTimeSlot(timeList);
  };

  const saveBooking = () => {
    GlobalApi.createNewBooking(
      business?.id,
      date,
      selectedTime,
      user?.primaryEmailAddress?.emailAddress,
      user?.fullName
    )
    .then(resp => {
      if (resp) {
        setSnackbarMessage('Service Booked Successfully!');
        setSnackbarSeverity('success');
        setDate();
        setSelectedTime();
      } else {
        setSnackbarMessage('Failed to Book a Service.');
        setSnackbarSeverity('error');
      }
      setSnackbarOpen(true);
    })
    .catch(error => {
      setSnackbarMessage('Failed to Book a Service.');
      setSnackbarSeverity('error');
      setSnackbarOpen(true);
    });
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <div>
      <button
        className='bg-primary flex gap-2 px-4 py-2 rounded-full text-white hover:bg-orange-700'
        onClick={handleOpen}
      >
        <NotebookPen />
        Book Service
      </button>
      <Drawer
        open={open}
        onClose={handleClose}
        variant="persistent" // or "temporary"
        sx={{ width: 100, flexShrink: 0 }}
      >
        <div className='flex items-center justify-between w-full'>
          <Typography level="h2" sx={{ p: 2 }}>
            Book a Service
          </Typography>
          <button
            onClick={handleClose}
            className='bg-primary hover:bg-orange-700 text-white p-2 rounded-full flex items-center justify-center mx-4'
          >
            <X />
          </button>
        </div>
        <div className='flex flex-col items-center gap-4 justify-center mx-4 mt-5 md:mt-8'>
          <h1 className='font-semibold text-[15px]'>
            Select Date and Time slot to book a service
          </h1>
          <DatePick date={date ? dayjs(date) : null} onClick={(newdate) => setDate(newdate)} />
        </div>
        <div>
          <div className='grid grid-cols-3 md:grid-cols-3 gap-3 md:gap-4 mt-6 md:mt-10 mx-4 md:mx-20'>
            {timeSlot.map((item, index) => (
              <button
                className={`py-2 border rounded-lg ${selectedTime === item.time ? 'hover:bg-primary' : 'hover:bg-gray-100'} ${selectedTime === item.time && 'bg-primary text-white hover:bg-orange-700'}`}
                key={index}
                onClick={() => setSelectedTime(item.time)}
              >
                {item.time}
              </button>
            ))}
          </div>
          <div className='w-full flex items-center justify-center'>
            <div className='w-[85%] md:w-[70%] grid grid-cols-2 gap-3 px-8'>
              <button
                className='p-2 mt-5 md:mt-8 text-center rounded-full bg-primary hover:bg-orange-800 text-white'
                onClick={saveBooking}
              >
                Book
              </button>
              <button
                className='p-2 mt-5 md:mt-8 text-center rounded-full bg-red-600 hover:bg-red-900 text-white'
                onClick={handleClose}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </Drawer>

      {/* Snackbar for notifications */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
      >
        <Alert 
          onClose={handleSnackbarClose} 
          severity={snackbarSeverity} 
          variant="filled"
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </div>
  );
}

export default BookingDrawer;
