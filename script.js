// need the following: look at forEach method (allows you to assign ids and values);
// need button event listener that saves the value of the textbox to local storage; 

// IDs object with IDs for the full row (for color change w/ time of day), form IDs (for the actual text of the to-do item), and button IDs (to assign to the save-> local storage function)
var ids = {
    rowIds: ['#9','#10','#11','#12','#1','#2','#3','#4','#5'],
    formIds: ['#form9','#form10','#form11','#form12','#form1','#form2','#form3','#form4','#form5'],
    buttonIds: ['#button9','#button10','#button11','#button12','#button1','#button2','#button3','#button4','#button5']
}

console.log(ids);

// create the M/D/Y for the header
var headBreak = document.createElement("br")
var addDateTime = moment().dayOfYear(Number)
document.getElementById('samHead').append(headBreak)
document.getElementById('samHead').append(addDateTime)

// loop to get local storage items across each of the form IDs
for (i = 0; i < ids.formIds.length; i++) {
    var getGet = localStorage.getItem(ids.formIds[i])
    console.log(getGet);
    $(ids.formIds[i]).val(getGet)
}

// function to make the rows change color based on TOD - to be refractored with for loop using IDs index
// for (i = 0; i < ids.rowIds.length; i++) {

// }

// after 9 am
if (moment().hours() >= 9) {
    $('#9').css("background-color", "#DCDCDC");
}
// after 10 am
if (moment().hours() >= 10) {
    $('#10').css("background-color", "#DCDCDC");
}
// after 11 am
if (moment().hours() >= 11) {
    $('#11').css("background-color", "#DCDCDC");
}
// after 12 pm
if (moment().hours() >= 12) {
    $('#12').css("background-color", "#DCDCDC");
}
// after 1 pm
if (moment().hours() >= 13) {
    $('#1').css("background-color", "#DCDCDC");
}
// after 2 pm
if (moment().hours() >= 14) {
    $('#2').css("background-color", "#DCDCDC");
}
// after 3 pm
if (moment().hours() >= 15) {
    $('#3').css("background-color", "#DCDCDC");
}
// after 4 pm
if (moment().hours() >= 16) {
    $('#4').css("background-color", "#DCDCDC");
}
// after 5 pm
if (moment().hours() >= 17) {
    $('#5').css("background-color", "#DCDCDC");
}

// 9 am input to local storage
$(ids.buttonIds[0]).on('click', function () {
    event.preventDefault()
    var text = $(ids.formIds[0]).val()
        console.log(text);
        localStorage.setItem(ids.formIds[0], text)

})
// 10 am input to local storage
$(ids.buttonIds[1]).on('click', function () {
    event.preventDefault()
    var text = $(ids.formIds[1]).val()
        console.log(text);
        localStorage.setItem(ids.formIds[1], text)
    
})
// 11 am input to local storage
$(ids.buttonIds[2]).on('click', function () {
    event.preventDefault()
    var text = $(ids.formIds[2]).val()
        console.log(text);
        localStorage.setItem(ids.formIds[2], text)
    
})
// 12 pm input to local storage
$(ids.buttonIds[3]).on('click', function () {
    event.preventDefault()
    var text = $(ids.formIds[3]).val()
        console.log(text);
        localStorage.setItem(ids.formIds[3], text)
    
})
// 1 pm input to local storage
$(ids.buttonIds[4]).on('click', function () {
    event.preventDefault()
    var text = $(ids.formIds[4]).val()
        console.log(text);
        localStorage.setItem(ids.formIds[4], text)
    
})
// 2 pm input to local storage
$(ids.buttonIds[5]).on('click', function () {
    event.preventDefault()
    var text = $(ids.formIds[5]).val()
        console.log(text);
        localStorage.setItem(ids.formIds[5], text)
    
})
// 3 pm input to local storage
$(ids.buttonIds[6]).on('click', function () {
    event.preventDefault()
    var text = $(ids.formIds[6]).val()
        console.log(text);
        localStorage.setItem(ids.formIds[6], text)
    
})
// 4 pm input to local storage
$(ids.buttonIds[7]).on('click', function () {
    event.preventDefault()
    var text = $(ids.formIds[7]).val()
        console.log(text);
        localStorage.setItem(ids.formIds[7], text)
    
})
// 5 pm input to local storage
$(ids.buttonIds[8]).on('click', function () {
    event.preventDefault()
    var text = $(ids.formIds[8]).val()
        console.log(text);
        localStorage.setItem(ids.formIds[8], text)
    
})













