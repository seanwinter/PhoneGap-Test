$(document).ready(function()
{
  $.ajax({
    type: "GET",
    url: "assets/data/contacts.xml",
    dataType: "xml",
    success: parseXml
  });
});

function parseXml(xml)
{
	$(xml).find('entry').each(function()
	{ 
		//populate variables with employee information
		var fname = $(this).find('f-name').text(),
		lname = $(this).find('l-name').text();
		
		//build markup
		$('#contacts #content').append(fname + ' ' + lname + '<br/>');
	});
}