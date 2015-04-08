$(document).ready(function() {

	var score = 0; // RESET SCORE
	var qnum = 1; // RESET CURRENT QUESTION NUMBER
	var index = qnum - 1;

	$('#count span').text("Question " + qnum + " out of 10");
	$('#score span').text("Score: " + score + " / " + index);


// DEFINE 10-QUESTION ARRAY
	var questions = [];
	questions[0] = "Approximately how much does it cost for a one-year hot dog stand permit in New York's Central Park?";
	questions[1] = "What are the two famous rival cheesesteak joints in Philadelphia?";
	questions[2] = "Which of these is London Bridge?";
	questions[3] = "What famous jazz musician is New Orleans International Airport named after?";
	questions[4] = "What is a resident of Sydney known as?";
	questions[5] = "How much does it cost to ride a San Francisco cable car?";
	questions[6] = "What is the name of the canal that winds its way through all of Venice?";	
	questions[7] = "In what year was the famous glass pyramid designed by I. M. Pei added to the Louvre?";
	questions[8] = "Koelner Dom, the famous cathedral in Cologne, Germany, was built in what architectural style?";
	questions[9] = "What is the famous river that runs through Dublin?";

// DEFINE CORRECT ANSWER ARRAY
	var answers = [];
	answers[0] = "$290,000";
	answers[1] = "Pat's & Geno's";
	answers[2] = "<img src='https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTC7Lr491ul2VWz2_nE6kovEP3Erm6rAv2eJm3EwTIusT1QNAmTng' width='120' height='70'>";
	answers[3] = "Louis Armstrong";
	answers[4] = "Sydneysider";
	answers[5] = "$5.00";
	answers[6] = "Canale Grande";
	answers[7] = "1993";
	answers[8] = "Gothic";
	answers[9] = "River Liffey";

// DEFINE WRONG ANSWERS
	var herrings = [];
	herrings[0] = "$60,000";
	herrings[1] = "$120,000";
	herrings[2] = "$215,000";
	herrings[3] = "Joe's & Pat's";
	herrings[4] = "Joe's & Mickey's";
	herrings[5] = "Mickey's & Pat's";
	herrings[6] = "<img src='http://www.pbs.org/wgbh/buildingbig/wonder/structure/images/london_bridge_1.jpg' width='120' height='80'>";
	herrings[7] = "<img src='https://www.komar.de/fileadmin/media/Fototapeten_Bilder/8-924_Millennium_Bridge_m.jpg' width='120' height='80'>";
	herrings[8] = "<img src='http://nexttriptourism.com/wp-content/uploads/2012/12/Westminster-Bridge-Tourist.jpg' width='120' height='80'>";
	herrings[9] = "Duke Ellington";
	herrings[10] = "Ella Fitzgerald";
	herrings[11] = "Billie Holiday";
	herrings[12] = "Sydney-ite";
	herrings[13] = "Harbour Citizen";
	herrings[14] = "Sydcitizen";
	herrings[15] = "$1.50";
	herrings[16] = "$2.50";
	herrings[17] = "Free!";
	herrings[18] = "Canale Superiore";
	herrings[19] = "Canale Veloce";
	herrings[20] = "Canale Vasta";
	herrings[21] = "1847";
	herrings[22] = "1911";
	herrings[23] = "1972";
	herrings[24] = "Romanesque";
	herrings[25] = "Baroque";
	herrings[26] = "Modern";
	herrings[27] = "The Shannon";
	herrings[28] = "River Swilly";
	herrings[29] = "Water of Leith";

// DEFINE 10-BACKGROUND ARRAY
	var backgrounds = [];
	backgrounds[0] = "images/NY.png";
	backgrounds[1] = "images/PHL.jpg";
	backgrounds[2] = "images/LHR.jpg";
	backgrounds[3] = "images/MSY.jpeg";
	backgrounds[4] = "images/SYD.jpg";
	backgrounds[5] = "images/SFO.jpg";
	backgrounds[6] = "images/VEN.jpg";
	backgrounds[7] = "images/CDG.jpg";
	backgrounds[8] = "images/CLN.jpg";
	backgrounds[9] = "images/DUB.jpg";

// WHEN USER CLICKS PLAY
	$(document.body).on("click","#start", function() {
		$(".fader").fadeOut(300);

		score = 0; // RESET SCORE
		qnum = 1; // RESET CURRENT QUESTION NUMBER
		index = qnum - 1;

		$(".theAnswerSpace").css('background-image', 'url("' + backgrounds[0] + '")');

	// RESET ANSWERS
		$("ul#answers").empty();

	// ASK 1st QUESTION
		$(".question").text(questions[0]);

	// ENTER 1st ANSWER CHOICES
		newCorrectAnswer(answers[index]);
		for(var i = 1; i < 4; i++){
			newAnswer(herrings[3*qnum-i]);
		}

	// SHUFFLE ANSWERS
		var ul = document.querySelector('ul');
		for (var i = ul.children.length; i >= 0; i--) {
		    ul.appendChild(ul.children[Math.random() * i | 0]);
		}

		$('#count span').text("Question " + qnum + " out of 10");
		$('#score span').text("Score: " + score + " / " + index);
	});

// WHEN AN ANSWER IS CLICKED:
	$(document.body).on("click",".answer", function() {
		// Check to see if it's the last answer
		if(qnum == 10){
			if($(this).attr("id")=="correct" & index < 11) {
			score++;
			}
			index++;
		
			$('#score span').text("Score: " + score + " / " + index);

			if(score < 5) {
				$(".introBox span").html("Final Score: " + score + " / 10<br>My senses tell me... you could use a little more travel!");
			}
			else if(score < 8){
				$(".introBox span").html("Not bad! You're a regular city-hopper.");
			}
			else {
				$(".introBox span").html("Congratulations! You are a world class traveler!");
			}

			$(".introButton span").text("Play Again?");
			$(".fader").fadeIn(300);
			return false;
		}

		console.log("Click #" + qnum);

		// Ask the next question.
		$(".question").text(questions[qnum]);

		// Replace the old answer choices with the new answer choices.
		$("ul#answers").empty();

		if($(this).attr("id")=="correct" && qnum < 10) {
			score++;
			console.log("Score #" + score + " for question # " + index);
		}

		qnum++;
		index++;

		newCorrectAnswer(answers[index]);
		$(".theAnswerSpace").css('background-image', 'url("' + backgrounds[index] + '")');

		for(var i = 1; i < 4; i++){
			newAnswer(herrings[3*qnum-i]);
		}
		// Shuffle the answers.
		var ul = document.querySelector('ul');
		for (var i = ul.children.length; i >= 0; i--) {
		    ul.appendChild(ul.children[Math.random() * i | 0]);
		}
		
		$('#score span').text("Score: " + score + " / " + index);
		$('#count span').text("Question " + qnum + " out of 10");

		return false;
	});
});


var newCorrectAnswer = function(answerText){
	$('#answers').append(
		$('<li>').attr({class:'answer', id:'correct', onclick:''}).append(
			$('<span>').attr('id','answerText').append(answerText)
		)
	);
}

var newAnswer = function(answerText){
	$('#answers').append(
		$('<li>').attr({class:'answer', onclick:''}).append(
			$('<span>').attr('id','answerText').append(answerText)
		)
	);
}