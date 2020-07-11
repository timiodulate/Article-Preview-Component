$(document).ready(function(){
  $("#myTooltips a").tooltip({
      template : '<div class="tooltip">
        <div class="tooltip-arrow">
          </div>
            <div class="tooltip-head"><h3><i class="fa fa-info-circle"></span> Tool Info</h3></div><div class="tooltip-inner"></div></div>'
  });
});