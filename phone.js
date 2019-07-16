// Tabs functionality
var btnContainer = document.getElementById("tabs_div");
var btns = btnContainer.getElementsByClassName("tabButtons");
for (var i = 0; i < btns.length; i++)
{
    btns[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}

// dial functionality:
var number = "";
var dialContainer = document.getElementById("dialTable_div");
var dial_buttons = dialContainer.getElementsByClassName("dial_btn");
for (var i = 0; i < dial_buttons.length; i++)
{
    dial_buttons[i].addEventListener("click", function() {
        var button_value = $(this).val();
		number = number+button_value;
		$("#dial_number").val(number);
    });
}
$("#dial_clear").click(function()
{ // when "button_id" is clicked
    number = "";
	$("#dial_number").val(number);
});

$(document).ready(function()
{ // do this when the document is loaded
    $("#content_dialer").show(); // show the element with ID "element"
    $("#content_contactList").hide(); // hide the element with ID "otherElement"
    $("#content_addContact").hide(); // hide the element with ID "otherElement"
	$("#content_testGestures").hide(); // hide the element with ID "otherElement"

    // var contacts = ["Robert Drake","Emma Frost", "Doreen Green", "Jean Grey",
    // "James Howlett","Ororo Munroe", "Katherine Pryde","Piotr Rasputin",
    // "Scott Summers","Kurt Wagner","Warren Washington","Charles Xavier"];
    // var listOfContacts = document.getElementById("listOfContacts");
    // var listItems = listOfContacts.map( (element) => {
    // `<li id='${element} 'class='listItem'>${element}</li>` });
    // listOfContacts.innerHTML = listItems.join('');
    //
    // for( var i=0;i<contacts.length; i++)
    // {
    //   var name = contacts[i];
    //   var contact_name = document.createElement("li");
    //   listItem.textContent = name;
    //   ul.appendChild(contact_name);
    // }
});

/*
var tabsContainer = document.getElementById("tabs_div");
var tabButtons = tabsContainer.getElementsByClassName("tabButtons");
for (var i = 0; i < tabButtons.length; i++)
{
    tabButtons[i].addEventListener("click", function() {
		for (var j = 0; j < tabButtons.length; j++)
		{
			var button_value = $(this).val();
			var content_id = 'content_'+button_value;
			if(j==i)
			{
				alert(content_id);
				$(`#{content_id}`).show();
			}
			else
			{
				$(`#{content_id}`).hide();
			}
		}
    });
}
*/
//*
$("#dialer").click(function()
{ // when "button_id" is clicked
    $("#content_dialer").show(); // show the element with ID "element"
    $("#content_contactList").hide(); // hide the element with ID "otherElement"
    $("#content_addContact").hide(); // hide the element with ID "otherElement"
	$("#content_testGestures").hide(); // hide the element with ID "otherElement"

});

$("#contactList").click(function()
{ // when "button_id" is clicked
    $("#content_contactList").show(); // show the element with ID "element"
    $("#content_dialer").hide(); // hide the element with ID "otherElement"
    $("#content_addContact").hide(); // hide the element with ID "otherElement"
	$("#content_testGestures").hide(); // hide the element with ID "otherElement"

});

$("#addContact").click(function()
{ // when "button_id" is clicked
    $("#content_addContact").show(); // show the element with ID "element"
    $("#content_contactList").hide(); // hide the element with ID "otherElement"
    $("#content_dialer").hide(); // hide the element with ID "otherElement"
	$("#content_testGestures").hide(); // hide the element with ID "otherElement"

});

$("#testGestures").click(function()
{ // when "button_id" is clicked
    $("#content_testGestures").show(); // show the element with ID "element"
    $("#content_contactList").hide(); // hide the element with ID "otherElement"
    $("#content_dialer").hide(); // hide the element with ID "otherElement"
	$("#content_addContact").hide(); // hide the element with ID "otherElement"

});
//*/


// Gesture functionality:
var downX=0;
var downY=0;
var tolerance=10;

$("#gesture_area").mousedown(function(event)
{
	$("#gesture_output").val("Mouse down");
	downX = event.pageX;
	downY = event.pageY;
});



$("#gesture_area").mouseup(function(event)
{
	upX = event.pageX;
	upY = event.pageY;
	
	/*
	if(upX<downX)
	{
		$("#gesture_output").val("Swipe left");
	}
	else if(upX>downX)
	{
		$("#gesture_output").val("Swipe right");
	}
	else
	{
		$("#gesture_output").val("Mouse up");
	}
	//*/
	if(upY<downY)
	{
		$("#gesture_output").val("Swipe up");
	}
	else if(upY>downY)
	{
		$("#gesture_output").val("Swipe down");
	}
	else
	{
		$("#gesture_output").val("Mouse up");
	}
	
});

