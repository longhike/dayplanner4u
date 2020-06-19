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


// get 9 am field
var getNine = localStorage.getItem(ids.formIds[0])
console.log(getNine);
$('#form9').val(getNine)

// get 10 am field
var getTen = localStorage.getItem(ids.formIds[1])
console.log(getTen);
$('#form10').val(getTen)

// get 11 am field
var getEleven = localStorage.getItem(ids.formIds[2])
console.log(getEleven);
$('#form11').val(getEleven)

// get 12 pm field
var getTwelve = localStorage.getItem(ids.formIds[3])
console.log(getTwelve);
$('#form12').val(getTwelve)

// get 1 pm field
var getOne = localStorage.getItem(ids.formIds[4])
console.log(getOne);
$('#form1').val(getOne)

// get 2 pm field
var getTwo = localStorage.getItem(ids.formIds[5])
console.log(getTwo);
$('#form2').val(getTwo)

// get 3 pm field
var getThree = localStorage.getItem(ids.formIds[6])
console.log(getThree);
$('#form3').val(getThree)

// get 4 pm field
var getFour = localStorage.getItem(ids.formIds[7])
console.log(getFour);
$('#form4').val(getFour)

// get 5 pm field
var getFive = localStorage.getItem(ids.formIds[8])
console.log(getFive);
$('#form5').val(getFive)

// function to make the rows change color based on TOD - to be refractored with for loop using IDs index
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
        localStorage.getItem(ids.formIds[1], text)
        localStorage.setItem(ids.formIds[1], text)
    // add the GET here
    
})
// 11 am input to local storage
$(ids.buttonIds[2]).on('click', function () {
    event.preventDefault()
    var text = $(ids.formIds[2]).val()
        console.log(text);
        localStorage.setItem(ids.formIds[2], text)
    // add the GET here
    
})
// 12 pm input to local storage
$(ids.buttonIds[3]).on('click', function () {
    event.preventDefault()
    var text = $(ids.formIds[3]).val()
        console.log(text);
        localStorage.setItem(ids.formIds[3], text)
    // add the GET here
    
})
// 1 pm input to local storage
$(ids.buttonIds[4]).on('click', function () {
    event.preventDefault()
    var text = $(ids.formIds[4]).val()
        console.log(text);
        localStorage.setItem(ids.formIds[4], text)
    // add the GET here
    
})
// 2 pm input to local storage
$(ids.buttonIds[5]).on('click', function () {
    event.preventDefault()
    var text = $(ids.formIds[5]).val()
        console.log(text);
        localStorage.setItem(ids.formIds[5], text)
    // add the GET here
    
})
// 3 pm input to local storage
$(ids.buttonIds[6]).on('click', function () {
    event.preventDefault()
    var text = $(ids.formIds[6]).val()
        console.log(text);
        localStorage.setItem(ids.formIds[6], text)
    // add the GET here
    
})
// 4 pm input to local storage
$(ids.buttonIds[7]).on('click', function () {
    event.preventDefault()
    var text = $(ids.formIds[7]).val()
        console.log(text);
        localStorage.setItem(ids.formIds[7], text)
    // add the GET here
    
})
// 5 pm input to local storage
$(ids.buttonIds[8]).on('click', function () {
    event.preventDefault()
    var text = $(ids.formIds[8]).val()
        console.log(text);
        localStorage.setItem(ids.formIds[8], text)
    // add the GET here
    
})













