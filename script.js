let saveBtn = $(".saveBtn");
let currentTime = dayjs().hour()
let timeBox = document.querySelectorAll('.description')
let saveBox = document.querySelectorAll('.saveBtn')

saveBtn.on('click', function (event) {
  for (let i = 0; i < timeBox.length; i++) {
    localStorage.setItem(i, $(saveBox[i]).parent().children('textArea').val())
    
  }
  
 
});


function populateSaved () {
  for (let i = 0; i < timeBox.length; i++) {
    $(saveBox[i]).parent().children('textArea').text(localStorage[i])
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