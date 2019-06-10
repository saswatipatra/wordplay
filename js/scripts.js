$(function() {
  var threeOrMore = [];

  $("form").submit(function(event) {
    event.preventDefault();
    var input = $("#sentence").val();
    var words = input.split(" ");
    // words.forEach(function(word) {
    //   if (word.length >= 3) {
    //     threeOrMore.push(word);
    //   }
    // });

    threeOrMore = words.filter(word => word.length >= 3);

    var reverse = threeOrMore.reverse();
    alert(reverse.join(" "));
  });
});
