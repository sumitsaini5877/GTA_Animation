import React, { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";
function App() {
  const [showContent, setShowContent] = useState(false);
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.to(".vi-mask-group", {
      rotate: 10,
      duration: 2,
      ease: "Power4.easeInOut",
      transformOrigin: "50% 50%",
    }).to(".vi-mask-group", {
      scale: 10,
      duration: 2,
      delay: -1.8,
      ease: "Expo.easeInOut",
      transformOrigin: "50% 50%",
      opacity: 0,
      onUpdate: function () {
        if (this.progress() >= 0.9) {
          document.querySelector(".svg").remove();
          setShowContent(true);
          this.kill();
        }
      },
    });
  });

  useGSAP(() => {

    if(!showContent) return;

    gsap.to('.main',{
      rotate:0,
      scale:1,
      duration:2,
      delay:"-1",
      ease:"expo.easeInOut"
    })

    gsap.to('.sky',{
      rotate:0,
      scale:1.3,
      duration:2,
      delay:"-.8",
      ease:"expo.easeInOut"
    })

    gsap.to('.bg',{
      rotate:0,
      scale:1.1,
      duration:2,
      delay:"-.8",
      ease:"expo.easeInOut"
    })
    gsap.to('.character',{
      rotate:0,
      scale:1.4,
      bottom:"-25%",
      duration:2,
      delay:"-.8",
      ease:"expo.easeInOut"
    })
    gsap.to('.text',{
      rotate:0,
      scale:1,
      duration:2,
      delay:"-.8",
      ease:"expo.easeInOut"
    })
    const main = document.querySelector(".main");
    main?.addEventListener("mousemove", function (e) {
      const xMove = (e.clientX / window.innerWidth - 0.5) * 40;
      gsap.to(".imagesdiv .text", {
        x: `${xMove * 0.4}%`,
      });
      gsap.to(".sky", {
        x: `${xMove * 0.4}%`,
      });
      gsap.to(".bg", {
        x: xMove * 1.7,
      });
    });
  }, [showContent]);
  return (
    <>
      <div className="svg fixed top-0 left-0 z-[2] flex justify-center w-full h-screen overflow-hidden bg-[#000]">
        <svg viewBox=" 0 0 800 600" preserveAspectRatio="xMidyMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="250"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  VI
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="./bg.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>
      {showContent && (
        <div className="main rotate-[-10deg] scale-[1.7] w-full ">
          <div className="  landin overflow-hidden relative w-full h-screen bg-black">
            <div className="navbar absolute top-0 left-0 z-[20] px-10 py-10 w-full">
              <div className="logo flex gap-3 ">
                <div className="lines flex flex-col gap-1">
                  <div className="line1 bg-white w-10 h-2 "></div>
                  <div className="line2 bg-white w-8 h-2 "></div>
                  <div className="line3 bg-white w-5 h-2 "></div>
                </div>
                <h3 className="text-white text-4xl -mt-[9px] leading-none">
                  Rockstar
                </h3>
              </div>
            </div>
            <div className="imagesdiv relative overflow-hidden w-full h-screen">
              <img
                className="absolute sky scale-[1.5] rotate-[-15deg] top-0 left-0  w-full h-full object-cover"
                src="./sky.png"
                alt=""
              />
              <img
                className="absolute bg scale-[1.8] rotate-[-10deg]left-0 w-full h-full object-cover"
                src="./bg.png"
                alt=""
              />
              <div className="text text-9xl flex flex-col gap-4 text-white absolute top-20 left-1/2 scale-[1.4] rotate-[-10deg] -translate-x-1/2">
                <h1 className="-ml-40 leading-none">grand</h1>
                <h1 className="-ml-20 leading-none">theft</h1>
                <h1 className="-ml-40 leading-none">auto</h1>
              </div>
              <img
                className="absolute character -bottom-[150%] left-1/2 -translate-x-1/2 h-auto w-[400px] scale-[3] rotate-[-20deg]"
                src="./girlbg.png"
                alt=""
              />
            </div>
            <div className="btmbar w-full absolute  bottom-0 left-0  px-10 py-15 bg-gradient-to-t from-black to-transparent">
              <div className="flex gap-2 items-center">
                <i className="ri-arrow-down-line text-4xl text-white"></i>
                <h3 className="font-[Helvetica_Now_Display] text-xl text-white">
                  Scroll Down
                </h3>
              </div>
              <img
                className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[60px]"
                src="./ps5.png"
                alt=""
              />
            </div>
          </div>
          <div className="w-full h-screen flex justify-center items-center bg-black">
            <div className="cnter flex text-white w-full h-[80%] ">
              <div className="left-img relative w-1/2 h-full">
                <img
                  className="absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2"
                  src="./imag.png"
                  alt=""
                />
              </div>
              <div className="right w-[30%]">
                <h1 className="text-4xl">Still Running</h1>
                <h1 className="text-4xl">Not Hunting</h1>
                <p className="mt-10 text-lg font-[Helvatica_Now_Display]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Temporibus facere quidem nostrum esse itaque. Aliquid sint
                  laudantium quos sed. Dolorem quam nobis sit.
                </p>
                <p className="mt-3 text-lg  font-[Helvatica_Now_Display]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Numquam libero ratione esse officia Lorem ipsum dolor sit amet
                  consectetur, adipisicing elit. Ea sunt delectus sapiente
                  vitae!
                </p>
                <p className="mt-3 text-lg  font-[Helvatica_Now_Display]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Numquam libero ratione esse officia Lorem ipsum dolor sit amet
                  consectetur, adipisicing elit. Ea sunt delectus sapiente
                  vitae!
                </p>
                <button className="bg-yellow-500 px-4 text-black mt-7  py-4  ">Download now</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
