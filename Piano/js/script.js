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
//$(".teclab").mouseleave(function(){  });
//$(".teclan").mouseleave(function(){ $(this).removeClass("teclan_press");  });


  /*$("#1").mousedown(function(){$(this).addClass("teclab_press");  var audio = document.getElementById('tone-1A'); audio.currentTime=0; audio.play(); });
   $("#2").mousedown(function(){$(this).addClass("teclab_press");  var audio = document.getElementById('tone-1B'); audio.currentTime=0; audio.play(); });*/
   /*9

   function adAudio(var tecla,var tono){
         var audio = document.getElementById(tono);
         var total = parseInt(audio.dutarion);
         var actualt =parseInt(audio.currentTime); 
         audio.play();  
        tecla.addClass("teclab_press");      
        if(actualt >= total){
          tecla.removeClass("teclan_press");
        }
   }
 */

   $("#1").mousedown(function(){$(this).addClass("teclab_press");  var audio = document.getElementById('tone-3E'); audio.currentTime=0; audio.play(); setTimeout(function(){ $("#1").removeClass("teclab_press");}, 350);}); 
   $("#2").mousedown(function(){$(this).addClass("teclab_press");  var audio = document.getElementById('tone-3F'); audio.currentTime=0; audio.play(); setTimeout(function(){ $("#2").removeClass("teclab_press");}, 350);});    
   $("#3").mousedown(function(){$(this).addClass("teclab_press");  var audio = document.getElementById('tone-3G'); audio.currentTime=0; audio.play();  setTimeout(function(){ $("#3").removeClass("teclab_press");}, 350);});
   $("#4").mousedown(function(){$(this).addClass("teclab_press");  var audio = document.getElementById('tone-3A'); audio.currentTime=0; audio.play(); setTimeout(function(){ $("#4").removeClass("teclab_press");}, 350);});    
   $("#5").mousedown(function(){$(this).addClass("teclab_press");  var audio = document.getElementById('tone-3B'); audio.currentTime=0; audio.play(); setTimeout(function(){ $("#5").removeClass("teclab_press");}, 350);});    
   $("#6").mousedown(function(){$(this).addClass("teclab_press");  var audio = document.getElementById('tone-4C'); audio.currentTime=0; audio.play();  setTimeout(function(){ $("#6").removeClass("teclab_press");}, 350);});    
   $("#7").mousedown(function(){$(this).addClass("teclab_press");  var audio = document.getElementById('tone-4D'); audio.currentTime=0; audio.play();  setTimeout(function(){ $("#7").removeClass("teclab_press");}, 350);}); 
   $("#8").mousedown(function(){$(this).addClass("teclab_press");  var audio = document.getElementById('tone-4E'); audio.currentTime=0; audio.play(); setTimeout(function(){ $("#8").removeClass("teclab_press");}, 350);}); 
   
  $("#1a").mousedown(function(){$(this).addClass("teclan_press");var audio = document.getElementById('tone-3Fs'); audio.currentTime=0; audio.play(); setTimeout(function(){ $("#1a").removeClass("teclan_press");}, 350);}); 
    $("#a2a").mousedown(function(){$(this).addClass("teclan_press");var audio = document.getElementById('tone-3Fs'); audio.currentTime=0; audio.play(); setTimeout(function(){ $("#a2a").removeClass("teclan_press");}, 350);}); 
      $("#3a").mousedown(function(){$(this).addClass("teclan_press");var audio = document.getElementById('tone-3Gs'); audio.currentTime=0; audio.play(); setTimeout(function(){ $("#3a").removeClass("teclan_press");}, 350);});  
          $("#5a").mousedown(function(){$(this).addClass("teclan_press");var audio = document.getElementById('tone-3As'); audio.currentTime=0; audio.play(); setTimeout(function(){ $("#5a").removeClass("teclan_press");}, 350);}); 
            $("#6a").mousedown(function(){$(this).addClass("teclan_press");var audio = document.getElementById('tone-4Cs'); audio.currentTime=0; audio.play(); setTimeout(function(){ $("#6a").removeClass("teclan_press");}, 350);}); 
              $("#7a").mousedown(function(){$(this).addClass("teclan_press");var audio = document.getElementById('tone-4Ds'); audio.currentTime=0; audio.play(); setTimeout(function(){ $("#7a").removeClass("teclan_press");}, 350);}); 

});
