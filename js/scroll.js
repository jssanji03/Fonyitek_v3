

$(function(){
  $("a").on('click', function () {
    const hash = $(this).attr('href');
    const linkScroll = $(hash).offset().top;
     $('html,body').stop().animate({ scrollTop: linkScroll-80 }, 800);
    
  }); 
});

    
$(function () {
  $(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if( scroll >= 70){
      // 當卷軸超過70px,.gototop就淡入，如果小於就淡出
      $(".gototop").fadeIn();
      
    }else{
      
      $(".gototop").fadeOut();
      
    }
  });
  // 當我按下.gototop時，添加動畫讓卷軸跑道最上面
  $('.gototop').click(function(){
    $('html,body').animate({
      scrollTop:$('html').offset().top
    })
    
    return false;
  });

})