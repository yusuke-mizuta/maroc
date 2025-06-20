// カウントアップ
$('#number').on('inview', function(event, isInView) {
    if (isInView) {
      //要素が見えたときに実行する処理
      $("#number .count-up").each(function(){
        $(this).prop('Counter',0).animate({//0からカウントアップ
              Counter: $(this).text()
          }, {
          // スピードやアニメーションの設定
              duration: 3000,//数字が大きいほど変化のスピードが遅くなる。2000=2秒
              easing: 'swing',//動きの種類。他にもlinearなど設定可能
              step: function (now) {
                  $(this).text(Math.ceil(now));
              }
          });
      });
    }
});