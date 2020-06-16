// need the following: look at forEach method (allows you to assign ids and values);
// need button event listener that saves the value of the textbox to local storage; 

// IDs object with IDs for the full row (for color change w/ time of day), form IDs (for the actual text of the to-do item), and button IDs (to assign to the save-> local storage function)
var ids = {
    rowIds: ['#9','#10','#11','#12','#1','#2','#3','#4','#5'],
    formIds: ['#form9','#form10','#form11','#form12','#form1','#form2','#form3','#form4','#form5'],
    buttonIds: ['#button9','#button10','#button11','#button12','#button1','#button2','#button3','#button4','#button5']
}

console.log(ids);

console.log(moment().hours());

// create the M/D/Y for the header
var headBreak = document.createElement("br")
var addDateTime = moment().dayOfYear(Number)
document.getElementById('samHead').append(headBreak)
document.getElementById('samHead').append(addDateTime)

// function to make the rows change color based on TOD


// function to grab text-inputs and send to local storage








// $("button").on("click", function () {
//     event.preventDefault()
//     for (var i = 0; i < ids.length; i++) {
//         var inputId = $(ids[i]).attr("id");
//         var inputValue = $(ids[i]).val();
//            var plansObj = {
//           "inputId": inputId,
//           "inputValue": inputValue };
//         if (plansObj["inputValue"] !== "") {
//           plansArray.push(plansObj);
//         }
//         localStorage.setItem("plansArray", JSON.stringify(plansArray));   
//     }
// });
















