gsap.registerPlugin(ScrollTrigger);

let v1 = gsap.timeline();
v1.fromTo(
  ".vis_line",
  { scaleX: 0, transformOrigin: "left center" },
  { scaleX: 1, transformOrigin: "left center", duration: 1.5 }
)
  .from("#visual h2 span", {
    y: 50,
    opacity: 0,
    duration: 1.5,
    stagger: 0.5,
  })
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
  )
  .to(
    "#visual .imgBox",
    {
      width: "100%",
    },
    6
  );

gsap.timeline({
  scrollTrigger: {
    trigger: "#visual",
    start: "50% 50%",
    end: "bottom top",
    scrub: 2,
    markers: true,
  },
});
