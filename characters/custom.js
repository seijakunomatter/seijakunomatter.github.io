
         $(document).ready(function(){







           $('.rostim').on('click',function(){
           var a = this.children[0].attributes.src.value;
               console.log(a)
           $('#character').html('<img src="'+a+'">')
            $("html, body").animate({ scrollTop: $('#character').offset().top }, 400);

           })  ;








             var wid = $(window).width()
             var amt = Math.floor(wid/200)


               var slick = $('.container-nav').slick({
                    asNavFor:".container-inner",
                  waitForAnimate:false,
    // centerMode:true,
    //centerPadding:"0",
      slidesToShow:22,
      arrows:false,
      initialSlide:0,
      speed:300,
                   infinite:false,
      cssEase:'ease-out',
      easing:'ease-out',
      swipeToSlide:true,
      focusOnSelect:true,
    /*

       responsive: [
           {
      breakpoint: 1440,
      settings: {
        slidesToShow: 22,
        slidesToScroll: 3,
      }
    },

    {
      breakpoint: 800,
      settings: {
         centerMode:true,
           centerPadding:"50px",
        slidesToShow: 3,
        slidesToScroll: 1
      }}]
      */
               })

  var slick = $('.container-inner').slick({
   // setting-name: setting-value
                    asNavFor:".container-nav",
      waitForAnimate:false,
     centerMode:true,
    centerPadding:"210px",
      slidesToShow:10,
      arrows:false,
      initialSlide:19,
      speed:300,
      cssEase:'ease-out',
      easing:'ease-out',
      swipeToSlide:true,
      focusOnSelect:true,


       responsive: [
           {
      breakpoint: 1440,
      settings: {
        slidesToShow: 7,
        slidesToScroll: 3,
      }
    },

    {
      breakpoint: 800,
      settings: {
         centerMode:true,
           centerPadding:"50px",
        slidesToShow: 3,
        slidesToScroll: 1
      }
    }],

  });



                 slick.on('mousewheel',function(e) {
    e.preventDefault();

    if (e.deltaY < 0) {
      $(this).slick('slickNext');
    }
    else {
      $(this).slick('slickPrev');
    }
  });


});


