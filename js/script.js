$(document).ready(function(){
	cat = '<img src="http://thecatapi.com/api/images/get?format=src&type=gif">';
	$url = 'https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?'
		var val = "";
		    $(".cat").hide();

	$.getJSON($url, function(json){
		val += json.quoteText + " - ";
		val += json.quoteAuthor;
		$(".quote").html(val);

	    $(document).on('click', '.newQuote', function() {
	   val = "";
	$.getJSON($url, function(json){
		val += json.quoteText + " - ";
		val += json.quoteAuthor;
		$(".quote").html(val);
	});
});

  $(".tweet").click(function() {
    window.open("https://twitter.com/intent/tweet?text="+ val);
  });


$(document).on('click','.showCat', function(){
    $(".cat").show();
  });

	});
});