module.exports = function toReadable (number) {
	let units = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
	let tens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
	let dozens = ['zero', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
	let result = '';
	if (String(number).length === 1) {
		result = units[number];
	} else if (String(number).length === 2) {
		number < 20 ? result = tens[number-10] : number % 10 === 0 ? result = dozens[Math.floor(number / 10)] : result = dozens[Math.floor(number / 10)] + ' ' + units[number % 10];
	} else {
		result = units[Math.floor(number / 100)] + ' hundred';
		let numberdozen = number % 100;
		if (numberdozen === 0) {
			return result;
		} else if (numberdozen < 10) {
			result = result + ' ' + units[numberdozen];
		} else {
			numberdozen < 20 ? result = result + ' ' + tens[numberdozen-10] : numberdozen % 10 === 0 ? result = result + ' ' + dozens[Math.floor(numberdozen / 10)] : result = result + ' ' + dozens[Math.floor(numberdozen / 10)] + ' ' + units[numberdozen % 10];
		}
	}
	return result;
}
