$(document).ready(function() {
  var theQuote = '';
  var theAuthor = '';
  createOH();
});
  
  $('.btn1').on("click", function() {
    createOH();
  });

  $('.btn2').on("click", function() {
    var myUrl = 'https://twitter.com/intent/tweet?text=' + quote + ' ' + author;
	console.log(myUrl);
    //window.open(myUrl, 'twitter');
    return false;
  });

  function createOH() {
	    var min = 0;
        var max = 8;
        // Select a random OH quote
        var quotes = {
          0: ['OH: If you have to use a lazy Susan for your meds, you are probably taking too many.', 'Anonymous'],
          1: ['OH: I am not a good man, I am a flawed man trying to do good.', 'Anonymous'],
          2: ['OH: Oh that show? I ran out of interest before they ran out of episodes.', 'Anonymous'],
          3: ['OH: Soft Batch cookies, is that just another way of saying you did not finish baking it?', 'Anonymous'],
		  4: ['OH: If you learn from your mistakes, then I am one of the most learned people I know.', 'Doug Belcher'],
		  5: ['OH: What does not kill you only makes you a repeat customer.', 'Stephen Colbert'],
		  6: ['OH: I do not know how my wife does it, she keeps giving in until she gets what she wants!', 'Doug Belcher'],
		  7: ['OH: Sorry, I do not like Facebook enough to like you on Facebook', 'Anonymous'],
		  8: ['OH: I told him to go to nope.com/ItAintGoingToHappen', 'Veronica Belmont']
        };
        var randomQuoteNumber = Math.floor(Math.random()* (max - min + 1)+min);
        $('#quote').text(quotes[randomQuoteNumber][0]);
        $('#author').text(quotes[randomQuoteNumber][1]);
      };