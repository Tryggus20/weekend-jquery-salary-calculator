$(readyNow);
function readyNow() {
console.log("hello js and jq"); 
$(".submit").on("click", addInput)

}// end of readyNow

/*  task checklist:
   will need a listener for the delete button tied to the table
   need to make addInput append a <tr> with 6 <td> inside for inputs
   need to add a calculator that shows the total
   delete button needs to remove the <tr> element AND 
   delete button needs to change the calculator to correcly reflect 
*/
let annualSalary = 0 // outside of function so my delete button can access it

function addInput() {
    console.log('button says "hello"'); //button working
    let firstName = $(".firstName").val();
    let lastName = $('.lastName').val();
    let id = $('.id').val();
    let title = $('.title').val();
    annualSalary = Number ($('.annualSalary').val());
    console.log(annualSalary);
    $(`.table`).append(
    `<tr>
     <td>${firstName}</td>
     <td>${lastName}</td>
     <td>${id}</td>
     <td>${title}</td>
     <td>${annualSalary}</td>
     <td class="delete"><button class="deleteButton">Delete</button></td>
     </tr>
`) //end of append

} //end of addInput function