$(function () {
  //   $(document).on("mousemove", function (e) {
  //     $("#cursor").css({ left: e.clientX + "px", top: e.clientY + "px" });
  //   });
  setTimeout(() => {
    setInterval(() => {
      $(".skillInfo").animate({ "margin-left": "-410px" }, 700, function () {
        $(".skillInfo > li:first-child").appendTo(".skillInfo");
        $(".skillInfo").css({ "margin-left": "0" });
      });
    }, 3000);
  }, 4000);

  $(window).on("scroll", function () {
    let scheight = $(this).scrollTop();
    let logoTop = $(".con03").offset().top - 200;
    // console.log("현재높이", scheight);
    // console.log("con03시작", logoTop);
    let logoBottom = $(".con03").offset().top + $(".con03").outerHeight() - 500;
    // console.log("con03끝", logoBottom);

    if (scheight >= logoTop && scheight <= logoBottom) {
      $("h1").stop().animate({ width: "20%" }, 700);
      $("h1 hr").stop().animate({ height: "100px" }, 700);
      $("h1 .mode").fadeIn();
    } else {
      $("h1").stop().animate({ width: "40px" }, 300);
      $("h1 hr").stop().animate({ height: "50px" }, 100);
      $("h1 .mode").fadeOut();
    }
  });

  let clickTime = 0;
  $("h1").on("click", function () {
    let body = document.querySelector("body");
    let logo = document.querySelector("h1 img");
    let logoHor = document.querySelector(".logobox img");
    clickTime++;
    console.log(clickTime);

    if (clickTime % 2 == 0) {
      $(body).css({
        transition: "1s",
        "background-color": "#fffdf6",
        color: "#000",
      });
      logo.src = "img/logo.svg";
      logoHor.src = "img/logo_horizontal.svg";
      $(".con03 .cc").fadeOut(800);
      // $(".con03 .cc").css({})
    } else {
      $(body).css({
        transition: "1s",
        "background-color": "#333",
        color: "#fff",
      });
      logo.src = "img/logo_dark.svg";
      logoHor.src = "img/logo_dark_horizontal.svg";
      $(".con03 .cc").fadeIn(800);
    }
  });

  let i = 0;
  let musicminute = document.querySelector(".mus_num");

  setInterval(() => {
    if (i > 1) {
      i = 0;
    } else {
      i++;
    }

    $(".mus_thumb > li:first-child").stop().animate({ opacity: 0 });
    $(".mus_thumb > li:first-child").appendTo(".mus_thumb");
    $(".mus_thumb > li:last-child").stop().animate({ opacity: 1 });
    $(".mus_thumb > li").removeClass("on");
    $(".mus_thumb > li:nth-child(2)").addClass("on");

    musicminute.textContent = `${i + 1}`;
    $(".mus_cir").animate({ left: `${32 + 32 * i}%` });

    $(".mus_title ul").animate({ "margin-top": "-4.5vw" }, 1000, function () {
      $(".mus_title ul").find("li:first-child").appendTo(".mus_title ul");
      $(".mus_title ul").css({ "margin-top": 0 });
    });
  }, 3000);

  //이건 당장은 필요없음
  // $(".pause").on("click", function () {
  //   console.log("pause");
  //   $(".pause").textContent = `<i class="fa-solid fa-play"></i>`;
  // });
  $(".con07 li").on("click", function () {
    let index = $(this).index();
    let pic = document.querySelector(".modal img");
    let picTitle = document.querySelector(".imgInfo h3");
    let picSize = document.querySelector(".imgInfo span");
    let picInfo = document.querySelector(".imgInfo p");
    console.log(pic);
    console.log(index);

    pic.src = `img/illust_${index}.png`;

    if (index == 0) {
      $(picTitle).text("벡터 이미지");
      $(picSize).text("210mm × 297mm (A4), CMYK");
      $(picInfo).text("어도비 일러스트레이터 구현, jpg");
    } else if (index == 1) {
      $(picTitle).text("벡터 이미지");
      $(picSize).text("210mm × 297mm (A4), CMYK");
      $(picInfo).text("어도비 일러스트레이터 구현, png");
    } else if (index == 2) {
      $(picTitle).text("");
      $(picSize).text("");
      $(picInfo).text("");
    } else if (index == 3) {
      $(picTitle).text("");
      $(picSize).text("");
      $(picInfo).text("");
    } else if (index == 4) {
      $(picTitle).text("");
      $(picSize).text("");
      $(picInfo).text("");
    } else if (index == 5) {
      $(picTitle).text("");
      $(picSize).text("");
      $(picInfo).text("");
    } else if (index == 6) {
      $(picTitle).text("");
      $(picSize).text("");
      $(picInfo).text("");
    }

    $(".modalBox").fadeIn();
    $(".modalBox").css({ position: "fixed" });
  });
  $(".close").on("click", function () {
    $(".modalBox").fadeOut();
  });
});
