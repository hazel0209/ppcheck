gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);
let v1 = gsap.timeline();

function createAnimatedParticles() {
  let vis = document.querySelector("#visual");
  let shapeFile = ["img/circle.svg", "img/triangle.svg", "img/star.svg"];

  for (let i = 0; i < 20; i++) {
    let particle = document.createElement("img");
    particle.src = shapeFile[Math.floor(Math.random() * shapeFile.length)];
    particle.className = "particle";

    particle.style.position = "absolute";
    particle.style.left = Math.random() * 100 + "%";
    particle.style.top = Math.random() * 100 + "%";
    particle.style.width = 20 + Math.random() * 40 + "px";
    // particle.style.opacity = 0.3 + Math.random() * 0.5;

    vis.appendChild(particle);

    // 미묘한 떠다니는 효과
    gsap.from(
      particle,
      {
        scale: 0.8,
        y: 20,
        duration: 0.6,
        opacity: 0,
        rotation: Math.random() * 360,
      },
      2
    );
    gsap.to(
      particle,
      {
        y: Math.random() * 30 - 15,
        x: Math.random() * 30 - 15,
        rotation: Math.random() * 720,
        duration: 3 + Math.random() * 4,
        scale: Math.random() * 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      },
      2
    );
  }
}

createAnimatedParticles();

v1.fromTo(
  ".vis_line",
  { scaleX: 0, transformOrigin: "left center" },
  { scaleX: 1, transformOrigin: "left center", duration: 1.5 }
)
  .to(
    "#visual .cc",
    {
      opacity: 0.5,
      scale: 1.2,
      ease: "sine.inOut",
    },
    1.5
  )
  .to(
    "#visual .cc",
    {
      rotation: Math.random() * 720,
      duration: 3 + Math.random() * 4,
      scale: 1.2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    },
    1.5
  )
  .from(
    "#visual h2 span",
    {
      y: 50,
      opacity: 0,
      duration: 1.5,
      stagger: 0.5,
    },
    2
  )
  .to(
    "#visual h2 span:nth-child(1)",
    {
      x: "-25%",
      duration: 1,
    },
    3.5
  )
  .to(
    "#visual h2 span:nth-child(2)",
    {
      x: "23%",
      duration: 1,
    },
    3.5
  )
  .from(
    "#visual .lines.a1 hr",
    {
      width: "0",
      opacity: "0",
      duration: 1,
      stagger: 0.2,
    },
    3.0
  )
  .from(
    "#visual .lines.a2 hr",
    {
      width: "0",
      opacity: "0",
      duration: 1,
      stagger: 0.2,
    },
    3.0
  )
  .to(
    ".vis_line",
    {
      height: "400px",
      duration: 1,
    },
    4.5
  )
  .to(
    "#visual h2 span:nth-child(1)",
    {
      y: "-25vh",
      duration: 1,
    },
    4.5
  )
  .to(
    "#visual h2 span:nth-child(2)",
    {
      y: "25vh",
      duration: 1,
    },
    4.5
  );

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".con01",
      start: "0% 0%",
      end: "bottom top",
      // scrub: 3,
      pin: true,
      markers: true,
    },
  })
  .from(".intro h3", { opacity: 0, y: -40, duration: 1.2 })
  .from(".intro li", { opacity: 0, y: -40, stagger: 0.4 })
  .from(".about .btn div", { scale: 0, stagger: 0.2 }, 3)
  .from(".about ul", { height: 0, opacity: 0 }, 3.5)
  .from(".about li", { scale: 0, stagger: 0.2 }, 3.5)
  .from(".aboutMe", { scale: 0 }, 3.8)
  .from(".aboutMe .decoplus", { opacity: 0, scale: 2 }, 4)
  .from(".aboutMe .decoplus.a li", { x: 100, scale: 0, stagger: 0.2 }, 4)
  .from(".aboutMe .decoplus.b li", { x: 100, scale: 0, stagger: 0.2 }, 4)
  .to(".aboutMe .decoplus li", {
    scale: 1.4,
    rotation: 180,
    stagger: 0.6,
    repeat: -1,
    ease: "power4.out",
    duration: 1,
    yoyo: true,
  })
  .from(".aboutMe .pic", { opacity: 0 }, 4.5)
  .from(".aboutMe .bubble1", { scale: 0 }, 4)
  .from(".skills .btn div", { scale: 0, stagger: 0.2 }, 3.5)
  .from(".skillInfo li", { scale: 0, stagger: 0.2 }, 4);

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".con02",
      start: "0% 0%",
      end: "bottom top",
      // scrub: 4,
      pin: true,
      markers: true,
    },
  })
  .from(".timeBar li", { height: 0, stagger: 0.2 }, 0.6)
  .from(".timeBar div", { scale: 0, stagger: 0.4 }, 0)
  .from(".timeline li hr", { width: 0, stagger: 0.5 }, 1.5)
  .from(".timeline li span", { opacity: 0, y: -40, stagger: 0.4 }, 2)
  .from(".timeline li p", { opacity: 0, y: -20, stagger: 0.5 }, 2)
  .from(".github hr", { width: 0 })
  .from(".github a", { opacity: 0, y: -40 });

gsap.timeline({
  scrollTrigger: {
    trigger: ".con03",
    start: "0% 0%",
    end: "bottom top",
    scrub: 4,
    pin: true,
    markers: true,
  },
});
//   .to("h1", { transform: "scale(1.5)" });

let java = gsap.utils.toArray(".java > ul > li");
let picsub = gsap.utils.toArray(".con07 ul li");
let sub1 = gsap.utils.toArray(".con07 li.a");
let sub2 = gsap.utils.toArray(".con07 li.b");
let sub3 = gsap.utils.toArray(".con07 li.c");

// gsap.to(java, {
//   scrollTrigger: {
//     trigger: ".con04",
//     start: "0% 0%",
//     end: "+=200%",
//     scrub: 3,
//   },
// })
// .to(".java > ul li:nth-child(2)", {
//   scrollTrigger: {
//     trigger: ".con07",
//     start: "center center",
//     scrub: 2,
//     pin: true,
//     markers: true,
//   },
// });

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".con04",
      start: "top top",
      end: "+=200%",
      scrub: 2,
      pin: true,
      markers: true,
    },
  })
  .fromTo(
    ".java > ul > li:nth-child(2)",
    {
      opacity: 0,
      left: "105%",
      top: "20%",
      scale: 0.8,
    },
    { opacity: 1, left: 0, top: 0, scale: 1 }
  )
  .fromTo(
    ".mainCirc",
    {
      top: -10,
    },
    {
      top: "33.3%",
    },
    "<"
  )
  .fromTo(
    ".java > ul > li:nth-child(3)",
    {
      opacity: 0,
      left: "105%",
      top: "20%",
      scale: 0.8,
    },
    { opacity: 1, left: 0, top: 0, scale: 1 }
  )
  .to(
    ".mainCirc",
    {
      top: "66.6%",
    },
    "<"
  )
  .fromTo(
    ".java > ul > li:nth-child(4)",
    {
      opacity: 0,
      left: "105%",
      top: "20%",
      scale: 0.8,
    },
    { opacity: 1, left: 0, top: 0, scale: 1 }
  )
  .to(
    ".mainCirc",
    {
      top: "95%",
    },
    "<"
  );

gsap.to(picsub, {
  x: "-300%",
  scrollTrigger: {
    trigger: ".con07",
    start: "0% 0%",
    end: "+=200%",
    scrub: 3,
    pin: true,
    markers: true,
  },
});
gsap.to(sub1, {
  rotation: -10,
  scrollTrigger: {
    trigger: ".con07",
    start: "center center",
    scrub: 2,
  },
});
gsap.to(sub2, {
  rotation: 10,
  scrollTrigger: {
    trigger: ".con07",
    start: "center center",
    scrub: 2,
  },
});
gsap.to(sub3, {
  rotation: -6,
  scrollTrigger: {
    trigger: ".con07",
    start: "center center",
    scrub: 2,
  },
});

let result1 = "karisk0209@gmail.com";
let result2 = "메일 전송하기";
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".con08",
      start: "-10% top",
      end: "bottom bottom",
      // scrub: 2,
      pin: true,
      markers: true,
    },
  })
  .from(".con08 .left > p:nth-child(1)", { y: -50, opacity: 0 })
  .from(".con08 .left > p:nth-child(2)", {
    y: -50,
    opacity: 0,
  })
  .from(".mail i", { opacity: 0 })
  .to(".mail span", { duration: 1.5, text: result1 }, 1.5)
  .from(
    ".con08 .right img:nth-child(1)",
    { duration: 1, scale: 0, rotation: -135 },
    1.5
  )
  .from(
    ".con08 .right img:nth-child(2)",
    { duration: 1, scale: 0.8, opacity: 0, rotation: -90 },
    2
  )
  .fromTo(".mail a", { opacity: 0 }, { opacity: 1 })
  .from(".mail + p", { y: -50, opacity: 0, delay: 0.8 })
  .from(".mail + p + p", { y: -50, opacity: 0 });
