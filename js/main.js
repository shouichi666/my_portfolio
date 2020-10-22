
const stringArrey = [
  {
    title: 'SURVICE',
    text : '私ができることをまとめてみました。',
  },
  {
    title: 'WORKS',
    text : 'これまで製作してきたものです',
  },
  {
    title: 'ABOUT',
    text : '私についてまとめました。時間があればご覧ください',
  },
  {
    title: 'CONTACT',
    text : 'お問い合わせ。現在開発中です',
  }
]


$(function(){
  
//====== タイピングアニメーション関数 =====
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

  
/*********************     トップページのみ   ***************************/
  if( $('body').attr('id') === 'top' ) {

//======= トップページタイピングアニメーション
    for( let i = 0; i < stringArrey.length; i++){  
      let n = i+1;
      let hoverTarget = document.querySelector(`#js${n}`);
      let stringLine = document.querySelector(`#typeWrite${n}`);
        hoverTarget.addEventListener('mouseover', ()=>{
          typeWrite({
                el: `#typeWrite${n}`,
                speed: 90,
                string: stringArrey[i].title,
              });
            });
        hoverTarget.addEventListener('mouseout', ()=>{
          setTimeout(() => {
            stringLine.textContent = '';
          }, 900);
        });
    }; //end for

//======= ローディング画面
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

  else ///******************   ここから下層ページ     *******************///
  {

//======= タブの位置変更
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

//======= spナビゲーション
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

//======= スクロールアニメーション
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

//======= リターンボタン
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

//======= モーダル
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

//======= ローディングタイピング
  typeWrite({
        el: '#strings',
        speed: 100,
        string: '...Now loading..',
  });

//======= ローディング画面
    const loader = document.querySelector('.string-loader');  
    window.addEventListener('load' , stopload);
    function stopload() {
      loader.classList.add('hide');
  }

//======= レスポンシブ対応時ヘッダーのパララックス
  if( $(window).width() > 600 ){  
    const header = $('#header');
    const focter = 1.5;
    let windowHeight = $(window).height();
    $(window).on( 'scroll', function(){
      let scrollY = $(this).scrollTop();
      if(scrollY > windowHeight){
        header.hide();
      } else {
        header.show();
        header.css('transform', 'translateX('+ -scrollY*focter +'px)');
      }
    });
  }

//======= ページタイトルタイピングアニメーション
  for( let i = 0; i < stringArrey.length; i++){
    let tpTitile = document.querySelector(`#typeTitle${i}`);
    let tpText = document.querySelector(`#typeText${i}`);

    if(tpTitile != null && tpText != null){

      setTimeout( () => {
        typeWrite({
          el: `#typeTitle${i}`,
          speed: 100,
          string: stringArrey[i].title,
        });
      }, 2000);
      setTimeout(() => {
        typeWrite({
          el: `#typeText${i}`,
          speed: 100,
          string: stringArrey[i].text,
        });
      } ,3000);
    }
    
  }


  } //else
});


