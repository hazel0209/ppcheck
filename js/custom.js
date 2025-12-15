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
    clickTime++;
    console.log(clickTime);

    if (clickTime % 2 == 0) {
      $(body).css({
        transition: "1s",
        "background-color": "#fffdf6",
        color: "#000",
      });
    } else {
      $(body).css({
        transition: "1s",
        "background-color": "#333",
        color: "#fff",
      });
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

    // $(".mus_thumb")
    //   .stop()
    //   .animate({ left: "-30vw" }, 1000, function () {
    //     $(".mus_thumb > li:first-child").stop().animate({ opacity: 0 });
    //     $(".mus_thumb > li:first-child").appendTo(".mus_thumb");
    //     $(".mus_thumb > li:last-child").stop().animate({ opacity: 1 });
    //     // $(".mus_thumb").css({ left: "0" });
    //   });

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

  // let stop = setInterval(() => {
  //   if (i > 2) {
  //     i = 0;
  //   } else {
  //     i++;
  //   }
  //   musicminute.textContent = `${i}`;

  //   $(".mus_thumb").css({
  //     transform: "translateX(-30vw)",
  //     transition: "transform 1s ease",
  //   });

  //   // 1초 후 실행 (transition 시간과 맞춤)
  //   setTimeout(() => {
  //     $(".mus_thumb > li:first-child").appendTo(".mus_thumb");
  //     $(".mus_thumb").css({
  //       transform: "translateX(0)",
  //       transition: "",
  //     });

  //     // .on 클래스 이동
  //     $(".mus_thumb > li").removeClass("on");
  //     $(".mus_thumb > li:nth-child(2)").addClass("on");
  //     $(".mus_cir").animate({ left: `${32 * i}%` });
  //   }, 1000);
  // }, 3000);

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
  });
  $(".close").on("click", function () {
    $(".modalBox").fadeOut();
  });
});
