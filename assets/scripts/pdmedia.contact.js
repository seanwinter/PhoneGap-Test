$.ajax({
    type: "GET",
    url: "assets/data/contacts.xml",
    dataType: "xml",
    success: parseContacts,
		complete: function(){}
});
	
$("#details").live(
	"pagebeforeshow",
	function (event) {
			//refresh the ul to show styles appropriately
		$('ul#emp-details').listview('refresh', true);
	}
	);
	
function parseContacts(xml)
{
	$(xml).find('entry').each(function()
	{ 
		//populate variables with employee information from XML
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
		' data-title="' + title + '" data-dept="' + dept + '" data-email="' + email + '" data-pic="' + pic + '">' + 
		'<img src="assets/images/portraits/' + pic + '" /><h3>' + fname + ' ' + lname + '</h3><p>Phone: ' + phone_1 + '</p></a></li>');
	});
	$('#content li a').each(function(){
		$(this).click(function(){

			var html = '', ul_list = '';
			
			//populate variable HTML with data attributes and markup			
			html = '<img class="img-portrait" src="assets/images/portraits/' + $(this).attr('data-pic') + '">';
			html += '<h3>' + $(this).attr('data-first') + ' ' + $(this).attr('data-last') + '</h3>';
			html += '<div class="clear"></div>';
			
			ul_list = '<li>Title: ' + $(this).attr('data-title') + '</li>';
			ul_list += '<li>Department: ' + $(this).attr('data-dept') + '</li>';
			ul_list += '<li>Phone 1: ' + $(this).attr('data-phone1') + '</li>';
			ul_list += '<li>Phone 2: ' + $(this).attr('data-phone2') + '</li>';
			ul_list += '<li>Email: ' + $(this).attr('data-email') + '</li>';					
			
			//build details html
			$('#details #detail-content #emp-img').html(html);
			$('ul#emp-details').html(ul_list);
			
			});
			
	});

}