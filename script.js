var sw = {
    // (A) PROPERTIES
    etime : null, // html time display
    erst : null, // html reset button
    ego : null, // html start/stop button
    timer : null, // timer object
    now : 0, // current elapsed time
  };

function change() {
    document.getElementById("cover").style.display="none";
    document.getElementById("container").style.display="none";
}

var getScrollPercent = function(){
  var winHeight = $(window).height();
  var docHeight = $(document).height();
  var scrollTop = $(window).scrollTop(); //NaN or zero at top
  var trackLength = docHeight - winHeight;
  var pctScrolled = Math.floor(scrollTop/trackLength * 100);
  return pctScrolled;
}

document.addEventListener("scroll", function(){
  document.getElementById("percent").style.width = `${getScrollPercent()}%` 
}); 