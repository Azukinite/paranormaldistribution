import wixLocation from 'wix-location';

$w.onReady(function () {
});


/**
*	Adds an event handler that runs when the element is clicked.
	[Read more](https://www.wix.com/corvid/reference/$w.ClickableMixin.html#onClick)
*	 @param {$w.MouseEvent} event
*/
export function button1_click(event) {	
	console.log('button clicked...')
	let costumeQuery = $w("#input1").value;
	let sliderMin = $w("#rangeSlider1").min;
	let sliderMax = $w("#rangeSlider1").max;
	if(!costumeQuery || costumeQuery === "") {
		//please input costume search
	} else {
	//send to shopping results page
	let page = '/shopping-results'
	let pageQuery = '?costume=' + costumeQuery.toString() + '%20costume' + '?minPrice=' + sliderMin + '?maxPrice=' + sliderMax;
    let targetURL = page + pageQuery;
    console.log('Loading page with URL: ' + targetURL);
    wixLocation.to(targetURL);
	}
}