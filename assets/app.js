var animals = ['dog','rabbit','cat','hamster','skunk','goldfish','bird','dragon'];

function renderButtons(){ 

	// Deletes the animals prior to adding new animals (this is necessary otherwise you will have repeat buttons)
	$('#animalButton').empty();

	// Loops through the array of movies
	for (var i = 0; i < animals.length; i++){

		// Then dynamicaly generates buttons for each animal in the array

		// Note the jQUery syntax here... 
	    var a = $('<button>') // This code $('<button>') is all jQuery needs to create the beginning and end tag. (<button></button>)
	    a.addClass('animal'); // Added a class 
	    a.attr('data-id', animals[i]); // Added a data-attribute
	    a.text(animals[i]); // Provided the initial button text
	    $('#animalButton').append(a); // Added the button to the HTML
	}
}

// ========================================================

// This function handles events where one button is clicked
$('#addAnimal').on('click', function(){
	console.log("Clicking");
	// This line of code will grab the input from the textbox
	var animal = $('#animal-input').val().trim();

	// The movie from the textbox is then added to our array
	animals.push(animal);
	
	// Our array then runs which handles the processing of our animal array
	renderButtons();
	// We have this line so that users can hit "enter" instead of clicking on ht button and it won't move to the next page
});

renderButtons();

$(document).on('click', 'button.animal', function(){
		var animalName = $(this).data("id");

		var queryURL = "http://api.giphy.com/v1/gifs/search?q="+ animalName+ "&api_key=dc6zaTOxFJmzC";


		$.ajax({url: queryURL, method: 'GET'})
	 
	 .done(function(response) {
	 	

	 	// Create CODE HERE to Log the queryURL
	 	console.log(queryURL);

	 	// Create CODE HERE to log the resulting object
	 	console.log(response);

	 	
	 	 for (var i = 0; i < response.data.length; i++) {

	 	 	$("#animalspic").append("<div class='col-md-4 pic-container' data-gif-index='"+i+"'></div>");


	 	 	$("div[data-gif-index='"+i+"'").append("Rating: " + response.data[i].rating +"<br/>");
		 	var pic = response.data[i].images.fixed_height.url;
			$("div[data-gif-index='"+i+"'").append('<img src="' + pic +'" height="220px" width="230px">');

		 	console.log(pic);

		 }


		//YOUR CODE GOES IN THESE DASHES. DO NOT MANUALLY TOUCH THE HTML ABOVE.

		//------
		})
	});