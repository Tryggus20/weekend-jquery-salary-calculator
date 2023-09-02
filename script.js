$(readyNow);
function readyNow() {
console.log("hello js and jq"); 
$(".submit").on("click", addInput)
$(".table").on("click", ".deleteButton", deleteRow)

}// end of readyNow

/*  task checklist:
   will need a listener for the delete button tied to the table
   need to make addInput append a <tr> with 6 <td> inside for inputs
   need to add a calculator that shows the total
   delete button needs to remove the <tr> element AND 
   delete button needs to change the calculator to correcly reflect 
*/
let annualSalary = 0 // outside of function so my delete button can access it
let totalSalary =0
let totalMonth = 0
function addInput() {
    console.log('button says "hello"'); //button working
    let firstName = $(".firstName").val();
    let lastName = $('.lastName').val();
    let id = $('.id').val();
    let title = $('.title').val();
    annualSalary = Number ($('.annualSalary').val());
    console.log(annualSalary);

    // if (!firstName || !lastName || !id || !title || annualSalary <= 0) {
    //     alert("Please fill in all fields with the correct information");
    //     return; //alert for missing data comment on/off for testing
    

    $(`.table`).append(
    `<tr class ="removable">
     <td>${firstName}</td>
     <td>${lastName}</td>
     <td>${id}</td>
     <td>${title}</td>
     <td>${annualSalary}</td>
     <td class="delete"><button class="deleteButton">Delete</button></td>
     </tr>
`) //end of append
totalSalary = annualSalary + totalSalary
totalMonth = (totalSalary/12)
$(".monthlySalary").text(totalMonth);
console.log(`Total Salary: ${totalSalary} Monthly Salary: ${totalMonth}`); // added for testing
} //end of addInput function

function deleteRow (event){
    console.log("deletus!");
annualSalary = 
    $(event.target).closest("tr").remove();
}