import { gsap } from "gsap";

const tl = gsap.timeline();
const screenHeight = screen.height;

export const preLoaderAnimation = () => {
    tl.to(".preloader-container",{
        duration: 3,
        y: screenHeight,
        ease: "power3.inOut",
        delay: 1,
    });
}