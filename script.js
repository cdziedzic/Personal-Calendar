let saveBtn = $(".saveBtn");
let currentTime = dayjs().hour()
let timeBox = document.querySelectorAll('.description')
let saveBox = document.querySelectorAll('.saveBtn')
let textAreaEl = document.getElementsByClassName('time-block')
let blockEl = document.querySelectorAll('[data-time]')
let entries = JSON.parse(localStorage.getItem('inputItems')) || []

saveBtn.on('click', function (event) {
  let textEl = $(this).siblings('.description').val()
  let time = $(this).parent().attr('id');
  let dataEl = this.getAttribute('data-time')
  let entry = {
    timeEl: time , 
    enteredText: textEl,
    dataBox: dataEl
  }    

    entries.push(entry)
    localStorage.setItem("inputItems", JSON.stringify(entries))


    
    
    
    
    });
    
    //  populateSaved() {

    // document.querySelector("textArea").hasAttribute()

    // loop over the textarea 
    //     loop over every object in 


    checkTime();

function checkTime() {
  
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
}}}
 
  $("#currentDay").text(dayjs().format('dddd, DD, MMMM'));

  // populateSaved();