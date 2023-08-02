let saveBtn = $(".saveBtn");
let currentTime = dayjs().hour()
let timeBox = document.querySelectorAll('.description')
let saveBox = document.querySelectorAll('.saveBtn')

// savedBtn.on("click", function () {
//   localStorage.setItem("enteredText", $('#savedBtn').parent().children('textArea').val());
// });

saveBtn.on('click', function (event) {
  for (let i = 0; i < timeBox.length; i++) {
    localStorage.setItem(i, $(saveBox[i]).parent().children('textArea').val())
    
  }
  
 
});




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
 


  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
 
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //


  $("#currentDay").text(dayjs().format('dddd, DD, MMMM'));