
$(function(){
      const loader = document.querySelector('.string-loader');
      window.addEventListener('load' , stopload);
      function stopload() {
        loader.classList.add('hide');
    }
});


$(function(){
  /// トップページのみ//////////////////////////////////
  let typeWrite = (param) => {
    let el = document.querySelector(param.el);
    let speed = param.speed;
    let string = param.string.split("");
    
    string.forEach( ( char, index) => {
        setTimeout(()=>{
          el.textContent += char;
        }, speed * index);
    });
  }

  let delet = (param) => {
    let el = document.querySelector(param.el);
    let speed = param.speed;      
    el.innerText = " ";
  }
  if( $('body').attr('id') === 'top' ) {
    

    const target1 = document.querySelector('#js1');
    target1.addEventListener('mouseenter', ()=>{
      typeWrite({
            el: '#typeWrite1',
            speed: 100,
            string: 'サービス',
          });
    });
    target1.addEventListener('mouseout', ()=>{
      delet({
            el: '#typeWrite1',
            speed: 80,
          });
    });

    const target2 = document.querySelector('#js2');
    target2.addEventListener('mouseenter', ()=>{
      typeWrite({
            el: '#typeWrite2',
            speed: 100,
            string: '制作物',
          });
    });
    target2.addEventListener('mouseout', ()=>{
      delet({
            el: '#typeWrite2',
            speed: 80,
          });
    });
    
    const target3 = document.querySelector('#js3');
    target3.addEventListener('mouseenter', ()=>{
      typeWrite({
            el: '#typeWrite3',
            speed: 100,
            string: '私について',
          });
    });
    target3.addEventListener('mouseout', ()=>{
      delet({
            el: '#typeWrite3',
            speed: 10,
          });
    });
    
    const target4 = document.querySelector('#js4');
    target4.addEventListener('mouseenter', ()=>{
      typeWrite({
            el: '#typeWrite4',
            speed: 98,
            string: 'お問い合わせ',
          });
    });
    target4.addEventListener('mouseout', ()=>{
      delet({
            el: '#typeWrite4',
            speed: 10,
          });
    });


    const countElement = $('.persentNum');
    const countSpeed = 13;
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
  else 
/////ここから下層ページ/////////////////////
  {
    // タブの位置変更
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

    //spナビゲーション
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
    
    // スクロールアニメーション
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

    //リターンボタン
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

    //モーダル
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

    //ローディングタイピング
    setInterval(() => {
      typeWrite({
            el: '#strings',
            speed: 100,
            string: '...Now..loading..',
          });
    }, 2000);
  } //else
});

$(function() {
  if( $(window).width() > 600 ){
    const header = $('#header');
    const post = header.offset().top;
    const focter = 1.5;
    let windowHeight = $(window).height();
    $(window).on( 'scroll', function(){
      let scrollY = $(this).scrollTop();
      console.log(post);
      if(scrollY > windowHeight){
        header.hide();
      } else {
        header.show();
        header.css('transform', 'translateX('+ -scrollY*focter +'px)');
      }
    });

  }
});


