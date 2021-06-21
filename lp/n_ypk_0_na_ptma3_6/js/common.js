
var windowWidth = $(window).outerWidth() ;
var flag ;

function rwdChecker(){
  if( windowWidth < 769 ){
    flag = 'SP';
  } else if( windowWidth > 769 ) {
    flag = 'PC';
  }
}

function SPswitch(){
  var replaceWidth = 769;
  var windowWidth = parseInt($(window).width());
  var $elem = $('.switch');
  var sp = '_sp.';
  var pc = '_pc.';
  $elem.each(function () {
    var $this = $(this);
    if (windowWidth >= replaceWidth) {
      $this.attr('src', $this.attr('src').replace(sp, pc));
    } else {
      $this.attr('src', $this.attr('src').replace(pc, sp));
    }
  });
}

$(function() {
  rwdChecker();
  SPswitch();
  $(window).on('resize', function () {
    var replaceWidth = 769;
    var windowWidth = parseInt($(window).width());
    var resizeTimer;
    if (resizeTimer !== false) {
      clearTimeout(resizeTimer);
    }
    if( flag !== 'SP' && windowWidth <= replaceWidth){
      resizeTimer =  setTimeout(function () {
      SPswitch();
      }, 200);
      flag = 'SP';
      console.log(flag);
    } else if( flag !== 'PC' && windowWidth > replaceWidth){
      resizeTimer =  setTimeout(function () {
      SPswitch();
      }, 200);
      flag = 'PC';
      console.log(flag);
    }
  });
});



// アンカーへのスムーズスクロール
$(function(){
  $('a[href^="#"]').click(function(){
    let speed = 500;
    let href= $(this).attr("href");
    let target = $(href == "#" || href == "" ? 'html' : href);
    let position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});

// tab
$(function(){
  var tab = $('ul.tab li');
  var content = $('.tabcontent');
  tab.on('click', function(){
    $(".current").removeClass("current");
    $(this).addClass("current");
    var index = tab.index(this);
    content.removeClass("show").eq(index).addClass("show");
  });
});
