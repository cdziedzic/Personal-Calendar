let saveBtn = $(".saveBtn");
let currentTime = dayjs().hour()
let timeBox = document.querySelectorAll('.description')
let saveBox = document.querySelectorAll('.saveBtn')
let savedArray = []


saveBtn.on('click', function (event) {
  var value = $(this).siblings('.description').val();
  var time = $(this).parent().attr('id');
  
    localStorage.setItem(time, value)
  
  

}); 


function populateSaved () {
  for (let i = 0; i < timeBox.length; i++) {
    let pulledItems = localStorage.getItem('inputItems')
    
    // $(saveBox).parent().children('textArea').text(pulledItems[i])
    if (pulledItems[i] === $attr('id')) {
      $attr('id').children('textArea').text(pulledItems[i].value)
    }
    
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