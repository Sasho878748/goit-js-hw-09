import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const dateTimePicker = document.querySelector('#datetime-picker');
const startButton = document.querySelector('[data-start]');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = selectedDates[0];
    const now = new Date();
    if (selectedDate < now) {
        Notiflix.Notify.failure('Please choose a date in the future');
      startButton.disabled = true;
    } else {
      startButton.disabled = false;
      const timeRemaining = selectedDate.getTime() - now.getTime();
      startTimer(timeRemaining);
    }
  },
};

flatpickr(dateTimePicker, options);

function startTimer(timeRemaining) {
  const timer = document.querySelector('.timer');
  const daysSpan = timer.querySelector('[data-days]');
  const hoursSpan = timer.querySelector('[data-hours]');
  const minutesSpan = timer.querySelector('[data-minutes]');
  const secondsSpan = timer.querySelector('[data-seconds]');

  function updateTimer() {
    timeRemaining -= 1000;

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    daysSpan.textContent = formatTime(days);
    hoursSpan.textContent = formatTime(hours);
    minutesSpan.textContent = formatTime(minutes);
    secondsSpan.textContent = formatTime(seconds);

    if (timeRemaining <= 0) {
      clearInterval(timerInterval);
      daysSpan.textContent = '00';
      hoursSpan.textContent = '00';
      minutesSpan.textContent = '00';
      secondsSpan.textContent = '00';
    }
  }

  const timerInterval = setInterval(updateTimer, 1000);
}

function formatTime(time) {
  return time < 10 ? '0' + time : time;
}
