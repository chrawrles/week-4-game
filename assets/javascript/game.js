$(document).ready(function() {

	cats = ['assets/images/red.png','assets/images/blue.png','assets/images/yellow.png','assets/images/green.png'];

	var counter = 0;
	var wins = 0;
	var losses = 0;
	$('#win').html(wins);
	$('#loss').html(losses);
	
	newCats();
	newGame();

	function newCats () {
		var numbers = [1,2,3,4]
			while(numbers.length < 4){
			  var randomnumber = Math.ceil(Math.random()*12)
			  for (var i=0; i< numbers.length; i++){
				if (numbers[i] == randomnumber){
				}
			  }	
			  if(numbers)numbers[numbers.length]=randomnumber;
			}
		console.log(numbers);		

		for (i = 0; i < numbers.length; i++) {
			var imageCat = $('<img>');
			imageCat.attr('data-num', numbers[i]);
			imageCat.attr('src', cats[i]);
			imageCat.attr('alt', 'cats');
			imageCat.addClass('catImage')
			$('#cats').append(imageCat);
		}
	}

	function newGame() {

		counter = 0;
		$('#yourScore').text(counter);

		function randomIntFromInterval(min,max){
		   	return Math.floor(Math.random()*(max-min+1)+min);
			}

		var numberToGuess = randomIntFromInterval(19,120);

		$('.value').text(numberToGuess);


		$('.catImage').on('click', function(){
		    counter = counter + parseInt($(this).data('num'));
		   
		    $('#yourScore').text(counter);

		    if (counter == numberToGuess){
		      $('#status').text('You win!');
		      wins ++;
		      $('#win').text(wins);
		      console.log(wins)
		      $('#cats').empty();
		      newCats();
		        
		    }
		});
	}

});