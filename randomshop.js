import wixLocation from 'wix-location';

$w.onReady(function () {
	// Call functions on page elements, e.g.:
	// $w("#button1").label = "Click me!";
	let query = wixLocation.query;
	console.log(query['costume']);

	//fetch JSON
	let url = "https://api.scaleserp.com/search?api_key=[API_KEY]&search_type=shopping&location=United+States";
  	let fullUrl = url + "&q=" + query['costume'] + "%20costume" + "&shopping_price_min=" + query['priceMin'] + "&shopping_price_max=" + query['priceMax'] + "&num=9";
 
  	fetch(fullUrl, {method: 'get'})
    .then(response => response.json())
    .then(json => {
		//populate gallery
		$w('#image10').src = json.shopping_results[0].image;
		$w("#text14").text = json.shopping_results[0].title.toString();
		$w('#text15').text = json.shopping_results[0].price_raw;
		$w('#text16').text = json.shopping_results[0].merchant;
		$w('#text17').text = json.shopping_results[0].delivery;
		$w("#button1").link = json.shopping_results[0].link;
		$w("#button1").target = "_blank";

		$w('#image11').src = json.shopping_results[1].image;
		$w("#text21").text = json.shopping_results[1].title.toString();
		$w('#text20').text = json.shopping_results[1].price_raw;
		$w('#text19').text = json.shopping_results[1].merchant;
		$w('#text18').text = json.shopping_results[1].delivery;
		$w("#button2").link = json.shopping_results[1].link;
		$w("#button2").target = "_blank";

		$w('#image12').src = json.shopping_results[2].image;
		$w("#text25").text = json.shopping_results[2].title.toString();
		$w('#text24').text = json.shopping_results[2].price_raw;
		$w('#text23').text = json.shopping_results[2].merchant;
		$w('#text22').text = json.shopping_results[2].delivery;
		$w("#button3").link = json.shopping_results[2].link;
		$w("#button3").target = "_blank";

		$w('#image13').src = json.shopping_results[3].image;
		$w("#text29").text = json.shopping_results[3].title.toString();
		$w('#text28').text = json.shopping_results[3].price_raw;
		$w('#text27').text = json.shopping_results[3].merchant;
		$w('#text26').text = json.shopping_results[3].delivery;
		$w("#button4").link = json.shopping_results[3].link;
		$w("#button4").target = "_blank";

		$w('#image14').src = json.shopping_results[4].image;
		$w("#text33").text = json.shopping_results[4].title.toString();
		$w('#text32').text = json.shopping_results[4].price_raw;
		$w('#text31').text = json.shopping_results[4].merchant;
		$w('#text30').text = json.shopping_results[4].delivery;
		$w("#button5").link = json.shopping_results[4].link;
		$w("#button5").target = "_blank";

		$w('#image15').src = json.shopping_results[5].image;
		$w("#text37").text = json.shopping_results[5].title.toString();
		$w('#text36').text = json.shopping_results[5].price_raw;
		$w('#text35').text = json.shopping_results[5].merchant;
		$w('#text34').text = json.shopping_results[5].delivery;
		$w("#button6").link = json.shopping_results[5].link;
		$w("#button6").target = "_blank";

		$w('#image16').src = json.shopping_results[6].image;
		$w("#text41").text = json.shopping_results[6].title.toString();
		$w('#text40').text = json.shopping_results[6].price_raw;
		$w('#text39').text = json.shopping_results[6].merchant;
		$w('#text38').text = json.shopping_results[6].delivery;
		$w("#button7").link = json.shopping_results[6].link;
		$w("#button7").target = "_blank";

		$w('#image17').src = json.shopping_results[7].image;
		$w("#text45").text = json.shopping_results[7].title.toString();
		$w('#text44').text = json.shopping_results[7].price_raw;
		$w('#text43').text = json.shopping_results[7].merchant;
		$w('#text42').text = json.shopping_results[7].delivery;
		$w("#button8").link = json.shopping_results[7].link;
		$w("#button8").target = "_blank";

		$w('#image18').src = json.shopping_results[8].image;
		$w("#text49").text = json.shopping_results[8].title.toString();
		$w('#text48').text = json.shopping_results[8].price_raw;
		$w('#text47').text = json.shopping_results[8].merchant;
		$w('#text46').text = json.shopping_results[8].delivery;
		$w("#button9").link = json.shopping_results[8].link;
		$w("#button9").target = "_blank";
	});
});