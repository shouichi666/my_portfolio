// $(function(){

// });

$(function(){
  $('a[href^="#"]').click(function() {
    // スクロールの速度
    var speed = 550; // ミリ秒で記述
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top - 120;
    $('body,html').animate({
      scrollTop: position
    }, speed, 'swing');
    return false;
   });
  });

// $(function(){
//   let tab = $('.contentsArea__contents__tabNav_tab a');
//   $(tab).on('click',function(){
//     tab.removeClass('show');
//      $(this).addClass('show');
//   });
// });

$(function(){
  $(window).scroll(function (){
    let target = $('.contentsHeading')
    let tab = $('.contentsArea__contents__tabNav_tab a');
    let returnBtn = $('.return');

    target.each(function(){
          let targetNum =target.index(this);
          let position = $(this).offset().top;
          let scroll = $(window).scrollTop();
          let windowHeight = $(window).height();
          if (scroll > position - windowHeight + 500){
            tab.removeClass('show');
            tab.eq(targetNum).addClass('show');
          }
      });

    if($(window).scrollTop() < 200){
      returnBtn.fadeOut();
    } else {
      returnBtn.fadeIn();
    }
  });
});

// $(function(){
//   let href = $(this).attr('href');
//   let target = $(href == "#");
//   let position = target.offset().top;
//   $(window).scroll(function(){
//     if((window).scrollTop() > 300){
//       alert();
//     } 
//   });
// });