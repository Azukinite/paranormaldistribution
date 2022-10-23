import wixLocation from 'wix-location';

$w.onReady(function () {

	$w('#button1').onClick(() => {
        let costumeQuery = $w('#input1').value;
        console.log(costumeQuery);
	//fetch JSON
	let url = "https://api.scaleserp.com/search?api_key=[API_KEY]&search_type=news&num=3&location=United+States&google_domain=google.com&gl=us&hl=en";
  	let fullUrl = url + "&q=" + costumeQuery;
 
  	fetch(fullUrl, {method: 'get'})
    .then(response => response.json())
    .then(json => {
		//populate gallery
        $w('#image10').src = json.news_results[0].thumbnail;
		$w('#text3').text = json.news_results[0].title.toString();
		$w("#text6").text = json.news_results[0].snippet.toString();
		
        $w('#image11').src = json.news_results[1].thumbnail;
        $w('#text4').text = json.news_results[1].title.toString();
		$w("#text7").text = json.news_results[1].snippet.toString();

        $w('#image12').src = json.news_results[2].thumbnail;
        $w("#text5").text = json.news_results[2].title.toString();
        $w("#text8").text = json.news_results[2].snippet.toString();

	});
    })
});