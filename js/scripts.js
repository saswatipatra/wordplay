$(function() {
  var threeOrMore = [];

  $("form").submit(function(event) {
    event.preventDefault();
    var input = $("#sentence").val();
    var words = input.split(" ");
    words.forEach(function(word) {
      if (word.length >= 3) {
        threeOrMore.push(word);
      }
    });
    var reverse = threeOrMore.reverse();
    alert(reverse.join(" "));
  });
});
