// $("#q1").click(function(){
//   $("#a1").slideToggle("linear");
//   $("#arrow1-down, #arrow1-up").toggleClass("collapse"); 
// })

// $("#q2").click(function(){
//   $("#a2").slideToggle("linear");
//   $("#arrow2-down, #arrow2-up").toggleClass("collapse"); 
// })

// $("#q3").click(function(){
//   $("#a3").slideToggle("linear");
//   $("#arrow3-down, #arrow3-up").toggleClass("collapse"); 
// })

// the above can be compressed into just one function using "this"


$(".question").click(function(){
  $(this).next().fadeToggle("fast");
  $(this).children().toggleClass("collapse");
})