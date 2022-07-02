$(document).ready(function(){
    var docEl = $(document),
        headerEl = $('header'),
        headerWrapEl = $('.wrapHead'),
        navEl = $('nav'),
        linkScroll = $('.scroll');
    
    docEl.on('scroll', function(){
      if ( docEl.scrollTop() > 60 ){
        headerEl.addClass('fixed-to-top');
        headerWrapEl.addClass('fixed-to-top');
        navEl.addClass('fixed-to-top');
      }
      else {
        headerEl.removeClass('fixed-to-top');
        headerWrapEl.removeClass('fixed-to-top');
        navEl.removeClass('fixed-to-top');
      }
    });
    
    linkScroll.click(function(e){
        e.preventDefault();
        $('body, html').animate({
           scrollTop: $(this.hash).offset().top
        }, 500);
     });

     window.navBrand = $("#brand")
     window.navBtn = $(".wrapHead .btn")
     window.navId = $(".wrapHead .btn")[0].getAttribute("data-bs-toggle")
     window.nav = document.getElementById(navId)
     window.navShow = false

     window.onresize = () => {
      var width = window.innerWidth
      if(width <= 550){
        window.navShow = false
        $(nav).hide()
        navBtn.show()
        navBrand.css({"float" : "none"})
        $(nav).css({"float" : "none"})
        $("nav ul li").css({"display":"block"})
      }
      else {
        window.navShow = true
        $(nav).show()
        navBtn.hide()
        navBrand.css({"float" : "left"})
        $(nav).css({"float" : "right"})
        $("nav ul li").css({"display":"inline-block"})
      }
     }

     onresize()

     navBtn.on("click", () => {
      if(window.navShow) $(nav).hide()
      else $(nav).show()
      window.navShow = !window.navShow
     })

     $("img").on("click", (e) => {
      var x = e.target.getAttribute("href")
      if(x != null) location.href = x
     })
  });