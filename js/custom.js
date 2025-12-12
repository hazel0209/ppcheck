$(function () {
  //   $(document).on("mousemove", function (e) {
  //     $("#cursor").css({ left: e.clientX + "px", top: e.clientY + "px" });
  //   });

  //   setInterval(() => {
  //     $(".skillInfo").animate({ "margin-left": "-20vw -10px" }, function () {
  //       $(".skillInfo > li:first-child").appendTo(".skillInfo");
  //       $(".skillInfo").css({ "margin-left": "0" });
  //     });
  //   }, 2000);

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

  let i = 0;
  let musicminute = document.querySelector(".mus_num");

  setInterval(() => {
    if (i > 2) {
      i = 0;
    } else {
      i++;
    }

    $(".mus_thumb").animate({ left: "-30vw" }, 1000, function () {
      $(".mus_thumb > li:first-child").appendTo(".mus_thumb");
      $(".mus_thumb").css({ left: "0" });

      $(".mus_thumb > li").removeClass("on");
      $(".mus_thumb > li:nth-child(2)").addClass("on");
      musicminute.textContent = `${i}`;
      $(".mus_cir").animate({ left: `${32 * i}%` });
    });

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

  $(".pause").on("click", function () {
    console.log("pause");
    $(".pause").textContent = `<i class="fa-solid fa-play"></i>`;
  });

  $(".con07 li").on("click", function () {
    $(".modalBox").fadeIn();
  });
  $(".close").on("click", function () {
    $(".modalBox").fadeOut();
  });
});
