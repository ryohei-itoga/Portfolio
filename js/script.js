
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる

  var topBtn = $('.pagetop');
  topBtn.hide();

  // ボタンの表示設定
  $(window).scroll(function () {
    if ($(this).scrollTop() > 70) {
      // 指定px以上のスクロールでボタンを表示
      topBtn.fadeIn();
    } else {
      // 画面が指定pxより上ならボタンを非表示
      topBtn.fadeOut();
    }
  });

  // ボタンをクリックしたらスクロールして上に戻る
  topBtn.click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 300, 'swing');
    return false;
  });

  //ドロワーメニュー
  $("#MenuButton").click(function () {
    // $(".l-drawer-menu").toggleClass("is-show");
    // $(".p-drawer-menu").toggleClass("is-show");
    $(".js-drawer-open").toggleClass("open");
    $(".drawer-menu").toggleClass("open");
    $("html").toggleClass("is-fixed");
  });

    // ハンバーガーメニュー
  $(".js-hamburger,.js-drawer").click(function () {
    $(".js-hamburger").toggleClass("is-active");
    $(".js-drawer").fadeToggle();
    $("body").toggleClass("is-active");
  });

  //MVを超えたらヘッダー色が変わる
  $(function () {
    // スクロール時の処理
    $(window).on("scroll", function () {
      updateHeaderColor();
    });
    // ページロード時にヘッダーの背景色を設定する
    $(window).on("load", function () {
      updateHeaderColor();
    });
    // ヘッダーの背景色を更新する関数
    function updateHeaderColor() {
      const sliderHeight = $(".mv").height();
      const header = $(".js-header");
      if (sliderHeight < $(this).scrollTop()) {
        header.addClass("headerColorScroll");
      } else {
        header.removeClass("headerColorScroll");
      }
    }
  });

  //ページトップボタン
  $(function () {
    const pageTop = $(".js-page-top");
    pageTop.hide();
    $(window).scroll(function () {
      if ($(this).scrollTop() > 20) {
        pageTop.fadeIn();
      } else {
        pageTop.fadeOut();
      }
    });
    pageTop.click(function () {
      $("body, html").animate(
        {
          scrollTop: 0,
        },
        300
      );
      return false;
    });
  });

  // スムーススクロール (絶対パスのリンク先が現在のページであった場合でも作動)
  $(document).on('click', 'a[href*="#"]', function () {
    let time = 400;
    let header = $('header').innerHeight();
    let target = $(this.hash);
    if (!target.length) return;
    let targetY = target.offset().top - header;
    $('html,body').animate({ scrollTop: targetY }, time, 'swing');
    return false;
  });

  // MV ズームインで画像切り替え
  let swipeOption1 = {
    loop: true,
    effect: 'fade',
    speed: 2000,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
  }
  new Swiper('.js-mv-swiper', swipeOption1);

  // Works スライダー
  let swipeOption2 = {
    loop: true,
    autoplay: {
      delay: 4000,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  }
  new Swiper('.js-works-swiper', swipeOption2);
});

jQuery(function ($) {
  // この中であればWordpressでも「$」が使用可能になる
  // start
  //メインスライド
  var slider = new Swiper(".gallery-slider", {
    slidesPerView: 1,
    centeredSlides: true,
    loop: true,
    loopedSlides: 6, //スライドの枚数と同じ値を指定
    navigation: {
      nextEl: ".gallery-swiper-button-next",
      prevEl: ".gallery-swiper-button-prev",
    },
    // thumbs: {
    //   swiper: thumbs,
    // },
  });

  //サムネイルスライド
  var thumbs = new Swiper(".gallery-thumbs", {
    // slidesPerView: "auto",
    slidesPerView: 6,
    spaceBetween: 5,
    centeredSlides: true,
    loop: true,
    slideToClickedSlide: true,
  });

  slider.controller.control = thumbs;
  thumbs.controller.control = slider;
  // end
});