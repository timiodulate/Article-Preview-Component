$(document).ready(function(){
  $("#myTooltips a").tooltip({
      template : '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>'

      title: "<h4><img src='images/smiley.png' alt='Smiley'> Hello, <b>I'm</b> <i>Smiley!</i></h4>",  
        html: true
  });
});