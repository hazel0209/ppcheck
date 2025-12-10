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

  //   setInterval(() => {
  //     $(".mus_thumb").animate({ left: "-30vw" }, 2000, function () {
  //       $(".mus_thumb > li:first-child").appendTo(".mus_thumb");
  //       $(".mus_thumb").css({ left: "0" });

  //       $(".mus_thumb > li").removeClass("on");
  //       $(".mus_thumb > li:nth-child(2)").addClass("on");
  //     });
  //   }, 3000);

  let i = 0;
  let musicminute = document.querySelector(".mus_num");

  let stop = setInterval(() => {
    if (i > 2) {
      i = 0;
    } else {
      i++;
    }
    musicminute.textContent = `${i}`;

    $(".mus_thumb").css({
      transform: "translateX(-30vw)",
      transition: "transform 1s ease",
    });

    // 1초 후 실행 (transition 시간과 맞춤)
    setTimeout(() => {
      $(".mus_thumb > li:first-child").appendTo(".mus_thumb");
      $(".mus_thumb").css({
        transform: "translateX(0)",
        transition: "",
      });

      // .on 클래스 이동
      $(".mus_thumb > li").removeClass("on");
      $(".mus_thumb > li:nth-child(2)").addClass("on");
      $(".mus_cir").animate({ left: `${32 * i}%` });
    }, 1000);
  }, 3000);

  $(".pause").on("click", function () {
    console.log("pause");
    $(".pause").textContent = `<i class="fa-solid fa-play"></i>`;
  });
});
