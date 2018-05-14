
var menteesList=[]


	
var addButton=document.getElementById("add");
 addButton.addEventListener('click', addMentee);
 function addMentee() {
   


var table=document.getElementById("final");


var menteeName=document.getElementById("inputbox").value;

var row=table.insertRow(-1);

var name=row.insertCell(0);
var rating=row.insertCell(1);
var comments=row.insertCell(2);
name.innerHTML=menteeName;
comments.innerHTML=document.getElementById('comments').value;

rating.innerHTML=document.getElementById("ratings").value;
var btn=document.createElement("button");
       // Create a <button> element
var t = document.createTextNode("delete");       // Create a text node
btn.appendChild(t);                                // Append the text to <button>
row.appendChild(btn); 
btn.setAttribute("onclick","deleteRow(this)") ;    


}


function deleteRow(r){
	
     var table=document.getElementById("final").getElementsByTagName("tbody")[0];  
	var row=r.parentNode.parentNode;
	
	row.removeChild(r.parentNode);
	
   
    
}