const tl = gsap.timeline({ defaults: { ease: "power1.out" } });
tl.to(".text", { y: "0%", duration: 4, stagger: 3 });

tl.fromTo(".banner-content", { opacity: 0 }, { opacity: 1, duration: 5 }, "-=1");

$(window).on("load",function() {
  function fade(pageLoad) {
    var windowBottom = $(window).scrollTop() + $(window).innerHeight();
    var min = 0.3;
    var max = 1;
    var threshold = 0.01;
    
    $(".fade").each(function() {
      /* Check the location of each desired element */
      var objectBottom = $(this).offset().top + $(this).height();
      
      /* If the element is completely within bounds of the window, fade it in */
      if (objectBottom < windowBottom) { //object comes into view (scrolling down)
        if ($(this).css("opacity")<=min+threshold || pageLoad) {$(this).fadeTo(500,max);}
      } else { //object goes out of view (scrolling up)
        if ($(this).css("opacity")>=max-threshold || pageLoad) {$(this).fadeTo(500,min);}
      }
    });
  } fade(true); //fade elements on page-load
  $(window).scroll(function(){fade(false);}); //fade elements on scroll
});


/*
 jQuery(function(){
                $(function () {
                    $(window).scroll(function () {
                        if ($(this).scrollTop() > 200 ) { 
                            $('.bouton').css('right','10');
                        } else { 
                            $('.bouton').removeAttr( 'style' );
                        }
 
                    });
                });
            });
 $('#scrolltotop').click(function(){
	$('html,body').animate({scrollTop: 0}, 'slow');
});
$(window).scroll(function(){
	if($(window).scrollTop()<500){
		$('#scrolltotop').fadeOut();
	}else{
		$('#scrolltotop').fadeIn();
	}
});*/
 // Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
  $('<div></div>')
		.attr('id','scrolltotop')
		.hide()
		.css({'z-index':'1000','position':'fixed','bottom':'25px','right':'30px','cursor':'pointer','width':'40px','height':'40px','background':'purple','border-radius':'90px'})
		.appendTo('body')
		.click(function(){
			$('html,body').animate({scrollTop: 0}, 'slow');
		});
	$('<div></div>')
		.css({'width':'6px','height':'6px','transform':'rotate(-135deg)','border':'solid #ffffff','border-width':'0 3px 3px 0','padding':'3px','margin-top':'16px','margin-left':'15px',})
		.appendTo('#scrolltotop');
	$(window).scroll(function(){
		if($(window).scrollTop()<500){
			$('#scrolltotop').fadeOut();
		}else{
			$('#scrolltotop').fadeIn();
		}
	});