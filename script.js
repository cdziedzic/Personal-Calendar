let saveBtn = $(".saveBtn");
let currentTime = dayjs().hour()
let timeBox = document.querySelectorAll('.description')
let saveBox = document.querySelectorAll('.saveBtn')
let textAreaEl = document.getElementsByClassName('time-block')
let blockEl = document.querySelectorAll('[data-time]')
let entries = JSON.parse(localStorage.getItem('inputItems')) || []

saveBtn.on('click', function (event) {
  // save the block of text for a specific hour to localstorage
  let textEl = $(this).siblings('.description').val()
  let time = $(this).parent().attr('id');
  let dataEl = this.getAttribute('data-time')
 

  localStorage.setItem(dataEl, textEl)
});

function populateSaved() {
// get items out of localstorage and display in their corresponding time box
  for (let i = 0; i < timeBox.length; i++) {
 
   
    // if the local storage getitem for the current dataset.time is null do nothing
    if (localStorage.getItem(timeBox[i].dataset.time) === null){
      timeBox[i].value = ''
      } 
      else {
     
      timeBox[i].value = localStorage.getItem(timeBox[i].dataset.time)
    }
  }
};


checkTime();

function checkTime() {
  // Check if data-time value against dayjs hour value, change color red=current hour, grey= past, green = future
  for (let i = 0; i < timeBox.length; i++) {

    if (timeBox[i].dataset.time == currentTime) {
      timeBox[i].parentElement.classList.remove('future')
      timeBox[i].parentElement.classList.remove('past')
      timeBox[i].parentElement.classList.add("present")
    }

    if (timeBox[i].dataset.time > currentTime) {
      timeBox[i].parentElement.classList.remove("present")
      timeBox[i].parentElement.classList.remove('past')
      timeBox[i].parentElement.classList.add('future')

    }
    if (timeBox[i].dataset.time < currentTime) {
      timeBox[i].parentElement.classList.remove("present")
      timeBox[i].parentElement.classList.remove('future')
      timeBox[i].parentElement.classList.add('past')
    }
  }
}
//display at top of page
$("#currentDay").text(dayjs().format('dddd, DD, MMMM'));

populateSaved();