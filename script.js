let saveBtn = $(".saveBtn");
let currentTime = dayjs().hour()
let timeBox = document.querySelectorAll('.description')
let saveBox = document.querySelectorAll('.saveBtn')
let savedArray = []


saveBtn.on('click', function (event) {
  for (let i = 0; i < timeBox.length; i++) {
    savedArray.push($(saveBox[i]).parent().children('textArea').val())
    
  }
  
  window.localStorage.setItem("inputItems", JSON.stringify(savedArray))
}); 


function populateSaved () {
  for (let i = 0; i < timeBox.length; i++) {
    let pulledItems = JSON.parse(localStorage.getItem('inputItems'))
    
    $(saveBox[i]).parent().children('textArea').text(pulledItems[i])
  }
}

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

  populateSaved();