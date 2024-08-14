// gsap.set("header", { backgroundColor: "white" })

// tl.to("#section-2", {
//     x: 0,
//     duration: 1,
//     onStart: () => gsap.to("header", { backgroundColor: "red", duration: 0.5 })
// })
//     .to("#element-1", {
//         x: "55%",
//         opacity: 0,
//         duration: 1,
//     }, "-=1")
//     .fromTo("#element-2",
//         { left: "-50%" },
//         { left: "50%", xPercent: -50, duration: 1 },
//         "-=1")
//     .to(["#left-box", "#right-box"], {
//         bottom: "50%",
//         duration: 0.5,
//         ease: "power2.out",
//         stagger: 0.2
//     })
//     .to("#section-3", {
//         y: 0,
//         duration: 1,
//         onStart: () => gsap.to("header", { backgroundColor: "white", duration: 0.5 })
//     })

// // Slider elements animation
// gsap.utils.toArray(".slider-element").forEach((element, index) => {
//     tl.fromTo(element,
//         {
//             scale: 0.1,
//             x: '100vw',
//             y: '-50vh',
//         },
//         {
//             scale: 1,
//             x: 0,
//             y: 0,
//             opacity: 1,
//             duration: 0.5,
//             ease: "power2.out"
//         },
//         `>-0.3`
//     )
//         .to(element, {
//             x: '-100vw',
//             y: '100vh',
//             scale: 0.1,
//             opacity: 0,
//             duration: 0.5,
//             ease: "power2.in"
//         }, `>0.2`)
// })

// // Section-4 animation
// tl.to("#section-4", {
//     y: 0,
//     duration: 1,
//     onStart: () => gsap.to("header", { backgroundColor: "#F4F7FF", duration: 0.5 })
// })
//     .add("section4Start")
//     .to("#left-top", {
//         height: 190,
//         duration: 1
//     }, "section4Start")
//     .to("#left-bottom", {
//         height: 520,
//         duration: 1
//     }, "section4Start")
//     .to("#right-top", {
//         height: 580,
//         duration: 1
//     }, "section4Start")
//     .to("#right-bottom", {
//         height: 130,
//         duration: 1
//     }, "section4Start")

// // Section-5 and Section-6 animations
// tl.to("#section-5", {
//     y: 0,
//     duration: 1
// })
//     .to("#section-5-element", {
//         y: -890,
//         duration: 1
//     }, "-=0.5")
//     .to("#section-5", {
//         backgroundColor: "#e74c3c",
//         duration: 0.5
//     }, "+=0.5")
//     .to("#section-6", {
//         y: 0,
//         duration: 1
//     })
//     .to("#section-6-center", {
//         rotation: 0,
//         duration: 1
//     }, "+=0.5")
//     .to("#section-6-left-boxes", {
//         x: 200,
//         duration: 0.5
//     })
//     .to("#section-6-right-boxes", {
//         x: -400,
//         duration: 0.5
//     }, "<")

// tl.to("#section-6", {
//     y: 0,
//     duration: 1
// })
//     .to("#section-6-center", {
//         rotation: 0,
//         duration: 1
//     }, "+=0.5")
//     .to("#section-6-left-boxes", {
//         x: 220,
//         duration: 0.5
//     })
//     .to("#section-6-right-boxes", {
//         x: -220,
//         duration: 0.5
//     }, "<")
//     .add("section6Complete")
//     .to("#section-6-div-1", {
//         y: -890,
//         duration: 1
//     }, "section6Complete+=1")
//     .to("#section-6-div-2", {
//         y: -890,
//         duration: 1
//     }, "section6Complete+=2")
//     .to("#section-7", {
//         y: 0,
//         duration: 1
//     }, "section6Complete+=3")