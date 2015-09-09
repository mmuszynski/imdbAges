injectAges();

function injectAges() {

	var tag = document.getElementsByTagName('time')[0]
	if (typeof tag === 'undefined') {
		return;
	}

	var dateString = tag.getAttribute('datetime');
	var dateElements = dateString.split('-');
	var birthday = new Date(dateElements[0], dateElements[1], dateElements[2]);
	var year_items = document.getElementsByClassName('year_column');

	for (var i = 0; i < year_items.length; i++) {
		var raw_date = year_items[i].innerHTML.split('/');
		if (raw_date == "(????)") {
			continue;
		}
		var dates = raw_date[0].split('-')
		var movie_date_first = dates[0].replace(/&nbsp;/g,'');
		var movie_date_last = dates[1]
		
		var age_first = (new Date((new Date(movie_date_first,1,1)) - birthday)).getFullYear() - 1970;
		var age_last = (new Date((new Date(movie_date_last,1,1)) - birthday)).getFullYear() - 1970;
		
		if (dates.length == 2) {
			year_items[i].innerHTML = dates[0] + "-" + dates[1] + " (Age: " + age_first + "-" + age_last + ")";
		} else {
			year_items[i].innerHTML = dates[0] + " (Age: " + age_first + ")";
		}
	}

};
