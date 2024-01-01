import Link from "next/link";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import anime from 'animejs/lib/anime.es.js';
// import Hamburger from "./hamburger";

// const Header = () => (
export default function Header() {
  const aniRef = useRef();
  const LogoAnime = require('animejs')
  useEffect(() => {
    gsap.to(aniRef.current, { duration: 2, opacity: 1, delay: 0.5 });
  });

 
  return (
    <header ref={aniRef}>
      <div className="wrapper">
        <div className="Logo" ref={aniRef}>
          <Link href="/">Color</Link>
        </div>
        <div className="header-items" ref={aniRef}>
          <div className="header-item">
            <Link href="/">Home</Link>
          </div>
          <div className="header-item">
            <Link href="/about">About</Link>
          </div>
          <div className="header-item">
            <Link href="/works">Works</Link>
          </div>
          <div className="header-item">
            <Link href="/portfolio">Portfolio</Link>
          </div>
        </div>
        <div className="header-items-contacts">
          <Link href="/contact">Contact</Link>
        </div>
        {/* <Hamburger /> */}
      </div>
    </header>
  );
}
// )

// export default Header
