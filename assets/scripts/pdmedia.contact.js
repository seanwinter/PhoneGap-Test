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
		lname = $(this).find('l-name').text(),
		phone_1 = $(this).find('phone-1').text(),
		phone_2 = $(this).find('phone-2').text(),
		title = $(this).find('title').text(),
		dept = $(this).find('dept').text(),
		email = $(this).find('email').text(),
		pic = $(this).find('pic').text(),
		empID = $(this).attr('id');
		
		//build employee list with specific info in data attributes
		$('#contacts #content').append('<li><a href="#details" data-id="' + empID + '" data-first="' + fname + 
		'" data-last="' + lname + '" data-phone1="' + phone_1 + '" data-phone2="' + phone_2 + '" data-phone2="' + phone_2 + '"' +
		' data-title="' + title + '" data-dept="' + dept + '" data-email="' + email + '" data-pic="' + pic + '">' + fname + ' ' + lname + '</a></li>');
	});
	$('#content li a').each(function(){
		$(this).click(function(){
			var html = '';
			//populate variable HTML with data attributes and markup
			html = '<div class="employee-data"><h3>' + $(this).attr('data-first') + ' ' + $(this).attr('data-last') + '</h3>';
			html += '<img class="img-portrait" src="assets/images/portraits/' + $(this).attr('data-pic') + '">';
			html += '<ul data-role="listview" data-inset="true">';
			html += '<li>Title: ' + $(this).attr('data-title') + '</li>';
			html += '<li>Department: ' + $(this).attr('data-dept') + '</li>';
			html += '<li>Phone 1: ' + $(this).attr('data-phone1') + '</li>';
			html += '<li>Phone 2: ' + $(this).attr('data-phone2') + '</li>';
			html += '<li>Email: ' + $(this).attr('data-email') + '</li>';
			html += '</ul></div>';
			
			
			//build details html
			$('#details #detail-content').html(html);
			});
	});
}