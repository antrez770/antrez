$(document).ready(function() {
	

$("#submit").on("keypress click", function() {

var parameter = $("#eml").val();
var loc = "http://www.coral.co.uk/register" + "?eml=" + parameter;//window.location; + parameter in the test write send parameter and redirect the page.

$.ajax(
{
    url: 'contact_form.php', // adrees of the send page to
    type: 'post', // type of the send data
    dataType: 'html', // type of recieved data
    data: {parameter: parameter}, // send data
    success: function(data) // if transfer is success
    {   

        $('#answer').empty();  // clear output data before
        $('#answer').append(data); // output received data       
    }
});

if (parameter == '') {
	alert('Please fill the field');
}
else if (parameter != '') {


window.location= "?eml=" + parameter;
setTimeout(window.location.replace(loc), 10000); 
$("#form")[0].reset(); // To reset form fields on success.
}


});

});

