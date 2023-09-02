$(readyNow);
function readyNow() {
console.log("hello js and jq"); 
$(".submit").on("click", addInput)

}// end of readyNow

/*  task checklist:
   will need a listener for the delete button tied to the table
   need to make addInput append a <tr> with 6 <th> inside for inputs
   need to add a calculator that shows the total
   delete button needs to remove the <tr> element AND 
   delete button needs to change the calculator to correcly reflect 
*/

function addInput() {
    console.log('button says "hello"'); //button working
    
}