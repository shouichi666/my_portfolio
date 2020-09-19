$(function(){
  $(window).load(function(){
    $('html').addClass('vue');
  });
});
// トップページのみ
$(function(){
  if( $('body').attr('id') === 'top' ) {
  
      const countElement = $('.persentNum');
      const countSpeed = 15;
      
      countElement.each(function(){
        const self = $(this);
        const numMax = 100;
        const fadeOut = ('fadeOut');
        let thisCount = $(this).text();

          function timer(){
            countTimer = setInterval(function(){
              let countNext = thisCount++;
              self.text(countNext);
              $('.loader').css('width' , countNext + '%');
              if( countNext === numMax ){
                clearInterval(countTimer);
                $('.loaderWrap').addClass(fadeOut);
              }
            }, countSpeed );
          }
          timer();
      });
  } 
  else{
    // タブの位置変更
    $(function(){
      let nav = $('.contentsArea__contents__tabNav');
      let Icon = $('.hbIcon');
      let navPos = nav.offset().top;
      const fixed = 'is-fixed';
      const down = 'is-down';
     $(window).on('load scroll',function(){
      let value = $(this).scrollTop();
    
      if( value > navPos ){
        nav.addClass(fixed);
        Icon.addClass(down);
      } else {
        nav.removeClass(fixed);
        Icon.removeClass(down);
      }
     });
    });
    //spナビゲーション
    $(function(){
      let icon = $('.hbIcon');
      let spNav =$('.spNav');

    icon.on('click',function(){
        if( $(this).hasClass('is-show') ){
          icon.removeClass('is-show');
          spNav.removeClass('is-show');
        } else {
          icon.addClass('is-show');
          spNav.addClass('is-show');
        }
      });
    }); 
  }

});

// スクロールアニメーション
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
//リターンボタン
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
//モーダル
$(function(){
  let clickBtn = $('.worksContainer__wrapper__contents');
  let closeBtn = $('.modal__bk__closeIcon');

  clickBtn.click(function(){
    let target = $(this).data('target');
    let modal = document.getElementById(target);
    $(modal).addClass('open');
    // modal.fadeIn();

    closeBtn.click(function(){
      $(modal).removeClass('open');
    });

  });
});

