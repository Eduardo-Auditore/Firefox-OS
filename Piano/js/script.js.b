$(window).resize(function(){

    $('.spl').css({
        position:'absolute',
        left: ($(window).width() - $('.className').outerWidth())/2,
        top: ($(window).height() - $('.className').outerHeight())/2
    });

});

// To initially run the function:

$(document).ready(function() {

  var i = 0;
function animate() {
    if (i > 100) {
        i = 100;
         $(".spl").fadeOut(900);
         $(".wait").fadeOut(1300);
         $('.app').fadeIn(2900);
    }
    document.getElementById("test").style.width = i + "%";
    i++;
    setTimeout(animate, 50);
}
animate();

  $(window).resize();
  //$('.teclab').click(function(){
$(".teclab").mouseleave(function(){ $(this).removeClass("teclab_press");  });
$(".teclan").mouseleave(function(){ $(this).removeClass("teclan_press");  });

  /*$("#1").mouseenter(function(){$(this).addClass("teclab_press");  var audio = document.getElementById('tone-1A'); audio.currentTime=0; audio.play(); });
   $("#2").mouseenter(function(){$(this).addClass("teclab_press");  var audio = document.getElementById('tone-1B'); audio.currentTime=0; audio.play(); });*/
   $("#1").mouseenter(function(){$(this).addClass("teclab_press");  var audio = document.getElementById('tone-3E'); audio.currentTime=0; audio.play(); });
   $("#2").mouseenter(function(){$(this).addClass("teclab_press");  var audio = document.getElementById('tone-3F'); audio.currentTime=0; audio.play(); });
   $("#3").mouseenter(function(){$(this).addClass("teclab_press");  var audio = document.getElementById('tone-3G'); audio.currentTime=0; audio.play(); });
   $("#4").mouseenter(function(){$(this).addClass("teclab_press");  var audio = document.getElementById('tone-3A'); audio.currentTime=0; audio.play(); });
   $("#5").mouseenter(function(){$(this).addClass("teclab_press");  var audio = document.getElementById('tone-3B'); audio.currentTime=0; audio.play(); });
   $("#6").mouseenter(function(){$(this).addClass("teclab_press");  var audio = document.getElementById('tone-4C'); audio.currentTime=0; audio.play(); });
   $("#7").mouseenter(function(){$(this).addClass("teclab_press");  var audio = document.getElementById('tone-4D'); audio.currentTime=0; audio.play(); });
   $("#8").mouseenter(function(){$(this).addClass("teclab_press");  var audio = document.getElementById('tone-4E'); audio.currentTime=0; audio.play(); });
   
  $("#1a").mouseenter(function(){$(this).addClass("teclan_press");var audio = document.getElementById('tone-3Fs'); audio.currentTime=0; audio.play(); });
    $("#a2a").mouseenter(function(){$(this).addClass("teclan_press");var audio = document.getElementById('tone-3Ds'); audio.currentTime=0; audio.play(); });
      $("#3a").mouseenter(function(){$(this).addClass("teclan_press");var audio = document.getElementById('tone-3Gs'); audio.currentTime=0; audio.play(); });       
          $("#5a").mouseenter(function(){$(this).addClass("teclan_press");var audio = document.getElementById('tone-3As'); audio.currentTime=0; audio.play(); });
            $("#6a").mouseenter(function(){$(this).addClass("teclan_press");var audio = document.getElementById('tone-4Cs'); audio.currentTime=0; audio.play(); });
              $("#7a").mouseenter(function(){$(this).addClass("teclan_press");var audio = document.getElementById('tone-4Ds'); audio.currentTime=0; audio.play(); });

});
