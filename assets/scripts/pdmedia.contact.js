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
	alert('Parse function firing now.');
	$(xml).find('entry').each(function()
	{ 
		//populate variables with employee information
		var fname = $(this).find('f-name').text(),
		lname = $(this).find('l-name').text();
		
		//build markup for employee list
		$('#contacts #content').append('<li><a href="#">' + fname + ' ' + lname + '</a></li>');
	});
}

function empDetail()
{
	
}