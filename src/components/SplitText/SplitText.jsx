import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import SplitType from "split-type";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SplitText = ({
  text,
  className = "",
  delay = 0.05,
  duration = 0.8,
  ease = "power3.out",
  from = { y: 40, opacity: 0 },
  to = { y: 0, opacity: 1 },
}) => {
  const textRef = useRef(null);

  useEffect(() => {
    if (!textRef.current) return;

    const split = new SplitType(textRef.current, { types: "chars" });
    const chars = split.chars;

    gsap.fromTo(
      chars,
      { ...from },
      {
        ...to,
        ease,
        stagger: delay,
        duration,
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 85%",
          toggleActions: "play reverse play reverse", // <== ini bikin bisa bolak-balik
          scrub: false, // true = sinkron dengan scroll
        },
      }
    );

    return () => split.revert();
  }, [text, delay, duration, ease]);

  return (
    <h2 ref={textRef} className={className}>
      {text}
    </h2>
  );
};

export default SplitText;
