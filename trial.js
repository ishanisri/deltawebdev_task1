


	
 var addButton=document.getElementById("add");
 addButton.addEventListener('click', addMentee);
 function addMentee() {
   


        var table=document.getElementById("final");
        table.contentEditable="true";


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
	btn.setAttribute("onclick","deleteRow(this)"); 
	row.style.backgroundColor='white';
	row.style.fontWeight='normal';
	
	btn.setAttribute("style","background-color:red;border:none;padding: 15px 32px;text-align: center;display: inline-block;font-size: 16px;color:white;");



}


function deleteRow(r){
	
     var table=document.getElementById("final").getElementsByTagName("tbody")[0];  
	 var row=r.parentNode.parentNode;
	
	row.removeChild(r.parentNode);
	
   
    
}
var sortButton=document.getElementById("sort");
sortButton.addEventListener('click', sortMentees);


function sortMentees() {
	  var table, rows, switching, i, x, y, shouldSwitch;
	  table = document.getElementById("final");
	  switching = true;

	  while (switching) {

	    switching = false;
	    rows = table.getElementsByTagName("tr");

	    for (i = 1; i < (rows.length - 1); i++) {

	      x = rows[i].getElementsByTagName("td")[1];
	      y = rows[i + 1].getElementsByTagName("td")[1];

	      if (x.innerHTML > y.innerHTML) {
		rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
		switching=true;
		break;
      }
    }
    
  }
}

