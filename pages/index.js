import Page from "@/components/page";
import gsap from "gsap";
import { useRef, useEffect } from "react";
// import Letterize from "letterizejs";
export default function Home() {
  const aniref = useRef();

  useEffect(() => {
    gsap.to(aniref.current, { duration: 3, opacity: 1, delay: 1 });
  }, []);

  

  return (
    <Page>
      <div className="hero" ref={aniref}>
        {/* <h1>Home page</h1> */}
        <div className="hero-wrapper">
        
          <div className="hero-content">
            <h1>Profile Details</h1>
            <p></p>
            
          </div>
          <div className="hero-content-image"></div>
        </div>
      </div>
    </Page>
  );
}

// var tl = gsap.timeline();
// let box = document.querySelectorAll('hero');
// tl.to("box", { duration: 2, opacity: 0.5 })
