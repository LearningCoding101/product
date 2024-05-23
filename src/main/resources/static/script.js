
 document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger);
  console.log(ScrollTrigger.version);

 });

 gsap.set("#outer-wheel", { transformOrigin: "center center" });

 gsap.to("#outer-wheel", {
   rotation: 360, // Rotate 360 degrees
   duration: 5, // Duration of animation in seconds
   ease: "none", // Linear easing
   repeat: -1, // Repeat indefinitely
 });

 gsap.set("#jobTitle", {
      transformStyle: "preserve-3d",
     transformPerspective: 1000
 });
 gsap.set("#jobTitle", {
   transformOrigin: "50% 50%"
 });
 gsap.set("#backSide", { rotationX:-180 });
 var tl = gsap.timeline({ repeat: -1, yoyo: true});

 // Add tweens to the timeline
 tl.to("#frontSide", { duration: 2, rotationX: 180 })
   .to("#backSide", { duration: 2, rotationX: 0 }, 0)


 // Start the timeline
 tl.play();

 gsap.from("#titleCard",{
   scrollTrigger:{
     scrub: true,
     start: "20%",
     end: "60%",
     trigger: "#titleCard",
   },
   y:"80%",
   ease: "power4.out"
 });
 gsap.to("#mainContainer1",{
   scrollTrigger:{
     scrub: true,
     trigger: "#titleCard",

     start: "250%",
     end: "350%"
   },
   y:"-150%",
   ease: "power4.out"
 });
 gsap.to("#thirdContainer",{
   scrollTrigger:{
     trigger: "#titleCard",
     start: "350%",
     end: "400%"
   },
   top:"0vh",
   ease: "power4.out"
 });
 gsap.to("#forthContainer",{
   scrollTrigger:{
     trigger: "#thirdContainer",
     start: "100%",
     end: "110%"
   },
   top:"0vh"
 });


 gsap.fromTo("#titleCard", {
   y: "80%", // Start from initial position
 },
 {
   y: "-100%", // End position
   duration: 3, // Duration of animation in seconds
   scrollTrigger: {
     scrub: true,
     trigger: "#thirdContainer",
     start: "10%",
     end: "50%"
   },
   ease: "power4.out" // Easing
 });
 const open = gsap.to("#menu", {
     duration: 1,
     x: "0%",
     opacity: 1,
     paused: true
   });
 gsap.set("#menu", {
   x: "100%"
 });
 const buttonChangeToWhite = gsap.to("#menuButton", {
     duration: 2,
     backgroundColor: "#FFFFFF",
     opacity: 1,
   paused: true
   });
 gsap.set("#menu", {
   x: "100%"
 });

 const lineChange = gsap.to(".menuLine", {
     duration: 1,
     backgroundColor: "#7E89E8",
     opacity: 1
   });
 gsap.set("#menu", {
   x: "100%"
 });



 function appearMenu(){
   let element = document.getElementById("menu");
   var status = element.getAttribute("data-status");
   if (status == "closed"){
     open.play();
     lineChange.play();
     buttonChangeToWhite.play();
     element.setAttribute("data-status", "opened");
   } else {
     open.reverse();
     lineChange.reverse();
     buttonChangeToWhite.reverse();
     element.setAttribute("data-status", "closed");
   }
 }

 const leftCard = gsap.fromTo(
 ".cardLeft",
   {
     y: "-1000%"
   },
   {
     y: "1000%",
     paused: true
   }
 );

 const rightCard = gsap.fromTo(
 ".cardRight",
   {
     y: "1000%"
   },
   {
     y: "-1000%",
     paused: true
   }
 );
 ScrollTrigger.create({
   start:"5%",
   end:"90%",
   scrub: true,
   markers: false,
   trigger: "#thirdContainer",
   ease: "slow",
   animation: leftCard,
   onEnter: leftCard.play(),
   onLeave: leftCard.reverse()

 });

 ScrollTrigger.create({
   start:"5%",
   end:"90%",
   scrub: true,
   trigger: "#thirdContainer",
   markers: false,
   animation: rightCard,
   onEnter: rightCard.play(),
   onLeave: rightCard.reverse()

 });



 const titleAnimation = gsap.from(
   "#letterTitle",
   {
     bottom: "-100%",
     duration: 2,
     ease: "slow",
     paused: true
   }
 );

 ScrollTrigger.create(
   {
     start: "5%",
     end: "50%",
     trigger: "#thirdContainer",
     onLeave:() => titleAnimation.reverse(),
     onEnter:() => titleAnimation.play(),
     onLeaveBack: () => titleAnimation.reverse(),
     onEnterBack: () => titleAnimation.play()
   }
 );



 const vheight = window.innerHeight;
 const vwidth = window.innerWidth;
 const angleInRadians = (angleInDegrees) => angleInDegrees * Math.PI / 180;
 const angle = 19.51; // Change this to the desired angle
 const distance = vwidth*1.5; // Change this to the desired distance
 const deltaX = distance * Math.cos(angleInRadians(angle));
 const deltaY = distance * Math.sin(angleInRadians(angle));

 // Animate the element
 gsap.set(".Dscroll", {
   rotation: `${-angle}deg`
 });
 const DfowardA = gsap.fromTo(".Dfoward", {
     x: `${-deltaX}px`, // Move vertically by deltaY
     y: `${deltaY}px`, // Move horizontally by deltaX
 }, {
     x: `${deltaX}px`, // Move vertically by deltaY
     y: `${-deltaY}px`, // Move horizontally by deltaX
     duration: 2,
   paused: true// Animation duration
 });
 const DbackA = gsap.fromTo(".Dback", {

    x: `${deltaX}px`, // Move vertically by deltaY
     y: `${-deltaY}px` // Move horizontally by deltaX
 }, {
     x: `${-deltaX}px`, // Move vertically by deltaY
     y: `${deltaY}px`, // Move horizontally by deltaX
     duration: 2,
   paused: true// Animation duration
 });

 ScrollTrigger.create({
   trigger: "#thirdContainer",
   animation: DfowardA,
   start: "60%",
   end: "150%",
   scrub: true
 });
 ScrollTrigger.create({
   animation: DbackA,
   start: "60%",
   trigger: "#thirdContainer",
   end: "150%",
   scrub: true
 });
 const semanticA = gsap.from("#semanticTitle", {
   bottom: "-15%",
   ease: "power4.out",
   duration: 2,
   paused: true
 });

 ScrollTrigger.create(
   {
     start: "60%",
   end: "110%",
     trigger: "#thirdContainer",
     onLeave:() => semanticA.reverse(),
     onEnter:() => semanticA.play(),
     onLeaveBack: () => semanticA.reverse(),
     onEnterBack: () => semanticA.play()
   }
 );






 //Break

 gsap.set("#pCol", {
   x: "-100%"
 });
 let bannerTL = gsap.timeline();
 bannerTL
   .to("#mangBanner", {
     top: "50%",
     duration: 2,
     ease: "slow"
   })
   .to("#mangBanner", {
     x: "-45%",
     duration: 10
   })
   .to("#mangBanner", {
     top: "-100%",
     duration: 3
   })
   .to("#packageContainer", {
     top: "0%",
     duration: 0
   })
   .to("#pCol", {
     x: "-50%",
     duration: 2
   });
 ScrollTrigger.create({
   animation: bannerTL,
   trigger: "#forthContainer",
   markers: {
     startColor: "blue",
     endColor: "purple",
     fontSize: "18px",
     fontWeight: "bold",
     indent: 20
   },
   start: "25%",
   end: "50%",
   scrub: true
 });
 gsap.set(".pImg", {
   x: "-100vw",
   opacity: 0
 });
 gsap.to(".pImg", {
   opacity: 1,
   x: "0%",
   duration: 1,
   stagger: 0.25,
   scrollTrigger: {
     trigger: "#forthContainer",
     start: "50%",
     end: "75%",
     toggleActions: "play reverse play reverse",

   }
 });
 gsap.set("#bg1", {
   x: "100%",
   opacity: 0
 });

 var pacTL = gsap.timeline();
 pacTL
   .to("#pCol", {
     left: "-50%",
     duration: 3,
     ease: "slow"
   })
   .to("#pTitle", {
     y: "-100%",
     ease: "slow",
     opacity: 0,
     duration: 2
   })
   .to("#bg1", {
     x: "0%",
     opacity: 1,
     ease: "slow",
     duration: 1.5
   })
   .to("#gImage", {
     opacity: 1,
     ease: "expo.out",
     left: "-10%",
     duration: 2
   }).to("#ran", {
   opacity: 0,
   duration: 10
 })
   .to("#bg1", {
     x: "100%",
     ease: "slow",
     duration: 2
   })
   .to("#ran", {
     x: "-100%",
     duration: 5
   })
   .to("#gImage", {
     opacity: 0,
     ease: "expo.out",
     left: "50%",
     duration: 2
   })
   .from("#bottomDec", {
     y: "100%",
     ease: "slow",
     duration: 1
   })
   .from("#hopQua", {
     y: "110%",
     opacity: 0,
     duration: 2,
     ease: "slow"
   })
   .from("#quaBanner", {
     x: "100%",
     opacity: 0,
     duration: 2,
     ease: "slow"
   }).to("#ran", {
   opacity: 0,
   duration: 10
 })
   .to("#quaBanner", {
     x: "100%",
     opacity: 0,
     duration: 2,
     ease: "slow"
   })
   .to("#hopQua", {
     x: "-100%",
     opacity: 0,
     duration: 2,
     ease: "slow"
   });

 ScrollTrigger.create({
   trigger: "#forthContainer",
   start: "80%",
   end: "100%",
   scrub: true,

   animation: pacTL
 });

 let catTL = gsap.timeline();
 catTL
   .from("#cTitle", {
     opacity: 0,
     y: "100%",
     ease: "slow",
     duration: 2
   })
   .from("#meoBag", {
     opacity: 0,
     x: "100%",
     ease: "slow",
     duration: 2
   })
   .from("#cText1", {
     opacity: 0,
     x: "100%",
     ease: "slow",
     duration: 2
   })
   .from("#cText2", {
     opacity: 0,
     x: "100%",
     ease: "slow",
     duration: 2
   })
   .from("#cImage", {
     opacity: 0,
     x: "100%",
     ease: "slow",
     duration: 2
   }).to("#ran", {
   opacity: 0,
   duration: 10
 })
   .to("#cImage", {
     opacity: 0,
     x: "100%",
     ease: "slow",
     duration: 2
   })
   .to("#cText1", {
     opacity: 0,
     x: "100%",
     ease: "slow",
     duration: 2
   })
   .to("#cText2", {
     opacity: 0,
     x: "100%",
     ease: "slow",
     duration: 2
   })
   .to("#meoBag", {
     opacity: 0,
     x: "100%",
     ease: "slow",
     duration: 2
   })
   .to("#cTitle", {
     opacity: 0,
     y: "-100%",
     ease: "slow",
     duration: 2
   });
 ScrollTrigger.create({
   trigger: "#forthContainer",
   start: "120%",
   end: "170%",
   scrub: true,
   animation: catTL
 });
 gsap.set("#quickflip", {
   transformStyle: "preserve-3d",
   transformPerspective: 1000
 });
 gsap.set(".qf-card", {
   transformStyle: "preserve-3d",
   transformOrigin: "-50% -50%"
 });
 gsap.set(".qf-back", {
   rotation: 180,
 });

 let teaTL = gsap.timeline();
 teaTL.to(".wrapper", {
   opacity: 1,
   duration: 2
 })
   .from("#leftCircleTea", {
   x:"-100%",
   duration: 3
 }).to("#leftCircleTea", {
   backgroundColor: "#F8E9C2",
   duration: 3
 }).to(".qf-card", { rotation: "+=180", duration: 5})

 .to(".quickflip", { z: 50, duration: 0.5, yoyo: true, repeat: 1 }, 0)

 .to("#t1", { attr: { src: "https://i.ibb.co/SmwQrvk/tra-olong-diecut.png"  }, duration: 0 })
 .to("#t2", { attr: { src: "https://i.ibb.co/cbf5WLk/tra-olong-mockup.png" }, duration: 0 })
   .to("#leftCircleTea", {
   backgroundColor: "#DDF8C2",
   duration: 3
 }).to(".qf-card", { rotation: "+=180", duration: 5})
 .to(".qf-card", { rotation: "+=180",
                  opacity: 0,
                  duration: 5})
 .to("#leftCircleTea", {
   backgroundColor: "#F8E9C2",
   x: "-100%",
   opacity: 0,
   duration: 5})
 .to("#bottomDec", {
   y: "100%",
   duration: 3});
 ScrollTrigger.create({
   trigger: "#forthContainer",
   start: "170%",
   end: "250%",
   scrub: true,
   animation: teaTL
 });
 gsap.set("#fifthContainer", {
   top: "1500vh"
 });
 ScrollTrigger.create({
   trigger: "#forthContainer",
   start: "250%",
   end: "255%",
   scrub: true,
   markers: true,
   animation: gsap.to("#fifthContainer", {
     top: "0vh"
   })
 });


 //break

 gsap.from("#fifthContainer", {
 	scrollTrigger: {
      trigger: "#forthContainer",
 				start: "280%",
 				end: "290%",
     scrub: true,
 		marker: true
   },
   opacity: 0,
   ease: "power3"
 }
 );
 ScrollTrigger.batch(".zero", {
 	onEnter: (elements, triggers) => {
 		gsap.from(elements, {
 			ease: "power1.inOut",
 			delay: 0.25,
 			y: "-100%",
 			x: "-25%",
 			scaleX: -1,
 			stagger: 0.25,
 			scrollTrigger: {
 				trigger: "#forthContainer",
 				start: "290%",
 				end: "310%",
 				scrub: true,
 				markers: false
 			}
 		});
 	}
 });

 ScrollTrigger.batch(".one", {
 	onEnter: (elements, triggers) => {
 		gsap.from(elements, {
 			ease: "power1.inOut",
 			delay: 0.25,
 			y: "800%",
 			scaleY: -1,
 			stagger: 0.25,
 			scrollTrigger: {
 				trigger: "#forthContainer",
 				start: "290%",
 				end: "310%",
 				scrub: true,
 				markers: true
 			}
 		});
 	}
 });

 ScrollTrigger.batch(".text", {
 	onEnter: (elements, triggers) => {
 		gsap.to(elements, {
 			ease: "slow(0.7,0.7,false)",
 			delay: 0.25,
 			y: "-30vh",
 			opacity: 0,

 			scrollTrigger: {
 				trigger: "#forthContainer",
 				start: "310%",
 				end: "335%",
 				scrub: true,
 				markers: true
 			}
 		});
 	}
 });
 gsap.from("#infoGrid", {
 	scrollTrigger: {
      trigger: "#forthContainer",
 				start: "310%",
 				end: "335%",
     scrub: true,
 		marker: true
   },
   opacity: 0,
 	x: "50%",
   ease: "power3"
 }
 );

 gsap.from("#card", {
 	scrollTrigger: {
     trigger: "#forthContainer",
 				start: "310%",
 				end: "335%",
     scrub: true,
 		marker: true
   },
   opacity: 0,
 	y: "50%",
   ease: "power3"
 }
 );