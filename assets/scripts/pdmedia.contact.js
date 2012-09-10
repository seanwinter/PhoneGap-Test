$(document).ready(function(){
	if(!window.localStorage.getItem('test')){
		window.localStorage.setItem('test','we aint found shit');
	}else{
		//window.localStorage.removeItem('test');
		//window.localStorage.setItem('test', );
	}	
	console.log(window.localStorage.getItem('test'));
	
	$.getJSON('assets/data/contacts.json', function(data){
		$.each(data.contact.contacts, function(i,item)
		{	
			//json nodes: id, f_name, l_name, phone_1, phone_2, dept, title, pic, email	
			//build employee list with specific info in data attributes
			$('#contacts #content').append('<li><a href="#details" data-id="' + item.id + '" data-first="' + item.f_name + 
			'" data-last="' + item.l_name + '" data-phone1="' + item.phone_1 + '" data-phone2="' + item.phone_2 + '"' +
			' data-title="' + item.title + '" data-dept="' + item.dept + '" data-email="' + item.email + '" data-pic="' + item.pic + '">' + 
			'<img src="assets/images/portraits/' + item.pic + '" /><h3>' + item.f_name + ' ' + item.l_name + '</h3><p>Phone: ' + item.phone_1 + '</p></a></li>');
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
				
				});// end click			
		});// end .each a		
	});// end .getJSON
});// end docready
	
$("#details").live(
	"pagebeforeshow",
	function (event) {
			//refresh the ul to show styles appropriately
		$('ul#emp-details').listview('refresh', true);
	}
);
	
