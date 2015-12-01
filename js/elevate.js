var elevatorButton = document.querySelector('.elevator');
var elevator = new Elevator({
  element: elevatorButton,
  mainAudio: './music/elevator.mp3', // Music from http://www.bensound.com/
  endAudio:  './music/ding.mp3',
  duration: 7500
});